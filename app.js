// app.js
// Main application logic for the Airline Baggage Calculator.
// This file handles UI interactions, dynamic loading of airline-specific modules,
// and manages common elements.

document.addEventListener('DOMContentLoaded', () => {
    // --- Global variable for Flydubai data.json ---
    let fzData = null;

    // --- Top-Level Airline Option Elements ---
    const airlineOptionRadios = document.querySelectorAll('input[name="airlineOption"]');

    // --- Interline Specific Elements ---
    const interlineAirlineSelectionContainer = document.getElementById('interlineAirlineSelectionContainer');
    const interlinePartnerSelector = document.getElementById('interlinePartnerSelector');

    // --- Flydubai Specific Elements (for the calculator) ---
    const fzOriginInput = document.getElementById("fzOrigin");
    const fzDestInput = document.getElementById("fzDestination");
    const fzResultDiv = document.getElementById("fzResult");
    const fzCalculateButton = document.getElementById("fzCalculateButton");
    const fzSwapButton = document.getElementById("fzSwapButton");
    const fzClearButton = document.getElementById("fzClearButton");

    // --- Main containers for each airline's content ---
    // These are the parent divs that will be shown/hidden.
    const calculatorContainers = {
        flydubai: document.getElementById('flydubaiCalculatorContainer'),
        condor: document.getElementById('condorCalculatorContainer'),
        aegean: document.getElementById('aegeanCalculatorContainer'),
        airalgerie: document.getElementById('airalgerieCalculatorContainer'),
        airastana: document.getElementById('airastanaCalculatorContainer'),
        aircanada: document.getElementById('aircanadaCalculatorContainer'),
        airchina: document.getElementById('airchinaCalculatorContainer'),
        airfrance: document.getElementById('airfranceCalculatorContainer'),
        airserbia: document.getElementById('airserbiaCalculatorContainer'),
        alaska: document.getElementById('alaskaCalculatorContainer'),
        azerbaijan: document.getElementById('azerbaijanCalculatorContainer'),
        batikmalaysia: document.getElementById('batikmalaysiaCalculatorContainer'),
        cathaypacific: document.getElementById('cathaypacificCalculatorContainer'),
        chinasouthern: document.getElementById('chinasouthernCalculatorContainer'),
        croatia: document.getElementById('croatiaCalculatorContainer'),
        delta: document.getElementById('deltaCalculatorContainer'),
        emirates: document.getElementById('emiratesCalculatorContainer'),
        ethiopian: document.getElementById('ethiopianCalculatorContainer'),
        gulfair: document.getElementById('gulfairCalculatorContainer'),
        jetblue: document.getElementById('jetblueCalculatorContainer'),
        kenyaairways: document.getElementById('kenyaairwaysCalculatorContainer'),
        klm: document.getElementById('klmCalculatorContainer'),
        koreanair: document.getElementById('koreanairCalculatorContainer'),
        lotpolish: document.getElementById('lotpolishCalculatorContainer'),
        pakistanintl: document.getElementById('pakistanintlCalculatorContainer'),
        philippine: document.getElementById('philippineCalculatorContainer'),
        precisionair: document.getElementById('precisionairCalculatorContainer'),
        qantas: document.getElementById('qantasCalculatorContainer'),
        royalbrunei: document.getElementById('royalbruneiCalculatorContainer'),
        rwandair: document.getElementById('rwandairCalculatorContainer'),
        srilankan: document.getElementById('srilankanCalculatorContainer'),
        saudiarabian: document.getElementById('saudiarabianCalculatorContainer'),
        singapore: document.getElementById('singaporeCalculatorContainer'),
        tarom: document.getElementById('taromCalculatorContainer'),
        united: document.getElementById('unitedCalculatorContainer'),
        utair: document.getElementById('utairCalculatorContainer'),
        virginatlantic: document.getElementById('virginatlanticCalculatorContainer')
    };
    
    // --- Placeholders where airline-specific HTML content will be injected ---
    const airlinePlaceholders = {};
    for (const key in calculatorContainers) {
        if (calculatorContainers[key] && key !== 'flydubai' && key !== 'condor' && key !== 'airalgerie') {
            airlinePlaceholders[key] = calculatorContainers[key].querySelector('.interline-rules-placeholder');
        }
    }
    // Specific placeholder for Air Algerie's main text area (distinct from its table/dropdown)
    if (calculatorContainers.airalgerie) {
        airlinePlaceholders.airalgerie = calculatorContainers.airalgerie.querySelector('.interline-rules-placeholder');
    }


    // --- Load data.json for Flydubai ---
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => {
        fzData = json;
        if(fzCalculateButton) fzCalculateButton.disabled = false;
      })
      .catch((err) => {
        if (fzResultDiv) {
            fzResultDiv.textContent = "Failed to load Flydubai data.json: " + err;
        }
        console.error("Failed to load data.json:", err);
        if(fzCalculateButton) fzCalculateButton.disabled = true;
      });
    if(fzCalculateButton) fzCalculateButton.disabled = true;


    // ======== AIRLINE SELECTION LOGIC ========
    function getSelectedAirlineOption() {
        for (const radio of airlineOptionRadios) {
            if (radio.checked) {
                return radio.value;
            }
        }
        return null;
    }
    
    function hideAllCalculatorSections() {
        for (const key in calculatorContainers) {
            if (calculatorContainers[key]) {
                calculatorContainers[key].style.display = 'none';
            }
        }
        if(interlineAirlineSelectionContainer) interlineAirlineSelectionContainer.style.display = 'none';
    }

    function resetAllInterlinePlaceholders() {
        for (const key in airlinePlaceholders) {
            if (airlinePlaceholders[key]) {
                let airlineDisplayName = key.charAt(0).toUpperCase() + key.slice(1);
                airlineDisplayName = airlineDisplayName.replace(/([A-Z])/g, ' $1').replace(/^ /,''); 
                if (key === "batikmalaysia") airlineDisplayName = "Batik Air Malaysia";
                
                airlinePlaceholders[key].innerHTML = `<p>Loading ${airlineDisplayName} information...</p>`;
            }
        }
        const airAlgerieTariffTableContainer = document.getElementById('airAlgerieTariffTableContainer');
        if (airAlgerieTariffTableContainer) airAlgerieTariffTableContainer.innerHTML = "";
        const airAlgerieRegionSelector = document.getElementById('airAlgerieRegionSelector');
        if (airAlgerieRegionSelector) airAlgerieRegionSelector.value = "";
    }
    
    async function updateDisplayedCalculator() {
        hideAllCalculatorSections();
        const selectedOption = getSelectedAirlineOption();
        const selectedInterlinePartner = interlinePartnerSelector ? interlinePartnerSelector.value : "";

        if (selectedOption === 'flydubai') {
            if(calculatorContainers.flydubai) calculatorContainers.flydubai.style.display = 'block';
        } else if (selectedOption === 'interline') {
            if(interlineAirlineSelectionContainer) interlineAirlineSelectionContainer.style.display = 'block';
            
            if (selectedInterlinePartner && calculatorContainers[selectedInterlinePartner]) {
                calculatorContainers[selectedInterlinePartner].style.display = 'block';
                
                let moduleFileName = selectedInterlinePartner; 
                let displayFunctionNameSegment = ""; 

                if (selectedInterlinePartner === 'batikmalaysia') {
                    moduleFileName = 'batikAir'; 
                    displayFunctionNameSegment = 'BatikAir'; 
                } else if (selectedInterlinePartner === 'alaska') {
                    moduleFileName = 'alaskaAirlines'; 
                    displayFunctionNameSegment = 'AlaskaAirlines';
                } else if (moduleFileName.startsWith('air')) {
                    displayFunctionNameSegment = moduleFileName.charAt(0).toUpperCase() + moduleFileName.slice(1,3) + moduleFileName.charAt(3).toUpperCase() + moduleFileName.slice(4);
                } else {
                    displayFunctionNameSegment = moduleFileName.charAt(0).toUpperCase() + moduleFileName.slice(1);
                }
                
                
                const placeholder = airlinePlaceholders[selectedInterlinePartner];
                if (!placeholder && selectedInterlinePartner !== 'condor' && selectedInterlinePartner !== 'airalgerie') {
                    console.error(`Placeholder for ${selectedInterlinePartner} not found! Check airlinePlaceholders setup.`);
                    if(calculatorContainers[selectedInterlinePartner]) {
                        calculatorContainers[selectedInterlinePartner].innerHTML = `<p>Error: UI placeholder for ${selectedInterlinePartner} is missing.</p>`;
                    }
                    return; 
                }
                
                console.log(`Attempting to load module: ./interline/${moduleFileName}.js for partner: ${selectedInterlinePartner}`);

                try {
                    const airlineModule = await import(`./interline/${moduleFileName}.js`);
                    console.log(`Module ${moduleFileName}.js loaded successfully.`, airlineModule);

                    const displayFunctionName = `display${displayFunctionNameSegment}Info`;
                    console.log(`Attempting to call function: ${displayFunctionName}`);

                    if (selectedInterlinePartner === 'condor') {
                        if (airlineModule.initializeCondorCalculator) {
                            console.log("Initializing Condor Calculator...");
                            airlineModule.initializeCondorCalculator();
                        } else {
                            console.warn(`initializeCondorCalculator function not found in condor.js`);
                        }
                    } else if (selectedInterlinePartner === 'airalgerie') {
                         if (airlineModule.initializeAirAlgerie) {
                            console.log("Initializing Air Algerie UI...");
                            const regionSelector = document.getElementById('airAlgerieRegionSelector');
                            const tariffTableContainer = document.getElementById('airAlgerieTariffTableContainer');
                            airlineModule.initializeAirAlgerie(regionSelector, tariffTableContainer, placeholder); 
                        } else {
                             console.warn(`initializeAirAlgerie function not found in airalgerie.js`);
                        }
                    } else {
                        if (airlineModule && typeof airlineModule[displayFunctionName] === 'function') {
                            console.log(`Calling ${displayFunctionName}...`);
                            airlineModule[displayFunctionName](placeholder);
                        } else {
                            console.warn(`Display function ${displayFunctionName} not found or not a function in module ${moduleFileName}.js`);
                            if(placeholder) placeholder.innerHTML = `<p>Information for ${selectedInterlinePartner} is currently being updated. Please check the airline's official website.</p>`;
                        }
                    }
                } catch (error) {
                    console.error(`Failed to load or display module for ${selectedInterlinePartner} (module: ${moduleFileName}.js):`, error);
                    if(placeholder) {
                        placeholder.innerHTML = `<p>Error loading information for ${selectedInterlinePartner}. Please check the browser console for details and ensure the file <code>interline/${moduleFileName}.js</code> exists and is correctly structured.</p>`;
                    } else if (calculatorContainers[selectedInterlinePartner]) {
                        calculatorContainers[selectedInterlinePartner].innerHTML = `<p>Error loading information for ${selectedInterlinePartner}. Details in console.</p>`;
                    }
                }
            }
        }
    }

    airlineOptionRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'flydubai' && interlinePartnerSelector) {
                interlinePartnerSelector.value = ""; 
                resetAllInterlinePlaceholders(); 
            }
            updateDisplayedCalculator();
        });
    });

    if(interlinePartnerSelector) {
        interlinePartnerSelector.addEventListener('change', () => {
            resetAllInterlinePlaceholders(); 
            updateDisplayedCalculator();
        });
    }

    resetAllInterlinePlaceholders(); 
    updateDisplayedCalculator(); 

    // ======== FLYDUBAI CALCULATOR LOGIC ========
    function fzResolveName(code) {
      if (!fzData) return code;
      code = code.trim().toUpperCase();
      if (fzData.iata_to_city[code]) return fzData.iata_to_city[code];
      if (fzData.iata_to_country[code]) return fzData.iata_to_country[code];
      if (code === "KSA") return "Saudi Arabia";
      if (code === "UAE") return "United Arab Emirates";
      return code.charAt(0).toUpperCase() + code.slice(1).toLowerCase();
    }

    function fzGetZone(input) {
      if (!fzData) return null;
      input = input.trim().toLowerCase();
      for (const [zone, places] of Object.entries(fzData.destinations)) {
        for (const key in places) {
          const value = places[key];
          if (input === key.toLowerCase() || input === value.toLowerCase()) {
            return parseInt(zone);
          }
        }
      }
      return null;
    }

    function fzCalculatePrice() {
      if (!fzData) {
        if(fzResultDiv) fzResultDiv.textContent = "Flydubai data not loaded yet. Please wait a second.";
        return;
      }
      const originInputVal = fzOriginInput ? fzOriginInput.value.trim() : "";
      const destInputVal = fzDestInput ? fzDestInput.value.trim() : "";
      const originUpper = originInputVal.toUpperCase();
      const destinationUpper = destInputVal.toUpperCase();

      if (originUpper === "ASM" || originUpper === "ASMARA" || destinationUpper === "ASM" || destinationUpper === "ASMARA") {
        const originName = fzResolveName(originInputVal);
        const destinationName = fzResolveName(destInputVal);
        if(fzResultDiv) fzResultDiv.textContent = `The Price Per Kilo From ${originName} To ${destinationName} Is: 80 AED`;
        return;
      }
      const zone1 = fzGetZone(originInputVal);
      const zone2 = fzGetZone(destInputVal);
      if (!zone1 || !zone2) {
        if(fzResultDiv) fzResultDiv.textContent = "Destination not found for Flydubai. Please check your input.";
        return;
      }
      const priceKey = `${zone1},${zone2}`;
      const price = fzData.prices[priceKey];
      if (price == null) {
        if(fzResultDiv) fzResultDiv.textContent = "Price not available for this Flydubai route.";
        return;
      }
      const originName = fzResolveName(originInputVal);
      const destinationName = fzResolveName(destInputVal);
      if(fzResultDiv) fzResultDiv.textContent = `The Price Per Kilo From ${originName} To ${destinationName} Is: ${price} AED`;
    }

    function fzSwapCities() {
      if (!fzOriginInput || !fzDestInput) return;
      const originVal = fzOriginInput.value;
      const destinationVal = fzDestInput.value;
      fzOriginInput.value = destinationVal;
      fzDestInput.value = originVal;
      fzCalculatePrice();
    }

    function fzClearFields() {
      if(fzOriginInput) fzOriginInput.value = "";
      if(fzDestInput) fzDestInput.value = "";
      if(fzResultDiv) fzResultDiv.textContent = "";
    }

    if (calculatorContainers.flydubai) { 
        if(fzCalculateButton) fzCalculateButton.addEventListener("click", fzCalculatePrice);
        if(fzSwapButton) fzSwapButton.addEventListener("click", fzSwapCities);
        if(fzClearButton) fzClearButton.addEventListener("click", fzClearFields);
        if(fzOriginInput) fzOriginInput.addEventListener("keydown", function (e) { if (e.key === "Enter") fzCalculatePrice(); });
        if(fzDestInput) fzDestInput.addEventListener("keydown", function (e) { if (e.key === "Enter") fzCalculatePrice(); });
    }
});
