
export const singaporeInfo = {
    mainBaggagePageUrl: "https://www.singaporeair.com/en_UK/ae/travel-info/baggage/",
    nonStandardBaggageUrl: "https://www.singaporeair.com/en_UK/ae/travel-info/baggage/non-standard-baggage/",
    contactPageUrl: "https://www.singaporeair.com/en_UK/ae/contact-us/",
    baggageCalculatorUrl: "https://www.singaporeair.com/en_UK/us/travel-info/baggage/baggage-calculator/",

    summary: {
        title: "Singapore Airlines Baggage Summary",
        items: [
            "<strong>Checked Allowance (Weight Concept):</strong> Economy 25-30kg, Premium Economy 35kg, Business 40kg, First/Suites 50kg. Varies by fare type.",
            "<strong>Checked Allowance (Piece Concept - to/from USA/Canada):</strong> Economy/Premium Economy 2x23kg, Business/First/Suites 2x32kg.",
            "<strong>Carry-On:</strong> Economy/Premium Economy 1x7kg. Business/First/Suites 2x7kg each. A personal item is also allowed with specific dimensions (40x30x10cm).",
            "<strong>Loyalty Members:</strong> Significant extra baggage allowances for PPS Club, KrisFlyer Elite (Gold/Silver), and Star Alliance Gold members.",
            "<strong>Important Note:</strong> Each checked bag cannot exceed 32kg, regardless of total allowance, due to health and safety rules."
        ]
    },

    handLuggage: {
        title: "Cabin Baggage (Carry-On) Allowance",
        generalNote: "The sum of length, width and height of each main carry-on bag must not exceed 115cm. All baggage must be stowed securely in the overhead compartment or under the seat in front of you.",
        allowances: [
            { class: "Suites, First Class, Business Class", allowance: "Two pieces, up to 7kg each" },
            { class: "Premium Economy Class, Economy Class", allowance: "One piece, up to 7kg" }
        ],
        additionalItems: {
            title: "Additional Free Carry-on Items",
            note: "In addition to your main cabin baggage, you may carry ONE of these items. The maximum dimensions for bags in this category are 40x30x10cm.",
            items: ["Ladies’ handbag", "Laptop/Notebook in bag", "Camera / Camera bag", "Document bag"]
        },
        otherFreeItems: {
            title: "Other Permitted Items (Not subject to dimension limits)",
            items: ["Overcoat", "Umbrella", "Walking stick, crutches, or other prosthetic devices", "Infant's amenities and food (up to 6kg total)", "A small amount of duty-free goods"]
        },
        policyNote: {
            title: "Cabin Baggage Policy",
            note: "Checks are performed at check-in and prior to boarding. Any cabin baggage that exceeds the stipulated allowances will have to be checked in, and excess baggage charges may apply if you then exceed your checked baggage allowance. This is to ensure the safety, comfort, and convenience of all passengers."
        },
        foodItems: {
            title: "Food Items",
            note: "Some countries have strict restrictions on food items. Please check with the relevant authorities. Carriage of items with strong smells (e.g., durian) is not allowed in either cabin or checked baggage."
        },
        handSanitiser: {
            title: "Alcohol-Based Disinfectant / Hand Sanitisers in Checked Baggage",
            note: "When carried in checked baggage, these must not exceed 0.5kg or 0.5L per article, and a total of 2.0kg or 2.0L per passenger."
        }
    },
    
    checkedBaggage: {
        title: "Checked Baggage Allowance",
        note: "Your free baggage allowance is based on the weight or piece concept, depending on your final destination.",
        weightConcept: {
            title: "Weight Concept (All flights, except to/from the USA & Canada)",
            headers: ["Class of travel", "Allowance", "PPS Club members", "KrisFlyer Elite Gold / Star Alliance Gold members", "KrisFlyer Elite Silver members"],
            allowances: [
                 { class: "Suites and First Class", allowance: "50 kg", pps: "Additional 50 kg<br>Total: 100 kg", kfGold: "Additional 20 kg<br>Total: 70 kg", kfSilver: "Additional 10 kg<br>Total: 60 kg" },
                 { class: "Business Class", allowance: "40 kg", pps: "Additional 40 kg<br>Total: 80 kg", kfGold: "Additional 20 kg<br>Total: 60 kg", kfSilver: "Additional 10 kg<br>Total: 50 kg" },
                 { class: "Premium Economy Class", allowance: "35 kg", pps: "Additional 35 kg<br>Total: 70 kg", kfGold: "Additional 20 kg<br>Total: 55 kg", kfSilver: "Additional 10 kg<br>Total: 45 kg" },
                 { class: "Economy Class (Flexi / Standard)", allowance: "30 kg", pps: "Additional 30 kg<br>Total: 60 kg", kfGold: "Additional 20 kg<br>Total: 50 kg", kfSilver: "Additional 10 kg<br>Total: 40 kg" },
                 { class: "Economy Class (Value / Lite)", allowance: "25 kg", pps: "Additional 25 kg<br>Total: 50 kg", kfGold: "Additional 20 kg<br>Total: 45 kg", kfSilver: "Additional 10 kg<br>Total: 35 kg" }
            ]
        },
        pieceConcept: {
            title: "Piece Concept (Flights to and from the USA & Canada only)",
            headers: ["Class of travel", "Allowance", "PPS Club members", "KrisFlyer Elite Gold / Star Alliance Gold / KrisFlyer Elite Silver members"],
            allowances: [
                 { class: "Suites and First Class", allowance: "2 pieces, up to 32 kg each", pps: "2 Additional pieces, up to 32 kg each", kf: "1 Additional piece, up to 32 kg each" },
                 { class: "Business Class", allowance: "2 pieces, up to 32 kg each", pps: "2 Additional pieces, up to 32 kg each", kf: "1 Additional piece, up to 32 kg each" },
                 { class: "Premium Economy Class", allowance: "2 pieces, up to 23 kg each", pps: "2 Additional pieces, up to 23 kg each", kf: "1 Additional piece, up to 23 kg each" },
                 { class: "Economy Class", allowance: "2 pieces, up to 23 kg each", pps: "2 Additional pieces, up to 23 kg each", kf: "1 Additional piece, up to 23 kg each" }
            ],
            dimensionNote: "The sum of length, width and height of each checked piece must not exceed 158cm (62 inches)."
        },
        infantAllowance: {
            title: "Infant Baggage Allowance",
            items: [
                "<strong>Checked Baggage:</strong> Up to 10kg on weight-concept flights, or 1 piece (up to 23kg or 32kg depending on parent's class) on piece-concept flights.",
                "<strong>Additional Checked Items:</strong> You can also check in ONE item from EACH of these two categories: 1) A fully collapsible stroller/pushchair, and 2) A carry-cot or car seat."
            ]
        },
        weightAndSizeLimits: {
            title: "Overall Weight and Size Limitations",
            items: [
                "<strong>Weight Limit:</strong> No single checked bag can exceed 32kg.",
                "<strong>Size Limit (at Singapore Changi Airport):</strong> Checked items should not exceed 200cm (length) x 75cm (width) x 80cm (height)."
            ]
        }
    },
    
    baggageTips: {
        title: "Baggage Tips & Priority Handling",
        priority: {
            title: "Priority Baggage Handling",
            note: "Customers in Suites, First, Business, and Premium Economy Class, along with PPS Club and KrisFlyer/Star Alliance Gold members, receive priority handling. Tags are printed with the following codes:",
            codes: ["<strong>PRIO-F:</strong> Suites and First Class", "<strong>PRIO-J:</strong> Business Class", "<strong>PRIO-S:</strong> Premium Economy"]
        },
        packing: {
            title: "While Packing",
            items: [
                "Consider travel insurance that covers baggage loss, delay, or damage.",
                "Place a tracking device in your baggage.",
                "Pack within your allowance to avoid excess charges.",
                "Ensure bags are in good condition.",
                "Use a distinctive feature (ribbons, stickers) to easily identify your bags.",
                "Do NOT pack medication, valuables, or important documents in checked baggage.",
                "Avoid fragile and perishable items.",
                "Attach contact information (name, address, email, phone) both inside and outside the bag.",
                "Remove all old flight tags and labels.",
                "Switch off all battery-operated devices completely (not in sleep/hibernation mode)."
            ]
        },
        atAirport: {
            title: "At the Airport",
            items: [
                "Take pictures of your bags before check-in.",
                "Check in before the counter closes.",
                "Do not check in bags with unknown contents.",
                "Declare all restricted items (like lithium batteries/power banks) to staff.",
                "Retain your baggage claim receipts.",
                "Verify your name, bag count, and destination on the receipts.",
                "Lock your baggage. Use TSA-approved locks for travel to/from the USA.",
                "Fasten all loose straps and handles.",
                "The SingaporeAir mobile app, under MyTrips, provides the tracking status of your baggage (available for selected countries)."
            ]
        }
    },

    excessBaggage: {
        title: "Additional & Excess Baggage Charges",
        note: "It is cheaper to pre-purchase additional baggage online at least 48 hours before departure. The following are airport rates.",
        chargeNote: "Charges are assessed each time you check in. For example, if your journey takes you from Jakarta to Singapore to Tokyo, you’ll be charged for three separate flight segments if you check in separately at each point.",
        weightPricing: {
            title: "Weight Pricing (Non-US/Canada Routes)",
            headers: ["From / To", "Singapore", "Band 1", "Band 2", "Band 3", "Band 4"],
            fees: [
                { from: "Singapore", rates: ["-", "USD8/kg", "USD15/kg", "USD22/kg", "USD28/kg"]},
                { from: "Band 1", rates: ["USD8/kg", "USD16/kg", "USD23/kg", "USD30/kg", "USD36/kg"]},
                { from: "Band 2", rates: ["USD15/kg", "USD23/kg", "USD30/kg", "USD37/kg", "USD43/kg"]},
                { from: "Band 3", rates: ["USD22/kg", "USD30/kg", "USD37/kg", "USD44/kg", "USD50/kg"]},
                { from: "Band 4", rates: ["USD28/kg", "USD36/kg", "USD43/kg", "USD50/kg", "USD56/kg"]},
                { from: "Band 5 (Sector)", rates: ["USD6/kg", "-", "-", "-", "-"]}
            ],
            bands: {
                title: "Zone Definitions",
                items: [
                    "<strong>Band 1:</strong> Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Thailand, Vietnam",
                    "<strong>Band 2:</strong> China, Hong Kong, Macau, Taiwan, South Asia (India, Sri Lanka, etc.), Central Asia, Japan, Korea, Middle East",
                    "<strong>Band 3:</strong> Australia, New Zealand, Guam, Pacific Islands",
                    "<strong>Band 4:</strong> Africa, Europe",
                    "<strong>Band 5 (Sector):</strong> Copenhagen-Rome, Barcelona-Milan"
                ]
            }
        },
        piecePricing: {
            title: "Piece Pricing (US/Canada Routes)",
            headers: ["Charge Type", "Band 1", "Band 2", "Band 3", "Band 4", "SIN-Band 3", "Band 5", "Other"],
            fees: [
                { type: "Additional Piece (up to 23/32kg)", rates: ["USD 150", "USD 200", "USD 250", "USD 350", "USD 50", "USD 50", "USD 150"] },
                { type: "Overweight (24-32kg, for Economy/Premium)", rates: ["USD 100", "USD 125", "USD 175", "USD 225", "USD 50", "USD 50", "USD 100"] },
                { type: "Oversized (>158cm)", rates: ["USD 100", "USD 125", "USD 175", "USD 225", "USD 50", "USD 50", "USD 100"] }
            ],
             bands: {
                title: "Zone Definitions",
                items: [
                    "<strong>Band 1:</strong> Hong Kong, Japan, Korea, Germany, UK, Taiwan, North America (direct flights)",
                    "<strong>Band 2:</strong> Singapore",
                    "<strong>Band 3:</strong> Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Thailand, Vietnam, South Asia, Australia, New Zealand",
                    "<strong>Band 4:</strong> Countries outside of Bands 1, 2, 3"
                ]
            }
        }
    },
    
    multiAirlinePolicy: {
        title: "Flying on Multiple Airlines",
        note: "For itineraries on a single ticket involving multiple airlines, baggage rules can be complex.",
        usaCanada: {
            title: "To/From USA & Canada",
            rule: "The baggage policy of the first marketing carrier (the airline that sold the ticket) applies to the entire journey. They may choose to apply their own rules or the rules of the most significant carrier (the airline flying the longest leg)."
        },
        otherRoutes: {
            title: "To/From Other Parts of the World",
            rule: "The baggage allowance of the most significant marketing carrier (the airline flying the longest or most significant stretch of the journey) applies. This can change after a stopover."
        },
        advice: "If in doubt, always refer to the specific baggage allowance printed on your e-ticket for each flight sector."
    },
    
    contactDetails: {
        title: "Contact Singapore Airlines (Dubai Office)",
        note: "The following details are for the Dubai office. For other locations, please use the main contact page.",
        reservations: {
            title: "Reservations & KrisFlyer Services",
            number: "+971 800 0650 1645",
            hours: "24 hours, 7 days a week."
        },
        lostAndFound: {
            title: "Lost and Found (Delayed/Damaged Baggage Enquiries Only)",
            email: "baggageservicesDXB@dnata.com",
            number: "600 570 006",
            hours: "24 hours, Monday to Sunday"
        }
    }
};

