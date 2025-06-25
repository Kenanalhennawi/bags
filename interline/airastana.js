
export const airAstanaInfo = {
    calculatorUrl: "https://airastana.com/kaz-en/information/additional-baggage",
    calculatorText: "You can check the fees, as well as the permissible maximum weight and dimensions for excess baggage, depending on your point of departure and destination using the official Air Astana calculator.",
    generalNotes: [
        "Purchase MyBAGGAGE 36 hours before flight for a 30% discount.",
        "Pre-paid baggage cannot be used on interline/codeshare flights or transferred.",
        "Cannot purchase with TDCs, gift cards, vouchers, Nomad Club points.",
        "Up to 10 extra pieces per booking.",
        "< 36 hours before departure: standard airport rates.",
        "Baggage > 32kg not accepted (contact Air Astana Cargo).",
        "Transfer routes: <36h = entire journey rate; >36h = per segment rate; separate tickets = individual ticket rates.",
        "Departures from Delhi: additional tax.",
        "Oversized (>158cm) from Dubai: OOG counter check-in, AED 45 DNATA fee (not for pets).",
        "Codeshare/multi-carrier: operating/dominant carrier rules apply for additional baggage."
    ],
    contactDetails: { 
        intro: "For any inquiries related to booking, rebooking, ticket modifications, or flight schedule clarifications, please contact the phone numbers provided below.",
        callCenter: {
            title: "Call Centre (24 hours a day, 7 days a week)",
            numbers: [
                { location: "Almaty", number: "+7 (727) 244 44 77, +7 702 702 44 77" },
                { location: "Astana", number: "+7 (717) 258 44 77, +7 705 927 44 77" }
            ]
        },
        whatsapp: {
            title: "WhatsApp (Send us a direct message)",
            number: "+7 702 702 00 74",
            link: "https://wa.me/77027020074" 
        },
        hotline: {
            title: "Hotline (In case of flight delays or cancellations)",
            number: "+7 (727) 244 44 78"
        }
    }
};

/**
 * Displays Air Astana baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayAirAstanaInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Air Astana placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Air Astana.</p>";
        return;
    }

    const info = airAstanaInfo;
    let html = "";

    
    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Select Departure City to View Additional Baggage Rates</h4>
                <p>${info.calculatorText}</p>
                <a href="${info.calculatorUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">CALCULATE ON AIR ASTANA SITE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    if (info.generalNotes && info.generalNotes.length > 0) {
        html += `<h4>General Notes for Air Astana:</h4><ul>`;
        info.generalNotes.forEach(note => html += `<li>${note}</li>`);
        html += `</ul>`;
    }
    
    if (info.contactDetails) {
        html += `<hr style="margin: 20px 0;"><h4>Contact Air Astana:</h4>`;
        if (info.contactDetails.intro) {
            html += `<p>${info.contactDetails.intro}</p>`;
        }
        if (info.contactDetails.callCenter) {
            html += `<p><strong>${info.contactDetails.callCenter.title}</strong></p><ul>`;
            info.contactDetails.callCenter.numbers.forEach(cc => {
                html += `<li>${cc.location}: ${cc.number}</li>`;
            });
            html += `</ul>`;
        }
        if (info.contactDetails.whatsapp) {
            html += `<p><strong>${info.contactDetails.whatsapp.title}</strong></p><ul>`;
            html += `<li><a href="${info.contactDetails.whatsapp.link}" target="_blank" rel="noopener noreferrer">${info.contactDetails.whatsapp.number}</a></li>`;
            html += `</ul>`;
        }
        if (info.contactDetails.hotline) {
            html += `<p><strong>${info.contactDetails.hotline.title}</strong></p><ul>`;
            html += `<li>${info.contactDetails.hotline.number}</li>`;
            html += `</ul>`;
        }
    }
    
    placeholderElement.innerHTML = html;
}