
const lotpolishInfo = {
    baggageInfoUrl: "https://www.lot.com/ae/en/journey/baggage",
    contactPageUrl: "https://www.lot.com/ae/en/help-center/contact",

    baggageSections: [
        {
            title: "Baggage on Short- and Medium-Haul Flights",
            description: "Applies to flights within Poland, Europe, the Middle East, and Central Asia.",
            carryOn: {
                title: "Carry-on Baggage",
                headers: ["Travel Class", "Allowance"],
                rows: [
                    { class: "LOT Business Class", allowance: "2 x 9 kg" },
                    { class: "LOT Premium Economy", allowance: "2 x 9 kg (Mid-haul only)" },
                    { class: "LOT Economy Class", allowance: "1 x 8 kg" }
                ],
                note: "Dimensions not to exceed 55x40x23 cm. One personal item (handbag, laptop bag) is also permitted."
            },
            checked: {
                title: "Checked Baggage",
                headers: ["Travel Class", "Saver Fare", "Standard/Flex Fare"],
                rows: [
                    { class: "LOT Business Class", saver: "Not Applicable", standardFlex: "2 x 32 kg" },
                    { class: "LOT Premium Economy", saver: "Not Applicable", standardFlex: "2 x 23 kg (Mid-haul only)" },
                    { class: "LOT Economy Class", saver: "0 bags", standardFlex: "1 x 23 kg" }
                ],
                note: "Dimensions not to exceed 158 cm (L+W+H)."
            }
        },
        {
            title: "Baggage on Long-Haul Flights",
            description: "Applies to flights to/from China, India, Japan, Canada, South Korea, and the USA.",
            carryOn: {
                title: "Carry-on Baggage",
                headers: ["Travel Class", "Allowance"],
                rows: [
                    { class: "LOT Business Class", allowance: "2 x 9 kg (1 x 12 kg to/from USA)" },
                    { class: "LOT Premium Economy", allowance: "2 bags, up to 12 kg total (1 x 10 kg to/from USA)" },
                    { class: "LOT Economy Class", allowance: "1 x 8 kg" }
                ],
                note: "Dimensions not to exceed 55x40x23 cm. One personal item is also permitted.",
                liquidRules: {
                    title: "Transport of Liquids (on flights starting in Europe)",
                    notes: [
                        "Liquids are allowed in containers of 100ml or less, packed in a single transparent, re-sealable 1-litre plastic bag.",
                        "Medicines and special dietary products (e.g., baby food) are permitted.",
                        "Duty-free liquids are allowed if packed in a sealed security bag with proof of purchase visible."
                    ]
                }
            },
            checked: {
                title: "Checked Baggage",
                note: "Dimensions of one baggage item must not exceed 158 cm (height + width + depth).",
                headers: ["Route", "Business", "Premium", "Econ Full-Flex", "Econ Flex", "Econ Standard", "Econ Saver"],
                rows: [
                    { route: "From Europe, ME to Canada & USA", biz: "3x32kg", prem: "2x23kg", full: "1x23kg", flex: "1x23kg", std: "1x23kg", svr: "0" },
                    { route: "From Europe, ME to Japan & China", biz: "3x32kg", prem: "2x23kg", full: "2x23kg", flex: "2x23kg", std: "1x23kg", svr: "0" },
                    { route: "From Canada & USA", biz: "3x32kg", prem: "2x23kg", full: "1x23kg", flex: "1x23kg", std: "1x23kg", svr: "0" },
                    { route: "From Europe, ME to India, KZ, UZ & SK", biz: "3x32kg", prem: "2x23kg", full: "1x23kg", flex: "1x23kg", std: "1x23kg", svr: "0" },
                    { route: "From India", biz: "3x32kg", prem: "2x23kg", full: "1x23kg", flex: "1x23kg", std: "1x23kg", svr: "0" },
                    { route: "From India to Canada & USA", biz: "3x32kg", prem: "2x23kg", full: "2x23kg", flex: "2x23kg", std: "2x23kg", svr: "0" },
                    { route: "From Canada & USA to India", biz: "3x32kg", prem: "2x23kg", full: "2x23kg", flex: "2x23kg", std: "2x23kg", svr: "0" },
                    { route: "From South Korea", biz: "3x32kg", prem: "2x23kg", full: "1x23kg", flex: "1x23kg", std: "1x23kg", svr: "0" },
                    { route: "From Kazakhstan & Uzbekistan", biz: "3x32kg", prem: "2x23kg", full: "1x23kg", flex: "1x23kg", std: "1x23kg", svr: "0" },
                    { route: "From Japan & China", biz: "3x32kg", prem: "2x23kg", full: "2x23kg", flex: "2x23kg", std: "2x23kg", svr: "0" }
                ]
            }
        }
    ],

    estimatedExcessBaggage: {
        title: "Estimated Excess Baggage Fees (Unofficial)",
        disclaimer: "<strong>IMPORTANT:</strong> The prices below are estimates compiled from third-party travel sites and are for guidance only. LOT Polish Airlines uses dynamic pricing. For the exact fee for your flight, you must use the 'Manage my booking' feature on the official LOT website.",
        fees: [
            { type: "1st Bag on Saver Fare / 2nd Bag", dom: "~€25", intl: "~€60", intercont: "~€70" },
            { type: "Overweight Bag (23-32 kg)", dom: "~€45", intl: "~€75", intercont: "~€115" },
            { type: "Oversized Bag (>158 cm)", dom: "~€45", intl: "~€75", intercont: "~€115" },
            { type: "Overweight & Oversized Bag", dom: "~€85", intl: "~€145", intercont: "~€220" }
        ],
        headers: ["Charge Type", "Domestic", "International (Europe/ME)", "Intercontinental"]
    },

    extraServices: {
        title: "Additional Services ('Tailor-Made Services')",
        services: [
            { name: "My Extra Baggage", description: "Allows pre-payment for excess or additional baggage." },
            { name: "My Favourite Seat", description: "Allows seat selection before check-in opens." },
            { name: "My Extra Equipment", description: "Allows purchase for carriage of sports equipment or musical instruments." },
            { name: "Other Services", description: "LOT also offers paid entry to Business Lounges, Fast Track, and various upgrade services." }
        ]
    },

    contactDetails: {
        title: "Contact LOT Polish Airlines",
        note: "The LOT Contact Center is available 24/7 in Polish and English.",
        phoneNumbers: [ "+48 22 577 77 55", "+48 22 491 77 55", "+48 22 459 62 24" ]
    }
};

