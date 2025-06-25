
export const rwandairInfo = {
    baggagePageUrl: "https://www.rwandair.com/information/prepare-to-fly/baggage/",
    contactPageUrl: "https://www.rwandair.com/connect-with-us/contact-us/",
    summary: {
        title: "RwandAir Baggage Summary",
        items: [
            "<strong>Carry-On:</strong> 1 piece, max 10 kg (21 lbs) [7 kg (15 lbs) for Johannesburg]. Dimensions: 55x38x20 cm (22x15x8 in).",
            "<strong>Checked Baggage (Standard):</strong> Economy/Premium Economy: 2 bags at 23 kg each. Business: 3 bags at 23 kg each.",
            "<strong>Excess & Special Baggage:</strong> Fees apply for additional, overweight (24-32 kg), or oversized bags. Rates vary significantly by route.",
            "<strong>Special Allowances:</strong> Provisions for wheelchairs, assistive devices, and infant carrycots are available."
        ]
    },
    cabinBaggage: {
        title: "Cabin Baggage Policy",
        policy: [
            "Each Passenger is allowed to carry one <strong>22x15x8 inches [55x38x20 cm]</strong> bag not weighing more than <strong>21 lbs [10kgs]</strong> to all destinations with the exception of Johannesburg where the authority restricts this to <strong>15lbs [7kgs]</strong>.",
            "The above weight and size limitations shall be verified and confirmed by use of the WB baggage moulds/sizers at check in areas. All baggage exceeding the unchecked baggage limits shall be checked-in."
        ]
    },
    checkedBaggage: {
        title: "Checked Baggage Allowance",
        allowances: [
            "<strong>Economy Class:</strong> 2 bags of 23 Kgs each",
            "<strong>Premium Economy Class:</strong> 2 bags of 23Kgs each",
            "<strong>Business Class:</strong> 3 bags of 23Kgs each"
        ]
    },
    additionalBaggage: {
        title: "Additional & Excess Baggage Rates",
        selectionPrompt: "Select Region/Route to see specific rates:",
        initialText: "Please select a region to see the tariffs.",
        regionalRates: [
            { id: "rates-east-africa", origin: "From EAST AFRICA (Rwanda, Kenya, etc.)" },
            { id: "rates-west-africa", origin: "From WEST AFRICA (Lagos, Accra, etc.)" },
            { id: "rates-central-africa", origin: "From CENTRAL AFRICA (Libreville, etc.)" },
            { id: "rates-southern-africa", origin: "From SOUTHERN AFRICA (Johannesburg, etc.)" },
            { id: "rates-middle-east", origin: "From MIDDLE EAST (Dubai & Doha)" },
            { id: "rates-london", origin: "From EUROPE (London)" },
            { id: "rates-brussels-paris", origin: "From EUROPE (Brussels and Paris)" },
            { id: "rates-domestic", origin: "DOMESTIC (Kigali <> Kamembe)" }
        ],
        rateData: {
             "rates-east-africa": [ { destination: "EAST AFRICA", piece: "$100.00", heavy: "$50.00" }, { destination: "WEST AFRICA", piece: "$130.00", heavy: "$50.00" }, { destination: "CENTRAL AFRICA", piece: "$130.00", heavy: "$50.00" }, { destination: "SOUTHERN AFRICA", piece: "$130.00", heavy: "$50.00" }, { destination: "EUROPE", piece: "$200.00", heavy: "$78.00" }, { destination: "MIDDLE EAST", piece: "$230.00", heavy: "$90.00" }, { destination: "ASIA / REST OF WORLD", piece: "$253.00", heavy: "$99.00" } ],
             "rates-west-africa": [ { destination: "EAST AFRICA", piece: "$130.00", heavy: "$50.00" }, { destination: "WEST AFRICA", piece: "$92.00", heavy: "$36.00" }, { destination: "CENTRAL AFRICA", piece: "$115.00", heavy: "$45.00" }, { destination: "SOUTHERN AFRICA", piece: "$138.00", heavy: "$54.00" }, { destination: "EUROPE", piece: "$200.00", heavy: "$78.00" }, { destination: "MIDDLE EAST", piece: "$230.00", heavy: "$90.00" }, { destination: "ASIA / REST OF WORLD", piece: "$253.00", heavy: "$99.00" } ],
             "rates-central-africa": [ { destination: "EAST AFRICA", piece: "$115.00", heavy: "$45.00" }, { destination: "WEST AFRICA", piece: "$115.00", heavy: "$45.00" }, { destination: "CENTRAL AFRICA", piece: "$92.00", heavy: "$36.00" }, { destination: "SOUTHERN AFRICA", piece: "$154.00", heavy: "$60.00" }, { destination: "EUROPE", piece: "$200.00", heavy: "$78.00" }, { destination: "MIDDLE EAST", piece: "$230.00", heavy: "$90.00" }, { destination: "ASIA / REST OF WORLD", piece: "$253.00", heavy: "$99.00" } ],
             "rates-southern-africa": [ { destination: "EAST AFRICA", piece: "$170.00", heavy: "$66.00" }, { destination: "WEST AFRICA", piece: "$180.00", heavy: "$70.00" }, { destination: "CENTRAL AFRICA", piece: "$170.00", heavy: "$66.00" }, { destination: "SOUTHERN AFRICA", piece: "$92.00", heavy: "$36.00" }, { destination: "EUROPE", piece: "$200.00", heavy: "$78.00" }, { destination: "MIDDLE EAST", piece: "$230.00", heavy: "$90.00" }, { destination: "ASIA / REST OF WORLD", piece: "$253.00", heavy: "$99.00" } ],
             "rates-middle-east": [ { destination: "ALL African Regions", piece: "$230.00", heavy: "$90.00" }, { destination: "EUROPE", piece: "$230.00", heavy: "$90.00" }, { destination: "MIDDLE EAST", piece: "$230.00", heavy: "$90.00" }, { destination: "ASIA", piece: "$230.00", heavy: "$90.00" }, { destination: "USA & REST OF WORLD", piece: "$253.00", heavy: "$99.00" } ],
             "rates-london": [ { destination: "ALL African Regions", piece: "£220.00", heavy: "£86.00" }, { destination: "EUROPE/LONDON", piece: "£220.00", heavy: "£86.00" }, { destination: "MIDDLE EAST", piece: "£230.00", heavy: "£90.00" }, { destination: "ASIA", piece: "£230.00", heavy: "£90.00" }, { destination: "USA & REST OF WORLD", piece: "£253.00", heavy: "£99.00" } ],
             "rates-brussels-paris": [ { destination: "ALL African Regions", piece: "€200.00", heavy: "€100.00" }, { destination: "EUROPE/LONDON", piece: "€200.00", heavy: "€100.00" }, { destination: "MIDDLE EAST", piece: "€200.00", heavy: "€100.00" }, { destination: "ASIA", piece: "€200.00", heavy: "€100.00" }, { destination: "USA & REST OF WORLD", piece: "€253.00", heavy: "€100.00" } ],
             "rates-domestic": [ { destination: "Piece Based (23Kg)", piece: "$46", heavy: "N/A"}, { destination: "Heavy weight (>23kg up to 32kg)", piece: "$18", heavy: "N/A"} ]
        },
        exceptions: {
            title: "IX. Exceptions for Oversized / Overweight Baggage",
            note: "Approved bag exceeding 32kgs and/or more than 203 CM but not exceeding 50 kgs (prior consent from WB operations e.g. large sport equipment, musical instrument above the standard free baggage allowance.",
            rates: [ { route: "Within East Africa", fee: "USD 140" }, { route: "Intra-Africa (except East Africa) & vice versa", fee: "USD 200" }, { route: "Africa to Middle East & vice versa", fee: "USD 250" }, { route: "Africa to Asia & vice versa", fee: "USD 250" }, { route: "Africa to Europe & vice versa", fee: "USD 300" } ]
        },
        annex: {
            title: "ANNEX 1 & Dimensional Notes",
            notes: [
                "ANNEX 1 Represents the respective per Kg charge in case of small pieces less than 23 Kgs.",
                "Standard dimensions accepted by RwandAir for checked in baggage are (135*13*10) =158cm",
                "Exceptions for RwandAir excess baggage should not be more than 203 CM e.g. the piece below is more than 32 Kgs but less than 50 Kgs. However, the dimension are (150CM * 18CM *35CM) equal to 203 CM."
            ]
        }
    },
    contactDetails: {
        title: "Contact RwandAir",
        headOffice: { name: "Kigali Head Office", address: "Kigali International Airport, Main Building (top floor)", tel: "+250 788 177 000", email: "info@rwandair.com" },
        salesOffices: [ { name: "Kigali Airport Sales", tel: "+250 780 967 289", email: "reservations@rwandair.com" }, { name: "Kigali Head Office Sales", address: "Ubumwe Grande Hotel (1st Floor)", tel: "+250 780 967 325", email: "reservations@rwandair.com" }, { name: "Cargo Sales", tel: "+250738306074 / +250780967285", email: "cargo@rwandair.com" } ]
    }
};

