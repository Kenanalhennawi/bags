// interline/airalgerie.js
// Contains information, tariff data, and display logic for Air Algérie (AH).

// Exported data object for Air Algérie tariffs
export const airAlgerieTariffs = {
    france: {
        displayName: "France",
        data: [
            { luggage: "1st piece", itinerary: "FR-DZ", lessThan24h: "40 EUR", atLeast24hOrAirport: "80 EUR" },
            { luggage: "1st piece", itinerary: "DZ-FR", lessThan24h: "6000 DZD", atLeast24hOrAirport: "12.000 DZD" },
            { luggage: "2nd piece", itinerary: "FR-DZ", lessThan24h: "75 EUR", atLeast24hOrAirport: "150 EUR" },
            { luggage: "2nd piece", itinerary: "DZ-FR", lessThan24h: "11.000 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "FR-DZ", lessThan24h: "150 EUR", atLeast24hOrAirport: "150 EUR" },
            { luggage: "3rd piece and more", itinerary: "DZ-FR", lessThan24h: "22.000 DZD", atLeast24hOrAirport: "22.000 DZD" }
        ]
    },
    europe_multi: {
        displayName: "Italy / Belgium / Austria / Portugal / Spain / Germany",
        data: [
            { luggage: "1st piece", itinerary: "EU-DZ", lessThan24h: "60 EUR", atLeast24hOrAirport: "80 EUR" },
            { luggage: "1st piece", itinerary: "DZ-EU", lessThan24h: "9000 DZD", atLeast24hOrAirport: "12.000 DZD" },
            { luggage: "2nd piece", itinerary: "EU-DZ", lessThan24h: "110 EUR", atLeast24hOrAirport: "150 EUR" },
            { luggage: "2nd piece", itinerary: "DZ-EU", lessThan24h: "16.500 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "EU-DZ", lessThan24h: "150 EUR", atLeast24hOrAirport: "150 EUR" },
            { luggage: "3rd piece and more", itinerary: "DZ-EU", lessThan24h: "22.000 DZD", atLeast24hOrAirport: "22.000 DZD" }
        ]
    },
    uk: {
        displayName: "United Kingdom",
        data: [
            { luggage: "1st piece", itinerary: "UK-DZ", lessThan24h: "60 GBP", atLeast24hOrAirport: "70 GBP" },
            { luggage: "1st piece", itinerary: "DZ-UK", lessThan24h: "10.000 DZD", atLeast24hOrAirport: "12.000 DZD" },
            { luggage: "2nd piece", itinerary: "UK-DZ", lessThan24h: "110 GBP", atLeast24hOrAirport: "130 GBP" },
            { luggage: "2nd piece", itinerary: "DZ-UK", lessThan24h: "18.500 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "UK-DZ", lessThan24h: "130 GBP", atLeast24hOrAirport: "130 GBP" },
            { luggage: "3rd piece and more", itinerary: "DZ-UK", lessThan24h: "22.000 DZD", atLeast24hOrAirport: "22.000 DZD" }
        ]
    },
    tunisia: {
        displayName: "Tunisia",
        data: [
            { luggage: "1st piece", itinerary: "TN-DZ", lessThan24h: "200 TND", atLeast24hOrAirport: "260 TND" },
            { luggage: "1st piece", itinerary: "DZ-TN", lessThan24h: "9000 DZD", atLeast24hOrAirport: "12.000 DZD" },
            { luggage: "2nd piece", itinerary: "TN-DZ", lessThan24h: "375 TND", atLeast24hOrAirport: "500 TND" },
            { luggage: "2nd piece", itinerary: "DZ-TN", lessThan24h: "16.500 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "TN-DZ", lessThan24h: "500 TND", atLeast24hOrAirport: "500 TND" },
            { luggage: "3rd piece and more", itinerary: "DZ-TN", lessThan24h: "22.000 DZD", atLeast24hOrAirport: "22.000 DZD" }
        ]
    },
    russia: {
        displayName: "Russia",
        data: [
            { luggage: "1st piece", itinerary: "RU-DZ", lessThan24h: "6000 RUB", atLeast24hOrAirport: "8000 RUB" },
            { luggage: "1st piece", itinerary: "DZ-RU", lessThan24h: "9000 DZD", atLeast24hOrAirport: "12.000 DZD" },
            { luggage: "2nd piece", itinerary: "RU-DZ", lessThan24h: "11.000 RUB", atLeast24hOrAirport: "15.000 RUB" },
            { luggage: "2nd piece", itinerary: "DZ-RU", lessThan24h: "16.500 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "RU-DZ", lessThan24h: "15.000 RUB", atLeast24hOrAirport: "15.000 RUB" },
            { luggage: "3rd piece and more", itinerary: "DZ-RU", lessThan24h: "22.000 DZD", atLeast24hOrAirport: "22.000 DZD" }
        ]
    },
    switzerland: {
        displayName: "Switzerland",
        data: [
            { luggage: "1st piece", itinerary: "CH-DZ", lessThan24h: "60 CHF", atLeast24hOrAirport: "80 CHF" },
            { luggage: "1st piece", itinerary: "DZ-CH", lessThan24h: "9000 DZD", atLeast24hOrAirport: "12.000 DZD" },
            { luggage: "2nd piece", itinerary: "CH-DZ", lessThan24h: "110 CHF", atLeast24hOrAirport: "150 CHF" },
            { luggage: "2nd piece", itinerary: "DZ-CH", lessThan24h: "16.500 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "CH-DZ", lessThan24h: "150 CHF", atLeast24hOrAirport: "150 CHF" },
            { luggage: "3rd piece and more", itinerary: "DZ-CH", lessThan24h: "22.000 DZD", atLeast24hOrAirport: "22.000 DZD" }
        ]
    },
    turkey: {
        displayName: "Turkey",
        data: [
            { luggage: "1st piece", itinerary: "TR-DZ", lessThan24h: "110 USD", atLeast24hOrAirport: "125 USD" },
            { luggage: "1st piece", itinerary: "DZ-TR", lessThan24h: "15.000 DZD", atLeast24hOrAirport: "17.000 DZD" },
            { luggage: "2nd piece", itinerary: "TR-DZ", lessThan24h: "120 USD", atLeast24hOrAirport: "140 USD" },
            { luggage: "2nd piece", itinerary: "DZ-TR", lessThan24h: "17.000 DZD", atLeast24hOrAirport: "19.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "TR-DZ", lessThan24h: "160 USD", atLeast24hOrAirport: "160 USD" },
            { luggage: "3rd piece and more", itinerary: "DZ-TR", lessThan24h: "22.000 DZD", atLeast24hOrAirport: "22.000 DZD" }
        ]
    },
    africa_general: {
        displayName: "AFRICA (Except specific countries below)",
        data: [
            { luggage: "1st piece", itinerary: "AF-DZ", lessThan24h: "80.000 XOF/XAF", atLeast24hOrAirport: "110.000 XOF/XAF" },
            { luggage: "1st piece", itinerary: "DZ-AF", lessThan24h: "17.000 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "2nd piece", itinerary: "AF-DZ", lessThan24h: "120.000 XAF/XOF", atLeast24hOrAirport: "160.000 XOF/XAF" },
            { luggage: "2nd piece", itinerary: "DZ-AF", lessThan24h: "23.000 DZD", atLeast24hOrAirport: "30.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "AF-DZ", lessThan24h: "160.000 XOF/XAF", atLeast24hOrAirport: "160.000 XOF/XAF" },
            { luggage: "3rd piece and more", itinerary: "DZ-AF", lessThan24h: "30.000 DZD", atLeast24hOrAirport: "30.000 DZD" }
        ]
    },
    mauritania: {
        displayName: "Mauritania",
        data: [
            { luggage: "1st piece", itinerary: "MR-DZ", lessThan24h: "5000 MRU", atLeast24hOrAirport: "7000 MRU" },
            { luggage: "1st piece", itinerary: "DZ-MR", lessThan24h: "17.000 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "2nd piece", itinerary: "MR-DZ", lessThan24h: "8000 MRU", atLeast24hOrAirport: "10.500 MRU" },
            { luggage: "2nd piece", itinerary: "DZ-MR", lessThan24h: "23.000 DZD", atLeast24hOrAirport: "30.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "MR-DZ", lessThan24h: "10.500 MRU", atLeast24hOrAirport: "10.500 MRU" },
            { luggage: "3rd piece and more", itinerary: "DZ-MR", lessThan24h: "30.000 DZD", atLeast24hOrAirport: "30.000 DZD" }
        ]
    },
    south_africa: {
        displayName: "South Africa",
        data: [
            { luggage: "1st piece", itinerary: "ZA-DZ", lessThan24h: "2600 ZAR", atLeast24hOrAirport: "3500 ZAR" },
            { luggage: "1st piece", itinerary: "DZ-ZA", lessThan24h: "18.000 DZD", atLeast24hOrAirport: "24.000 DZD" },
            { luggage: "2nd piece", itinerary: "ZA-DZ", lessThan24h: "3700 ZAR", atLeast24hOrAirport: "5000 ZAR" },
            { luggage: "2nd piece", itinerary: "DZ-ZA", lessThan24h: "25.000 DZD", atLeast24hOrAirport: "34.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "ZA-DZ", lessThan24h: "5000 ZAR", atLeast24hOrAirport: "5000 ZAR" },
            { luggage: "3rd piece and more", itinerary: "DZ-ZA", lessThan24h: "34.000 DZD", atLeast24hOrAirport: "34.000 DZD" }
        ]
    },
    ethiopia_country: { 
        displayName: "Ethiopia",
        data: [
            { luggage: "1st piece", itinerary: "ET-DZ", lessThan24h: "140 USD", atLeast24hOrAirport: "190 USD" },
            { luggage: "1st piece", itinerary: "DZ-ET", lessThan24h: "18.000 DZD", atLeast24hOrAirport: "24.000 DZD" },
            { luggage: "2nd piece", itinerary: "ET-DZ", lessThan24h: "200 USD", atLeast24hOrAirport: "270 USD" },
            { luggage: "2nd piece", itinerary: "DZ-ET", lessThan24h: "25.000 DZD", atLeast24hOrAirport: "34.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "ET-DZ", lessThan24h: "270 USD", atLeast24hOrAirport: "270 USD" },
            { luggage: "3rd piece and more", itinerary: "DZ-ET", lessThan24h: "34.000 DZD", atLeast24hOrAirport: "34.000 DZD" }
        ]
    },
    uae: {
        displayName: "United Arab Emirates",
        data: [
            { luggage: "1st piece", itinerary: "AE-DZ", lessThan24h: "500 AED", atLeast24hOrAirport: "735 AED" },
            { luggage: "1st piece", itinerary: "DZ-AE", lessThan24h: "10.000 DZD", atLeast24hOrAirport: "15.000 DZD" },
            { luggage: "2nd piece", itinerary: "AE-DZ", lessThan24h: "500 AED", atLeast24hOrAirport: "735 AED" },
            { luggage: "2nd piece", itinerary: "DZ-AE", lessThan24h: "10.000 DZD", atLeast24hOrAirport: "15.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "AE-DZ", lessThan24h: "735 AED", atLeast24hOrAirport: "735 AED" },
            { luggage: "3rd piece and more", itinerary: "DZ-AE", lessThan24h: "15.000 DZD", atLeast24hOrAirport: "15.000 DZD" }
        ]
    },
    qatar: {
        displayName: "Qatar",
        data: [
            { luggage: "1st piece", itinerary: "QR-DZ", lessThan24h: "440 QAR", atLeast24hOrAirport: "550 QAR" },
            { luggage: "1st piece", itinerary: "DZ-QR", lessThan24h: "16.000 DZD", atLeast24hOrAirport: "20.000 DZD" },
            { luggage: "2nd piece", itinerary: "QR-DZ", lessThan24h: "650 QAR", atLeast24hOrAirport: "800 QAR" },
            { luggage: "2nd piece", itinerary: "DZ-QR", lessThan24h: "24.000 DZD", atLeast24hOrAirport: "30.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "QR-DZ", lessThan24h: "800 QAR", atLeast24hOrAirport: "800 QAR" },
            { luggage: "3rd piece and more", itinerary: "DZ-QR", lessThan24h: "30.000 DZD", atLeast24hOrAirport: "30.000 DZD" }
        ]
    },
    jordan: {
        displayName: "Jordan",
        data: [
            { luggage: "1st piece", itinerary: "JO-DZ", lessThan24h: "90 JOD", atLeast24hOrAirport: "100 JOD" },
            { luggage: "1st piece", itinerary: "DZ-JO", lessThan24h: "18.000 DZD", atLeast24hOrAirport: "20.000 DZD" },
            { luggage: "2nd piece", itinerary: "JO-DZ", lessThan24h: "90 JOD", atLeast24hOrAirport: "100 JOD" },
            { luggage: "2nd piece", itinerary: "DZ-JO", lessThan24h: "18.000 DZD", atLeast24hOrAirport: "20.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "JO-DZ", lessThan24h: "100 JOD", atLeast24hOrAirport: "100 JOD" },
            { luggage: "3rd piece and more", itinerary: "DZ-JO", lessThan24h: "20.000 DZD", atLeast24hOrAirport: "20.000 DZD" }
        ]
    },
    egypt: {
        displayName: "Egypt",
        data: [
            { luggage: "1st piece", itinerary: "EG-DZ", lessThan24h: "110 USD", atLeast24hOrAirport: "120 USD" },
            { luggage: "1st piece", itinerary: "DZ-EG", lessThan24h: "12.500 DZD", atLeast24hOrAirport: "14.000 DZD" },
            { luggage: "2nd piece", itinerary: "EG-DZ", lessThan24h: "130 USD", atLeast24hOrAirport: "140 USD" },
            { luggage: "2nd piece", itinerary: "DZ-EG", lessThan24h: "18.000 DZD", atLeast24hOrAirport: "20.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "EG-DZ", lessThan24h: "140 USD", atLeast24hOrAirport: "140 USD" },
            { luggage: "3rd piece and more", itinerary: "DZ-EG", lessThan24h: "20.000 DZD", atLeast24hOrAirport: "20.000 DZD" }
        ]
    },
    saudi_arabia: {
        displayName: "Saudi Arabia",
        data: [
            { luggage: "1st piece", itinerary: "SA-DZ", lessThan24h: "450 SAR", atLeast24hOrAirport: "680 SAR" },
            { luggage: "1st piece", itinerary: "DZ-SA", lessThan24h: "17.000 DZD", atLeast24hOrAirport: "25.000 DZD" },
            { luggage: "2nd piece", itinerary: "SA-DZ", lessThan24h: "450 SAR", atLeast24hOrAirport: "680 SAR" },
            { luggage: "2nd piece", itinerary: "DZ-SA", lessThan24h: "17.000 DZD", atLeast24hOrAirport: "25.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "SA-DZ", lessThan24h: "680 SAR", atLeast24hOrAirport: "680 SAR" },
            { luggage: "3rd piece and more", itinerary: "DZ-SA", lessThan24h: "25.000 DZD", atLeast24hOrAirport: "25.000 DZD" }
        ]
    },
    canada: {
        displayName: "Canada",
        data: [
            { luggage: "1st piece", itinerary: "CA-DZ", lessThan24h: "200 CAD", atLeast24hOrAirport: "250 CAD" },
            { luggage: "1st piece", itinerary: "DZ-CA", lessThan24h: "16.000 DZD", atLeast24hOrAirport: "20.000 DZD" },
            { luggage: "2nd piece", itinerary: "CA-DZ", lessThan24h: "220 CAD", atLeast24hOrAirport: "270 CAD" },
            { luggage: "2nd piece", itinerary: "DZ-CA", lessThan24h: "19.000 DZD", atLeast24hOrAirport: "23.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "CA-DZ", lessThan24h: "270 CAD", atLeast24hOrAirport: "270 CAD" },
            { luggage: "3rd piece and more", itinerary: "DZ-CA", lessThan24h: "23.000 DZD", atLeast24hOrAirport: "23.000 DZD" }
        ]
    },
    china: {
        displayName: "China",
        data: [
            { luggage: "1st piece", itinerary: "CN-DZ", lessThan24h: "1200 CNY", atLeast24hOrAirport: "1600 CNY" },
            { luggage: "1st piece", itinerary: "DZ-CN", lessThan24h: "17.000 DZD", atLeast24hOrAirport: "22.000 DZD" },
            { luggage: "2nd piece", itinerary: "CN-DZ", lessThan24h: "1350 CNY", atLeast24hOrAirport: "1800 CNY" },
            { luggage: "2nd piece", itinerary: "DZ-CN", lessThan24h: "22.500 DZD", atLeast24hOrAirport: "30.000 DZD" },
            { luggage: "3rd piece and more", itinerary: "CN-DZ", lessThan24h: "1800 CNY", atLeast24hOrAirport: "1800 CNY" },
            { luggage: "3rd piece and more", itinerary: "DZ-CN", lessThan24h: "30.000 DZD", atLeast24hOrAirport: "30.000 DZD" }
        ]
    },
    connecting_africa: {
        displayName: "Flights connecting to/from Africa",
        data: [
            { luggage: "1st piece", itinerary: "Connecting to/from Africa", lessThan24h: "150 EUR", atLeast24hOrAirport: "180 EUR" },
            { luggage: "2nd piece", itinerary: "Connecting to/from Africa", lessThan24h: "210 EUR", atLeast24hOrAirport: "250 EUR" },
            { luggage: "3rd piece and more", itinerary: "Connecting to/from Africa", lessThan24h: "250 EUR", atLeast24hOrAirport: "250 EUR" }
        ]
    }
    // Add other general info or contact details for Air Algerie if available
    // contactDetails: { ... } // To be rendered at the end by displayAirAlgerieInfo
};

// This flag ensures the region dropdown event listener is added only once.
let airAlgerieInitialized = false;

/**
 * Populates the Air Algérie region selector dropdown.
 * @param {HTMLSelectElement} regionSelectorElement - The select DOM element.
 */
function populateAirAlgerieRegions(regionSelectorElement) {
    if (!regionSelectorElement) return;
    // Clear existing options except the first one (-- Choose a Region --)
    while (regionSelectorElement.options.length > 1) {
        regionSelectorElement.remove(1);
    }
    // Populate with new regions from the tariff data
    for (const key in airAlgerieTariffs) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = airAlgerieTariffs[key].displayName;
        regionSelectorElement.appendChild(option);
    }
}

/**
 * Displays the Air Algérie tariff table for the selected region.
 * @param {string} regionKey - The key for the selected region in airAlgerieTariffs.
 * @param {HTMLElement} tariffTableContainerElement - The div where the table should be rendered.
 */
function displayAirAlgerieTariffTable(regionKey, tariffTableContainerElement) {
    if (!tariffTableContainerElement || !airAlgerieTariffs[regionKey]) {
        if(tariffTableContainerElement) tariffTableContainerElement.innerHTML = "<p>Please select a region to see the tariffs.</p>";
        return;
    }
    const region = airAlgerieTariffs[regionKey];
    let tableHTML = `<h4 class="rules-table-title">${region.displayName} Tariffs</h4>`;
    tableHTML += '<table class="rules-table">';
    tableHTML += `
        <thead>
            <tr>
                <th>Luggage</th>
                <th>Itinerary</th>
                <th>&lt; 24 hours before flight</th>
                <th>≥ 24 hours before or at airport</th>
            </tr>
        </thead>
        <tbody>
    `;
    region.data.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item.luggage}</td>
                <td>${item.itinerary}</td>
                <td>${item.lessThan24h}</td>
                <td>${item.atLeast24hOrAirport}</td>
            </tr>
        `;
    });
    tableHTML += '</tbody></table>';
    tariffTableContainerElement.innerHTML = tableHTML;
}

/**
 * Initializes the Air Algérie specific UI components and event listeners.
 * This function is called by app.js when Air Algérie is selected.
 * @param {HTMLSelectElement} regionSelectorElement - The region select dropdown element.
 * @param {HTMLElement} tariffTableContainerElement - The div for the tariff table.
 * @param {HTMLElement} placeholderElement - The main placeholder for other text.
 */
export function initializeAirAlgerie(regionSelectorElement, tariffTableContainerElement, placeholderElement) {
    if (!regionSelectorElement || !tariffTableContainerElement || !placeholderElement) {
        console.error("Air Algérie UI elements not found for initialization.");
        if(placeholderElement) placeholderElement.innerHTML = "<p>Error initializing Air Algérie information display.</p>";
        return;
    }

    // Initial message in the main placeholder
    placeholderElement.innerHTML = `
        <p>Select a region/route to view Air Algérie's additional piece tariffs. Please verify with the airline for the most current information.</p>
        <p class="small-note">General rules for overweight (23-32kg and >32kg) and oversized (158-203cm with 12000 DZD / 80 EUR fee if applicable) baggage also apply. Consult Air Algérie for full details.</p>
    `;
    // TODO: Add contact details for Air Algerie at the end of the placeholderElement.innerHTML if available in airAlgerieTariffs or a new object.


    populateAirAlgerieRegions(regionSelectorElement); 
    
    // Display initial message in table container
    if (tariffTableContainerElement && regionSelectorElement.value === "") {
        tariffTableContainerElement.innerHTML = "<p>Please select a region to see the tariffs.</p>";
    }

    // Add event listener only once
    if (!airAlgerieInitialized) {
        regionSelectorElement.addEventListener('change', function() {
            if (this.value) {
                displayAirAlgerieTariffTable(this.value, tariffTableContainerElement);
            } else {
                if(tariffTableContainerElement) tariffTableContainerElement.innerHTML = "<p>Please select a region to see the tariffs.</p>";
            }
        });
        airAlgerieInitialized = true;
    }
}
