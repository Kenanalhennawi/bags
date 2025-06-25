
const precisionairInfo = {
    baggageInfoUrl: "https://www.precisionairtz.com/helpdesk/ExcessBaggagePolicy",
    contactPageUrl: "https://www.precisionairtz.com/contact",
    tagline: "You Are Why We Fly",

    carryOnBaggage: {
        title: "Hand Carry Baggage Allowance",
        allowance: [
            { travelClass: "Economy Class", allowance: "1 piece, 7 KG MAX", dimensions: "(38L x 22W x 55H) 115 cms" },
            { travelClass: "Executive Economy", allowance: "1 piece (7 KG) + 1 small Briefcase (5 KG) = 12 KG MAX", dimensions: "(38L x 22W x 55H) 115 cms" }
        ],
        personalItems: [
            "1 Overcoat", "1 Support walking stick", "1 Ladies handbag", "A reasonable amount of reading material", "1 Small Camera", "1 Small Laptop", "A fully collapsible invalid’s wheelchair and/or a pair of crutches if passenger is dependent on them."
        ]
    },

    checkedBaggage: {
        title: "Free Checked Baggage Allowance",
        allowances: [
            { route: "Domestic Travel within Tanzania", class: "Adult/Children (Economy)", allowance: "23Kg" },
            { route: "Regional/International Travel", class: "Adult/Children (Economy)", allowance: "23Kg" },
            { route: "All Routes", class: "Infants not occupying a seat", allowance: "10Kg + collapsible stroller" },
            { route: "All Routes", class: "Infants who have paid child fare (occupying a seat)", allowance: "23Kg" }
        ],
        note: "For sectors that policy does not cover, MSC (Most Significant Carrier) baggage rules apply."
    },

    excessBaggage: {
        title: "Excess & Overweight Baggage Charges",
        fees: [
            { condition: "Baggage > 23kg but < 32kg (Charge per Kilo)", domestic: "TZS 10,000", regional: "USD $6.00" },
            { condition: "Prior approval needed for bags > 32kg or > 158cm", domestic: "TZS 300,000", regional: "USD $200.00" }
        ]
    },

    sportsEquipment: {
        title: "Sports Equipment",
        intro: "Sporting equipment is generally treated as excess baggage. A flat fee applies for items up to 20kg. For any weight over 20kg, normal excess baggage per-kilo charges apply. For round trips, the charges will be doubled.",
        zoneTable: {
            headers: ["Zone", "Fee per item (up to 20kg)", "Countries/Regions Covered"],
            rows: [
                { zone: "Zone 1 (Domestic)", fee: "USD 50", regions: "Domestic Travel within Tanzania" },
                { zone: "Zone 2 (East Africa)", fee: "USD 75", regions: "Burundi, Kenya, Rwanda, Tanzania and Uganda" },
                { zone: "Zone 3 (Africa)", fee: "USD 150", regions: "DRC Congo, Comoros, Malawi, Mozambique, South Africa" },
                { zone: "Zone 4 (Rest of the world)", fee: "USD 200", regions: "All other destinations not listed" }
            ]
        },
        types: [
            { name: "Bikes", detail: "Must be packed in a suitable carton bicycle box. Bikes in other packaging must be tagged with a limited release tag." },
            { name: "Diving Equipment", detail: "Includes wetsuit, vest, mask, shoes, etc. Oxygen cylinders must be empty. The standard sports equipment charges apply for one set up to 20kg." },
            { name: "Fishing Equipment", detail: "Normal weight allowance applies. If in excess, normal per-kilo charges apply. One set includes up to two rods, one reel, net, boots, and tackle box." },
            { name: "Golf Equipment", detail: "The standard sports equipment charges apply for one golf bag up to 20kg." },
            { name: "Ski/Snowboard Equipment", detail: "The standard sports equipment charges apply for one set up to 20kg. A set includes skis/board, poles, and boots." },
            { name: "Surfboards", detail: "Maximum length 290cm. Fins should be removed or packed securely. The standard sports equipment charges apply for one surfboard up to 20kg." },
            { name: "Pole Vaults, Kayaks, Canoes", detail: "These items are not accepted as baggage and must be shipped as cargo." }
        ]
    },
    
    otherRules: {
        title: "Other Baggage Policies",
        items: [
            { name: "Prohibited Items", detail: "Includes explosives, flammable gases/liquids, poisons, corrosive materials, and lighters. Knives and scissors are only allowed in checked baggage." },
            { name: "Human Remains / Ashes", detail: "Human remains in a coffin must be sent as cargo. Ashes of a deceased person may be carried in the cabin in a sealed urn, provided it fits in the overhead bin or under the seat."}
        ]
    },

    contactDetails: {
        title: "Contact Information",
        hq: { name: "Headquarters (Dar es Salaam)", phone: "+255 (0) 22 2191000", email: "contactcentre@precisionairtz.com" },
        contactCentre: { name: "Contact Centre", phones: ["+255746 984100 (Vodacom)", "+255784108800 (Airtel)", "+255 222168000 (TTCL)"] },
        nairobi: { name: "Nairobi, Kenya Office", phones: ["+254 (0) 736 046595", "+254 (0) 735 565144", "+254 (0) 724 760736"] }
    }
};

