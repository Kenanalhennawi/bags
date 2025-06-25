
export const ethiopianInfo = {
    baggageCalculatorUrl: "https://www.ethiopianairlines.com/information/baggage-information/baggage-calculator",
    contactPageUrl: "https://www.ethiopianairlines.com/services/help-and-contact/global-customer-interaction-centre-numbers",

    generalNotes: [
        "You can add extra baggage online with Ethiopian Airlines.",
        "A maximum of 6 extra pieces of baggage is allowed per passenger.",
        "For exact costs based on your route and travel class, the airline recommends using their official calculator."
    ]
};

/**
 * Displays Ethiopian Airlines baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayEthiopianInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Ethiopian Airlines placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Ethiopian Airlines.</p>";
        return;
    }

    const info = ethiopianInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Extra Baggage Price Calculator</h4>
                <p>Find out the cost of your extra baggage effortlessly with our simple and fast calculator. Just tell us where you're flying from, where you're headed, and your travel class.</p>
                <a href="${info.baggageCalculatorUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">TO THE BAGGAGE CALCULATOR</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    if (info.generalNotes && info.generalNotes.length > 0) {
        html += `<h4>General Information</h4>`;
        html += `<ul>`;
        info.generalNotes.forEach(note => {
            html += `<li>${note}</li>`;
        });
        html += `</ul>`;
    }

    if (info.contactPageUrl) {
         html += `<hr style="margin: 20px 0;"><h4>Contact Information</h4>`;
         html += `<p>For a list of worldwide contact numbers, please visit the official Ethiopian Airlines contact page.</p>`;
         html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 10px auto; display: block;">VIEW CONTACT NUMBERS</a>`;
    }


    placeholderElement.innerHTML = html;
}