function displayLotpolishInfo(placeholderElement) {
    if (!placeholderElement) { return; }

    const info = lotpolishInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>LOT Polish Airlines Baggage Information</h4>
                <p>To find the exact baggage allowance and fees for your journey, use the 'Manage my booking' feature on the LOT website.</p>
                <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW BAGGAGE DETAILS</a>
            </div>
        </div>`;
    
    info.baggageSections.forEach(section => {
        html += `<hr style="margin: 20px 0;"><h3>${section.title}</h3>`;
        if (section.description) { html += `<p>${section.description}</p>`; }
        
        html += `<h5>${section.carryOn.title}</h5>`;
        html += `<table class="rules-table"><thead><tr>${section.carryOn.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        section.carryOn.rows.forEach(row => { html += `<tr><td><strong>${row.class}</strong></td><td>${row.allowance}</td></tr>`; });
        html += `</tbody></table>`;
        if (section.carryOn.note) { html += `<p class="small-note">${section.carryOn.note}</p>`; }
        if (section.carryOn.liquidRules) {
            html += `<h6 style="margin-top:10px;">${section.carryOn.liquidRules.title}</h6><ul>`;
            section.carryOn.liquidRules.notes.forEach(note => html += `<li>${note}</li>`);
            html += `</ul>`;
        }
        
        html += `<h5 style="margin-top: 15px;">${section.checked.title}</h5>`;
        if (section.checked.note) { html += `<p class="small-note">${section.checked.note}</p>`; }
        html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${section.checked.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        section.checked.rows.forEach(row => {
            let rowHtml = `<tr><td><strong>${row.class || row.route}</strong></td>`;
            if (row.saver) { 
                 rowHtml += `<td>${row.saver}</td><td>${row.standardFlex}</td>`;
            } else { 
                 rowHtml += `<td>${row.biz}</td><td>${row.prem}</td><td>${row.full}</td><td>${row.flex}</td><td>${row.std}</td><td>${row.svr}</td>`;
            }
            rowHtml += `</tr>`;
            html += rowHtml;
        });
        html += `</tbody></table></div>`;
    });

    const eeb = info.estimatedExcessBaggage;
    if (eeb) {
        html += `<hr style="margin: 20px 0;"><h3>${eeb.title}</h3>`;
        html += `<p class="small-note" style="font-weight: bold; color: #ffdd57;">${eeb.disclaimer}</p>`;
        html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${eeb.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        eeb.fees.forEach(row => {
            html += `<tr><td><strong>${row.type}</strong></td><td>${row.dom}</td><td>${row.intl}</td><td>${row.intercont}</td></tr>`;
        });
        html += `</tbody></table></div>`;
    }

    const es = info.extraServices;
    html += `<hr style="margin: 20px 0;"><h3>${es.title}</h3>`;
    es.services.forEach(service => { html += `<h5>${service.name}</h5><p>${service.description}</p>`; });

    const cd = info.contactDetails;
    html += `<hr style="margin: 20px 0;"><h3>${cd.title}</h3>`;
    html += `<p>${cd.note}</p><ul>`;
    cd.phoneNumbers.forEach(num => html += `<li>${num}</li>`);
    html += `</ul>`;
    html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">VISIT CONTACT PAGE</a>`;

    placeholderElement.innerHTML = html;
}

export { lotpolishInfo, displayLotpolishInfo };