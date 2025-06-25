
export const virginatlanticInfo = {
    mainBaggagePageUrl: "https://www.virginatlantic.com/content/vaa/www/us/en/baggage-overview.html",
    allowancePageUrl: "https://help.virginatlantic.com/gb/en/baggage/check-in-baggage.html",
    handBaggagePageUrl: "https://help.virginatlantic.com/gb/en/baggage/hand-baggage.html",
    excessBaggagePageUrl: "https://help.virginatlantic.com/gb/en/baggage/additional-baggage.html",
    contactPageUrl: "https://help.virginatlantic.com/gb/en/ways-to-contact-us.html",
    baggageCalculatorUrl: "https://flywith.virginatlantic.com/gb/en/prepare-to-fly/baggage/checked-baggage.html#calculator",

    summary: {
        title: "Virgin Atlantic Baggage Summary",
        items: [
            "<strong>Checked Allowance:</strong> Depends on the fare (Economy Light, Classic, Delight, Premium, or Upper Class).",
            "<strong>Economy Light Fare:</strong> Includes **NO** free checked baggage, only hand baggage.",
            "<strong>Economy Classic/Delight:</strong> Typically includes 1 checked bag up to 23kg. This is increased to 2 bags on specific routes.",
            "<strong>Hand Baggage:</strong> All fares include at least one piece of hand baggage (up to 10kg) plus a personal item.",
            "<strong>Flying Club Gold & Silver:</strong> Members receive one extra 23kg checked bag on any fare type."
        ]
    },

    handLuggage: {
        title: "Hand Baggage (Carry-On) Allowance",
        note: "The main hand baggage piece must not exceed 23 x 36 x 56cm. You must be able to place it in the overhead bin unaided.",
        headers: ["Class", "Allowance", "Max Weight"],
        allowances: [
            {
                "class": "Economy (Light, Classic & Delight) & Premium",
                allowance: "1 piece of hand baggage + 1 personal item",
                weight: "10 kg (22 lbs) total combined weight"
            },
            {
                "class": "Upper Class",
                allowance: "Up to 2 pieces of hand baggage + 1 personal item",
                weight: "12 kg for one bag, or 16 kg combined for two bags"
            }
        ],
        additionalItems: {
            title: "Additional Free Items",
            note: "You can bring the following in addition to your allowance. Handbags/backpacks must be small enough to fit under the seat.",
            items: ["Handbag, small backpack/rucksack, purse", "Overcoat or wrap", "Umbrella or walking stick (not pointed or sharp)", "Small camera and/or binoculars", "A reasonable amount of reading matter", "Infant’s food for the flight", "A small amount of duty-free goods", "Headphones"]
        },
        specialItems: {
            title: "Special Items Policy",
            items: [
                "<strong>Wedding Dresses/Suits:</strong> Welcome onboard in addition to hand luggage. Crew will try to hang it if space is available.",
                "<strong>Garment Bags:</strong> In Economy/Premium, can only be used as your main hand baggage if it fits the size limits. In Upper Class, one garment bag (20cm thick) counts as one of your two main hand baggage pieces.",
                "<strong>Laptops:</strong> Must fit into your hand baggage and be removed for security screening.",
                "<strong>Liquids/Gels:</strong> Must be in containers of 100ml or less, within a single 20x20cm transparent, resealable bag.",
                "<strong>Hypodermic Needles:</strong> Permitted if you provide a doctor's letter/prescription. You must bring your own sharps box for disposal."
            ]
        },
        prohibitedItems: {
            title: "Items Not Allowed in Hand Baggage",
            items: ["Smart bags (unless batteries are removable)", "Torch-style lighters", "Non-safety matches", "Toy or replica guns", "Catapults", "Sharp items (knives, razor blades, darts, pointed scissors)", "Sporting bats, cues", "Tradesmen's tools (some exceptions for tools under 7 inches in US airports)", "Any dangerous articles (flammables, corrosives, poisons, etc.)"]
        }
    },
    
    checkedBaggage: {
        title: "Checked Baggage Allowance",
        note: "The maximum size for any checked bag is 90 x 75 x 43cm. Allowances cannot be combined or shared with other people.",
        headers: ["Fare Type", "Number of Bags", "Max Weight per Bag"],
        allowances: [
            { fare: "Economy Light", bags: "0", weight: "N/A (Hand baggage only)" },
            { fare: "Economy Classic", bags: "1 piece (or 2 on select routes*)", weight: "23 kg (50 lbs)" },
            { fare: "Economy Delight", bags: "1 piece (or 2 on select routes*)", weight: "23 kg (50 lbs)" },
            { fare: "Premium", bags: "2 pieces", weight: "23 kg (50 lbs) each" },
            { fare: "Upper Class", bags: "2 pieces (or 3 on select routes**)", weight: "32 kg (70 lbs) each" }
        ],
        infantAllowance: {
            title: "Infant & Child Checked Baggage",
            items: [
                "Children (with their own seat) have the same allowance as adults.",
                "Infants (on lap) get 1 checked bag (up to 23kg), except on Economy Light where no bag is included.",
                "You can purchase one 23kg bag for an infant on an Economy Light ticket (£50 / $75).",
                "A fully collapsible pushchair and a car seat can be checked in for free in addition to any allowance."
            ]
        }
    },

    allowanceExceptions: {
        title: "Baggage Allowance Exceptions",
        flyingClub: {
            title: "Flying Club Gold & Silver Members",
            note: "Flying Club Gold or Silver members can check in one extra piece of baggage (up to 23kg) on any Virgin Atlantic flight, free of charge."
        },
        routeExceptions: {
            title: "Increased Standard Allowance on Selected Routes",
            items: [
                "<strong>*Economy Classic/Delight to/from Ghana & Nigeria (from UK):</strong> Allowance is 2 bags at 23kg each.",
                "<strong>*Economy Classic/Delight to/from India (from UK/US/Canada):</strong> Allowance is 2 bags at 23kg each.",
                "<strong>*The following routes also have a 2-bag standard allowance:</strong> UK-Australia and US-Lebanon.",
                "<strong>**Upper Class to/from South America (from UK):</strong> Allowance is 3 bags at 32kg each."
            ]
        }
    },
    
    excessBaggage: {
        title: "Extra, Overweight, and Oversized Baggage",
        note: "You can purchase up to 7 extra bags online, or 10 at the airport. The fees below are charged per bag, per flight.",
        feeTable: {
            title: "Excess Baggage Fees by Bag Number",
            note: "The 'Included' indicates the standard allowance on most routes. On routes with a higher standard allowance (e.g., to India), fees for bags 1 & 2 do not apply.",
            headers: ["Bag Number", "Economy Light", "Economy Classic/Delight", "Premium", "Upper Class"],
            rows: [
                { num: "Bag 1", light: "£65 / $75", classic: "Included", premium: "Included", upper: "Included" },
                { num: "Bag 2", light: "£65 / $100", classic: "£65 / $100", premium: "Included", upper: "Included" },
                { num: "Bag 3", light: "£140 / $200", classic: "£140 / $200", premium: "£140 / $200", upper: "£140 / $200" },
                { num: "Bag 4+", light: "£140 / $200", classic: "£140 / $200", premium: "£140 / $200", upper: "£140 / $200" }
            ]
        },
        otherFees: {
            title: "Other Fees",
            items: [
                "<strong>Overweight Bag (23-32kg):</strong> £65 / $100 / €85 per bag.",
                "<strong>Oversized Bag (>90x75x43cm):</strong> £200 / $300 / €250 per bag. Must be pre-booked."
            ]
        }
    },

    termsAndConditions: {
        title: "Additional Baggage Terms & Conditions",
        items: [
            "Applies to Virgin Atlantic operated flights only, not codeshare partners.",
            "Excess baggage payments are non-refundable and non-transferable.",
            "If you upgrade your cabin, previously purchased excess baggage is not refunded.",
            "If your flight is cancelled and you are re-booked on another carrier, excess fees will be refunded and the other carrier's policies will apply.",
            "Carriage is subject to Virgin Atlantic’s Conditions of Carriage.",
            "The airline can refuse any bag that does not comply with the rules.",
            "It is not possible to purchase additional hand baggage allowance."
        ]
    },
    
    contactDetails: {
        title: "Contact Virgin Atlantic",
        note: "The quickest way to get help is often via their WhatsApp service or the contact page on their website.",
        main: [
            { type: "Phone (UK)", detail: "0344 209 2722" },
            { type: "Phone (USA / Canada)", detail: "+1 800 862 8621" },
            { type: "WhatsApp", detail: "+44 (0) 7481 339184 (Messaging only)" },
            { type: "Relay UK (Deaf/Speech Impaired)", detail: "Dial 18001 0344 209 2722" }
        ]
    }
};

