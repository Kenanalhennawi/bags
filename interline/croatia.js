
export const croatiaInfo = {
    baggagePageUrl: "https://www.croatiaairlines.com/Travel-info/Baggage/Checked-baggage",
    contactPageUrl: "https://www.croatiaairlines.com/contact",
    dataVersions: [
        {
            versionTitle: "Fee Schedule 2 (EU/Domestic)",
            fareFamilies: [
                {
                    name: "FlyEasy",
                    intro: "FlyEasy fares include one piece of hand baggage (up to 8 kg) free of charge. The following fees apply to checked baggage. Infants cannot purchase a first extra bag.",
                    fees: [
                        { title: "First Checked Bag (up to 23 kg & 158 cm)", charges: [ { condition: "Within EU (> 24h before flight)", fee: "€30" }, { condition: "Within EU (< 24h before flight)", fee: "€40" }, { condition: "Domestic (> 24h before flight)", fee: "€20" }, { condition: "Domestic (< 24h before flight)", fee: "€30" } ] },
                        { title: "First Checked Bag (Oversize/Overweight)", charges: [ { condition: "Bigger (up to 23kg, >158cm)", fee: "€125 (EU) / €65 (Dom)" }, { condition: "Heavy (23-32kg, up to 158cm)", fee: "€125 (EU) / €65 (Dom)" }, { condition: "Bigger & Heavy (23-32kg, >158cm)", fee: "€175 (EU) / €75 (Dom)" } ] },
                        { title: "Second & Every Other Extra Bag", charges: [ { condition: "Standard Piece (up to 23kg & 158cm)", fee: "€65 (EU) / €40 (Dom)" }, { condition: "Bigger Piece (up to 23kg, >158cm)", fee: "€125 (EU) / €65 (Dom)" }, { condition: "Heavy Piece (23-32kg, up to 158cm)", fee: "€125 (EU) / €65 (Dom)" }, { condition: "Bigger & Heavy Piece (23-32kg, >158cm)", fee: "€175 (EU) / €75 (Dom)" } ] }
                    ]
                },
                {
                    name: "FlyOpti, FlyFlexi, FlyBwise & FlyBizz",
                    intro: "Excess baggage charges for fare families that include at least one free checked bag.",
                    fees: [
                        { title: "Economy Class - Charges on Free Piece (FlyOpti/FlyFlexi)", charges: [ { condition: "Free Piece Bigger (>158cm)", fee: "€60 (EU) / €40 (Dom)" }, { condition: "Free Piece Heavy (23-32kg)", fee: "€60 (EU) / €40 (Dom)" }, { condition: "Free Piece Bigger & Heavy (23-32kg, >158cm)", fee: "€125 (EU) / €56 (Dom)" } ] },
                        { title: "Economy Class - Charges for Extra Pieces", charges: [ { condition: "Extra Piece (Standard)", fee: "€65 (EU) / €40 (Dom)" }, { condition: "Extra Piece Bigger", fee: "€125 (EU) / €65 (Dom)" }, { condition: "Extra Piece Heavy", fee: "€125 (EU) / €65 (Dom)" }, { condition: "Extra Piece Bigger & Heavy", fee: "€175 (EU) / €75 (Dom)" } ] },
                        { title: "Business Class - Charges on Free Pieces (FlyBwise/FlyBizz)", charges: [ { condition: "Free Piece Bigger (>158cm)", fee: "€60 (EU) / €65 (Dom)" } ] },
                        { title: "Business Class - Charges for Extra Pieces", charges: [ { condition: "Extra Piece (up to 32kg)", fee: "€65 (EU) / €65 (Dom)" }, { condition: "Extra Piece Bigger", fee: "€125 (EU) / €75 (Dom)" } ] }
                    ]
                }
            ],
             generalNotes: [
                "Maximum handling weight per piece is 32 kg (70 lb).",
                "IMPORTANT! For excess baggage on international flights bought on the day of departure in Croatia and Bosnia and Herzegovina, an additional charge of €10 will apply.",
                "Refund for Excess Baggage Charges/Fees are permitted before departure only."
            ]
        },
        {
            versionTitle: "Fee Schedule 1 (with VAT %)",
            fareFamilies: [
                {
                    name: "FlyEasy",
                    fees: [
                        { title: "First Checked Bag (up to 23kg & 158cm)", charges: [ { condition: "International (> 24h before departure)", fee: "€30" }, { condition: "International (< 24h before departure)", fee: "€40" }, { condition: "Domestic (> 24h before departure)", fee: "€11 + 25% VAT" }, { condition: "Domestic (< 24h before departure)", fee: "€16 + 25% VAT" } ] },
                        { title: "First Checked Bag (Oversize/Overweight)", charges: [ { condition: "Bigger (up to 23kg, >158cm)", fee: "€175 (Int'l) / €45 + 25% VAT (Dom)" }, { condition: "Heavy (23-32kg, up to 158cm)", fee: "€125 (Int'l) / €45 + 25% VAT (Dom)" }, { condition: "Bigger & Heavy (23-32kg, >158cm)", fee: "€225 (Int'l) / €53 + 25% VAT (Dom)" } ] },
                        { title: "Second & Every Other Extra Bag", charges: [ { condition: "Standard Piece (up to 23kg & 158cm)", fee: "€75 (Int'l) / €32 + 25% VAT (Dom)" }, { condition: "Bigger Piece (up to 23kg, >158cm)", fee: "€175 (Int'l) / €45 + 25% VAT (Dom)" }, { condition: "Heavy Piece (23-32kg, up to 158cm)", fee: "€125 (Int'l) / €45 + 25% VAT (Dom)" }, { condition: "Bigger & Heavy Piece (23-32kg, >158cm)", fee: "€225 (Int'l) / €53 + 25% VAT (Dom)" } ] }
                    ]
                },
                {
                    name: "FlyOpti & FlyFlexi (Economy Class)",
                    fees: [
                        { title: "Free Baggage Allowance (1 Piece)", charges: [ { condition: "Free Piece Bigger (>159cm)", fee: "€75 (Int'l) / €32 + 25% VAT (Dom)" }, { condition: "Free Piece Heavy (24-32kg)", fee: "€50 (Int'l) / €32 + 25% VAT (Dom)" }, { condition: "Free Piece Bigger & Heavy", fee: "€150 (Int'l) / €45 + 25% VAT (Dom)" } ] },
                        { title: "Extra Baggage Pieces", charges: [ { condition: "Extra Piece (Standard)", fee: "€75 (Int'l) / €32 + 25% VAT (Dom)" }, { condition: "Extra Piece Bigger (>159cm)", fee: "€175 (Int'l) / €45 + 25% VAT (Dom)" }, { condition: "Extra Piece Heavy (24-32kg)", fee: "€125 (Int'l) / €45 + 25% VAT (Dom)" }, { condition: "Extra Piece Bigger & Heavy", fee: "€225 (Int'l) / €53 + 25% VAT (Dom)" } ] }
                    ]
                },
                {
                    name: "FlyBizz (Business Class)",
                    fees: [
                        { title: "Free Baggage Allowance (2 Pieces)", charges: [ { condition: "Free Piece Bigger (>159cm)", fee: "€75 (Int'l) / €32 + 25% VAT (Dom)" } ] },
                        { title: "Extra Baggage Pieces", charges: [ { condition: "Extra Piece (up to 32kg)", fee: "€75 (Int'l) / €32 + 25% VAT (Dom)" }, { condition: "Extra Piece Bigger (>159cm)", fee: "€175 (Int'l) / €45 + 25% VAT (Dom)" } ] }
                    ]
                }
            ]
        }
    ],
    contactDetails: {
        departments: [
            { name: "Contact Center / Telephone Sales", contacts: [ { method: "Tel (within Croatia)", value: "072 500 505" }, { method: "Tel (International)", value: "+385 1 66 76 555" }, { method: "E-mail", value: "contact@croatiaairlines.hr" } ], hours: "Mon-Fri: 08:00 - 20:00, weekends & holidays: 09:00 - 15:00" },
            { name: "Internet Sales (FlyOnLine)", contacts: [ { method: "E-mail", value: "flyonline@croatiaairlines.hr" } ], hours: "Mon-Fri: 08:00 - 20:00, weekends & holidays: 09:00 - 15:00" },
            { name: "Customer Relations Department", contacts: [ { method: "Address", value: "Croatia Airlines, Bani 75B, Buzin, 10010 ZAGREB, CROATIA" } ], hours: "Mon-Fri: 08:00 - 16:00" },
            { name: "Central Tracing Department", contacts: [ { method: "Fax", value: "+385 1 62 65 192" }, { method: "E-mail", value: "tracing.hdq@croatiaairlines.hr" } ] },
            { name: "Marketing Department", contacts: [ { method: "E-mail", value: "marketing@croatiaairlines.hr" } ] }
        ]
    }
};

