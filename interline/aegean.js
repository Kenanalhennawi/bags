// interline/aegean.js
// Contains information and display logic for Aegean Airlines (A3).

// Exported data object for Aegean Airlines
export const aegeanInfo = {
    calculatorUrl: "https://en.aegeanair.com/travel-info/travelling-with-aegean/baggage/baggage-calculator/",
    calculatorText: "To check your baggage allowance and calculate costs for Aegean Airlines, please use their official baggage calculator.",
    // General baggage notes can be added here if specific static rules are found
    // e.g., generalBaggageNotes: ["Note 1", "Note 2"],
    contactDetails: { // Contact details grouped at the end of the info object
        contactPageUrl: "https://en.aegeanair.com/contact/",
        contactIntro: "We strive to provide exceptional service in your preferred language. However, during certain times, we may not have agents available who speak your respective requested one. In these instances, we will serve you in either in English or in Greek to ensure we can assist you as efficiently as possible.",
        callCenterNote: "Our call center operates on a 24/7 basis.",
        contactNumbersByCountry: {
            "Australia": ["180 04 12979"],
            "Belgium": ["(+32) 275 34710"],
            "Canada": ["(+1) 833-673-6110"],
            "Cyprus": ["(+357) 22 654100"],
            "France": ["(+33) 170 031323"],
            "Germany": ["(+49) 069 2380560"],
            "Greece": ["801 11 20000 (national calls)", "(+30) 210 6261000 (international calls and mobiles)"],
            "Italy": ["(+39) 069 7150532-33"],
            "Saudi Arabia": ["(+966) 800 844 1206"],
            "Spain": ["(+34) 900 802376"],
            "United Kingdom": ["0871 200 0040", "(+44) 208 7593800"],
            "USA": ["(+1) 833-732-8158"],
            "All Other Countries": ["(+30) 210 6261000"]
        },
        companyDetails: {
            name: "AEGEAN AIRLINES S.A.",
            hq: "Building 57, Athens International Airport, 19 019, Artemida, Spata, Attiki, Greece",
            phones: ["T: +30 210 35 50 000", "T: +30 210 62 61 700", "F: +30 210 62 61 900"],
            vat: "VAT REGISTRATION No.: EL 094468339 - FAE ATHINON",
            reg: "General Commercial Reg.: 1797901000"
        }
    }
};

/**
 * Displays Aegean Airlines baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayAegeanInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Aegean Airlines placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Aegean Airlines.</p>";
        return;
    }

    const info = aegeanInfo; // Use the local info object
    let html = "";

    // Main Call to Action for Baggage Calculator
    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>View Aegean Airlines Baggage Rates</h4>
                <p>${info.calculatorText}</p>
                <a href="${info.calculatorUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">CALCULATE ON AEGEAN SITE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    // Placeholder for any general baggage rules if you add them to aegeanInfo.generalBaggageNotes
    if (info.generalBaggageNotes && info.generalBaggageNotes.length > 0) {
        html += `<h4>General Baggage Notes:</h4><ul>`;
        info.generalBaggageNotes.forEach(note => html += `<li>${note}</li>`);
        html += `</ul><hr style="margin: 20px 0;">`;
    }

    // Contact Information Section - Placed at the end
    if (info.contactDetails) {
        html += `<h4>Contact Aegean Airlines:</h4>`;
        if (info.contactDetails.contactIntro) html += `<p>${info.contactDetails.contactIntro}</p>`;
        if (info.contactDetails.callCenterNote) html += `<p>${info.contactDetails.callCenterNote}</p>`;
        
        if (info.contactDetails.contactNumbersByCountry) {
            html += `<div class="contact-numbers-section">
                      <h5>Telephone Numbers by Country:</h5>
                      <ul>`;
            for (const country in info.contactDetails.contactNumbersByCountry) {
                html += `<li><strong>${country}:</strong> ${info.contactDetails.contactNumbersByCountry[country].join(' / ')}</li>`;
            }
            html += `</ul></div>`;
        }
        if (info.contactDetails.contactPageUrl) {
            html += `<p>For more contact options, please <a href="${info.contactDetails.contactPageUrl}" target="_blank" rel="noopener noreferrer">Visit Aegean Contact Page</a>.</p>`;
        }
        if (info.contactDetails.companyDetails) {
            html += `<hr style="margin: 15px 0;">
                     <div class="company-details-section">
                        <h5>Company Information:</h5>
                        <p>${info.contactDetails.companyDetails.name}<br>
                        <strong>H.Q.:</strong> ${info.contactDetails.companyDetails.hq}<br>
                        ${info.contactDetails.companyDetails.phones.join('<br>')}<br>
                        ${info.contactDetails.companyDetails.vat}<br>
                        ${info.contactDetails.companyDetails.reg}</p>
                     </div>`;
        }
    }
    
    placeholderElement.innerHTML = html;
}