export function displayVirginatlanticInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("virginatlantic.js placeholder not found.");
        return;
    }

    const info = virginatlanticInfo;
    let html = `
        <style>
            .va-table { width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em; }
            .va-table th, .va-table td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top; }
            .va-table th { background-color: rgba(0,0,0,0.05); }
            .va-list { list-style-type: disc; padding-left: 20px; margin-top: 5px; }
            .va-list li { margin-bottom: 8px; }
            .va-section { margin-top: 20px; padding: 10px; border: 1px solid #f0f0f0; border-radius: 8px; }
            .va-section > h3 { color: #FF9100; }
            .va-sub-section { margin-top: 15px; }
        </style>
    `;

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Calculate Your Specific Baggage Allowance</h4>
                <p>Use the official Virgin Atlantic baggage calculator for the most accurate information for your specific flight.</p>
                <a href="${info.baggageCalculatorUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT BAGGAGE CALCULATOR PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
        <div class="summary-card"><h4>${info.summary.title}</h4><ul class="va-list">`;
    info.summary.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;

    html += `<div class="va-section"><h3>${info.handLuggage.title}</h3><p>${info.handLuggage.note}</p><table class="va-table">`;
    html += `<thead><tr>`;
    info.handLuggage.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    info.handLuggage.allowances.forEach(a => {
        html += `<tr><td><strong>${a.class}</strong></td><td>${a.allowance}</td><td>${a.weight}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<div class="va-sub-section"><h5>${info.handLuggage.additionalItems.title}</h5><p>${info.handLuggage.additionalItems.note}</p><ul class="va-list">`;
    info.handLuggage.additionalItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
     html += `<div class="va-sub-section"><h5>${info.handLuggage.specialItems.title}</h5><ul class="va-list">`;
    info.handLuggage.specialItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="va-sub-section"><h5>${info.handLuggage.prohibitedItems.title}</h5><ul class="va-list">`;
    info.handLuggage.prohibitedItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></div>`;

    
    html += `<div class="va-section"><h3>${info.checkedBaggage.title}</h3><p>${info.checkedBaggage.note}</p><table class="va-table">`;
    html += `<thead><tr>`;
    info.checkedBaggage.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    info.checkedBaggage.allowances.forEach(a => {
        html += `<tr><td><strong>${a.fare}</strong></td><td>${a.bags}</td><td>${a.weight}</td></tr>`;
    });
    html += `</tbody></table>`;
     html += `<div class="va-sub-section"><h5>${info.checkedBaggage.infantAllowance.title}</h5><ul class="va-list">`;
    info.checkedBaggage.infantAllowance.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></div>`;

    html += `<div class="va-section"><h3>${info.allowanceExceptions.title}</h3>`;
    html += `<div class="va-sub-section"><h5>${info.allowanceExceptions.flyingClub.title}</h5><p>${info.allowanceExceptions.flyingClub.note}</p></div>`;
    html += `<div class="va-sub-section"><h5>${info.allowanceExceptions.routeExceptions.title}</h5><ul class="va-list">`;
    info.allowanceExceptions.routeExceptions.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></div>`;

    html += `<div class="va-section"><h3>${info.excessBaggage.title}</h3><p>${info.excessBaggage.note}</p>`;
    const et = info.excessBaggage.feeTable;
    html += `<div class="va-sub-section"><h5>${et.title}</h5><p>${et.note}</p><div class="va-fee-table-container" style="overflow-x:auto;"><table class="va-table"><thead><tr>`;
    et.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    et.rows.forEach(r => html += `<tr><td><strong>${r.num}</strong></td><td>${r.light}</td><td>${r.classic}</td><td>${r.premium}</td><td>${r.upper}</td></tr>`);
    html += `</tbody></table></div></div>`;
    html += `<div class="va-sub-section"><h5>${info.excessBaggage.otherFees.title}</h5><ul class="va-list">`;
    info.excessBaggage.otherFees.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></div>`;

    html += `<div class="va-section"><h3>${info.termsAndConditions.title}</h3><ul class="va-list">`;
    info.termsAndConditions.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;

    html += `<hr style="margin: 20px 0;"><h3>${info.contactDetails.title}</h3>`;
    html += `<p>${info.contactDetails.note}</p>`;
    html += `<ul class="va-list">`;
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