
const philippineInfo = {
    tagline: "The Heart of the Filipino",
    baggageInfoUrl: "https://www.philippineairlines.com/ae/en/before-you-fly/baggage-information",
    contactPageUrl: "https://pal.my.site.com/s/article/PAL-s-Global-Reservation-and-Customer-Support",
    multiCityRulesUrl: "https://www.philippineairlines.com/ae/en/before-you-fly/baggage-information/baggage-allowance/baggage-allowance-fees/baggage-rules-for-multi-city-travel",

    carryOnBaggage: {
        title: "Carry-On Baggage",
        mainBag: { name: "Cabin Bag", allowance: "1 piece", dimensions: "56cm x 36cm x 23cm", weight: "7 kg (15 lbs)" },
        personalItem: { name: "Personal Item", allowance: "1 item", description: "e.g., small handbag, laptop with case, camera." }
    },
    
    checkedBaggage: {
        title: "Free Checked Baggage Allowance (FBA)",
        generalNotes: [
            "A single piece of checked baggage should weigh no more than 32kg (70lbs). Any baggage exceeding this limit must be repacked.",
            "Passengers are advised not to put money, jewelry, electronics, or important documents in their checked baggage.",
            "Each flight ticket has its own FBA policy, which may not apply to connecting flights."
        ],
        domestic: {
            title: "Domestic Flights (within the Philippines)",
            headers: ["Fare Type", "Allowance"],
            rows: [
                { fare: "Economy Supersaver", allowance: "No Bags" },
                { fare: "Economy Saver", allowance: "10KG" },
                { fare: "Economy Value", allowance: "20KG" },
                { fare: "Economy Flex", allowance: "20KG" },
                { fare: "Comfort Class", allowance: "25KG" },
            ],
            businessHeaders: ["Fare Type", "Allowance"],
            businessRows: [
                { fare: "Business Value", allowance: "30KG" },
                { fare: "Business Flex", allowance: "35KG" }
            ],
            note: "* Maximum free baggage allowance for Basco (BSO) is 10KG for all Economy fares."
        },
        international: {
            title: "International Flights (Codeshare Examples)",
            note: "Allowances for flights involving partner airlines vary. Below are examples.",
            economyHeaders: ["Route (Partner)", "Econ Supersaver", "Econ Saver", "Econ Value", "Econ Flex", "Premium Econ"],
            economyRows: [
                { route: "Bahrain (GF)", super: "2PC AT 23KG/PIECE", saver: "N/A", value: "N/A", flex: "N/A", premium: "N/A"},
                { route: "Tokyo (NH)", super: "2PC AT 23KG (50LBS)/PIECE", saver: "N/A", value: "N/A", flex: "N/A", premium: "N/A"},
                { route: "Istanbul (TK)", super: "30KG", saver: "N/A", value: "N/A", flex: "N/A", premium: "N/A"},
                { route: "Taipei (CI)", super: "No Bag", saver: "23 KG", value: "30 KG", flex: "35 KG", premium: "N/A"},
                { route: "Cebu-Hongkong (CX)", super: "No Bag", saver: "23 KG", value: "30 KG", flex: "35 KG", premium: "40 KG"}
            ],
            businessHeaders: ["Route (Partner)", "Allowance"],
            businessRows: [
                { route: "Bahrain (GF)", allowance: "2 pieces at 32kg/piece"},
                { route: "Tokyo (NH)", allowance: "2 pieces at 32kg/piece"},
                { route: "Istanbul (TK)", allowance: "40kg"},
                { route: "Kuala Lumpur (MH)", allowance: "50kg"}
            ]
        }
    },

    excessBaggage: {
        title: "Excess Baggage Charges (EBC) for International Flights",
        note: "Fees below apply per extra piece on piece-concept routes. Overweight (24-32kg) or Oversized (>62in) bags on these routes incur a charge equivalent to one extra piece.",
        tableNote: "Note: This chart lists rates originating from the Philippines and Zones 1-4. For other origins, fees are determined by the system.",
        headers: ["From / To", "Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5", "Zone 6"],
        rows: [
            { from: "Philippines", z1: "USD 240", z2: "USD 170", z3: "USD 125", z4: "USD 120", z5: "USD 75", z6: "USD 40" },
            { from: "Zone 1 (US/Canada)", z1: "-", z2: "USD 240", z3: "USD 240", z4: "USD 240", z5: "USD 240", z6: "USD 240" },
            { from: "Zone 2 (Europe)", z1: "USD 240", z2: "-", z3: "USD 170", z4: "USD 170", z5: "USD 170", z6: "USD 170" },
            { from: "Zone 3 (Middle East)", z1: "USD 240", z2: "USD 170", z3: "-", z4: "USD 125", z5: "USD 125", z6: "USD 125" },
            { from: "Zone 4 (Australia/NZ/etc.)", z1: "USD 240", z2: "USD 170", z3: "USD 125", z4: "-", z5: "USD 75", z6: "USD 75" }
        ],
        zoneDefinitions: {
            title: "International Zone Definitions",
            zones: [
                { name: "Zone 1", regions: "USA, Canada" },
                { name: "Zone 2", regions: "Europe, Israel" },
                { name: "Zone 3", regions: "Middle East" },
                { name: "Zone 4", regions: "Australia, New Zealand, Papua New Guinea" },
                { name: "Zone 5", regions: "Japan, South Korea, Guam" },
                { name: "Zone 6", regions: "China, Taiwan, Hong Kong, Macau, Southeast Asia" }
            ]
        }
    },
    
    infantBaggage: {
        title: "Infant's Baggage",
        note: "An infant may also be allowed one fully collapsible stroller OR infant's carrying basket OR infant's car seat, subject to availability of space."
    },
    
    transferBaggage: {
        title: "Transfer Baggage (Connecting Flights)",
        notes: [
            "For connecting flights involving different terminals in Manila, you may need to claim your baggage and clear Customs upon arrival.",
            "Passengers with connecting flights to the US, UK, Canada, Australia, or New Zealand are required to claim baggage and undergo additional security checks in Manila."
        ]
    },

    multiCityRules: {
        title: "Baggage Rules For Multi-City Travel",
        intro: "For itineraries on a single ticket involving multiple airlines, your baggage allowance is generally determined by the Most Significant Carrier (MSC), based on IATA Resolution 302.",
        steps: [
            "<strong>Step 1:</strong> The first carrier that crosses from one IATA area to another is the MSC.",
            "<strong>Step 2:</strong> If travel is within one IATA area, the first carrier that crosses between sub-areas is the MSC.",
            "<strong>Step 3:</strong> If travel is within one IATA sub-area, the first carrier operating an international sector is the MSC."
        ],
        exception: "<strong>Exception for USA/Canada:</strong> If your journey originates or terminates in the USA or Canada, the first marketing carrier on your ticket determines the baggage rules for the entire journey."
    },
    
    travelerInfo: {
        title: "Important Traveler Information",
        notes: [
            "Arrive at the airport a minimum of 4 hours before international flights and 2 hours before domestic flights.",
            "Check-in counters close 1 hour before departure.",
            "Boarding gates close 30 minutes before departure."
        ]
    },

    prohibitedItems: {
        title: "Baggage Rules and Restrictions",
        note: "For the safety of passengers and aircraft, certain items are prohibited from being carried in either checked or hand baggage. This includes, but is not limited to:",
        items: ["Explosives, munitions, fireworks, and flares.", "Compressed gases (flammable or poisonous).", "Flammable liquids and solids.", "Poisons and corrosive materials."]
    },

    contactDetails: {
        title: "PAL Global Reservation and Customer Support",
        phones: [
            { name: "Manila Landline", number: "(+632) 8539-0000 / (+632) 8855-8888" },
            { name: "Philippines Mobile", number: "(+63) 919-056-2255" },
            { name: "US and Canada (Toll Free)", number: "1-800-435-9725" }
        ],
        email: { name: "PAL Customer Support", address: "palcustomersupport@philippineairlines.com" },
        chat: { name: "24/7 Chat Options", channels: "Messenger, WhatsApp, Web Chat, and Viber." }
    }
};

