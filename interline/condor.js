// interline/condor.js
// Contains the calculator logic and display for Condor Airlines (DE).

// This flag ensures the event listener is added only once.
let condorCalculatorInitialized = false;

/**
 * Initializes the Condor Airlines excess baggage calculator.
 * Sets up the form and event listeners.
 * This function is called by app.js when Condor is selected.
 */
export function initializeCondorCalculator() {
    if (condorCalculatorInitialized) {
        // console.log("Condor calculator already initialized.");
        return;
    }

    const condorBaggageForm = document.getElementById('condorBaggageForm');
    const condorZoneSelect = document.getElementById('condorZone');
    const condorWeightInput = document.getElementById('condorWeight');
    const condorSizeExceededCheckbox = document.getElementById('condorSizeExceeded');
    const condorEconomyZeroCheckbox = document.getElementById('condorEconomyZero');
    const condorResultDiv = document.getElementById('condorResult'); // The div to display results

    if (!condorBaggageForm || !condorZoneSelect || !condorWeightInput || !condorSizeExceededCheckbox || !condorEconomyZeroCheckbox || !condorResultDiv) {
        console.error("One or more Condor calculator elements are missing from the DOM.");
        // Optionally display an error in a general placeholder if one was passed, 
        // but Condor's section is self-contained with its form.
        if(condorResultDiv) condorResultDiv.innerHTML = "<p>Error: Calculator components are missing.</p>";
        return;
    }
    
    // Clear any previous results from the Condor result div
    condorResultDiv.innerHTML = "";


    condorBaggageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Ensure elements are still valid before using them
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
        let currency = "€"; // Default currency
        let messages = [];

        if (!zone) {
            currentResultDiv.textContent = "Condor zone not selected.";
            return;
        }

        // Determine currency based on zone
        if (zone === "zone5") { // USA, Canada
            currency = "US$";
        }

        // --- Calculation Logic for Condor ---

        // 1. Charge for the first bag if Economy Zero Fare is selected
        if (isEconomyZero) {
            messages.push("<strong>Condor Economy Zero Fare Selected:</strong>");
            if (zone === "zone1") { // e.g., German domestic, Italy, Spain (mainland)
                totalCost += 75; 
                messages.push(`- Charge for first 20kg bag: € 75.00`); 
            } else if (zone === "zone2" || zone === "zone6") { // e.g., Egypt, Greece, Turkey, Canaries or Armenia, Lebanon
                totalCost += 75; 
                messages.push(`- Charge for first 20kg bag: € 75.00 / US$ 90.00`); 
            } else if (zone === "zone3" || zone === "zone4") { // e.g., Caribbean, East Africa or Maldives, Mauritius
                totalCost += 100; 
                messages.push(`- Charge for first 20kg bag: € 100.00 / US$ 120.00`); 
            } else if (zone === "zone5") { // USA, Canada
                totalCost += 180; 
                messages.push(`- Charge for first bag (up to 23kg): US$ 180.00 / CAN$ 225.00`); 
            }
        }

        // 2. Calculate excess weight charges (for Zones 1-4, 6) or piece surcharges (Zone 5)
        if (zone !== "zone5") { // For Zones 1, 2, 3, 4, 6 (Weight-based excess)
            let costPerKg = 0;
            if (zone === "zone1") costPerKg = 12;
            else if (zone === "zone2" || zone === "zone6") costPerKg = 15;
            else if (zone === "zone3" || zone === "zone4") costPerKg = 20;
            
            let chargeableWeight = 0;
            // If Economy Zero, the first 20kg is covered by the initial charge (or up to 23kg for Zone 5, handled below)
            // So, excess weight is calculated on weight *beyond* that initial allowance.
            if (isEconomyZero) {
                if (weight > 20) { // Assuming the initial bag for Economy Zero is up to 20kg for these zones
                    chargeableWeight = weight - 20;
                }
            } else {
                // If not Economy Zero, any weight is potentially chargeable if it exceeds free allowance (not calculated here, this is for *excess* purchase)
                // For simplicity, this calculator assumes the 'weight' input is the *total excess weight* or the weight of an *additional bag*.
                // A more complex calculator would need fare type to determine free allowance first.
                // For this calculator, we'll assume 'weight' is the weight of the bag being paid for as excess.
                chargeableWeight = weight; 
            }

            if (chargeableWeight > 0) {
                const excessWeightCost = chargeableWeight * costPerKg;
                totalCost += excessWeightCost;
                messages.push(`- Excess weight cost (${chargeableWeight}kg @ ${currency}${costPerKg}/kg): ${currency} ${excessWeightCost.toFixed(2)}`);
            }
        } else { // For Zone 5 (USA, Canada - Piece/Surcharge based)
            // Currency is US$
            let isOverweightCondor = weight > 23 && weight <= 32; // Standard allowance is often 23kg. Overweight is 23-32kg.
            let pieceSurcharge = 0;

            // If Economy Zero, the $180 covers the first bag up to 23kg.
            // This logic below applies if the bag *is* that first bag and it's oversized/overweight,
            // OR if it's an *additional* bag.
            // For simplicity, we assume the 'weight' and 'isSizeExceeded' apply to the bag being calculated.

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
            // If it's Economy Zero, this surcharge is *in addition* to the $180 for the bag itself.
            // If it's *not* Economy Zero, and this is the *first or second free bag* but it's overweight/oversized, this surcharge applies.
            // If it's an *additional paid bag* that's also overweight/oversized, this surcharge applies on top of the additional bag fee (not calculated here).
            // This calculator is simplified for direct excess/surcharge calculation on a single bag.
            totalCost += pieceSurcharge;
        }

        // 3. Surcharge for exceeding size 158cm (for Zones 1-4, 6)
        // For Zone 5, size is handled within the pieceSurcharge logic above.
        if (isSizeExceeded && zone !== "zone5") {
            let sizeSurchargeCondor = 0; 
            let currentZoneCurrency = "€"; // Default for these zones
            let altCurrencyMsg = "";
            if (zone === "zone1") { sizeSurchargeCondor = 100; altCurrencyMsg = "/ US$ 110.00"; }
            else if (zone === "zone2" || zone === "zone6") { sizeSurchargeCondor = 100; altCurrencyMsg = "/ US$ 120.00"; }
            else if (zone === "zone3" || zone === "zone4") { sizeSurchargeCondor = 200; altCurrencyMsg = "/ US$ 240.00"; }
            
            if (sizeSurchargeCondor > 0) { 
                totalCost += sizeSurchargeCondor; 
                messages.push(`- Surcharge for exceeding size 158cm: ${currentZoneCurrency} ${sizeSurchargeCondor.toFixed(2)} ${altCurrencyMsg}`); 
            }
        }

        // --- Display Results ---
        let messageStr = messages.length > 0 ? messages.join("<br>") : "No specific Condor excess charges calculated based on input. Please review Condor's standard allowances and fees for additional bags if applicable.";
        let finalDisplayCurrency = (zone === "zone5") ? "US$" : "€"; // Display total in the primary currency for the zone

        currentResultDiv.innerHTML = `${messageStr}<br><strong>Total Estimated Condor Surcharge/Cost: ${finalDisplayCurrency} ${totalCost.toFixed(2)}</strong>`;
        
        if (zone === "zone5") {
            currentResultDiv.innerHTML += ` (Refer to CAN$ amounts in line items for Canadian dollar estimates).`;
        }
        if (weight > 32) {
            currentResultDiv.innerHTML += `<br><strong style="color:red;">Condor Note: Baggage >32kg is generally not accepted as checked baggage and may need to be sent as cargo.</strong>`;
        }
        if (weight > 20 && zone !== "zone5" && !(isEconomyZero && weight <=20) ) { // If not zone 5, and weight > 20kg (and not the first free bag of Eco Zero)
             currentResultDiv.innerHTML += `<br><em>Condor Note: Excess baggage >20kg should typically be registered in advance.</em>`;
        }
        
        // Add a general disclaimer
        currentResultDiv.innerHTML += `<br><p class="small-note">This is an estimate. Fees are subject to change and final confirmation by Condor. Always verify with the airline or their official website.</p>`;
        
        // Contact Information (Generic for Condor, as specific details weren't provided for this section)
        // This will be displayed below the calculation results.
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
    // console.log("Condor calculator initialized successfully.");
}

// This module primarily exports the initializer for the calculator.
// No static displayInfo function is needed if the HTML section is self-contained with its form.
// However, app.js might try to call displayCondorInfo if not handled as a special case.
// We can add a dummy one or ensure app.js handles 'condor' specifically.
export function displayCondorInfo(placeholderElement) {
    // The Condor section is interactive and initializes itself.
    // This function can be minimal or clear the placeholder if app.js calls it.
    if (placeholderElement) {
        placeholderElement.innerHTML = "<p>Condor Airlines calculator is active above. Please use the form to calculate costs.</p>";
    }
    // The actual calculator UI is already in index.html within the condorCalculatorContainer.
    // initializeCondorCalculator() will be called by app.js to make it functional.
}
