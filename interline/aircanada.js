
export const airCanadaInfo = {
    baggagePageUrl: "https://www.aircanada.com/ca/en/aco/home/plan/baggage.html#/",
    generalBaggageNotes: [ 
        "Maximum weight per bag: 50 lb (23 kg). Bags weighing 23-32 kg (50-70 lb) are considered overweight and will incur a fee.",
        "Maximum linear dimensions per bag: 158 cm (62 in). Bags with linear dimensions between 160-292 cm (63-115 in) are considered oversized and will incur a fee.",
        "Bags over 32 kg (70 lb) in weight, or 292 cm (115 in) in linear dimensions, or 203 cm (80 in) in length must be shipped via Air Canada Cargo.",
        "Fees for 1st/2nd checked bag vary by fare type (e.g., Basic, Standard, Flex, Comfort, Latitude) and route (e.g., within Canada, Canada-US, International). Many fares include the first bag free, some include two.",
        "If a bag is both overweight and oversized, only one fee (typically the higher of the two, or a specific combined fee) will apply.",
        "Fees also apply for additional bags beyond the standard allowance.",
        "For itineraries involving codeshare partners or other airlines, the baggage rules of the airline designated as the Most Significant Carrier (MSC) or the first marketing carrier typically apply. Always verify with Air Canada or the operating carrier."
    ],
    contactDetails: { 
        contactIntro: "Please first make sure your query isn't covered by other options on their page, as call centre agents may not be able to access certain information.",
        contacts: [
            {
                category: "Air Canada – flights and reservations",
                note: "For new reservations, changes or cancellations on direct bookings only, or general flight information.",
                numbers: [
                    { number: "1-888-247-2262", details: "Toll free, 24/7, within Canada and the U.S." },
                    { number: "514-393-3333", details: "Toll charges may apply." }
                ]
            },
            {
                category: "Aeroplan",
                note: "For Aeroplan-related inquiries, including booking, changing, or cancelling a flight reward.",
                numbers: [
                    { number: "1-800-361-5373", details: "Canada, U.S., Caribbean" },
                    { number: "0-808-812-6310", details: "United Kingdom" },
                    { number: "514-395-0300", details: "All other areas" }
                ]
            }
        ]
    }
};

/**
 * Displays Air Canada baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayAirCanadaInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Air Canada placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Air Canada.</p>";
        return;
    }

    const info = airCanadaInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>View Air Canada Baggage Details</h4>
                <p>For detailed baggage allowances, fees, and to use their official calculator, please visit the Air Canada website.</p>
                <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT AIR CANADA BAGGAGE PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    if (info.generalBaggageNotes && info.generalBaggageNotes.length > 0) {
        html += `<h4>General Checked Baggage Notes (Air Canada):</h4><ul>`;
        info.generalBaggageNotes.forEach(note => html += `<li>${note}</li>`);
        html += `</ul>`;
    }
    
    if (info.contactDetails) {
        html += `<hr style="margin: 20px 0;"><h4>Contact Air Canada:</h4>`;
        if (info.contactDetails.contactIntro) {
            html += `<p>${info.contactDetails.contactIntro}</p>`;
        }
        if (info.contactDetails.contacts && info.contactDetails.contacts.length > 0) {
            info.contactDetails.contacts.forEach(contactGroup => {
                html += `<h5>${contactGroup.category}</h5>`;
                if (contactGroup.note) {
                    html += `<p>${contactGroup.note}</p>`;
                }
                html += `<ul>`;
                contactGroup.numbers.forEach(entry => {
                    html += `<li><strong>${entry.number}</strong> (${entry.details})</li>`;
                });
                html += `</ul>`;
            });
        }
    }
    
    placeholderElement.innerHTML = html;
}
