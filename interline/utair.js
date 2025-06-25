
export const utairInfo = {
    mainBaggagePageUrl: "https://www.utair.ru/en/information/passenger-guide/baggage/",
    contactPageUrl: "https://www.utair.ru/en/contacts/",
    
    summary: {
        title: "UTair Baggage Summary",
        items: [
            "<strong>Fare Dependent:</strong> Baggage allowance is strictly determined by the fare purchased (Minimum, Optimum, Premium, Eurobusiness).",
            "<strong>'Minimum' Fare:</strong> This fare includes **NO** checked baggage and only one very small hand baggage (40x30x20 cm, 5kg).",
            "<strong>'Optimum' / 'Premium' Fares:</strong> Include one larger hand baggage piece and one checked bag up to 20kg.",
            "<strong>'Eurobusiness' Fare:</strong> Includes two carry-on pieces (15kg total) and one checked bag up to 30kg.",
            "<strong>Utair Status Members:</strong> Silver and Gold members receive one additional checked bag with an increased weight limit."
        ]
    },

    handLuggage: {
        title: "Hand Baggage (Carry-On) Allowance",
        note: "UTair has a strict, fare-based policy for carry-on items. An additional personal item like a small backpack (up to 40x30x20cm, 5kg) or handbag is also allowed on all fares.",
        headers: ["Fare Type", "Allowance", "Max Dimensions", "Max Weight"],
        allowances: [
            {
                fare: "Minimum",
                allowance: "1 piece",
                dimensions: "40 x 30 x 20 cm",
                weight: "5 kg"
            },
            {
                fare: "Optimum",
                allowance: "1 piece",
                dimensions: "55 x 40 x 25 cm",
                weight: "5 kg"
            },
            {
                fare: "Premium",
                allowance: "2 pieces total",
                dimensions: "1x (55x40x25cm) + 1x (40x30x20cm)",
                weight: "10 kg total"
            },
            {
                fare: "Eurobusiness",
                allowance: "2 pieces total",
                dimensions: "1x (55x40x25cm) + 1x (40x30x20cm)",
                weight: "15 kg total"
            }
        ]
    },
    
    checkedBaggage: {
        title: "Checked Baggage Allowance",
        note: "Free checked baggage is not included with 'Minimum' fares. The maximum size for a standard bag is 203 cm (sum of 3 dimensions).",
        headers: ["Fare Type", "Free Allowance"],
        allowances: [
            { fare: "Minimum", allowance: "0 bags" },
            { fare: "Optimum", allowance: "1 piece, up to 20 kg" },
            { fare: "Premium", allowance: "1 piece, up to 20 kg" },
            { fare: "Eurobusiness", allowance: "1 piece, up to 30 kg" }
        ]
    },

    loyaltyAllowance: {
        title: "Utair Status Member Benefits",
        note: "These benefits provide an additional checked bag on top of the allowance included in your fare (if any).",
        headers: ["Status Tier", "Additional Benefit"],
        allowances: [
            { tier: "Status Silver", benefit: "1 additional checked bag up to 23 kg." },
            { tier: "Status Gold", benefit: "1 additional checked bag up to 32 kg." }
        ]
    },
    
    excessBaggage: {
        title: "Excess, Overweight, and Oversized Baggage Fees",
        note: "UTair uses two simple fee categories: Domestic (within Russia) and International. Fees are higher when paid at the airport compared to pre-paying online. The rates below are the higher airport rates. Fees are cumulative.",
        headers: ["Category", "Fee (Domestic / at Airport)", "Fee (International / at Airport)"],
        fees: [
            { category: "Adding 1st Bag to 'Minimum' Fare", russia: "3000 RUB", international: "€50" },
            { category: "Adding 2nd Bag (to Optimum/Premium)", russia: "3500 RUB", international: "€60" },
            { category: "Adding 3rd Bag or more", russia: "4500 RUB", international: "€85" },
            { category: "Overweight Bag (20-32 kg)", russia: "3500 RUB", international: "€60" },
            { category: "Overweight Bag (32-50 kg)", russia: "7000 RUB", international: "€120" },
            { category: "Oversized Bag (>203 cm)", russia: "3500 RUB", international: "€60" }
        ],
        sportsEquipment: {
            title: "Sports Equipment Fees (per set)",
            note: "One set of ski or snowboard equipment can be transported free of charge during winter season on certain routes, in addition to the baggage allowance.",
            fee: "Standard charge is 3000 RUB / €50 if not included in free allowance."
        }
    },
    
    contactDetails: {
        title: "Contact UTair",
        note: "The primary contact numbers are for use within Russia. International support is best handled via the online feedback form or chat.",
        main: [
            { type: "Phone (Free for Russia, 24/7)", detail: "8 (800) 234-00-88" },
            { type: "Phone (For Moscow)", detail: "+7 (495) 2-280-380" }
        ],
        online: "An online chat feature and feedback form are available on their official website for support."
    }
};