export function displaySingaporeInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("singapore.js placeholder not found.");
        return;
    }

    const info = singaporeInfo;
    let html = `
        <style>
            .sq-table { width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em; }
            .sq-table th, .sq-table td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top; }
            .sq-table th { background-color: rgba(0,0,0,0.05); }
            .sq-list { list-style-type: disc; padding-left: 20px; margin-top: 5px; }
            .sq-list li { margin-bottom: 8px; }
            .sq-section { margin-top: 20px; padding: 10px; border: 1px solid #f0f0f0; border-radius: 8px; }
            .sq-fee-table-container { overflow-x: auto; }
            .sq-sub-section { margin-top: 15px; }
        </style>
    `;

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Calculate Your Exact Baggage Allowance</h4>
                <p>Use the official Singapore Airlines baggage calculator for the most accurate information for your specific flight and fare type.</p>
                <a href="${info.baggageCalculatorUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT BAGGAGE CALCULATOR PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
        <div class="summary-card"><h4>${info.summary.title}</h4><ul class="sq-list">`;
    info.summary.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;

    html += `<div class="sq-section"><h3>${info.handLuggage.title}</h3><p>${info.handLuggage.generalNote}</p><table class="sq-table">`;
    html += `<thead><tr><th>Class of Travel</th><th>Allowance</th></tr></thead><tbody>`;
    info.handLuggage.allowances.forEach(a => html += `<tr><td>${a.serviceClass}</td><td>${a.allowance}</td></tr>`);
    html += `</tbody></table>`;
    html += `<div class="sq-sub-section"><h5>${info.handLuggage.additionalItems.title}</h5><p>${info.handLuggage.additionalItems.note}</p><ul class="sq-list">`;
    info.handLuggage.additionalItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="sq-sub-section"><h5>${info.handLuggage.otherFreeItems.title}</h5><ul class="sq-list">`;
    info.handLuggage.otherFreeItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="sq-sub-section"><h5>${info.handLuggage.foodItems.title}</h5><p>${info.handLuggage.foodItems.note}</p></div>`;
    html += `<div class="sq-sub-section"><h5>${info.handLuggage.policyNote.title}</h5><p>${info.handLuggage.policyNote.note}</p></div>`;
    html += `<div class="sq-sub-section"><h5>${info.handLuggage.handSanitiser.title}</h5><p>${info.handLuggage.handSanitiser.note}</p></div></div>`;
    
    html += `<div class="sq-section"><h3>${info.checkedBaggage.title}</h3><p>${info.checkedBaggage.note}</p>`;
    const wc = info.checkedBaggage.weightConcept;
    html += `<h4>${wc.title}</h4><div class="sq-fee-table-container"><table class="sq-table"><thead><tr>`;
    wc.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    wc.allowances.forEach(row => html += `<tr><td><strong>${row.class}</strong></td><td>${row.allowance}</td><td>${row.pps}</td><td>${row.kfGold}</td><td>${row.kfSilver}</td></tr>`);
    html += `</tbody></table></div>`;
    const pc = info.checkedBaggage.pieceConcept;
    html += `<h4>${pc.title}</h4><div class="sq-fee-table-container"><table class="sq-table"><thead><tr>`;
    pc.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    pc.allowances.forEach(row => html += `<tr><td><strong>${row.class}</strong></td><td>${row.allowance}</td><td>${row.pps}</td><td>${row.kf}</td></tr>`);
    html += `</tbody></table></div><p>${pc.dimensionNote}</p>`;
    html += `<div class="sq-sub-section"><h4>${info.checkedBaggage.infantAllowance.title}</h4><ul class="sq-list">`;
    info.checkedBaggage.infantAllowance.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="sq-sub-section"><h4>${info.checkedBaggage.weightAndSizeLimits.title}</h4><ul class="sq-list">`;
    info.checkedBaggage.weightAndSizeLimits.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></div>`;

    html += `<div class="sq-section"><h3>${info.excessBaggage.title}</h3><p>${info.excessBaggage.note}</p><p><em>${info.excessBaggage.chargeNote}</em></p>`;
    const exW = info.excessBaggage.weightPricing;
    html += `<h4>${exW.title}</h4><div class="sq-fee-table-container"><table class="sq-table"><thead><tr>`;
    exW.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    exW.fees.forEach(row => {
        html += `<tr><td><strong>${row.from}</strong></td>`;
        row.rates.forEach(rate => html += `<td>${rate}</td>`);
        html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    html += `<h5>${exW.bands.title}</h5><ul class="sq-list">${exW.bands.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    const exP = info.excessBaggage.piecePricing;
    html += `<h4>${exP.title}</h4><div class="sq-fee-table-container"><table class="sq-table"><thead><tr>`;
    exP.headers.forEach(h => html += `<th>${h}</th>`);
    html += `</tr></thead><tbody>`;
    exP.fees.forEach(row => {
        html += `<tr><td><strong>${row.type}</strong></td>`;
        row.rates.forEach(rate => html += `<td>${rate}</td>`);
        html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    html += `<h5>${exP.bands.title}</h5><ul class="sq-list">${exP.bands.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    
    html += `<div class="sq-section"><h3>${info.baggageTips.title}</h3>`;
    html += `<div class="sq-sub-section"><h4>${info.baggageTips.priority.title}</h4><p>${info.baggageTips.priority.note}</p><ul class="sq-list">`;
    info.baggageTips.priority.codes.forEach(code => html += `<li>${code}</li>`);
    html += `</ul></div>`;
    html += `<div class="sq-sub-section"><h4>${info.baggageTips.packing.title}</h4><ul class="sq-list">`;
    info.baggageTips.packing.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="sq-sub-section"><h4>${info.baggageTips.atAirport.title}</h4><ul class="sq-list">`;
    info.baggageTips.atAirport.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></div>`;

    html += `<div class="sq-section"><h3>${info.multiAirlinePolicy.title}</h3><p>${info.multiAirlinePolicy.note}</p>`;
    html += `<div class="sq-sub-section"><h4>${info.multiAirlinePolicy.usaCanada.title}</h4><p>${info.multiAirlinePolicy.usaCanada.rule}</p></div>`;
    html += `<div class="sq-sub-section"><h4>${info.multiAirlinePolicy.otherRoutes.title}</h4><p>${info.multiAirlinePolicy.otherRoutes.rule}</p></div>`;
    html += `<p><strong>${info.multiAirlinePolicy.advice}</strong></p></div>`;

    html += `<hr style="margin: 20px 0;"><h3>${info.contactDetails.title}</h3>`;
    html += `<p>${info.contactDetails.note}</p>`;
    html += `<ul class="sq-list">`;
    html += `<li><strong>${info.contactDetails.reservations.title}:</strong> ${info.contactDetails.reservations.number} (${info.contactDetails.reservations.hours})</li>`;
    html += `<li><strong>${info.contactDetails.lostAndFound.title}:</strong> ${info.contactDetails.lostAndFound.number} / Email: ${info.contactDetails.lostAndFound.email} (${info.contactDetails.lostAndFound.hours})</li>`;
    html += `</ul>`;
    html += `
        <div style="text-align:center; margin: 20px 0;">
            <a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="background-color: #555; max-width: 300px; display: inline-block;">Visit Full Contact Page</a>
        </div>
    `;

    placeholderElement.innerHTML = html;
}