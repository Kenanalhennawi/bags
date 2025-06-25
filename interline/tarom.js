
export const taromInfo = {
    mainBaggagePageUrl: "https://www.tarom.ro/en/passenger-information/baggage/hand-baggage/",
    extraBaggageUrl: "https://www.tarom.ro/en/passenger-information/baggage/extra-baggage/",
    contactPageUrl: "https://www.tarom.ro/en/contacten/",
    skyteamHandLuggageCalc: "https://www.skyteam.com/en/hand-luggage-policy",
    
    summary: {
        title: "Tarom Baggage Summary",
        items: [
            "<strong>Checked Baggage:</strong> Piece-based system. Typically 1 piece at 23kg for Economy and 2 pieces at 32kg for Business.",
            "<strong>LIGHT Fare:</strong> Please note the 'LIGHT' fare type does not include any free checked baggage.",
            "<strong>Carry-On:</strong> 1 piece + 1 personal item, with a combined total weight of 8kg. Dimensions vary by aircraft type (55x40x20cm for Boeing/Airbus, 35x30x20cm for ATR).",
            "<strong>Loyalty Members:</strong> SkyTeam Elite / Elite Plus members get one additional checked bag.",
            "<strong>Pre-Purchase Extra Baggage:</strong> Discounts are available for purchasing extra baggage online up to 48 hours before departure."
        ]
    },

    handLuggage: {
        title: "Hand Baggage (Carry-On) Allowance",
        note: "You are entitled to carry one hand baggage plus one personal item (e.g., purse, briefcase). The total combined weight must not exceed 8kg.",
        allowances: [
            { aircraft: "Boeing and Airbus aircraft", dimensions: "55 x 40 x 20 cm" },
            { aircraft: "ATR 72 / 42 aircraft", dimensions: "35 x 30 x 20 cm" }
        ],
        skyteamNote: {
            text: "Rules may vary among SkyTeam members. You can use the official calculator for multi-airline journeys.",
            linkText: "SkyTeam Hand Luggage Calculator",
            url: "https://www.skyteam.com/en/hand-luggage-policy"
        }
    },

    checkedBaggage: {
        title: "Checked Baggage Allowance",
        note: "The standard baggage allowance is piece-based. A standard piece weighs up to 23kg and measures up to 158cm (height + width + length).",
        allowances: {
            title: "Standard Free Allowance",
            headers: ["Passenger Type", "Business Class", "Economy Class"],
            rows: [
                { type: "Standard Passenger", business: "2 pieces, up to 32kg each", economy: "1 piece, up to 23kg" },
                { type: "Frequent Flyer (SkyTeam Elite / Elite Plus)", business: "+1 additional piece (32kg)", economy: "+1 additional piece (23kg)" },
                { type: "Sailors (with dedicated fares)", business: "2 pieces, up to 32kg each", economy: "2 pieces, up to 23kg each" }
            ],
            lightFareNote: "The **LIGHT** fare does not include any free checked baggage allowance."
        },
        middleEastRules: {
            title: "Special Allowance (from July 1, 2024) for routes between Amman/Beirut/Cairo and Europe",
            headers: ["Class / Fare", "Allowance"],
            rows: [
                { class: "Business Class (excluding SEMIFLEX)", allowance: "2 pieces, up to 32kg each" },
                { class: "Business Class (SEMIFLEX fare)", allowance: "1 piece, up to 32kg" },
                { class: "Economy Class (excluding SAVER/LIGHT)", allowance: "2 pieces, up to 23kg each" },
                { class: "Economy Class (SAVER fare)", allowance: "1 piece, up to 23kg" },
                { class: "Economy Class (LIGHT fare)", allowance: "0 pieces" }
            ]
        },
        infantAllowance: {
            title: "Infant Baggage Allowance (not occupying a seat)",
            note: "The infant allowance cannot be combined with the adult's allowance.",
            allowance: "1 piece up to 10kg (max 115cm) + 1 fully collapsible stroller."
        },
        aircraftLimits: {
            title: "Aircraft Piece Limits",
            note: "The total number of bags a single passenger can check is limited by aircraft type. Prior arrangement is needed to exceed these limits.",
            limits: [
                "<strong>ATR 72:</strong> max 3 pieces / passenger",
                "<strong>B737:</strong> max 10 pieces / passenger"
            ]
        }
    },
    
    excessBaggage: {
        title: "Excess Baggage Fees",
        note: "Fees are cumulative. A single bag can be charged for being extra, overweight, and oversized simultaneously. The following fees apply per flight segment.",
        zones: {
            title: "Zone Definitions",
            items: [
                "<strong>Zone 1:</strong> Domestic routes within Romania.",
                "<strong>Zone 2:</strong> Flights in Europe and between Romania and the Middle East.",
                "<strong>Zone 3:</strong> Worldwide flights (excluding Zones 1 & 2)."
            ]
        },
        fees: {
            headers: ["'CHECKED' BAGGAGE DESCRIPTION", "Zone 1", "Zone 2", "Zone 3"],
            rows: [
                { desc: "<strong>EXCESS IN NUMBER:</strong> 1st extra piece in Economy (LIGHT/SAVER fares) - Pre-paid >48h", z1: "€40", z2: "€55", z3: "€105" },
                { desc: "<strong>EXCESS IN NUMBER:</strong> 1st extra piece in Economy (LIGHT/SAVER fares) - Standard fee", z1: "€60", z2: "€75", z3: "€145" },
                { desc: "<strong>EXCESS IN NUMBER:</strong> Each subsequent extra piece (2nd, 3rd, etc.)", z1: "€85", z2: "€95", z3: "€160" },
                { desc: "<strong>PLUS OVERWEIGHT:</strong> Piece is 24kg - 32kg", z1: "€50", z2: "€100", z3: "€200" },
                { desc: "<strong>PLUS OVERSIZED:</strong> Piece is >158cm - 203cm", z1: "€50", z2: "€100", z3: "€200" },
                { desc: "Heavy over 32kg or Oversized over 203cm", z1: "Cargo only", z2: "Cargo only", z3: "Cargo only" }
            ]
        },
        combiningNote: "The weight of checked bags cannot be added together; each is assessed individually. However, passengers in the same booking travelling together can combine their free baggage allowance."
    },

    multiAirlinePolicy: {
        title: "Flying on Multiple Airlines / Codeshare",
        note: "The rules above apply only to flights operated by TAROM. On codeshare or multi-carrier journeys, the rules of the first operating carrier on the ticket will apply for the checked baggage sector. Be aware that other airlines on your itinerary may charge you separately according to their own policies."
    },
    
    prohibitedItems: {
        title: "Prohibited Items in Checked Baggage",
        note: "Passengers are not permitted to carry the following articles in their hold baggage:",
        items: ["Explosives", "Incendiary substances and devices", "Ammunition", "Blasting caps and detonators", "Replica or imitation explosive devices", "Smoke generating cartridges and canisters", "Gunpowder and plastic explosives"]
    },

    contactDetails: {
        title: "Contact Tarom",
        note: "The Call Center is available from 08:00 - 22:00, Monday - Sunday.",
        main: [
            { type: "Phone", detail: "(004) 021 9978" },
            { type: "Phone (TelVerde - Romania only)", detail: "0800 500 131" },
            { type: "Phone (Alternative)", detail: "(004) 0371 529 000" },
            { type: "Email", detail: "contact@tarom.ro / rezervari@tarom.ro" }
        ]
    }
};

