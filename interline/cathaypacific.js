
export const cathayPacificInfo = {
    name: "Cathay Pacific Airlines (CX)",
    ctaTitle: "Cathay Pacific Baggage Calculator & Information",
    ctaText: "Your baggage allowance is listed on your e-ticket receipt and in Manage Booking. You can also use the calculator below or refer to their detailed baggage pages.",
    ctaButtonText: "USE BAGGAGE CALCULATOR",
    officialBaggagePageUrl: "https://flights.cathaypacific.com/en_US/baggage/baggage-calculator.html", 

    manageBookingUrl: "https://flights.cathaypacific.com/content/cx/en_US/manage-booking.html",
    carrierRulesUrl: "https://flights.cathaypacific.com/content/cx/en_US/baggage/check-in-baggage/carrier-rules.html",

    generalBaggageNotes: [
        "If you have upgraded to a higher cabin using Upgrade Bid, your baggage allowance is still based on your original ticket allowance.",
        "If your ticket involves flights marketed or operated by other airlines, the cabin or check-in baggage allowance may differ.",
        "For cabin baggage on partner flights – please check with the partner airline for their cabin baggage allowance.",
        "For check-in baggage on itineraries with other airlines – please refer to Cathay Pacific's carrier rules for more details."
    ],

    contactDetails: {
        contactIntro: "If you can't find the answer you're looking for, Cathay Pacific is here to help. Support is available through chat and on their website.",
        whatsApp: {
            link: "https://wa.me/85227472747",
            text: "Chat with us now via WhatsApp"
        },
        uaeContacts: { 
            title: "Contact Information (UAE)",
            generalEnquiries: "+971 800 049 866",
            travelAgencies: "+971 800 049 867",
            note: "If you are calling from outside of the United Arab Emirates, an overseas charge may apply."
        },
        baggageServicesUAE: {
            title: "Baggage Services (UAE)",
            phone: "+971 600 570 006",
            email: "DXB8BAG@cathaypacific.com"
        },
        globalContactPrompt: "For other countries/regions, please select your location on the official Cathay Pacific contact page to see relevant information."
    }
};

/**
 * Displays Cathay Pacific Airlines baggage information.
 * @param {HTMLElement} placeholderElement - The DOM element to inject HTML into.
 */
export function displayCathaypacificInfo(placeholderElement) { 
    if (!placeholderElement) {
        console.error("Cathay Pacific placeholder not found for displaying info."); 
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Cathay Pacific.</p>";
        return;
    }

    const info = cathayPacificInfo;
    let html = "";

    if (info.ctaTitle && info.ctaText && info.ctaButtonText && info.officialBaggagePageUrl) {
        html += `
            <div class="calculator-cta-section">
                <span class="calculator-cta-icon">✈️</span>
                <div class="calculator-cta-content">
                    <h4>${info.ctaTitle}</h4>
                    <p>${info.ctaText}</p>
                    <a href="${info.officialBaggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">${info.ctaButtonText}</a>
                </div>
            </div>
            <hr style="margin: 20px 0;">
        `;
    } else { 
        html += `<p>Please refer to the official ${info.name} website for their baggage information.</p>`;
        if (info.officialBaggagePageUrl && info.officialBaggagePageUrl !== "#") {
             html += `<p><a href="${info.officialBaggagePageUrl}" target="_blank" rel="noopener noreferrer">Visit ${info.name} Baggage Page</a></p>`;
        }
        html += `<hr style="margin: 20px 0;">`;
    }

    if (info.generalBaggageNotes && info.generalBaggageNotes.length > 0) {
        html += `<h4>Important Notes:</h4><ul>`;
        info.generalBaggageNotes.forEach(note => {
            let processedNote = note.replace("Manage Booking", `<a href="${info.manageBookingUrl}" target="_blank" rel="noopener noreferrer">Manage Booking</a>`);
            processedNote = processedNote.replace("carrier rules", `<a href="${info.carrierRulesUrl}" target="_blank" rel="noopener noreferrer">carrier rules</a>`);
            html += `<li>${processedNote}</li>`;
        });
        html += `</ul><hr style="margin: 20px 0;">`;
    } else {
        html += `<p><em>Detailed baggage rules for ${info.name} are best found on their official website using the link above.</em></p><hr style="margin: 20px 0;">`;
    }

    html += `<h4>Contact ${info.name}</h4>`;
    if (info.contactDetails) {
        const cd = info.contactDetails;
        if (cd.contactIntro) {
            html += `<p>${cd.contactIntro}</p>`;
        }
        if (cd.whatsApp && cd.whatsApp.link) {
            html += `<p><strong>WhatsApp:</strong> <a href="${cd.whatsApp.link}" target="_blank" rel="noopener noreferrer">${cd.whatsApp.text || 'Chat via WhatsApp'}</a></p>`;
        }

        if (cd.uaeContacts) {
            html += `<h5>${cd.uaeContacts.title || 'Contacts (UAE)'}:</h5><ul>`;
            if (cd.uaeContacts.generalEnquiries) {
                html += `<li>General Enquiries: <a href="tel:${cd.uaeContacts.generalEnquiries.replace(/\s/g, '')}">${cd.uaeContacts.generalEnquiries}</a></li>`;
            }
            if (cd.uaeContacts.travelAgencies) {
                html += `<li>Travel Agencies: <a href="tel:${cd.uaeContacts.travelAgencies.replace(/\s/g, '')}">${cd.uaeContacts.travelAgencies}</a></li>`;
            }
            html += `</ul>`;
            if (cd.uaeContacts.note) {
                html += `<p class="small-note">${cd.uaeContacts.note}</p>`;
            }
        }

        if (cd.baggageServicesUAE) {
            html += `<h5>${cd.baggageServicesUAE.title || 'Baggage Services (UAE)'}:</h5>`;
            if (cd.baggageServicesUAE.phone) {
                html += `<p>Tel: <a href="tel:${cd.baggageServicesUAE.phone.replace(/\s/g, '')}">${cd.baggageServicesUAE.phone}</a></p>`;
            }
            if (cd.baggageServicesUAE.email) {
                html += `<p>Email: <a href="mailto:${cd.baggageServicesUAE.email}">${cd.baggageServicesUAE.email}</a></p>`;
            }
        }
        
        if (cd.globalContactPrompt) {
            html += `<p>${cd.globalContactPrompt}</p>`;
        }
      

    } else {
        html += `<p>For support, please refer to the official ${info.name} website.</p>`;
    }
    
    placeholderElement.innerHTML = html;
}
