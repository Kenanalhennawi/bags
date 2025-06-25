
const koreanairInfo = {
    baggageCalculatorUrl: "https://www.koreanair.com/plan-your-travel/baggage/checked-baggage/excess-baggage/calculator",
    contactPageUrl: "https://www.koreanair.com/contents/footer/customer-support/service-center",

    carryOnBaggage: {
        title: "Carry-on Baggage Allowance",
        allowances: [
            { travelClass: "First / Prestige Class", allowance: "2 bags, up to 18 kg total" },
            { travelClass: "Economy Class", allowance: "1 bag + 1 personal item, up to 10 kg total" }
        ],
        notes: [
            "A standard carry-on bag must not exceed 115 cm (45 in) in total dimensions (L+W+H).",
            "A personal item (e.g., laptop bag, handbag) must not exceed 40 x 30 x 15 cm."
        ]
    },

    checkedBaggage: {
        title: "Free Checked Baggage Allowance",
        generalNote: "The standard size for any checked bag is up to 158 cm / 62 in (total L+W+H).",
        allowanceTables: [
            {
                route: "Domestic (within Korea)",
                allowances: [
                    { travelClass: "Economy Class", allowance: "20 kg" },
                    { travelClass: "Prestige Class", allowance: "30 kg" }
                ]
            },
            {
                route: "International (excluding The Americas/Brazil)",
                allowances: [
                    { travelClass: "Economy Class (Saver & Standard)", allowance: "1 bag, 23 kg" },
                    { travelClass: "Prestige Class", allowance: "2 bags, 32 kg each" },
                    { travelClass: "First Class", allowance: "3 bags, 32 kg each" }
                ]
            },
            {
                route: "To/from The Americas (excluding Brazil)",
                allowances: [
                    { travelClass: "Economy Class (Saver)", allowance: "1 bag, 23 kg" },
                    { travelClass: "Economy Class (Standard)", allowance: "2 bags, 23 kg each" },
                    { travelClass: "Prestige Class", allowance: "2 bags, 32 kg each" },
                    { travelClass: "First Class", allowance: "3 bags, 32 kg each" }
                ]
            },
            {
                route: "To/from Brazil (Tickets issued before June 29, 2025)",
                allowances: [
                    { travelClass: "Economy Class (All fares)", allowance: "2 bags, 32 kg each" },
                    { travelClass: "Prestige Class", allowance: "2 bags, 32 kg each" },
                    { travelClass: "First Class", allowance: "3 bags, 32 kg each" }
                ]
            },
            {
                route: "To/from Brazil (Tickets issued on/after June 30, 2025)",
                allowances: [
                    { travelClass: "Economy Class (Saver)", allowance: "1 bag, 23 kg" },
                    { travelClass: "Economy Class (Standard)", allowance: "2 bags, 23 kg each" },
                    { travelClass: "Prestige Class", allowance: "2 bags, 32 kg each" },
                    { travelClass: "First Class", allowance: "3 bags, 32 kg each" }
                ]
            }
        ]
    },

    childrensAllowance: {
        title: "Allowance for Infants & Children",
        notes: [
            "<strong>Child (with own seat):</strong> Same allowance as an adult, plus 1 foldable stroller and 1 car seat.",
            "<strong>Infant (on lap) - International:</strong> 1 checked bag (up to 10 kg & 115 cm) + 1 foldable stroller + 1 car seat.",
            "<strong>Infant (on lap) - Domestic:</strong> 1 foldable stroller + 1 car seat."
        ]
    },

    contactDetails: {
        title: "Contact Korean Air (Republic of Korea)",
        phoneNumbers: [
            { number: "1588-2001", note: "*The national phone number may be excluded from some unlimited plans." },
            { number: "02-2656-2001", note: "" }
        ],
        hours: [
            "<strong>Domestic Calls:</strong> Korean/English available 07:00–19:00 daily.",
            "<strong>International Calls:</strong> English available 24/7. Korean available 07:00–22:00 daily."
        ]
    }
};

function displayKoreanairInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Korean Air placeholder not found for displaying info.");
        return;
    }

    const info = koreanairInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Korean Air Baggage Calculator</h4>
                <p>Free baggage allowances vary by itinerary and class. Please use the calculator to check the specific rules for your journey.</p>
                <a href="${info.baggageCalculatorUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">BAGGAGE CALCULATOR</a>
            </div>
        </div>
    `;

    const co = info.carryOnBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${co.title}</h3>`;
    html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance</th></tr></thead><tbody>`;
    co.allowances.forEach(row => {
        html += `<tr><td><strong>${row.travelClass}</strong></td><td>${row.allowance}</td></tr>`;
    });
    html += `</tbody></table>`;
    co.notes.forEach(note => html += `<p class="small-note">${note}</p>`);

    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3>`;
    html += `<p class="small-note">${cb.generalNote}</p>`;
    cb.allowanceTables.forEach(tableData => {
        html += `<h4>${tableData.route}</h4>`;
        html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance</th></tr></thead><tbody>`;
        tableData.allowances.forEach(row => {
            html += `<tr><td><strong>${row.travelClass}</strong></td><td>${row.allowance}</td></tr>`;
        });
        html += `</tbody></table>`;
    });

    const ci = info.childrensAllowance;
    html += `<hr style="margin: 20px 0;"><h3>${ci.title}</h3><ul>`;
    ci.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;

    const cd = info.contactDetails;
    html += `<hr style="margin: 20px 0;"><h3>${cd.title}</h3>`;
    cd.phoneNumbers.forEach(phone => {
        html += `<p><strong>Phone:</strong> ${phone.number} <em class="small-note">${phone.note}</em></p>`;
    });
    html += `<h5>Operating Hours</h5><ul>`;
    cd.hours.forEach(hourInfo => html += `<li>${hourInfo}</li>`);
    html += `</ul>`;
    html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">VISIT SERVICE CENTER</a>`;

    placeholderElement.innerHTML = html;
}

export { koreanairInfo, displayKoreanairInfo };