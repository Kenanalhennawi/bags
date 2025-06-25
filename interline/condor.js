
let condorCalculatorInitialized = false;

/**
 * Initializes the Condor Airlines excess baggage calculator.
 * Sets up the form and event listeners.
 * This function is called by app.js when Condor is selected.
 */
export function initializeCondorCalculator() {
    if (condorCalculatorInitialized) {
        return;
    }

    const condorBaggageForm = document.getElementById('condorBaggageForm');
    const condorZoneSelect = document.getElementById('condorZone');
    const condorWeightInput = document.getElementById('condorWeight');
    const condorSizeExceededCheckbox = document.getElementById('condorSizeExceeded');
    const condorEconomyZeroCheckbox = document.getElementById('condorEconomyZero');
    const condorResultDiv = document.getElementById('condorResult'); 

    if (!condorBaggageForm || !condorZoneSelect || !condorWeightInput || !condorSizeExceededCheckbox || !condorEconomyZeroCheckbox || !condorResultDiv) {
        console.error("One or more Condor calculator elements are missing from the DOM.");

        if(condorResultDiv) condorResultDiv.innerHTML = "<p>Error: Calculator components are missing.</p>";
        return;
    }
    
    condorResultDiv.innerHTML = "";


    condorBaggageForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const currentZoneSelect = document.getElementById('condorZone');
        const currentWeightInput = document.getElementById('condorWeight');
        const currentSizeExceededCheckbox = document.getElementById('condorSizeExceeded');
        const currentEconomyZeroCheckbox = document.getElementById('condorEconomyZero');
        const currentResultDiv = document.getElementById('condorResult');

        if (!currentZoneSelect || !currentWeightInput || !currentSizeExceededCheckbox || !currentEconomyZeroCheckbox || !currentResultDiv) {
            console.error("Condor calculator elements became unavailable during submission.");
            return;
        }

        const zone = currentZoneSelect.value;
        const weight = parseFloat(currentWeightInput.value) || 0;
        const isSizeExceeded = currentSizeExceededCheckbox.checked;
        const isEconomyZero = currentEconomyZeroCheckbox.checked;
        
        let totalCost = 0;
        let currency = "€"; 
        let messages = [];

        if (!zone) {
            currentResultDiv.textContent = "Condor zone not selected.";
            return;
        }

        if (zone === "zone5") { 
            currency = "US$";
        }


        if (isEconomyZero) {
            messages.push("<strong>Condor Economy Zero Fare Selected:</strong>");
            if (zone === "zone1") {
                totalCost += 75; 
                messages.push(`- Charge for first 20kg bag: € 75.00`); 
            } else if (zone === "zone2" || zone === "zone6") { 
                totalCost += 75; 
                messages.push(`- Charge for first 20kg bag: € 75.00 / US$ 90.00`); 
            } else if (zone === "zone3" || zone === "zone4") { 
                totalCost += 100; 
                messages.push(`- Charge for first 20kg bag: € 100.00 / US$ 120.00`); 
            } else if (zone === "zone5") { 
                totalCost += 180; 
                messages.push(`- Charge for first bag (up to 23kg): US$ 180.00 / CAN$ 225.00`); 
            }
        }

        if (zone !== "zone5") { 
            let costPerKg = 0;
            if (zone === "zone1") costPerKg = 12;
            else if (zone === "zone2" || zone === "zone6") costPerKg = 15;
            else if (zone === "zone3" || zone === "zone4") costPerKg = 20;
            
            let chargeableWeight = 0;
            
            if (isEconomyZero) {
                if (weight > 20) { 
                    chargeableWeight = weight - 20;
                }
            } else {
             
                chargeableWeight = weight; 
            }

            if (chargeableWeight > 0) {
                const excessWeightCost = chargeableWeight * costPerKg;
                totalCost += excessWeightCost;
                messages.push(`- Excess weight cost (${chargeableWeight}kg @ ${currency}${costPerKg}/kg): ${currency} ${excessWeightCost.toFixed(2)}`);
            }
        } else { 
            let isOverweightCondor = weight > 23 && weight <= 32; 
            let pieceSurcharge = 0;


            if (isSizeExceeded && isOverweightCondor) { 
                pieceSurcharge = 360; 
                messages.push(`- Surcharge for piece larger than 158cm AND heavier than 23kg (up to 32kg): US$ ${pieceSurcharge.toFixed(2)} / CAN$ 460.00`); 
            } else if (isOverweightCondor) { 
                pieceSurcharge = 120; 
                messages.push(`- Surcharge for piece heavier than 23kg (up to 32kg): US$ ${pieceSurcharge.toFixed(2)} / CAN$ 150.00`); 
            } else if (isSizeExceeded) { 
                pieceSurcharge = 240; 
                messages.push(`- Surcharge for piece larger than 158cm: US$ ${pieceSurcharge.toFixed(2)} / CAN$ 310.00`); 
            }
           
            totalCost += pieceSurcharge;
        }

        if (isSizeExceeded && zone !== "zone5") {
            let sizeSurchargeCondor = 0; 
            let currentZoneCurrency = "€"; 
            let altCurrencyMsg = "";
            if (zone === "zone1") { sizeSurchargeCondor = 100; altCurrencyMsg = "/ US$ 110.00"; }
            else if (zone === "zone2" || zone === "zone6") { sizeSurchargeCondor = 100; altCurrencyMsg = "/ US$ 120.00"; }
            else if (zone === "zone3" || zone === "zone4") { sizeSurchargeCondor = 200; altCurrencyMsg = "/ US$ 240.00"; }
            
            if (sizeSurchargeCondor > 0) { 
                totalCost += sizeSurchargeCondor; 
                messages.push(`- Surcharge for exceeding size 158cm: ${currentZoneCurrency} ${sizeSurchargeCondor.toFixed(2)} ${altCurrencyMsg}`); 
            }
        }

        let messageStr = messages.length > 0 ? messages.join("<br>") : "No specific Condor excess charges calculated based on input. Please review Condor's standard allowances and fees for additional bags if applicable.";
        let finalDisplayCurrency = (zone === "zone5") ? "US$" : "€"; 

        currentResultDiv.innerHTML = `${messageStr}<br><strong>Total Estimated Condor Surcharge/Cost: ${finalDisplayCurrency} ${totalCost.toFixed(2)}</strong>`;
        
        if (zone === "zone5") {
            currentResultDiv.innerHTML += ` (Refer to CAN$ amounts in line items for Canadian dollar estimates).`;
        }
        if (weight > 32) {
            currentResultDiv.innerHTML += `<br><strong style="color:red;">Condor Note: Baggage >32kg is generally not accepted as checked baggage and may need to be sent as cargo.</strong>`;
        }
        if (weight > 20 && zone !== "zone5" && !(isEconomyZero && weight <=20) ) { 
             currentResultDiv.innerHTML += `<br><em>Condor Note: Excess baggage >20kg should typically be registered in advance.</em>`;
        }
        
        currentResultDiv.innerHTML += `<br><p class="small-note">This is an estimate. Fees are subject to change and final confirmation by Condor. Always verify with the airline or their official website.</p>`;
        
       
        currentResultDiv.innerHTML += `
            <hr style="margin: 20px 0;">
            <h4>Contact Condor Airlines</h4>
            <p>For precise baggage fees, booking additional baggage, or any other inquiries, please visit the 
               <a href="https://www.condor.com/us/fly-enjoy/baggage/excess-baggage.jsp" target="_blank" rel="noopener noreferrer">official Condor excess baggage page</a> 
               or contact their customer service.
            </p>
        `;

    });
    condorCalculatorInitialized = true;
}


export function displayCondorInfo(placeholderElement) {

    if (placeholderElement) {
        placeholderElement.innerHTML = "<p>Condor Airlines calculator is active above. Please use the form to calculate costs.</p>";
    }
    
}