export function displayTaromInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("tarom.js placeholder not found.");
        return;
    }

    const info = taromInfo;
    let html = `
        <style>
            .ro-table { width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em; }
            .ro-table th, .ro-table td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top; }
            .ro-table th { background-color: rgba(0,0,0,0.05); }
            .ro-list { list-style-type: disc; padding-left: 20px; margin-top: 5px; }
            .ro-list li { margin-bottom: 8px; }
            .ro-section { margin-top: 20px; padding: 10px; border: 1px solid #f0f0f0; border-radius: 8px; }
            .ro-sub-section { margin-top: 15px; }
        </style>
    `;

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Purchase or Check Extra Baggage</h4>
                <p>Use the official Tarom website to pre-purchase baggage at a discount or to check specific fees for your flight.</p>
                <a href="${info.extraBaggageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT BAGGAGE FEES PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
        <div class="summary-card"><h4>${info.summary.title}</h4><ul class="ro-list">`;
    info.summary.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;

    html += `<div class="ro-section"><h3>${info.handLuggage.title}</h3><p>${info.handLuggage.note}</p><table class="ro-table">`;
    html += `<thead><tr><th>Aircraft Type</th><th>Max Dimensions</th></tr></thead><tbody>`;
    info.handLuggage.allowances.forEach(a => html += `<tr><td>${a.aircraft}</td><td>${a.dimensions}</td></tr>`);
    html += `</tbody></table><p>${info.handLuggage.skyteamNote.text} <a href="${info.handLuggage.skyteamNote.url}" target="_blank" rel="noopener noreferrer">${info.handLuggage.skyteamNote.linkText}</a></p></div>`;

    html += `<div class="ro-section"><h3>${info.checkedBaggage.title}</h3><p>${info.checkedBaggage.note}</p>`;
    const ba = info.checkedBaggage.allowances;
    html += `<div class="ro-sub-section"><h4>${ba.title}</h4><table class="ro-table"><thead><tr>`;
    ba.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    ba.rows.forEach(r => html += `<tr><td><strong>${r.type}</strong></td><td>${r.business}</td><td>${r.economy}</td></tr>`);
    html += `</tbody></table><p><em>${ba.lightFareNote}</em></p></div>`;
    const me = info.checkedBaggage.middleEastRules;
    html += `<div class="ro-sub-section"><h4>${me.title}</h4><table class="ro-table"><thead><tr>`;
    me.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    me.rows.forEach(r => html += `<tr><td><strong>${r.class}</strong></td><td>${r.allowance}</td></tr>`);
    html += `</tbody></table></div>`;
    html += `<div class="ro-sub-section"><h4>${info.checkedBaggage.infantAllowance.title}</h4><p>${info.checkedBaggage.infantAllowance.note}<br/><strong>Allowance:</strong> ${info.checkedBaggage.infantAllowance.allowance}</p></div>`;
    html += `<div class="ro-sub-section"><h4>${info.checkedBaggage.aircraftLimits.title}</h4><p>${info.checkedBaggage.aircraftLimits.note}</p><ul class="ro-list">`;
    info.checkedBaggage.aircraftLimits.limits.forEach(l => html += `<li>${l}</li>`);
    html += `</ul></div></div>`;

    html += `<div class="ro-section"><h3>${info.excessBaggage.title}</h3><p>${info.excessBaggage.note}</p>`;
    html += `<div class="ro-sub-section"><h5>${info.excessBaggage.zones.title}</h5><ul class="ro-list">`;
    info.excessBaggage.zones.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    const ef = info.excessBaggage.fees;
    html += `<div class="ro-sub-section"><table class="ro-table"><thead><tr>`;
    ef.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    ef.rows.forEach(row => html += `<tr><td>${row.desc}</td><td>${row.z1}</td><td>${row.z2}</td><td>${row.z3}</td></tr>`);
    html += `</tbody></table><p><em>${info.excessBaggage.combiningNote}</em></p></div></div>`;
    
    html += `<div class="ro-section"><h3>Other Policies</h3>`;
    html += `<div class="ro-sub-section"><h4>${info.multiAirlinePolicy.title}</h4><p>${info.multiAirlinePolicy.note}</p></div>`;
    html += `<div class="ro-sub-section"><h4>${info.prohibitedItems.title}</h4><p>${info.prohibitedItems.note}</p><ul class="ro-list">`;
    info.prohibitedItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></div>`;
    
    html += `<hr style="margin: 20px 0;"><h3>${info.contactDetails.title}</h3>`;
    html += `<p>${info.contactDetails.note}</p>`;
    html += `<ul class="ro-list">`;
    info.contactDetails.main.forEach(contact => {
        html += `<li><strong>${contact.type}:</strong> ${contact.detail}</li>`;
    });
    html += `</ul>`;
    html += `
        <div style="text-align:center; margin: 20px 0;">
            <a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="background-color: #555; max-width: 300px; display: inline-block;">Visit Full Contact Page</a>
        </div>
    `;

    placeholderElement.innerHTML = html;
}