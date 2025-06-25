
export const srilankanInfo = {
    baggagePageUrl: "https://www.srilankan.com/en_uk/plan-and-book/luggage-calculator",
    contactPageUrl: "https://www.srilankan.com/en_uk/flying-with-us/contact-us",
    summary: {
        title: "SriLankan Airlines Baggage Summary",
        items: [
            "<strong>Free Allowance:</strong> Varies by route. Weight Concept (most routes): 30kg Economy, 40kg Business. Piece Concept (Americas routes): 2 pieces.",
            "<strong>Carry-On:</strong> 1 piece at 7kg for Economy, 2 pieces at 7kg each for Business. Personal item also allowed.",
            "<strong>Pre-Purchase Extra Baggage:</strong> Discounts of 20% or more are available via 'Manage My Booking' up to 3 hours before departure.",
            "<strong>Oversized Baggage:</strong> Bags over 158cm (62 in) incur a USD 50 fee. Maximum weight per single piece is 32kg for safety.",
            "<strong>Loyalty Members:</strong> FlySmiLes and oneworld top-tier members may have additional allowances."
        ]
    },
    prePurchase: {
        title: "Pre-Purchase Additional Baggage",
        notes: [
            "Save time, money and avoid the hassle at the airport by pre-purchasing additional baggage allowance at a discount from the Airport rates, just as you book your flight on www.srilankan.com!",
            "You can still purchase discounted extra baggage allowance via the Manage my Booking feature on Srilankan.com even 3 hours prior to your scheduled departure! This feature is even available on our mobile app.",
            "If you already have a ticket, you can log on to our 'Manage My Booking' feature and purchase additional baggage. Simply enter your last name & booking reference to login."
        ]
    },
    checkedBaggage: {
        title: "Checked Baggage Allowance",
        generalNote: "Your baggage allowance is indicated on your e-ticket. There can be exceptions based on specific periods, routings and fare types. Regardless of your allowance, one piece must not exceed 32kgs due to safety reasons.",
        weightPolicy: {
            title: "Weight Policy (for routings excluding North, Central & South America)",
            allowances: [
                { class: "Business Class", weight: "40kg", dimension: "158cm / 62 inch" },
                { class: "Economy Class", weight: "30kg", dimension: "158cm / 62 inch" },
                { class: "Infant (All classes)", weight: "10kg", dimension: "115 cm / 45 inch" }
            ]
        },
        piecePolicy: {
            title: "Piece Policy (for routings to/from North, Central & South America)",
            allowances: [
                { class: "Business Class", pieces: "2", weight: "32 kg each", dimension: "158cm / 62 inch" },
                { class: "Economy Class", pieces: "2", weight: "23 kg each", dimension: "158cm / 62 inch" },
                { class: "Infant (All classes)", pieces: "1", weight: "23 kg", dimension: "158cm / 62 inch" }
            ]
        },
        loyaltyAllowance: {
            title: "Complimentary Checked Baggage Allowance For Loyalty Passengers",
            note: "For checked baggage allowances for SriLankan Airlines FlySmiLes Members and oneworld top tier members please visit their pages:",
            links: [
                { text: "FlySmiLes Rewards & Benefits", url: "https://www.srilankan.com/flysmiles/about-flysmiles/rewards-and-benefit" },
                { text: "FlySmiLes Member Guide (PDF)", url: "https://www.srilankan.com/flysmiles/download/FlySmiLesMemberGuide.pdf" }
            ]
        },
        oversizedPolicy: {
            title: "Oversized Baggage Policy",
            note: "Please note that when a piece of baggage exceeds the total dimension of 158cm (height + length + width), a charge of USD 50 per oversized bag will be charged. However, the acceptance of such oversized baggage will be subject to the type of aircraft as well. This does not apply to sporting equipment which will be handled separately."
        }
    },
    handLuggage: {
        title: "Hand Luggage (Carry-On)",
        policy: {
            title: "UL Policy for all destinations",
            note: "Each piece of hand baggage must weigh no more than 7 kg and measure no more than a total of 115cm (l+h+w).",
            allowances: [
                { class: "Business Class", pieces: "2", weight: "7kg each" },
                { class: "Economy Class", pieces: "1", weight: "7kg" }
            ]
        },
        additionalItems: {
            title: "Additional Free Carry-on Items",
            items: ["One Laptop", "One lady's handbag, purse or pocket book, Duty Free Item", "One overcoat, wrap or blanket", "One umbrella or walking stick", "One small camera and/or one pair of binoculars"],
            note: "The permitted Duty free item shall not be large in size and be able to stow in the aircraft overhead bin."
        },
        infantCarryOn: {
            title: "For passengers travelling with infants",
            items: [
                "One Cabin Bag 56cm x 36cm x 23cm (115cm) weight of 5 kgs for passengers travelling with Infants containing Infant's food for consumption in flight together with Infant's toiletries and disposable items such as nappies.",
                "One infant's carrying basket or fully collapsible stroller/pushchair (Can be carried only if space available in Cabin. If not, as checked baggage)."
            ]
        },
        restrictions: {
            title: "Hand baggage cannot be accepted if it:",
            items: [
                "Is unsuitable for air carriage due to its weight, size or nature.",
                "Cannot fit under the seat or be stowed in the overhead compartment.",
                "Is unsuitably packed."
            ],
            note: "Any overweight cabin bag shall be retrieved at the boarding gate and subjected to an excess baggage fee."
        }
    },
    excessBaggage: {
        title: "Excess Baggage Charges",
        weightPolicy: {
            title: "Weight Policy (for routings excluding North, Central & South America)",
            note: "You would need to pay per kilogram of weight that exceeds your free baggage allowance. Below rates published in USD will be converted to applicable local currency at the time of check-in.",
            rates: [
                { origin: 'Sri Lanka', destination: 'South Asian Sub-Continent', charge: 'USD 10' },
                { origin: 'Sri Lanka', destination: 'South East Asia', charge: 'USD 19' },
                { origin: 'Sri Lanka', destination: 'Japan and Korea', charge: 'USD 31' },
                { origin: 'Sri Lanka', destination: 'Europe', charge: 'USD 31' },
                { origin: 'Sri Lanka', destination: 'Middle East', charge: 'USD 13' },
                { origin: 'Sri Lanka', destination: 'South West Pacific', charge: 'USD 38' },
                { origin: 'Sri Lanka', destination: 'Africa', charge: 'USD 31' },
                { origin: 'SASC', destination: 'Sri Lanka', charge: 'USD 10' },
                { origin: 'SASC', destination: 'South Asian Sub-Continent', charge: 'USD 10' },
                { origin: 'SASC', destination: 'South East Asia', charge: 'USD 19' },
                { origin: 'SASC', destination: 'Japan and Korea', charge: 'USD 31' },
                { origin: 'SASC', destination: 'Europe', charge: 'USD 31' },
                { origin: 'SASC', destination: 'Middle East', charge: 'USD 13' },
                { origin: 'SASC', destination: 'South West Pacific', charge: 'USD 38' },
                { origin: 'SASC', destination: 'Africa', charge: 'USD 31' },
                { origin: 'SEA', destination: 'Sri Lanka', charge: 'USD 19' },
                { origin: 'SEA', destination: 'South Asian Sub-Continent', charge: 'USD 19' },
                { origin: 'SEA', destination: 'South East Asia', charge: 'USD 13' },
                { origin: 'SEA', destination: 'Japan and Korea', charge: 'USD 19' },
                { origin: 'SEA', destination: 'Europe', charge: 'USD 38' },
                { origin: 'SEA', destination: 'Middle East', charge: 'USD 19' },
                { origin: 'SEA', destination: 'South West Pacific', charge: 'USD 25' },
                { origin: 'SEA', destination: 'Africa', charge: 'USD 38' },
                { origin: 'Korea', destination: 'Sri Lanka', charge: 'USD 25' },
                { origin: 'Korea', destination: 'South Asian Sub-Continent', charge: 'USD 25' },
                { origin: 'Korea', destination: 'South East Asia', charge: 'USD 19' },
                { origin: 'Korea', destination: 'Europe', charge: 'USD 44' },
                { origin: 'Korea', destination: 'Middle East', charge: 'USD 25' },
                { origin: 'Korea', destination: 'South West Pacific', charge: 'USD 31' },
                { origin: 'Korea', destination: 'Africa', charge: 'USD 44' },
                { origin: 'Europe', destination: 'Sri Lanka', charge: 'USD 31' },
                { origin: 'Europe', destination: 'South Asian Sub-Continent', charge: 'USD 31' },
                { origin: 'Europe', destination: 'South East Asia', charge: 'USD 38' },
                { origin: 'Europe', destination: 'Japan and Korea', charge: 'USD 31' },
                { origin: 'Europe', destination: 'Middle East', charge: 'USD 25' },
                { origin: 'Europe', destination: 'South West Pacific', charge: 'USD 44' },
                { origin: 'Europe', destination: 'Africa', charge: 'USD 38' },
                { origin: 'Middle East', destination: 'Sri Lanka', charge: 'USD 13' },
                { origin: 'Middle East', destination: 'South Asian Sub-Continent', charge: 'USD 13' },
                { origin: 'Middle East', destination: 'South East Asia', charge: 'USD 25' },
                { origin: 'Middle East', destination: 'Japan and Korea', charge: 'USD 38' },
                { origin: 'Middle East', destination: 'Europe', charge: 'USD 25' },
                { origin: 'Middle East', destination: 'South West Pacific', charge: 'USD 56' },
                { origin: 'Middle East', destination: 'Africa', charge: 'USD 38' },
                { origin: 'Africa', destination: 'Sri Lanka', charge: 'USD 31' },
                { origin: 'Africa', destination: 'South Asian Sub-Continent', charge: 'USD 31' },
                { origin: 'Africa', destination: 'South East Asia', charge: 'USD 38' },
                { origin: 'Africa', destination: 'Japan and Korea', charge: 'USD 50' },
                { origin: 'Africa', destination: 'Middle East', charge: 'USD 31' },
                { origin: 'Africa', destination: 'South West Pacific', charge: 'USD 56' },
                { origin: 'Africa', destination: 'Europe', charge: 'USD 44' },
                { origin: 'SWP', destination: 'Sri Lanka', charge: 'USD 31' },
                { origin: 'SWP', destination: 'South Asian Sub-Continent', charge: 'USD 31' },
                { origin: 'SWP', destination: 'South East Asia', charge: 'USD 31' },
                { origin: 'SWP', destination: 'Japan and Korea', charge: 'USD 38' },
                { origin: 'SWP', destination: 'Europe', charge: 'USD 50' },
                { origin: 'SWP', destination: 'Middle East', charge: 'USD 38' },
                { origin: 'SWP', destination: 'Africa', charge: 'USD 50' },
                { origin: 'Japan', destination: 'Sri Lanka', charge: 'USD 25' },
                { origin: 'Japan', destination: 'South Asian Sub-Continent', charge: 'USD 25' },
                { origin: 'Japan', destination: 'South East Asia', charge: 'USD 19' },
                { origin: 'Japan', destination: 'Europe', charge: 'USD 44' },
                { origin: 'Japan', destination: 'Middle East', charge: 'USD 25' },
                { origin: 'Japan', destination: 'Africa', charge: 'USD 44' },
                { origin: 'Japan', destination: 'South West Pacific', charge: 'USD 31' }
            ],
            areaDefinitions: {
                title: "Area Definitions",
                areas: [
                    "<strong>SASC:</strong> India, Pakistan, Nepal, Bangladesh, Maldives",
                    "<strong>Middle East:</strong> Bahrain, Israel, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, Sudan, United Arab Emirates",
                    "<strong>South East Asia (SEA):</strong> Cambodia, China, Hong Kong - China SAR, Indonesia, Kazakhstan, Malaysia, Philippines, Singapore, Taiwan, Thailand, Vietnam",
                    "<strong>South West Pacific (SWP):</strong> Australia, New Zealand",
                    "<strong>Europe:</strong> Austria, Belgium, Bulgaria, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Netherlands, Norway, Poland, Portugal, Romania, Russia, Slovenia, Spain, Sweden, Switzerland, Turkey, United Kingdom, Serbia, Montenegro, Croatia",
                    "<strong>Africa:</strong> South Africa and Seychelles"
                ]
            }
        },
        piecePolicy: {
            title: "Piece Policy (for routings to/from North, Central & South America)",
            note: "You would need to pay for each piece/weight that exceeds your free baggage allowance.",
            charges: [
                { class: "First/Business Class", overweight: "-", extraPiece: "USD 250", maxWeight: "32kg" },
                { class: "Economy Class", overweight: "USD 75", extraPiece: "USD 250", maxWeight: "32kg" }
            ],
            chargeNote: "*Overweight charge - Increase the weight of your bag from 23Kg to 32Kg. The rates shall apply per bag."
        }
    },
    contactDetails: {
        title: "Contact SriLankan Airlines",
        center: {
            name: "24 Hour Contact Center (Colombo)",
            tel: "+94117 77 1979 (Within Sri Lanka: 1979)",
            whatsapp: "+94744 44 1979 (Chat only)",
            fax: "+94197 33 3999",
            email: "reservations@srilankan.com"
        }
    }
};

