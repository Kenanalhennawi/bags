
const klmInfo = {
    baggageInfoUrl: "https://www.klm.com/travel/nl_en/prepare_for_travel/baggage/baggage_allowance/index.htm",
    contactPageUrl: "https://www.klm.com/contact",
    myTripUrl: "https://www.klm.nl/en/trip",
    flyingBlueUrl: "https://login.klm.com/enrol/flyingblue",

    checkedBaggage: {
        title: "Checked Baggage Allowance",
        allowances: [
            {
                travelClass: "Economy Class",
                light: "No checked bag included",
                standardFlex: "1 item, up to 23 kg and 158 cm"
            },
            {
                travelClass: "Premium Comfort Class",
                light: "No checked bag included",
                standardFlex: "2 items, up to 23 kg each"
            },
            {
                travelClass: "Business Class",
                light: "1 item, up to 32 kg",
                standardFlex: "2 items, up to 32 kg each"
            }
        ],
        note: "On some routes, an additional checked bag may be included. Always check your specific trip details."
    },

    childrensAllowance: {
        title: "Allowance for Children & Infants",
        notes: [
            "Children with their own seat receive the standard baggage allowance based on their ticket type.",
            "For an infant travelling on your lap, you can bring 1 item of checked baggage (up to 10 kg) if your own ticket type includes checked baggage."
        ]
    },

    excessBaggage: {
        title: "Extra & Oversized Baggage",
        notes: [
            "You can buy extra baggage (up to 23 kg per item) via My Trip.",
            "Purchasing at least 24 hours before departure is cheaper.",
            "Fees for extra bags purchased in advance are typically EUR 20-70 for flights within Europe, and EUR 30-240 for intercontinental flights.",
            "The maximum weight for any single bag is 32 kg. The maximum size is 300 cm (L+W+H).",
            "Each passenger can bring a maximum of 10 baggage items in total."
        ]
    },

    frequentFlyer: {
        title: "Flying Blue Member Benefits",
        tiers: [
            "<strong>Ultimate or Platinum members:</strong> 2 extra checked bags free of charge.",
            "<strong>Gold or Silver members:</strong> 1 extra checked bag free of charge."
        ]
    },

    contactDetails: {
        title: "Contact KLM",
        phoneNumbers: [
            { location: "In the Netherlands", number: "+31 (0)20 - 649 9123" },
            { location: "From abroad", number: "+31 20 - 545 9723" }
        ],
        mediaRelations: "For press questions, contact Team Media Relations via mediarelations@klm.com."
    }
};

function displayKlmInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("KLM placeholder not found for displaying info.");
        return;
    }

    const info = klmInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>KLM Baggage Allowance</h4>
                <p>Find out the total number of luggage you’re allowed to bring, including their maximum weight and size. For rules specific to your journey, always check your booking.</p>
                <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW BAGGAGE ALLOWANCE</a>
            </div>
        </div>
    `;

    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3>`;
    html += `<table class="rules-table"><thead><tr><th>Travel Class</th><th>Light Ticket</th><th>Standard or Flex Ticket</th></tr></thead><tbody>`;
    cb.allowances.forEach(row => {
        html += `<tr><td><strong>${row.travelClass}</strong></td><td>${row.light}</td><td>${row.standardFlex}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<p class="small-note" style="margin-top: 10px;">${cb.note}</p>`;

    const ci = info.childrensAllowance;
    html += `<hr style="margin: 20px 0;"><h3>${ci.title}</h3><ul>`;
    ci.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;

    const eb = info.excessBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${eb.title}</h3><ul>`;
    eb.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;
    
    const ff = info.frequentFlyer;
    html += `<hr style="margin: 20px 0;"><h3>${ff.title}</h3><ul>`;
    ff.tiers.forEach(tier => html += `<li>${tier}</li>`);
    html += `</ul>`;

    const cd = info.contactDetails;
    html += `<hr style="margin: 20px 0;"><h3>${cd.title}</h3>`;
    cd.phoneNumbers.forEach(phone => {
        html += `<p><strong>${phone.location}:</strong> ${phone.number}</p>`;
    });
    html += `<p class="small-note">${cd.mediaRelations}</p>`;
    html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">VISIT CONTACT PAGE</a>`;

    placeholderElement.innerHTML = html;
}

export { klmInfo, displayKlmInfo };