/**
 * Renders the fee tables for a specific data version.
 * @param {object} versionData - The data object for the selected version.
 * @returns {string} The HTML string for the tables.
 */
function renderFeeTables(versionData) {
    let tablesHtml = "";
    if (versionData.fareFamilies && versionData.fareFamilies.length > 0) {
        versionData.fareFamilies.forEach(family => {
            tablesHtml += `<h4>${family.name}</h4>`;
            if (family.intro) {
                tablesHtml += `<p class="small-note">${family.intro}</p>`;
            }
            family.fees.forEach(feeGroup => {
                tablesHtml += `<h5>${feeGroup.title}</h5>`;
                tablesHtml += `<table class="rules-table">
                                   <thead><tr><th>Condition</th><th>Charge</th></tr></thead>
                                   <tbody>`;
                feeGroup.charges.forEach(charge => {
                    tablesHtml += `<tr><td>${charge.condition}</td><td>${charge.fee}</td></tr>`;
                });
                tablesHtml += `</tbody></table>`;
            });
        });
    }
    if (versionData.generalNotes && versionData.generalNotes.length > 0) {
        tablesHtml += `<hr style="margin: 20px 0;"><h5>Important Notes for this Schedule</h5><ul>`;
        versionData.generalNotes.forEach(note => tablesHtml += `<li>${note}</li>`);
        tablesHtml += `</ul>`;
    }
    return tablesHtml;
}


