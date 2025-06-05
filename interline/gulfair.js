// interline/gulfair.js
// Contains information and display logic for Gulf Air (GF).

// Exported data object for Gulf Air
export const gulfairInfo = {
    baggageInfoUrl: "https://www.gulfair.com/en/help/baggage/baggage-information",
    contactPageUrl: "https://www.gulfair.com/en/contact-us",

    generalRules: {
        title: "General Baggage Rules",
        notes: [
            "Your allowance depends on your ticket fare, Falconflyer status, and destination.",
            "Maximum weight for any single piece of baggage is 32 kg.",
            "Maximum dimensions for standard baggage are 76cm x 51cm x 31cm.",
            "TVs up to 50 inches are accepted if pre-packed; larger TVs must be shipped via cargo.",
            "Irregularly shaped, fabric-wrapped, or non-flat baggage is generally not allowed."
        ]
    },

    specialAllowances: {
        title: "Special Allowances",
        types: [
            {
                name: "Children (2+ years)",
                details: [
                    "Entitled to the same baggage allowance as adults.",
                    "One collapsible stroller/pushchair and one child's car seat are allowed free of charge."
                ]
            },
            {
                name: "Infants (under 2 years)",
                details: [
                    "Allowed one checked bag up to 10 kg.",
                    "Allowed one cabin bag up to 3 kg (max dimensions 44x35x20 cm).",
                    "One collapsible stroller/pushchair and one infant car seat are allowed free of charge."
                ]
            },
            {
                name: "Students",
                details: [
                    "Eligible for additional free baggage on specific routes (home country to school country and vice versa).",
                    "A valid student ID, visa, or university acceptance letter must be presented at check-in.",
                    "For tickets issued on/after 27 Oct 2024, an additional 10 kg is permitted.",
                    "For tickets issued before 27 Oct 2024, one additional bag up to 23 kg is permitted."
                ]
            }
        ]
    },

    excessBaggage: {
        title: "Excess Baggage Information",
        zones: [
            { name: "Zone 1 (The Gulf)", description: "Bahrain, Abu Dhabi, Dammam, Dubai, Doha, Kuwait, Jeddah, Muscat, Riyadh, Gassim, Medina, Najaf, Baghdad and Al-Ula." },
            { name: "Zone 2 (Middle East, Africa & Indian subcontinent)", description: "Cairo, Amman, Colombo, Delhi, Hyderabad, Goa, Chennai, Kochi, Dhaka, Bangalore, Mumbai, Thiruvananthapuram, Karachi, Islamabad, Lahore, Male and Nairobi." },
            { name: "Zone 3 (The Far East & Europe)", description: "Bangkok, Manila, Singapore, Athens, Istanbul, Larnaca, Baku, Moscow, Frankfurt, Munich, Paris, London, Manchester, Casablanca, Milan, Rome, Shanghai, Guangzhou, Nice, Geneva and Tbilisi." }
        ],
        terms: [
            "Excess baggage can be purchased from gulfair.com, the mobile app, or contact centres.",
            "Prepaid rates are not available at the airport; standard airport rates will apply.",
            "Purchased excess baggage is non-refundable for voluntary cancellations and cannot be transferred to another passenger.",
            "You can pay for excess baggage using Gulf Air Falconflyer miles."
        ]
    }
};

/**
 * Displays Gulf Air baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayGulfairInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Gulf Air placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Gulf Air.</p>";
        return;
    }

    const info = gulfairInfo;
    let html = "";

    // CTA Section for Baggage Page
    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Gulf Air Baggage Information & Calculator</h4>
                <p>You can calculate your overall baggage allowance according to your travel fare and Falconflyer status by visiting the official Gulf Air website.</p>
                <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">BAGGAGE INFORMATION & CALCULATOR</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    // General Rules
    if (info.generalRules) {
        html += `<h4>${info.generalRules.title}</h4><ul>`;
        info.generalRules.notes.forEach(note => html += `<li>${note}</li>`);
        html += `</ul>`;
    }

    // Special Allowances
    if (info.specialAllowances) {
        html += `<hr style="margin: 20px 0;"><h4>${info.specialAllowances.title}</h4>`;
        info.specialAllowances.types.forEach(type => {
            html += `<h5>${type.name}</h5><ul>`;
            type.details.forEach(detail => html += `<li>${detail}</li>`);
            html += `</ul>`;
        });
    }
    
    // Excess Baggage
    if (info.excessBaggage) {
        html += `<hr style="margin: 20px 0;"><h4>${info.excessBaggage.title}</h4>`;
        html += `<h5>Baggage Zones</h5>`;
        info.excessBaggage.zones.forEach(zone => {
            html += `<p class="small-note"><strong>${zone.name}:</strong> ${zone.description}</p>`;
        });
        html += `<h5 style="margin-top: 15px;">Terms & Conditions for Prepaid Baggage</h5><ul>`;
        info.excessBaggage.terms.forEach(term => html += `<li>${term}</li>`);
        html += `</ul>`;
    }

    // Contact Information
    if (info.contactPageUrl) {
         html += `<hr style="margin: 20px 0;"><h4>Contact Gulf Air</h4>`;
         html += `<p>For booking assistance or information, please visit the official Gulf Air contact page to find your local office or call the Worldwide Call Center.</p>`;
         html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 10px auto; display: block;">FIND CONTACT DETAILS</a>`;
    }

    placeholderElement.innerHTML = html;
}