function displayPhilippineInfo(placeholderElement) {
    if (!placeholderElement) { return; }

    const info = philippineInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>${info.tagline}</h4>
                <p>Baggage rules depend on your route and fare type. For the most accurate allowance, please check your booking.</p>
                <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">BAGGAGE INFORMATION</a>
            </div>
        </div>
    `;

    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3>`;
    cb.generalNotes.forEach(note => html += `<p class="small-note">${note}</p>`);
    
    const cbd = cb.domestic;
    html += `<h4>${cbd.title}</h4>`;
    html += `<table class="rules-table"><thead><tr>${cbd.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    cbd.rows.forEach(row => html += `<tr><td><strong>${row.fare}</strong></td><td>${row.allowance}</td></tr>`);
    html += `</tbody></table>`;
    html += `<h5 style="margin-top:10px;">Business Class - Domestic</h5>`;
    html += `<table class="rules-table"><thead><tr>${cbd.businessHeaders.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    cbd.businessRows.forEach(row => html += `<tr><td><strong>${row.fare}</strong></td><td>${row.allowance}</td></tr>`);
    html += `</tbody></table><p class="small-note">*${cbd.note}</p>`;
    
    const cbi = cb.international;
    html += `<h4 style="margin-top: 20px;">${cbi.title}</h4><p class="small-note">${cbi.note}</p>`;
    html += `<h5>Economy Class</h5>`;
    html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${cbi.economyHeaders.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    cbi.economyRows.forEach(row => {
        html += `<tr><td><strong>${row.route}</strong></td><td>${row.super}</td><td>${row.saver}</td><td>${row.value}</td><td>${row.flex}</td><td>${row.premium}</td></tr>`;
    });
    html += `</tbody></table></div>`;
    html += `<h5 style="margin-top:15px;">Business Class</h5>`;
    html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${cbi.businessHeaders.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    cbi.businessRows.forEach(row => {
        html += `<tr><td><strong>${row.route}</strong></td><td>${row.allowance}</td></tr>`;
    });
    html += `</tbody></table></div>`;
    
    const co = info.carryOnBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${co.title}</h3>`;
    html += `<ul><li><strong>${co.mainBag.name}:</strong> ${co.mainBag.allowance}, up to ${co.mainBag.weight}, with max dimensions of ${co.mainBag.dimensions}.</li>`;
    html += `<li><strong>${co.personalItem.name}:</strong> ${co.personalItem.allowance} (e.g., ${co.personalItem.description}).</li></ul>`;

    const eb = info.excessBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${eb.title}</h3><p class="small-note">${eb.note}</p>`;
    html += `<p class="small-note" style="font-style: italic;">${eb.tableNote}</p>`;
    html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${eb.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    eb.rows.forEach(row => html += `<tr><td><strong>${row.from}</strong></td><td>${row.z1}</td><td>${row.z2}</td><td>${row.z3}</td><td>${row.z4}</td><td>${row.z5}</td><td>${row.z6}</td></tr>`);
    html += `</tbody></table></div>`;
    
    const zd = eb.zoneDefinitions;
    html += `<h5 style="margin-top:15px;">${zd.title}</h5>`;
    zd.zones.forEach(zone => html += `<p class="small-note"><strong>${zone.name}:</strong> ${zone.regions}</p>`);

    html += `<hr style="margin: 20px 0;"><h3>${info.infantBaggage.title}</h3><p>${info.infantBaggage.note}</p>`;
    html += `<hr style="margin: 20px 0;"><h3>${info.transferBaggage.title}</h3>`;
    info.transferBaggage.notes.forEach(note => html += `<p>${note}</p>`);
    const mcr = info.multiCityRules;
    html += `<hr style="margin: 20px 0;"><h3>${mcr.title}</h3><p>${mcr.intro}</p><ul>`;
    mcr.steps.forEach(step => html += `<li>${step}</li>`);
    html += `</ul><p><strong>${mcr.exception}</strong></p>`;
    
    const ti = info.travelerInfo;
    if (ti) {
        html += `<hr style="margin: 20px 0;"><h3>${ti.title}</h3><ul>`;
        ti.notes.forEach(note => html += `<li>${note}</li>`);
        html += `</ul>`;
    }

    const pi = info.prohibitedItems;
    if (pi) {
        html += `<hr style="margin: 20px 0;"><h3>${pi.title}</h3><p class="small-note">${pi.note}</p><ul>`;
        pi.items.forEach(item => html += `<li>${item}</li>`);
        html += `</ul>`;
    }

    const cd = info.contactDetails;
    html += `<hr style="margin: 20px 0;"><h3>${cd.title}</h3>`;
    html += `<h5>${cd.chat.name}</h5><p>${cd.chat.channels}</p>`;
    html += `<h5>Phone Numbers</h5><ul>`;
    cd.phones.forEach(phone => html += `<li><strong>${phone.name}:</strong> ${phone.number}</li>`);
    html += `</ul>`;
    html += `<h5>${cd.email.name}</h5><p>${cd.email.address}</p>`;
    html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">VISIT CUSTOMER SUPPORT PAGE</a>`;

    placeholderElement.innerHTML = html;
}

export { philippineInfo, displayPhilippineInfo };