
export const unitedInfo = {
    baggageCalculatorUrl: "https://www.united.com/en/us/baggage-calculator/any-origin",
    mainBaggagePageUrl: "https://www.united.com/en/us/fly/baggage.html",
    contactPageUrl: "https://www.united.com/en/us/fly/customer-support/contact-us.html",
    
    summary: {
        title: "United Airlines Baggage Summary",
        items: [
            "<strong>Calculator is Key:</strong> United's allowance varies greatly by route and status. Always use the official calculator for accuracy.",
            "<strong>Carry-On:</strong> 1 personal item & 1 full-sized carry-on are free for standard Economy and higher.",
            "<strong>Basic Economy Restriction:</strong> For most routes, Basic Economy fares only permit 1 small personal item that fits under the seat. No full-sized carry-on is allowed unless you meet specific criteria.",
            "<strong>Checked Baggage:</strong> Standard domestic checked bags have a fee (e.g., ~$35-$40 for the 1st bag). Premium cabin and status members receive free bags.",
            "<strong>International Embargoes:</strong> Many international destinations have year-round or seasonal limits on the number, weight, and size of checked bags."
        ]
    },

    handLuggage: {
        title: "Carry-On Baggage Allowance",
        personalItem: {
            title: "Personal Item (Free for all fares)",
            dimensions: "9 in x 10 in x 17 in (22 cm x 25 cm x 43 cm)",
            note: "Must fit under the seat in front of you. Items include purses, backpacks, laptop bags."
        },
        carryOnBag: {
            title: "Full-Sized Carry-On Bag",
            dimensions: "9 in x 14 in x 22 in (22 cm x 35 cm x 56 cm), including handles and wheels.",
            note: "Must fit in the overhead bin."
        },
        basicEconomy: {
            title: "IMPORTANT: Basic Economy Fare Restriction",
            note: "Basic Economy tickets for most routes **do not** allow a full-sized carry-on bag. You are only allowed one personal item. If you bring a full-sized carry-on to the gate, you will be required to check it and pay the applicable checked bag fee plus a gate handling charge (e.g., $25).",
            exceptions: {
                title: "You CAN bring a free carry-on bag in Basic Economy if you are:",
                items: [
                    "Traveling on a transatlantic or transpacific flight.",
                    "Traveling to/from South America.",
                    "A MileagePlus Premier member or a companion on the same reservation.",
                    "A primary cardmember of a qualifying MileagePlus credit card.",
                    "A Star Alliance Gold member."
                ]
            }
        },
        otherFreeItems: {
            title: "Other Free Items",
            note: "In addition to your allowance, the following items are also permitted:",
            items: ["Jacket or coat", "Umbrella", "Reading material", "Food or items bought at the airport", "Mobility devices (wheelchairs, canes, etc.)", "A car seat or child safety harness", "A diaper bag and breast pump"]
        },
        specialCarryOn: {
            title: "Special Carry-On Items & Rules",
            items: [
                "<strong>Smart Bags:</strong> Lithium batteries must be removable and must be removed before boarding.",
                "<strong>Liquids, Gels, Sprays:</strong> Must be in containers 3.4oz (100mL) or smaller, inside a single, clear, quart-size bag.",
                "<strong>Powders:</strong> The TSA recommends placing powders over 12oz (350mL) in checked bags for domestic U.S. flights.",
                "<strong>Musical Instruments:</strong> A small instrument in a hard case can be your carry-on (in overhead bin) or personal item (under seat).",
                "<strong>Vapes & E-cigarettes:</strong> Must be in your carry-on, not in checked baggage.",
                "<strong>Medication & Essentials:</strong> Always pack medication, keys, and other essentials in your personal item in case your larger bag is gate-checked."
            ]
        },
        gateChecked: {
            title: "Gate-Checked Bags",
            note: "Your carry-on may be checked at the gate if overhead space is limited or on smaller United Express aircraft. Bags checked on most United flights are collected at baggage claim. On United Express flights, they may be returned on the jet bridge upon arrival."
        }
    },
    
    checkedBaggage: {
        title: "Checked Baggage Allowance",
        note: "Checked baggage fees and allowances are highly variable. The following are general guidelines. **Use the official calculator for exact fees.**",
        sizeAndWeight: {
            title: "Standard Size & Weight Limits",
            maxSize: "62 total linear inches (158 cm) (L+W+H), including handles and wheels.",
            maxWeight: "Determined by cabin and MileagePlus status."
        },
        weightByCabin: {
            title: "Maximum Weight per Bag by Cabin",
            headers: ["Cabin", "Maximum Weight"],
            rows: [
                { cabin: "United Economy®, Premium Economy®", weight: "50 lbs (23 kg)" },
                { cabin: "United Business®, United First®, Polaris®", weight: "70 lbs (32 kg)" }
            ]
        },
        weightByStatus: {
            title: "Maximum Weight per Bag by MileagePlus Status",
            headers: ["Status", "Maximum Weight"],
            rows: [
                { status: "Premier Silver, Gold, Platinum, 1K®", weight: "70 lbs (32 kg)" },
                { status: "Star Alliance™ Gold (in Business)", weight: "70 lbs (32 kg)" },
                { status: "Star Alliance™ Gold (in Economy)", weight: "50 lbs (23 kg)" }
            ]
        }
    },

    baggageTips: {
        title: "Baggage Tips & Process",
        items: [
            "Remove all old bag tags from previous flights.",
            "Get to the airport early, respecting bag check cut-off times.",
            "Use the **Bag Drop Shortcut** service if you have already checked in and paid for bags online.",
            "Keep your bag tag receipt. Take a picture of your bag and receipt together for your records.",
            "Place your contact info on a luggage tag or inside the front pocket of your bag.",
            "Use the United app's bag tracker or a device like an AirTag.",
            "Pack medication, valuables, and other essentials (keys, wallet) in your carry-on bag."
        ]
    },
    
    internationalEmbargoes: {
        title: "International Checked Bag Limits & Embargoes",
        note: "Many international destinations have year-round or seasonal restrictions on excess, overweight, or oversized baggage. These can change without notice.",
        yearRound: {
            title: "Year-Round Limits",
            items: [
                "<strong>70 lbs (32kg) Max Weight Per Bag:</strong> Applies to flights to/from Australia, Austria, Belgium, Cuba, France, Germany, Ghana, Greece, Iceland, Ireland, Italy, Jordan, The Netherlands, New Zealand, Norway, Peru, Philippines, Portugal, South Africa, Spain, Sweden, UK, Tahiti.",
                "<strong>Two Bag Max (No Excess/Oversized):</strong> Applies to flights between Guatemala City (GUA) / San Salvador (SAL) and Washington, D.C. (IAD).",
                "<strong>Two Bag Max (70 lbs each, No Excess/Oversized):</strong> Applies to Cuba (HAV) and Honduras (Tegucigalpa/XPL)."
            ]
        },
        seasonal: {
            title: "Seasonal Limits",
            note: "The following is a general guide of busy travel periods. Embargo dates and locations can change.",
            periods: [
                {
                    title: "April 09 – April 28",
                    items: [
                        "<strong>3 Extra Bags Max (No Oversized):</strong> Cancun (CUN).",
                        "<strong>1 Extra Bag Max (Oversized Allowed):</strong> San Salvador (SAL).",
                        "<strong>1 Extra Bag Max (No Oversized):</strong> Many destinations including Antigua (ANU), Aruba (AUA), Belize (BZE), Costa Rica (LIR, SJO), Dominican Republic (POP, PUJ, SDQ), Guatemala (GUA), Jamaica (MBJ), and many cities in Mexico."
                    ]
                },
                {
                    title: "June 1 – August 31",
                    items: [
                        "<strong>3 Extra Bags Max (No Oversized):</strong> Cancun (CUN).",
                        "<strong>1 Extra Bag Max (No Oversized):</strong> Many destinations including Aruba (AUA), Nassau (NAS), Costa Rica (LIR, SJO), Dominican Republic (POP, PUJ), Jamaica (MBJ), Panama City (PTY), and many cities in Mexico."
                    ]
                },
                {
                    title: "November 19 – January 15",
                    items: [
                        "<strong>1 Extra Bag Max (No Oversized):</strong> Many destinations including Aruba (AUA), Nassau (NAS), Costa Rica (LIR, SJO), Dominican Republic (POP, PUJ), Ecuador (UIO), Jamaica (MBJ), Panama City (PTY), and many cities in Mexico."
                    ]
                }
            ]
        },
        boxes: {
            title: "Checking Boxes",
            note: "If traveling to a destination with extra bag limits, you can check a box. It must weigh up to 50 lbs (23 kg). The size limit is 62 total inches, but only 42 total inches for Mexico, Central America, and the Caribbean."
        },
        sportsEmbargo: {
            title: "Prohibited Sports Equipment During Embargoes",
            note: "If your destination has limits on checked bags (seasonal or year-round), you generally cannot check the following large sports equipment:",
            items: ["Bikes", "Hang gliders", "Surfboards (except to/from Costa Rica)", "Wakeboards", "Windsurfing boards"]
        }
    },

    contactDetails: {
        title: "Contact United Airlines",
        main: [
            { type: "Reservations (U.S. & Canada)", detail: "1-800-UNITED-1 (1-800-864-8331)" },
            { type: "MileagePlus Service Center", detail: "1-800-421-4655" },
            { type: "Baggage Service Center", detail: "1-800-335-2247" },
            { type: "TTY for hearing impaired", detail: "1-800-323-0170" }
        ],
        chat: {
            title: "Chat",
            note: "Live agent chat is available 24/7 for quick questions on their website."
        },
        international: {
            title: "International Call Centers (Sample - Middle East)",
            note: "International calling fees may apply. Visit the official contact page for a full list.",
            centers: [
                { country: "Israel", number: "1-809-344-363" },
                { country: "Jordan", number: "06-461-6333 / 0800-23983" },
                { country: "Kuwait", number: "011-312-706-5040" },
                { country: "Qatar", number: "00-800-1000-21" },
                { country: "Saudi Arabia", number: "800-844-0741" },
                { country: "United Arab Emirates", number: "971-08000-441-5492 (Toll-free)" }
            ]
        }
    }
};

