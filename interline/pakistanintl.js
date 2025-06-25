
const pakistanintlInfo = {
    baggageInfoUrl: "https://piac.com.pk/experience/baggage/baggage-guide",
    bookingConditionsUrl: "https://piac.com.pk/facilities/booking-conditions",
    contactDetails: {
        address: "PIA Building, Jinnah International Airport, Karachi, 75200, Pakistan.",
        phone: "(+92-21)-111-786-786",
        email: "contact@piac.aero"
    },

    carryOnBaggage: {
        title: "Hand Carry Baggage Allowance",
        allowances: [
            { travelClass: "Economy Class", allowance: "1 piece, up to 7 kg" },
            { travelClass: "Executive Economy", allowance: "1 piece up to 7 kg + 1 small briefcase up to 5 kg (12 kg total)" }
        ],
        note: "The dimensions for the main carry-on piece must not exceed 115 cm (38L x 22W x 55H cm)."
    },

    checkedBaggage: {
        title: "Free Checked Baggage Allowance",
        note: "PIA does not publish a standard allowance table. Allowances vary significantly by route and are listed in the Booking Conditions for your specific region of travel. Always check your ticket for the definitive allowance.",
        linkText: "View Booking Conditions by Region"
    },

    excessBaggage: {
        title: "Advance Purchase Excess Baggage",
        notes: [
            "You can purchase additional baggage at concessional rates from the time of ticketing until 4 hours before departure.",
            "Within 4 hours of departure, standard airport excess baggage rates will apply.",
            "The minimum purchase is 5 KG, and in multiples of 5 KG thereafter.",
            "This service is available online, at PIA offices, and through travel agents on selected routes."
        ]
    },
    
    specialRulesKSA: {
        title: "Baggage Acceptance Policy for Saudi Arabia (KSA)",
        notes: [
            "Each checked bag must weigh between 8 kg and 32 kg.",
            "Baggage must not be irregularly shaped (e.g., round) or wrapped in fabric/loose rope.",
            "Boxes and baggage must be wrapped by authorized agents, not with food wrapping material."
        ]
    },
    
    travelerInfo: {
        title: "Important Traveler Information",
        notes: [
            "Arrive at the airport a minimum of 2 hours before domestic flights and 4 hours before international flights.",
            "Check-in counters close strictly 1 hour before departure time.",
            "Boarding gates close 30 minutes before departure time.",
            "Only one piece of hand baggage (7kg) is allowed. Liquids, gels, and creams are not allowed in hand baggage."
        ]
    },
    
    specialItems: {
        title: "Special Baggage & Other Policies",
        items: [
            { name: "Live Animals", detail: "Pets are generally not allowed in the cabin and must be transported in the baggage hold as checked baggage, subject to excess baggage fees. Special rules apply for travel to the UK and Saudi Arabia." },
            { name: "Golf Kit", detail: "If carried in addition to free allowance, a special charge equivalent to 6kg applies for a kit up to 15kg. Normal per-kg rates apply for weight over 15kg. In a piece concept system, it's 50% of the standard extra piece charge." },
            { name: "Expectant Mothers", detail: "Travel is permitted up to 35 weeks of pregnancy with a valid MEDIF form and ultrasound report." },
            { name: "Passengers with Disabilities", detail: "PIA offers a wide variety of special assistance and complies with US DOT regulations for flights to/from the U.S. Contact the airline in advance to arrange services." }
        ]
    },
    
    prohibitedItems: {
        title: "Prohibited Items",
        note: "For safety, certain items are prohibited in both checked and hand baggage, including explosives, compressed gases, flammable substances, poisons, and radioactive materials. Items like knives and scissors are only allowed in checked baggage."
    }
};

function displayPakistanintlInfo(placeholderElement) {
    if (!placeholderElement) { return; }

    const info = pakistanintlInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Pakistan International Airlines Baggage Guide</h4>
                <p>Explore helpful information about definitions, allowances and dimensions of allowed checked and unchecked baggage on PIA.</p>
                <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW BAGGAGE GUIDE</a>
            </div>
        </div>
    `;

    const co = info.carryOnBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${co.title}</h3>`;
    html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance</th></tr></thead><tbody>`;
    co.allowances.forEach(row => html += `<tr><td><strong>${row.travelClass}</strong></td><td>${row.allowance}</td></tr>`);
    html += `</tbody></table><p class="small-note">${co.note}</p>`;

    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3><p>${cb.note}</p>`;
    html += `<a href="${info.bookingConditionsUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">${cb.linkText}</a>`;

    const eb = info.excessBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${eb.title}</h3><ul>`;
    eb.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;

    const ksa = info.specialRulesKSA;
    html += `<hr style="margin: 20px 0;"><h3>${ksa.title}</h3><ul>`;
    ksa.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;
    
    const ti = info.travelerInfo;
    html += `<hr style="margin: 20px 0;"><h3>${ti.title}</h3><ul>`;
    ti.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;

    const si = info.specialItems;
    html += `<hr style="margin: 20px 0;"><h3>${si.title}</h3>`;
    si.items.forEach(item => html += `<h5>${item.name}</h5><p>${item.detail}</p>`);

    const pi = info.prohibitedItems;
    html += `<hr style="margin: 20px 0;"><h3>${pi.title}</h3><p>${pi.note}</p>`;

    const cd = info.contactDetails;
    html += `<hr style="margin: 20px 0;"><h3>Contact PIA</h3>`;
    html += `<p><strong>Address:</strong> ${cd.address}</p>`;
    html += `<p><strong>Phone:</strong> ${cd.phone}</p>`;
    html += `<p><strong>Email:</strong> ${cd.email}</p>`;

    placeholderElement.innerHTML = html;
}

export { pakistanintlInfo, displayPakistanintlInfo };