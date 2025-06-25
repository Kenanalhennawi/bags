
export const airFranceInfo = {
    ctaTitle: "View Air France (AF) Baggage Details",
    ctaText: "To check your baggage allowance, calculate baggage fees, and review specific conditions for your trip, please use the official Air France baggage resources.",
    ctaButtonText: "VISIT AIR FRANCE BAGGAGE PAGE",

    baggagePageUrl: "https://wwws.airfrance.ae/information/bagages",
    myBookingsUrl: "https://wwws.airfrance.fr/en/trip?_gl=1*d10n0t*_ga*MDVhNGE3YzUtYTAzYy00Zjk2LWE3OTctOTYxMWFmNTExMjVh*_ga_X329ZV2JZ5*czE3NDkwNTE2MTAkbzEkZzEkdDE3NDkwNTE4NzgkajE0JGwwJGgw",
    cargoUrl: "http://www.af-klm.com/cargo/portalb2b/home/",
    prohibitedGoodsUrl: "https://wwws.airfrance.ae/information/bagages/produits-interdits-et-reglementes",
    familiesAndChildrenUrl: "https://wwws.airfrance.ae/information/passagers/familles-enfants",
    contactPageUrl: "https://wwws.airfrance.ae/contact",

    applicationRules: [
        "Air France rules apply if traveling on a flight with an Air France flight number (e.g., AF123).",
        "For travel to/from the US or Canada, if the first transatlantic flight has an AF number, AF rules apply to all flights in the booking.",
        "For connecting flights, if the first flight changing continent/country (within same continent) has an AF number, AF rules apply to all segments until the final destination. Review return flight rules.",
        "In other cases, check the operating airline's website."
    ],
    checkedBaggage: {
        general: [
            "The number of free checked bags depends on travel cabin, fare type, and Flying Blue status.",
            "Personalized baggage allowance is available in 'My Bookings' after ticket purchase and on the ticket itself."
        ],
        allowanceByCabin: [
            { cabin: "Economy", allowance: "0 to 2 items (max 23kg/50lb per item), depending on your chosen ticket fare." },
            { cabin: "Premium Economy", allowance: "0 to 2 items (max 23kg/50lb per item), depending on your chosen ticket fare." },
            { cabin: "Business", allowance: "1 to 2 items (max 32kg/70.5lb per item), depending on your chosen ticket fare." },
            { cabin: "La Première", allowance: "3 items (max 32kg/70.5lb per item)." }
        ],
        flyingBlueBenefits: [
            "Silver and Gold members: 1 additional baggage item allowed on top of ticket conditions.",
            "Platinum and Flying Blue Ultimate members: 2 additional baggage items allowed on top of ticket conditions.",
            "Miles can be used to purchase an Additional Baggage Option."
        ],
        infants: [
            "One bag weighing up to 10 kg/22 lb (except for the Light fare, which does not include checked baggage).",
            "A stroller or backpack-type infant carrier.",
            "A car seat."
        ],
        dimensions: "Any checked baggage item (including additional) can measure up to 158 cm/62.2 in (length + width + height), including pockets, wheels, and handles.",
        weightLimits: "Any checked baggage item (including additional) can weigh up to: 23 kg/50 lb in the Economy or Premium cabins, and 32 kg/70.5 lb for the Business and La Première cabins.",
        additionalBaggage: {
            purchaseMethods: [
                "When you purchase your ticket online.",
                "At any point after ticket purchase and up to 30 hours before departure in 'My Bookings'.",
                "When you check in online (for flights departing from specific airports and for flights operated by Air France, Air Corsica, and Kenya Airways)."
            ],
            preferentialPricingNote: "Purchase your Additional Baggage Option up to 24 hours before your flight to take advantage of preferential pricing (note: for the Light fare, this excludes the first checked bag on flights between Europe and North America; for the Light fare, the airport rate applies for the first bag).",
            itemLimitsAndAircraftNote: "Each passenger can bring up to 10 baggage items in total (may be 3 on specific aircraft types). The aircraft type may limit the number of additional baggage items you are able to purchase. Contact customer service if you need to travel with more than 3 bags per passenger.",
            optionsAndPayment: [
                "Additional Baggage Option: Pay online or at the airport.",
                "Oversized Baggage Option: Pay at the airport.",
                "Overweight Baggage Option: Pay at the airport."
            ]
        },
        oversized: {
            limit: "If your baggage's dimensions exceed 158 cm/62.2 in, but not 300 cm/118 in, you will need to pay an additional fee at the airport. The fee amount depends on your booking.",
            procedure: "Baggage items measuring between 158 cm/62.2 in and 300 cm/118 in, must be dropped at the 'Oversized Baggage' counter.",
            exceeding300cm: "If your baggage item's dimensions exceed 300 cm/118 in, please visit the Air France Cargo website."
        },
        overweight: "If your baggage items weighs more than what your ticket conditions allow (but not exceeding the per-item cabin limit of 23kg or 32kg as applicable), you will need to pay an additional fee at the airport. The fee amount will depend on your trip.",
        prohibitedWrapping: [
            "Soft plastic bags and packaging made with basic materials, such as household stretch film, are not allowed.",
            "This type of packaging may create a 'ball' shape, which can cause damage to airport facilities and disrupt baggage routing.",
            "Any baggage that is visibly damaged or does not meet these requirements will be refused in its current condition."
        ]
    },
    cabinBaggage: {
        general: [
            "This information is for reference only and applies only to flights operated by Air France.",
            "If your direct or connecting flight is operated by one of our airline partners, refer to their website as baggage allowance may differ.",
            "If baggage allowance changes from one segment of your booking to another, follow the strictest guidelines.",
            "Storage: Hand baggage in the overhead compartment, small bag under the seat in front of you (unless in an exit row, then small bag must be stored in overhead bins)."
        ],
        allowanceByCabin: [
            { cabin: "Economy", handBaggage: "0 to 1 item (depending on fare)", smallBag: "1 item", totalWeight: "Max 12 kg/26.4 lb" },
            { cabin: "Premium Economy", handBaggage: "2 items", smallBag: "1 item", totalWeight: "Max 12 kg/26.4 lb" },
            { cabin: "Business and La Première", handBaggage: "2 items", smallBag: "1 item", totalWeight: "Max 18 kg/40 lb" }
        ],
        usFlights: "Hand baggage is subject to U.S. and Transportation Security Administration (TSA) regulations when departing from the United States and is limited to 1 hand baggage and 1 small bag.",
        additionalItems: [
            "Jacket, coat, or any other item of clothing you may be wearing.",
            "Umbrella.",
            "1 bag of duty-free items purchased on board or at the airport.",
            "Children's accessories including strollers*, car seats, diaper bags (*Depending on available space on board. May be put in hold free of charge)."
        ],
        handBaggageDimensions: "Max 55 x 35 x 25 cm (21.7 x 13.8 x 9.9 in), including pockets, wheels, and handles.",
        handBaggageCheckNote: "Air France provides tools to check baggage dimensions at the airport. Baggage checks conducted before boarding. If hand baggage exceeds dimensions, it will be checked (may incur additional fees). On full flights, hand baggage may be checked into hold free of charge (keep personal belongings with you).",
        smallBagDimensions: "Max 40 x 30 x 15 cm (16 x 12 x 6 in) (e.g., 1 purse, or 1 small soft bag, or 1 satchel).",
        liquids: [
            "Containers must be placed in a transparent and closed plastic bag.",
            "Each container cannot exceed 100 ml / 3.4 oz.",
            "Plastic bag cannot exceed 1 liter.",
            "Plastic bag cannot be bigger than 20 x 20 cm / 7.8 x 7.8 in.",
            "Only 1 plastic bag per passenger is allowed.",
            "Some liquids allowed with no restrictions (baby food, medication, etc.). Please visit the Prohibited and Regulated Goods page."
        ]
    },
    contactDetails: { 
        customerSupport: { 
            chat: {
                availability: "A button will appear on the right side of the page as soon as an assistant is available (on the official Air France contact page)."
            },
            socialMedia: [
                { platform: "Messenger", link: "https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F10150136746870526%3Fref%3Dsrc%253Aafweb_contactpage%253Blang%253Aen_AE%253Bbot%253ASTART_BAGGAGEINFOBOT", id: "Air France Messenger" },
                { platform: "WhatsApp", number: "+33 6 99 38 57 20", link: "https://wa.me/33699385720" }
            ],
            languages: ["English (en)", "French (fr)"],
            openingHoursAbuDhabi: "24/7"
        },
        contactNote: "For personalized information or if you need to travel with more than 3 bags per passenger, please contact Air France customer service using the options above or refer to their website for regional contact numbers."
    }
};