export function displayUnitedInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("united.js placeholder not found.");
        return;
    }

    const info = unitedInfo;
    let html = `
        <style>
            .ua-table { width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em; }
            .ua-table th, .ua-table td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top; }
            .ua-table th { background-color: rgba(0,0,0,0.05); }
            .ua-list { list-style-type: disc; padding-left: 20px; margin-top: 5px; }
            .ua-list li { margin-bottom: 8px; }
            .ua-section { margin-top: 20px; padding: 10px; border: 1px solid #f0f0f0; border-radius: 8px; }
            .ua-section > h3 { color: #FF9100; }
            .ua-sub-section { margin-top: 15px; }
            .ua-emphasis { 
                border: 2px solid #ff4d4d; 
                padding: 10px; 
                border-radius: 5px;
                background-color: transparent;
            }
        </style>
    `;

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Use the Official Baggage Calculator</h4>
                <p>United's baggage fees and allowances change based on your destination and status. The calculator is the only way to get an exact price.</p>
                <a href="${info.baggageCalculatorUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT BAGGAGE CALCULATOR PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
        <div class="summary-card"><h4>${info.summary.title}</h4><ul class="ua-list">`;
    info.summary.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;

    html += `<div class="ua-section"><h3>${info.handLuggage.title}</h3>`;
    html += `<div class="ua-sub-section"><h5>${info.handLuggage.personalItem.title}</h5><p>${info.handLuggage.personalItem.note}<br/><strong>Dimensions:</strong> ${info.handLuggage.personalItem.dimensions}</p></div>`;
    html += `<div class="ua-sub-section"><h5>${info.handLuggage.carryOnBag.title}</h5><p>${info.handLuggage.carryOnBag.note}<br/><strong>Dimensions:</strong> ${info.handLuggage.carryOnBag.dimensions}</p></div>`;
    html += `<div class="ua-sub-section ua-emphasis"><h5>${info.handLuggage.basicEconomy.title}</h5><p>${info.handLuggage.basicEconomy.note}</p><h6>${info.handLuggage.basicEconomy.exceptions.title}</h6><ul class="ua-list">`;
    info.handLuggage.basicEconomy.exceptions.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="ua-sub-section"><h5>${info.handLuggage.otherFreeItems.title}</h5><p>${info.handLuggage.otherFreeItems.note}</p><ul class="ua-list">`;
    info.handLuggage.otherFreeItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="ua-sub-section"><h5>${info.handLuggage.specialCarryOn.title}</h5><ul class="ua-list">`;
    info.handLuggage.specialCarryOn.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="ua-sub-section"><h5>${info.handLuggage.gateChecked.title}</h5><p>${info.handLuggage.gateChecked.note}</p></div></div>`;
    
    html += `<div class="ua-section"><h3>${info.checkedBaggage.title}</h3><p><strong>${info.checkedBaggage.note}</strong></p>`;
    html += `<div class="ua-sub-section"><h4>${info.checkedBaggage.sizeAndWeight.title}</h4><ul class="ua-list"><li><strong>Max Size:</strong> ${info.checkedBaggage.sizeAndWeight.maxSize}</li><li><strong>Max Weight:</strong> ${info.checkedBaggage.sizeAndWeight.maxWeight}</li></ul></div>`;
    let cb_tables = [info.checkedBaggage.weightByCabin, info.checkedBaggage.weightByStatus];
    cb_tables.forEach(t => {
        html += `<div class="ua-sub-section"><h5>${t.title}</h5><table class="ua-table"><thead><tr><th>${t.headers[0]}</th><th>${t.headers[1]}</th></tr></thead><tbody>`;
        t.rows.forEach(r => html += `<tr><td>${r.cabin || r.status}</td><td>${r.weight}</td></tr>`);
        html += `</tbody></table></div>`;
    });
    html += `</div>`;

    html += `<div class="ua-section"><h3>${info.internationalEmbargoes.title}</h3><p>${info.internationalEmbargoes.note}</p>`;
    html += `<div class="ua-sub-section"><h5>${info.internationalEmbargoes.yearRound.title}</h5><ul class="ua-list">`;
    info.internationalEmbargoes.yearRound.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;
    html += `<div class="ua-sub-section"><h5>${info.internationalEmbargoes.seasonal.title}</h5><p>${info.internationalEmbargoes.seasonal.note}</p>`;
    info.internationalEmbargoes.seasonal.periods.forEach(period => {
        html += `<h6>${period.title}</h6><ul class="ua-list">`;
        period.items.forEach(item => html += `<li>${item}</li>`);
        html += `</ul>`;
    });
    html += `</div>`;
    html += `<div class="ua-sub-section"><h5>${info.internationalEmbargoes.boxes.title}</h5><p>${info.internationalEmbargoes.boxes.note}</p></div>`;
    html += `<div class="ua-sub-section"><h5>${info.internationalEmbargoes.sportsEmbargo.title}</h5><p>${info.internationalEmbargoes.sportsEmbargo.note}</p><ul class="ua-list">`;
    info.internationalEmbargoes.sportsEmbargo.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></div>`;

    html += `<div class="ua-section"><h3>${info.baggageTips.title}</h3><ul class="ua-list">`;
    info.baggageTips.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div>`;

    html += `<hr style="margin: 20px 0;"><h3>${info.contactDetails.title}</h3>`;
    html += `<div class="ua-sub-section"><h4>Main Numbers (U.S. & Canada)</h4><ul class="ua-list">`;
    info.contactDetails.main.forEach(contact => html += `<li><strong>${contact.type}:</strong> ${contact.detail}</li>`);
    html += `</ul></div>`;
    html += `<div class="ua-sub-section"><h4>${info.contactDetails.chat.title}</h4><p>${info.contactDetails.chat.note}</p></div>`;
    html += `<div class="ua-sub-section"><h4>${info.contactDetails.international.title}</h4><p>${info.contactDetails.international.note}</p><table class="ua-table"><thead><tr><th>Country</th><th>Number</th></tr></thead><tbody>`;
    info.contactDetails.international.centers.forEach(c => html += `<tr><td>${c.country}</td><td>${c.number}</td></tr>`);
    html += `</tbody></table></div>`;
    html += `
        <div style="text-align:center; margin: 20px 0;">
            <a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="background-color: #555; max-width: 300px; display: inline-block;">Visit Full Contact Page</a>
        </div>
    `;

    placeholderElement.innerHTML = html;
}