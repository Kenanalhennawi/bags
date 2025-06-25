document.addEventListener('DOMContentLoaded', () => {
    let fzData = null;
    let allDestinations = [];

    const airlineOptionRadios = document.querySelectorAll('input[name="airlineOption"]');
    const interlineAirlineSelectionContainer = document.getElementById('interlineAirlineSelectionContainer');
    const interlinePartnerSelector = document.getElementById('interlinePartnerSelector');
    const fzOriginInput = document.getElementById("fzOrigin");
    const fzDestInput = document.getElementById("fzDestination");
    const fzResultDiv = document.getElementById("fzResult");
    const fzCalculateButton = document.getElementById("fzCalculateButton");
    const fzSwapButton = document.getElementById("fzSwapButton");
    const fzClearButton = document.getElementById("fzClearButton");
    const originSuggestions = document.getElementById('origin-suggestions');
    const destinationSuggestions = document.getElementById('destination-suggestions');

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
    
    const airlinePlaceholders = {};
    for (const key in calculatorContainers) {
        if (calculatorContainers[key] && key !== 'flydubai' && key !== 'condor' && key !== 'airalgerie') {
            const placeholder = calculatorContainers[key].querySelector('.interline-rules-placeholder');
            if (placeholder) {
                airlinePlaceholders[key] = placeholder;
            }
        }
    }
    if (calculatorContainers.airalgerie) {
        airlinePlaceholders.airalgerie = calculatorContainers.airalgerie.querySelector('.interline-rules-placeholder');
    }

    fetch("data.json")
      .then((res) => res.json())
      .then((json) => {
        fzData = json;
        buildAllDestinationsList();
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

    function buildAllDestinationsList() {
        if (!fzData) return;

        const iataToCountryName = {
            'DXB': 'United Arab Emirates', 'AUH': 'United Arab Emirates', 'BAH': 'Bahrain', 
            'DOH': 'Qatar', 'KWI': 'Kuwait', 'MCT': 'Oman', 'SLL': 'Oman', 'AHB': 'Saudi Arabia', 
            'ULH': 'Saudi Arabia', 'DMM': 'Saudi Arabia', 'AJF': 'Saudi Arabia', 'MED': 'Saudi Arabia', 
            'NUM': 'Saudi Arabia', 'EAM': 'Saudi Arabia', 'AQI': 'Saudi Arabia', 'TUU': 'Saudi Arabia', 
            'RSI': 'Saudi Arabia', 'ELQ': 'Saudi Arabia', 'GIZ': 'Saudi Arabia', 'HAS': 'Saudi Arabia', 
            'HOF': 'Saudi Arabia', 'JED': 'Saudi Arabia', 'RUH': 'Saudi Arabia', 'TIF': 'Saudi Arabia', 
            'YNB': 'Saudi Arabia', 'AMM': 'Jordan', 'BGW': 'Iraq', 'DAM': 'Syria', 'IFN': 'Iran', 
            'KER': 'Iran', 'BEY': 'Lebanon', 'EBL': 'Iraq', 'IKA': 'Iran', 'BSR': 'Iraq', 
            'BND': 'Iran', 'KIH': 'Iran', 'LRR': 'Iran', 'MHD': 'Iran', 'NJF': 'Iraq', 
            'SYZ': 'Iran', 'SUF': 'Iraq', 'TLV': 'Israel', 'ADD': 'Ethiopia', 'DAR': 'Tanzania', 
            'CAI': 'Egypt', 'SPX': 'Egypt', 'HBE': 'Egypt', 'DBB': 'Egypt', 'ALY': 'Egypt', 
            'HGA': 'Somalia', 'JUB': 'South Sudan', 'DJB': 'Djibouti', 'MBA': 'Kenya', 
            'ZNZ': 'Tanzania', 'EBB': 'Uganda', 'ASM': 'Eritrea', 'AMD': 'India', 'BWA': 'Nepal', 
            'CGP': 'Bangladesh', 'LYP': 'Pakistan', 'HYD': 'India', 'KBL': 'Afghanistan', 
            'KTM': 'Nepal', 'COK': 'India', 'CCJ': 'India', 'LKO': 'India', 'MLE': "Maldives", 
            'MUX': 'Pakistan', 'SKT': 'Pakistan', 'UET': 'Pakistan', 'DEL': 'India', 'DAC': 'Bangladesh', 
            'KHI': 'Pakistan', 'BOM': 'India', 'CCU': 'India', 'ISB': 'Pakistan', 'CMB': 'Sri Lanka', 
            'LHE': 'Pakistan', 'BKK': 'Thailand', 'KBV': 'Thailand', 'LGK': 'Malaysia', 'UTP': 'Thailand', 
            'PEN': 'Malaysia', 'IST': 'Turkey', 'ESB': 'Turkey', 'ASB': 'Turkmenistan', 'GYD': 'Azerbaijan', 
            'MSQ': 'Belarus', 'SVO': 'Russia', 'BEG': 'Serbia', 'WAW': 'Poland', 'TAS': 'Uzbekistan', 
            'SKD': 'Uzbekistan', 'SJJ': 'Bosnia and Herzegovina', 'ALA': 'Kazakhstan', 'NQZ': 'Kazakhstan', 
            'BSL': 'Switzerland', 'BUS': 'Georgia', 'BJV': 'Turkey', 'OTP': 'Romania', 'BUD': 'Hungary', 
            'CTA': 'Italy', 'CFU': 'Greece', 'DBV': 'Croatia', 'DYU': 'Tajikistan', 'KZN': 'Russia', 
            'KRK': 'Poland', 'KRR': 'Russia', 'LJU': 'Slovenia', 'MCX': 'Russia', 'BGY': 'Italy', 
            'MRV': 'Russia', 'JMK': 'Greece', 'NAP': 'Italy', 'OVB': 'Russia', 'OLB': 'Italy', 
            'PSA': 'Italy', 'POZ': 'Poland', 'PRG': 'Czech Republic', 'ROV': 'Russia', 'SZG': 'Austria', 
            'KUF': 'Russia', 'JTR': 'Greece', 'CIT': 'Kazakhstan', 'AER': 'Russia', 'SOF': 'Bulgaria', 
            'LED': 'Russia', 'TBS': 'Georgia', 'TIV': 'Montenegro', 'TIA': 'Albania', 'UFA': 'Russia', 
            'VOG': 'Russia', 'FRU': 'Kyrgyzstan', 'SVX': 'Russia', 'EVN': 'Armenia', 'ZAG': 'Croatia',
            'BUZ': 'Iran', 'GSM': 'Iran', 'TBZ': 'Iran', 'PEW': 'Pakistan', 'AYT': 'Turkey', 
            'RMO': 'Moldova', 'IAS': 'Romania', 'RIX': 'Latvia', 'VNO': 'Lithuania'
        };

        const destinationMap = new Map();
        for (const iataCode in fzData.iata_to_city) {
            const cityName = fzData.iata_to_city[iataCode];
            const countryName = iataToCountryName[iataCode] || 'Unknown';
            
            if (!destinationMap.has(iataCode)) {
                destinationMap.set(iataCode, {
                    city: cityName,
                    country: countryName,
                    airportName: `${cityName} Airport`
                });
            }
        }
        
        allDestinations = Array.from(destinationMap.entries()).map(([iata, details]) => ({
            iata,
            city: details.city,
            country: details.country,
            airportName: details.airportName
        })).sort((a, b) => a.city.localeCompare(b.city));
    }
    
    function showSuggestions(e, suggestionsContainer) {
        const inputVal = e.target.value.toLowerCase();
        suggestionsContainer.innerHTML = '';
        if (!inputVal) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        const filtered = allDestinations.filter(item => 
            item.city.toLowerCase().includes(inputVal) || 
            item.country.toLowerCase().includes(inputVal) || 
            item.iata.toLowerCase().includes(inputVal)
        ).slice(0, 7);

        if (filtered.length > 0) {
            filtered.forEach(item => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                
                const textWrapper = document.createElement('div');
                
                const mainText = document.createElement('span');
                mainText.className = 'main-text';
                mainText.textContent = `${item.city}, ${item.country}`;
                
                const subText = document.createElement('span');
                subText.className = 'sub-text';
                subText.textContent = item.airportName;

                const iataCodeSpan = document.createElement('span');
                iataCodeSpan.className = 'iata-code';
                iataCodeSpan.textContent = item.iata;
                
                textWrapper.appendChild(mainText);
                textWrapper.appendChild(subText);
                div.appendChild(textWrapper);
                div.appendChild(iataCodeSpan);

                div.addEventListener('click', () => {
                    e.target.value = item.iata;
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.display = 'none';
                });
                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    }
    
    if (fzOriginInput) {
        fzOriginInput.addEventListener('input', (e) => showSuggestions(e, originSuggestions));
        fzOriginInput.addEventListener('focus', () => {
            if(destinationSuggestions) destinationSuggestions.style.display = 'none';
        });
    }
    if (fzDestInput) {
        fzDestInput.addEventListener('input', (e) => showSuggestions(e, destinationSuggestions));
        fzDestInput.addEventListener('focus', () => {
            if(originSuggestions) originSuggestions.style.display = 'none';
        });
    }

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.autocomplete-container')) {
            if(originSuggestions) originSuggestions.style.display = 'none';
            if(destinationSuggestions) destinationSuggestions.style.display = 'none';
        }
    });

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
                
                try {
                    const airlineModule = await import(`./interline/${moduleFileName}.js`);
                    const displayFunctionName = `display${displayFunctionNameSegment}Info`;

                    if (selectedInterlinePartner === 'condor') {
                        if (airlineModule.initializeCondorCalculator) {
                            airlineModule.initializeCondorCalculator();
                        }
                    } else if (selectedInterlinePartner === 'airalgerie') {
                         if (airlineModule.initializeAirAlgerie) {
                            const regionSelector = document.getElementById('airAlgerieRegionSelector');
                            const tariffTableContainer = document.getElementById('airAlgerieTariffTableContainer');
                            airlineModule.initializeAirAlgerie(regionSelector, tariffTableContainer, placeholder); 
                        }
                    } else {
                        if (airlineModule && typeof airlineModule[displayFunctionName] === 'function') {
                            airlineModule[displayFunctionName](placeholder);
                        } else {
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

    document.querySelectorAll('.radio-item').forEach(item => {
        item.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            if (radio && !radio.checked) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
    });

    resetAllInterlinePlaceholders(); 
    updateDisplayedCalculator(); 

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
        
        const enterKeyHandler = (e) => {
            if (e.key === "Enter") {
                fzCalculateButton.click();
            }
        };

        if(fzOriginInput) fzOriginInput.addEventListener("keydown", enterKeyHandler);
        if(fzDestInput) fzDestInput.addEventListener("keydown", enterKeyHandler);
    }
});