function displayPrecisionairInfo(placeholderElement) {
    if (!placeholderElement) { return; }

    const info = precisionairInfo;
    let html = "";

   
html += `
    <div class="calculator-cta-section">
        <span class="calculator-cta-icon">✈️</span>
        <div class="calculator-cta-content">
            <h4>Precision Air (${info.tagline})</h4>
            <p>Find helpful information about baggage allowances, excess fees, and policies for special items on the official website.</p>
            <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW BAGGAGE POLICY</a>
        </div>
    </div>
`;

    const co = info.carryOnBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${co.title}</h3>`;
    html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance & Dimensions</th></tr></thead><tbody>`;
    co.allowance.forEach(row => {
        html += `<tr><td><strong>${row.travelClass}</strong></td><td>${row.allowance}<br><small>${row.dimensions}</small></td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<h5 style="margin-top:15px;">Permitted Personal Items:</h5><ul>`;
    co.personalItems.forEach(item => html += `<li>${item}</li>`);
    html += `</ul>`;

    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3>`;
    html += `<table class="rules-table"><thead><tr><th>Route</th><th>Passenger Type</th><th>Allowance</th></tr></thead><tbody>`;
    cb.allowances.forEach(row => {
        html += `<tr><td><strong>${row.route}</strong></td><td>${row.class}</td><td>${row.allowance}</td></tr>`;
    });
    html += `</tbody></table><p class="small-note">${cb.note}</p>`;
    
    const eb = info.excessBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${eb.title}</h3>`;
    html += `<table class="rules-table"><thead><tr><th>Condition</th><th>Domestic Fee</th><th>Regional Fee</th></tr></thead><tbody>`;
    eb.fees.forEach(row => {
        html += `<tr><td><strong>${row.condition}</strong></td><td>${row.domestic}</td><td>${row.regional}</td></tr>`;
    });
    html += `</tbody></table>`;
    
    const si = info.sportsEquipment;
    html += `<hr style="margin: 20px 0;"><h3>${si.title}</h3><p class="small-note">${si.intro}</p>`;
    html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${si.zoneTable.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    si.zoneTable.rows.forEach(row => {
        html += `<tr><td><strong>${row.zone}</strong></td><td>${row.fee}</td><td>${row.regions}</td></tr>`;
    });
    html += `</tbody></table></div>`;
    html += `<h5 style="margin-top:15px;">Specific Equipment Rules</h5>`;
    si.types.forEach(type => html += `<p class="small-note"><strong>${type.name}:</strong> ${type.detail}</p>`);

    const or = info.otherRules;
    html += `<hr style="margin: 20px 0;"><h3>${or.title}</h3>`;
    or.items.forEach(item => html += `<h5>${item.name}</h5><p>${item.detail}</p>`);

    const cd = info.contactDetails;
    html += `<hr style="margin: 20px 0;"><h3>${cd.title}</h3>`;
    html += `<h5>${cd.contactCentre.name}</h5><ul>`;
    cd.contactCentre.phones.forEach(phone => html += `<li>${phone}</li>`);
    html += `<li>Email: ${cd.hq.email}</li></ul>`;
    html += `<h5>${cd.nairobi.name}</h5><ul>`;
    cd.nairobi.phones.forEach(phone => html += `<li>${phone}</li>`);
    html += `</ul>`;
    html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">VISIT CONTACT PAGE</a>`;

    placeholderElement.innerHTML = html;
}

export { precisionairInfo, displayPrecisionairInfo };