/**
 * Displays Air France baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayAirFranceInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Air France placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Air France.</p>";
        return;
    }

    const info = airFranceInfo;
    let html = "";

    if (info.ctaTitle && info.ctaText && info.ctaButtonText && info.baggagePageUrl) {
        html += `
            <div class="calculator-cta-section">
                <span class="calculator-cta-icon">✈️</span>
                <div class="calculator-cta-content">
                    <h4>${info.ctaTitle}</h4>
                    <p>${info.ctaText}</p>
                    <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">${info.ctaButtonText}</a>
                </div>
            </div>
            <hr style="margin: 20px 0;">
        `;
    } else {
        html += `
            <div class="info-section">
                <p>For personalized Air France baggage details and the most up-to-date information, please
                   <a href="${info.myBookingsUrl}" target="_blank" rel="noopener noreferrer">visit My Bookings</a> (if you have a ticket)
                   or check the <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer">official Air France baggage page</a>.
                </p>
            </div>
        `;
    }
    

    if (info.applicationRules && info.applicationRules.length > 0) {
        html += `<h4>When Air France Baggage Rules Apply:</h4><ul>`;
        info.applicationRules.forEach(rule => html += `<li>${rule}</li>`);
        html += `</ul><hr>`;
    }

    if (info.checkedBaggage) {
        html += `<h3>Checked Baggage</h3>`;
        if (info.checkedBaggage.general && info.checkedBaggage.general.length > 0) {
            html += `<h4>General Information:</h4><ul>`;
            info.checkedBaggage.general.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if (info.checkedBaggage.allowanceByCabin && info.checkedBaggage.allowanceByCabin.length > 0) {
            html += `<h4>Allowance by Travel Cabin:</h4>
                     <table class="rules-table">
                        <thead><tr><th>Cabin</th><th>Allowance (Free)</th></tr></thead>
                        <tbody>`;
            info.checkedBaggage.allowanceByCabin.forEach(item => {
                html += `<tr><td>${item.cabin}</td><td>${item.allowance}</td></tr>`;
            });
            html += `   </tbody></table>`;
        }
        if (info.checkedBaggage.flyingBlueBenefits && info.checkedBaggage.flyingBlueBenefits.length > 0) {
            html += `<h4>Flying Blue Member Benefits:</h4><ul>`;
            info.checkedBaggage.flyingBlueBenefits.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if (info.checkedBaggage.infants && info.checkedBaggage.infants.length > 0) {
            html += `<h4>Infants (Not Occupying a Seat):</h4><ul>`;
            info.checkedBaggage.infants.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if (info.checkedBaggage.dimensions) html += `<p><strong>Standard Dimensions (per item):</strong> ${info.checkedBaggage.dimensions}</p>`;
        if (info.checkedBaggage.weightLimits) html += `<p><strong>Standard Weight Limits (per item):</strong> ${info.checkedBaggage.weightLimits}</p>`;

        if (info.checkedBaggage.additionalBaggage) {
            html += `<h4>Additional, Oversized, and Overweight Baggage:</h4>`;
            if (info.checkedBaggage.additionalBaggage.purchaseMethods && info.checkedBaggage.additionalBaggage.purchaseMethods.length > 0) {
                html += `<h5>Purchasing Additional Baggage:</h5><ul>`;
                info.checkedBaggage.additionalBaggage.purchaseMethods.forEach(method => html += `<li>${method}</li>`);
                html += `</ul>`;
            }
            if (info.checkedBaggage.additionalBaggage.preferentialPricingNote) html += `<p class="small-note">${info.checkedBaggage.additionalBaggage.preferentialPricingNote}</p>`;
            if (info.checkedBaggage.additionalBaggage.itemLimitsAndAircraftNote) html += `<p>${info.checkedBaggage.additionalBaggage.itemLimitsAndAircraftNote}</p>`;
            if (info.checkedBaggage.additionalBaggage.optionsAndPayment && info.checkedBaggage.additionalBaggage.optionsAndPayment.length > 0) {
                html += `<h5>Payment for Options:</h5><ul>`;
                info.checkedBaggage.additionalBaggage.optionsAndPayment.forEach(opt => html += `<li>${opt}</li>`);
                html += `</ul>`;
            }
        }
        if (info.checkedBaggage.oversized) {
            html += `<p><strong>Oversized Baggage:</strong> ${info.checkedBaggage.oversized.limit} ${info.checkedBaggage.oversized.procedure}</p>`;
            if(info.checkedBaggage.oversized.exceeding300cm) html += `<p>If > 300cm, visit <a href="${info.cargoUrl}" target="_blank" rel="noopener noreferrer">Air France Cargo</a>.</p>`;
        }
        if (info.checkedBaggage.overweight) html += `<p><strong>Overweight Baggage:</strong> ${info.checkedBaggage.overweight}</p>`;
        
        if (info.checkedBaggage.prohibitedWrapping && info.checkedBaggage.prohibitedWrapping.length > 0) {
            html += `<h4>Prohibited Baggage Wrapping:</h4><ul>`;
            info.checkedBaggage.prohibitedWrapping.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        html += `<hr>`;
    }
    
    if (info.cabinBaggage) {
        html += `<h3>Cabin Baggage</h3>`;
        if (info.cabinBaggage.general && info.cabinBaggage.general.length > 0) {
            html += `<h4>General Information:</h4><ul>`;
            info.cabinBaggage.general.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if (info.cabinBaggage.allowanceByCabin && info.cabinBaggage.allowanceByCabin.length > 0) {
             html += `<h4>Allowance by Travel Cabin:</h4>
                     <table class="rules-table">
                        <thead><tr><th>Cabin</th><th>Hand Baggage</th><th>Small Bag</th><th>Max Total Weight</th></tr></thead>
                        <tbody>`;
            info.cabinBaggage.allowanceByCabin.forEach(item => {
                html += `<tr><td>${item.cabin}</td><td>${item.handBaggage}</td><td>${item.smallBag}</td><td>${item.totalWeight}</td></tr>`;
            });
            html += `   </tbody></table>`;
        }
        if (info.cabinBaggage.usFlights) html += `<p class="small-note"><em>${info.cabinBaggage.usFlights}</em></p>`;

        if (info.cabinBaggage.additionalItems && info.cabinBaggage.additionalItems.length > 0) {
            html += `<h4>Additional Items Allowed Onboard:</h4><ul>`;
            info.cabinBaggage.additionalItems.forEach(item => {
                if (item.toLowerCase().includes("children's accessories")) {
                    html += `<li>${item.replace("strollers*", `strollers* (See <a href="${info.familiesAndChildrenUrl}" target="_blank" rel="noopener noreferrer">Families & Children page</a> for details)`)}</li>`;
                } else {
                    html += `<li>${item}</li>`;
                }
            });
            html += `</ul>`;
        }
        if (info.cabinBaggage.handBaggageDimensions) html += `<p><strong>Hand Baggage Dimensions:</strong> ${info.cabinBaggage.handBaggageDimensions}</p>`;
        if (info.cabinBaggage.handBaggageCheckNote) html += `<p class="small-note">${info.cabinBaggage.handBaggageCheckNote}</p>`;
        if (info.cabinBaggage.smallBagDimensions) html += `<p><strong>Small Bag Dimensions:</strong> ${info.cabinBaggage.smallBagDimensions}</p>`;

        if (info.cabinBaggage.liquids && info.cabinBaggage.liquids.length > 0) {
            html += `<h4>Liquids in Cabin Baggage:</h4><ul>`;
            info.cabinBaggage.liquids.forEach(item => html += `<li>${item}</li>`);
            html += `</ul><p class="small-note">For exceptions (baby food, medication), see the <a href="${info.prohibitedGoodsUrl}" target="_blank" rel="noopener noreferrer">Prohibited and Regulated Goods page</a>.</p>`;
        }
    }
    
    if (info.contactDetails) {
        html += `<hr style="margin: 20px 0;">`; 
        const cd = info.contactDetails;
        html += `<h3>Customer Support</h3>`;
        html += `<p>For further assistance, you can contact Air France:</p>`;
        if(cd.customerSupport && cd.customerSupport.languages && cd.customerSupport.languages.length > 0) {
             html += `<p><strong>Languages Spoken:</strong> ${cd.customerSupport.languages.join(', ')}.</p>`;
        }
        if(cd.customerSupport && cd.customerSupport.openingHoursAbuDhabi) {
            html += `<p><strong>Opening Hours (Local Time in Abu Dhabi for some services):</strong> ${cd.customerSupport.openingHoursAbuDhabi}.</p>`;
        }

        if(cd.customerSupport && cd.customerSupport.chat && cd.customerSupport.chat.availability) {
            html += `<h4>Chat Assistance:</h4><p>${cd.customerSupport.chat.availability}</p>`;
            if (info.contactPageUrl) {
                 html += `<p><a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer">Visit Air France Contact Page for Chat & Other Options</a></p>`;
            }
        }

        if (cd.customerSupport && cd.customerSupport.socialMedia && cd.customerSupport.socialMedia.length > 0) {
            html += `<h4>Social Media:</h4><ul>`;
            cd.customerSupport.socialMedia.forEach(sm => {
                if (sm.link && sm.id) {
                    html += `<li><strong>${sm.platform}:</strong> <a href="${sm.link}" target="_blank" rel="noopener noreferrer">${sm.id}</a></li>`;
                } else if (sm.link && sm.number) {
                     html += `<li><strong>${sm.platform}:</strong> <a href="${sm.link}" target="_blank" rel="noopener noreferrer">${sm.number}</a></li>`;
                }
            });
            html += `</ul>`;
        }
        if (cd.contactNote) { 
            if(cd.customerSupport) html += `<hr style="margin: 15px 0;">`;
            html += `<p>${cd.contactNote}</p>`;
        }
    }
    
    placeholderElement.innerHTML = html;
}