/**
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayRwandairInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("RwandAir placeholder not found.");
        return;
    }

    const info = rwandairInfo;
    let html = `
        <style>
            .rwandair-rates-dropdown { width: 100%; padding: 10px; font-size: 16px; border-radius: 5px; border: 1px solid #ccc; margin-top: 10px; }
            .rwandair-rates-placeholder { margin-top: 15px; color: white; }
            .rates-table th, .rates-table td, .rwandair-exceptions-note { color: white; }
            
            
            .rates-table {
                width: 100%;
                border-collapse: collapse; 
                margin-top: 10px;
            }
            .rates-table th, .rates-table td {
                border: 1px solid #ddd; 
                padding: 8px; 
                text-align: left; 
            }
            .rates-table th {
                background-color: rgba(0,0,0,0.1); 
            }
        </style>
    `;

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>View Full RwandAir Baggage Policy</h4>
                <p>For the most complete and up-to-date information, please visit the official RwandAir baggage page.</p>
                <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT RWANDAIR BAGGAGE PAGE</a>
            </div>
        </div>
    `;

    html += `<div class="summary-card"><h4>${info.summary.title}</h4><ul>`;
    info.summary.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div><hr style="margin: 20px 0;">`;

    html += `<h4>${info.cabinBaggage.title}</h4><ul>`;
    info.cabinBaggage.policy.forEach(item => html += `<li>${item}</li>`);
    html += `</ul><hr style="margin: 20px 0;">`;
    html += `<h4>${info.checkedBaggage.title}</h4><ul>`;
    info.checkedBaggage.allowances.forEach(item => html += `<li>${item}</li>`);
    html += `</ul><hr style="margin: 20px 0;">`;

    if (info.additionalBaggage) {
        html += `<h4>${info.additionalBaggage.title}</h4>`;

        html += `<label for="rwandair-region-select" style="display:block; margin-top: 15px; margin-bottom:5px;"><strong>${info.additionalBaggage.selectionPrompt}</strong></label>`;
        html += `<select id="rwandair-region-select" class="rwandair-rates-dropdown">
                    <option value="">-- Choose a Region --</option>`;
        info.additionalBaggage.regionalRates.forEach(region => {
            html += `<option value="${region.id}">${region.origin}</option>`;
        });
        html += `</select>`;
        html += `<div id="rwandair-rates-placeholder" class="rwandair-rates-placeholder">${info.additionalBaggage.initialText}</div>`;

        html += `<hr style="margin: 20px 0;"><h5>${info.additionalBaggage.exceptions.title}</h5>`;
        html += `<p class="rwandair-exceptions-note">${info.additionalBaggage.exceptions.note}</p>`;
        html += `<table class="rates-table"><thead><tr><th>Route</th><th>Fee</th></tr></thead><tbody>`;
        info.additionalBaggage.exceptions.rates.forEach(rate => {
            html += `<tr><td>${rate.route}</td><td>${rate.fee}</td></tr>`;
        });
        html += `</tbody></table>`;
        
        if(info.additionalBaggage.annex) {
            html += `<hr style="margin: 20px 0;"><h5>${info.additionalBaggage.annex.title}</h5>`;
            html += `<ul>`;
            info.additionalBaggage.annex.notes.forEach(note => {
                html += `<li>${note}</li>`
            });
            html += `</ul>`;
        }
    }

    if (info.contactDetails) {
        html += `<hr style="margin: 20px 0;"><h4>${info.contactDetails.title}</h4>`;
        
        const ho = info.contactDetails.headOffice;
        html += `<h5>${ho.name}</h5><ul><li><strong>Address:</strong> ${ho.address}</li><li><strong>Tel:</strong> ${ho.tel}</li><li><strong>Email:</strong> ${ho.email}</li></ul>`;
        
        info.contactDetails.salesOffices.forEach(office => {
            html += `<h5>${office.name}</h5><ul>`;
            if(office.address) html += `<li><strong>Address:</strong> ${office.address}</li>`;
            if(office.tel) html += `<li><strong>Tel:</strong> ${office.tel}</li>`;
            if(office.email) html += `<li><strong>Email:</strong> ${office.email}</li>`;
            html += `</ul>`;
        });

        html += `
            <div class="calculator-cta-section" style="margin-top: 20px;">
                <a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">CONTACT US</a>
            </div>
        `;
    }
    
    placeholderElement.innerHTML = html;

    const regionSelect = placeholderElement.querySelector("#rwandair-region-select");
    const ratesPlaceholder = placeholderElement.querySelector("#rwandair-rates-placeholder");

    if (regionSelect && ratesPlaceholder) {
        regionSelect.addEventListener("change", (event) => {
            const selectedRegionId = event.target.value;
            if (selectedRegionId && info.additionalBaggage.rateData[selectedRegionId]) {
                const rates = info.additionalBaggage.rateData[selectedRegionId];
                let tableHtml = `<table class="rates-table">
                                    <thead><tr><th>Destination</th><th>Piece Based (23Kg)</th><th>Heavy weight (24-32kg)</th></tr></thead>
                                    <tbody>`;
                rates.forEach(rate => {
                    tableHtml += `<tr><td>${rate.destination}</td><td>${rate.piece}</td><td>${rate.heavy}</td></tr>`;
                });
                tableHtml += `</tbody></table>`;
                ratesPlaceholder.innerHTML = tableHtml;
            } else {
                ratesPlaceholder.innerHTML = `<p>${info.additionalBaggage.initialText}</p>`;
            }
        });
    }
}