/**
 * Displays Croatia Airlines baggage information with a selector to switch between data versions.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayCroatiaInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Croatia Airlines placeholder not found for displaying info.");
        return;
    }

    const info = croatiaInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>View Croatia Airlines Baggage Details</h4>
                <p>For the most current and personalized details, please visit the official Croatia Airlines website.</p>
                <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT CROATIA AIRLINES BAGGAGE PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    html += `
        <div class="form-group">
            <label for="fee-version-selector">Select Fee Schedule to View:</label>
            <select id="fee-version-selector" class="form-control">
                <option value="0">${info.dataVersions[0].versionTitle}</option>
                <option value="1">${info.dataVersions[1].versionTitle}</option>
            </select>
        </div>
    `;

    html += `<div id="croatia-fee-tables"></div>`;
    
     if (info.contactDetails && info.contactDetails.departments) {
        html += `<hr style="margin: 25px 0; border-color: #FF7A00;"><h3>Contact Croatia Airlines</h3>`;
        info.contactDetails.departments.forEach(dept => {
            html += `<h4>${dept.name}</h4><ul>`;
            dept.contacts.forEach(contact => {
                html += `<li><strong>${contact.method}:</strong> ${contact.value}</li>`;
            });
            if (dept.hours) {
                html += `<li><strong>Hours:</strong> ${dept.hours}</li>`;
            }
            html += `</ul>`;
        });
    }

    placeholderElement.innerHTML = html;

    const selector = placeholderElement.querySelector('#fee-version-selector');
    const tablesContainer = placeholderElement.querySelector('#croatia-fee-tables');

    function updateTables() {
        const selectedIndex = selector.value;
        tablesContainer.innerHTML = renderFeeTables(info.dataVersions[selectedIndex]);
    }

    selector.addEventListener('change', updateTables);

    updateTables();
}