export function displayUtairInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("utair.js placeholder not found.");
        return;
    }

    const info = utairInfo;
    let html = `
        <style>
            .ut-table { width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em; }
            .ut-table th, .ut-table td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top; }
            .ut-table th { background-color: rgba(0,0,0,0.05); }
            .ut-list { list-style-type: disc; padding-left: 20px; margin-top: 5px; }
            .ut-list li { margin-bottom: 8px; }
            .ut-section { margin-top: 20px; padding: 10px; border: 1px solid #f0f0f0; border-radius: 8px; }
            /* ADDED: Rule for orange section headers */
            .ut-section > h3 {
                color: #FF9100; /* Orange font color */
            }
        </style>
    `;

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Check Your Fare's Baggage Rules</h4>
                <p>UTair's baggage allowance is based on your purchased fare. You can add extra baggage on their official site.</p>
                <a href="${info.mainBaggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT BAGGAGE RULES PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
        <div class="summary-card"><h4>${info.summary.title}</h4><ul class="ut-list">`;
    info.summary.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;

    html += `<div class="ut-section"><h3>${info.handLuggage.title}</h3><p>${info.handLuggage.note}</p><table class="ut-table">`;
    html += `<thead><tr>`;
    info.handLuggage.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    info.handLuggage.allowances.forEach(a => {
        html += `<tr><td><strong>${a.fare}</strong></td><td>${a.allowance}</td><td>${a.dimensions}</td><td>${a.weight}</td></tr>`;
    });
    html += `</tbody></table></div>`;
    
    html += `<div class="ut-section"><h3>${info.checkedBaggage.title}</h3><p>${info.checkedBaggage.note}</p><table class="ut-table">`;
    html += `<thead><tr>`;
    info.checkedBaggage.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    info.checkedBaggage.allowances.forEach(a => {
        html += `<tr><td><strong>${a.fare}</strong></td><td>${a.allowance}</td></tr>`;
    });
    html += `</tbody></table></div>`;

    html += `<div class="ut-section"><h3>${info.loyaltyAllowance.title}</h3><p>${info.loyaltyAllowance.note}</p><table class="ut-table">`;
    html += `<thead><tr>`;
    info.loyaltyAllowance.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    info.loyaltyAllowance.allowances.forEach(a => {
        html += `<tr><td><strong>${a.tier}</strong></td><td>${a.benefit}</td></tr>`;
    });
    html += `</tbody></table></div>`;
    
    html += `<div class="ut-section"><h3>${info.excessBaggage.title}</h3><p>${info.excessBaggage.note}</p><table class="ut-table">`;
    html += `<thead><tr>`;
    info.excessBaggage.headers.forEach(h => html += `<th>${h}</th>`);
    html +=`</tr></thead><tbody>`;
    info.excessBaggage.fees.forEach(f => {
        html += `<tr><td><strong>${f.category}</strong></td><td>${f.russia}</td><td>${f.international}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<h5>${info.excessBaggage.sportsEquipment.title}</h5><p>${info.excessBaggage.sportsEquipment.note}<br/><strong>Fee:</strong> ${info.excessBaggage.sportsEquipment.fee}</p>`;
    html += `</div>`;

    html += `<hr style="margin: 20px 0;"><h3>${info.contactDetails.title}</h3>`;
    html += `<p>${info.contactDetails.note}</p>`;
    html += `<ul class="ut-list">`;
    info.contactDetails.main.forEach(contact => {
        html += `<li><strong>${contact.type}:</strong> ${contact.detail}</li>`;
    });
    html += `<li><strong>Online Support:</strong> ${info.contactDetails.online}</li>`;
    html += `</ul>`;
    html += `
        <div style="text-align:center; margin: 20px 0;">
            <a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="background-color: #555; max-width: 300px; display: inline-block;">Visit Full Contact Page</a>
        </div>
    `;

    placeholderElement.innerHTML = html;
}