export function displaySrilankanInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("SriLankan Airlines placeholder not found.");
        return;
    }

    const info = srilankanInfo;
    let html = `
        <style>
            .srilankan-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            .srilankan-table th, .srilankan-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .srilankan-table th { background-color: rgba(0,0,0,0.1); }
        </style>
    `;

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Calculate or Pre-Purchase Baggage</h4>
                <p>For detailed baggage allowances, to use their official calculator, or to pre-purchase, please visit the SriLankan Airlines website.</p>
                <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT BAGGAGE CALCULATOR PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    html += `<div class="summary-card"><h4>${info.summary.title}</h4><ul>`;
    info.summary.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;

    html += `<h4>${info.prePurchase.title}</h4><ul>`;
    info.prePurchase.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul><hr style="margin: 20px 0;">`;

    html += `<h4>${info.checkedBaggage.title}</h4><p>${info.checkedBaggage.generalNote}</p>`;
    html += `<h5>${info.checkedBaggage.weightPolicy.title}</h5><table class="srilankan-table">
                <thead><tr><th>Cabin Class</th><th>Maximum Weight</th><th>Dimension</th></tr></thead><tbody>`;
    info.checkedBaggage.weightPolicy.allowances.forEach(a => {
        html += `<tr><td>${a.class}</td><td>${a.weight}</td><td>${a.dimension}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<h5>${info.checkedBaggage.piecePolicy.title}</h5><table class="srilankan-table">
                <thead><tr><th>Class</th><th>No of Pieces</th><th>Max Weight per piece</th><th>Dimension</th></tr></thead><tbody>`;
    info.checkedBaggage.piecePolicy.allowances.forEach(a => {
        html += `<tr><td>${a.class}</td><td>${a.pieces}</td><td>${a.weight}</td><td>${a.dimension}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<h5>${info.checkedBaggage.loyaltyAllowance.title}</h5><p>${info.checkedBaggage.loyaltyAllowance.note}</p><ul>`;
    info.checkedBaggage.loyaltyAllowance.links.forEach(l => {
        html += `<li><a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.text}</a></li>`;
    });
    html += `</ul>`;
    html += `<h5>${info.checkedBaggage.oversizedPolicy.title}</h5><p>${info.checkedBaggage.oversizedPolicy.note}</p>`;

    html += `<hr style="margin: 20px 0;"><h4>${info.handLuggage.title}</h4>`;
    html += `<h5>${info.handLuggage.policy.title}</h5><p>${info.handLuggage.policy.note}</p><table class="srilankan-table">
                <thead><tr><th>Cabin Class</th><th>Maximum Pieces</th><th>Maximum Weight</th></tr></thead><tbody>`;
    info.handLuggage.policy.allowances.forEach(a => {
        html += `<tr><td>${a.class}</td><td>${a.pieces}</td><td>${a.weight}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<h5>${info.handLuggage.additionalItems.title}</h5><ul>`;
    info.handLuggage.additionalItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul><p>${info.handLuggage.additionalItems.note}</p>`;
    html += `<h5>${info.handLuggage.infantCarryOn.title}</h5><ul>`;
    info.handLuggage.infantCarryOn.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul>`;
    html += `<h5>${info.handLuggage.restrictions.title}</h5><ul>`;
    info.handLuggage.restrictions.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul><p>${info.handLuggage.restrictions.note}</p>`;

    html += `<hr style="margin: 20px 0;"><h4>${info.excessBaggage.title}</h4>`;
    html += `<h5>${info.excessBaggage.weightPolicy.title}</h5><p>${info.excessBaggage.weightPolicy.note}</p>`;
    html += `<table class="srilankan-table"><thead><tr><th>Origin</th><th>Destination</th><th>Charge per KG</th></tr></thead><tbody>`;
    info.excessBaggage.weightPolicy.rates.forEach(r => {
        html += `<tr><td>${r.origin}</td><td>${r.destination}</td><td>${r.charge}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<h5>${info.excessBaggage.weightPolicy.areaDefinitions.title}</h5><ul>`;
    info.excessBaggage.weightPolicy.areaDefinitions.areas.forEach(a => html += `<li>${a}</li>`);
    html += `</ul>`;
    html += `<h5>${info.excessBaggage.piecePolicy.title}</h5><p>${info.excessBaggage.piecePolicy.note}</p>`;
    html += `<table class="srilankan-table"><thead><tr><th>Cabin Class</th><th>Overweight Charge (23-32kg)</th><th>Extra Piece Charge</th><th>Max Weight of Extra Piece</th></tr></thead><tbody>`;
    info.excessBaggage.piecePolicy.charges.forEach(c => {
        html += `<tr><td>${c.class}</td><td>${c.overweight}</td><td>${c.extraPiece}</td><td>${c.maxWeight}</td></tr>`;
    });
    html += `</tbody></table><p>${info.excessBaggage.piecePolicy.chargeNote}</p>`;
    
    html += `<hr style="margin: 20px 0;"><h4>${info.contactDetails.title}</h4>`;
    const c = info.contactDetails.center;
    html += `<h5>${c.name}</h5><ul>`;
    html += `<li><strong>Telephone:</strong> ${c.tel}</li>`;
    html += `<li><strong>WhatsApp:</strong> ${c.whatsapp}</li>`;
    html += `<li><strong>Fax:</strong> ${c.fax}</li>`;
    html += `<li><strong>Email:</strong> ${c.email}</li>`;
    html += `</ul>`;

    html += `
        <div style="text-align:center; margin: 20px 0;">
            <a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: inline-block;">Contact Us</a>
        </div>
    `;

    placeholderElement.innerHTML = html;
}