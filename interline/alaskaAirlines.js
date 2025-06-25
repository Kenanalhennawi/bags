
export const alaskaAirlinesInfo = {
    officialBaggagePageUrl: "https://www.alaskaair.com/content/travel-info/baggage",
    batteriesElectronicsPageUrl: "https://www.alaskaair.com/content/travel-info/baggage/prohibited-items/spare-batteries-electronic-devices",
    carryOnPackingTipsUrl: "https://blog.alaskaair.com/travel-tips/load-your-carry-on-like-a-pro/?_gl=1*16xa1d3*_ga*MTg3NjYwNjUwLjE3NDkwNTk2OTg.*_ga_S6FNN1RWRJ*czE3NDkwNTk2OTckbzEkZzEkdDE3NDkwNTk3OTUkajIzJGwwJGg0ODY0MzA2NDY.",
    tsaMedicalUrl: "http://www.tsa.gov/travel/special-procedures",
    cargoContactNumber: "1-800-225-2752",
    reservationsContactNumber: "1-800-252-7522",
    airportGuidesUrl: "https://www.alaskaair.com/content/airports",
    checkInCutOffTimesUrl: "https://www.alaskaair.com/content/travel-info/at-the-airport/airport-boarding-times",
    baggageFeeWaiversUrl: "https://www.alaskaair.com/content/travel-info/baggage/baggage-fee-waivers-exceptions#waivers",
    baggageExceptionsUrl: "https://www.alaskaair.com/content/travel-info/baggage/baggage-fee-waivers-exceptions#exceptions",
    sportingEquipmentUrl: "https://www.alaskaair.com/content/travel-info/baggage/special-baggage/traveling-with-sporting-equipment",
    musicalInstrumentsPageUrl: "https://www.alaskaair.com/content/travel-info/baggage/special-baggage/traveling-with-musical-instruments",
    privacyPolicyUrl: "https://www.alaskaair.com/content/legal/privacy-policy?lid=contact-us:phone-numbers",
    termsAndConditionsUrl: "https://www.alaskaair.com/content/legal/help-center-text-terms?lid=contact-us:phone-numbers",

    carryOn: {
        sizeLimit: "22'' x 14'' x 9'' (including wheels and handles) or 45 linear inches (Length + Height + Width).",
        allowance: "One carry-on bag and one personal item.",
        measurementNote: "Measure carefully before you fly. Bag sizers available at airport locations. For soft-sided/expandable bags, measure again once packed.",
        smartBagsNote: "Refer to our Batteries and Electronics page for Smart bags, Self-Propelled bags, eBags, and bags that can charge electronic devices."
    },
    personalItem: {
        description: "One small personal item such as a purse, briefcase, or laptop bag.",
        medicallyNecessary: "Medically necessary items are allowed."
    },
    specialCarryOnItems: {
        note: "May exceed standard dimensions if safely stowed in the cabin:",
        items: [
            "Human organs",
            "Art/advertising portfolios",
            "Paintings",
            "Delicate scientific equipment",
            "Fishing poles",
            "Small musical instruments"
        ]
    },
    exemptFromCarryOnLimit: [
        "Coats, hats, umbrellas (compact size)",
        "A pillow for personal use",
        "Food for immediate consumption",
        "Reasonable amount of reading material",
        "FAA approved child/infant restraint seats (occupied), strollers (space availability; battery link for strollers with power).",
        "Service Animals (properly documented).",
        "Mobility/Medical assistive devices (wheelchairs, canes, CPAP, POC, breast pump, etc.).",
        "Prescription medications and administration devices (syringes, auto-injectors) - bag must only contain these items to qualify as an exception."
    ],
    checkedBaggage: {
        paymentMethods: "During online check-in, at a bag tag station, or at any of our airport ticket counters.",
        feesTable: [
            { item: "First bag", fee: "$35" },
            { item: "Second bag", fee: "$45" },
            { item: "Third + additional bags*", fee: "$150 each" }
        ],
        feesNote: "*Restrictions apply for bags up to 50 lb and 62\" (linear). During peak travel periods, limits on number of checked bags may apply.",
        exemptionsNote: "Strollers, car seats, and mobility aids are exempt from baggage charges.",
        waiversNote: "Baggage fee waivers apply for select guests (Alaska Airlines credit card holders, Elite Mileage Plan members, US military).",
        oversizeOverweightFeesTable: [
            { condition: "Bags 51-100 lb", fee: "$100" },
            { condition: "Bags 63-115\" (linear)", fee: "$150" }
        ],
        oversizeOverweightNote: "More than one fee may apply (e.g., checked bag fee + oversize fee).",
        maxLimits: "No single piece > 100 pounds and/or > 115\" (linear). Contact Alaska Air Cargo for items exceeding this.",
        exceptionsToMaxLimits: "Musical instruments.",
        smartBagsNote: "Refer to Batteries and Electronics page for Smart bags."
    },
    airportProcedures: {
        acceptanceHoursVary: "Baggage acceptance hours vary by airport. Ensure bags received and boarding pass obtained by check-in cut-off time.",
        arrivalSuggestion: "Be in line well before cut-off. Refer to airport guides for ticket counter hours and recommended arrival times.",
        acceptanceTimeLimit: "Unable to accept baggage more than 4 hours prior to departure.",
        specificAirportLimits: "Vancouver (YVR): 3 hours prior. Calgary (YYC): 2 hours prior (due to US Customs pre-clearance)."
    },
    multipleFlights: {
        alaskaOnly: "If trip includes >1 flight on Alaska and/or partners, bags checked to final destination if < 18 hours between flights.",
        layover18Plus: "If layover >= 18 hours, claim and re–check baggage (additional fees may apply).",
        multipleAirlines: "If traveling on >1 airline, other airline's rules/fees may apply. Check ticket or call Alaska Airlines.",
        multipleTickets: "Each ticket is a separate journey. Baggage checked to final destination of first ticket only. Allow time to collect/re-check. Fees for each carrier may apply."
    },
    contactDetails: { 
        chatText: "Text us: 82008",
        chatNote: "Message frequency varies based on chat activity. Message and data rates may apply. Chats and texts may be monitored or recorded by Alaska Airlines and our third-party providers to help improve our services in accordance with our privacy policy.",
        usCanada: [
            { department: "Reservations / pre-flight questions", contact: "1-800-252-7522 (1-800-ALASKAAIR)", hours: "24/7", notes: "Accessible services help: 1-800-503-0101. Group reservations (10+): 1-800-445-4435 (M-F 6am-6pm PT, Sat 7:30am-6pm PT). TTY: Dial 711 for relay services." },
            { department: "Guest care (post-flight questions / complaints)", contact: "1-800-654-5669", hours: "M-F 7am-7pm PT, Sat 8am-5pm PT", notes: "TTY: Dial 711." },
            { department: "Mileage Plan Account", contact: "1-800-654-5669", hours: "M-F 7am-7pm PT, Sat 8am-5pm PT", notes: "TTY: Dial 711." },
            { department: "Lounge", contact: "1-800-654-5669", notes: "Mail: Alaska Lounge, P.O. Box 68900-SEASM, Seattle, WA 98168-0900. TTY: Dial 711." }
        ],
        corporateOffices: [
            { name: "Alaska Airlines", contact: "206-433-3200", address: "P.O. Box 68900, Seattle, WA 98168-0900" },
            { name: "Horizon Air", address: "P.O. Box 68977, Seattle, WA 98168" }
        ],
        international: {
            contact: "001-206-485-4390",
            note: "Not a toll-free number. International dialing may need to be activated with your service provider."
        }
    }
};

/**
 * Displays Alaska Airlines baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayAlaskaAirlinesInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Alaska Airlines placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Alaska Airlines.</p>";
        return;
    }

    const info = alaskaAirlinesInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>View Alaska Airlines Baggage Details</h4>
                <p>For the most current and personalized details, please visit the official Alaska Airlines website.</p>
                <a href="${info.officialBaggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT ALASKA AIRLINES BAGGAGE PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;
    

    if (info.carryOn) {
        html += `<h3>Carry-on Baggage</h3>
                 <p><strong>Allowance:</strong> ${info.carryOn.allowance}</p>
                 <p><strong>Size Limit:</strong> ${info.carryOn.sizeLimit}</p>`;
        if (info.carryOn.measurementNote) {
            html += `<p class="small-note">${info.carryOn.measurementNote} 
                         <a href="${info.carryOnPackingTipsUrl}" target="_blank" rel="noopener noreferrer">Tips to pack like a pro</a>.
                       </p>`;
        }
        if (info.carryOn.smartBagsNote) {
            html += `<p class="small-note">For Smart bags, Self-Propelled bags, eBags, and bags that charge devices, see the 
                         <a href="${info.batteriesElectronicsPageUrl}" target="_blank" rel="noopener noreferrer">Batteries and Electronics page</a>.
                       </p>`;
        }
    }

    if (info.personalItem) {
        html += `<h4>Personal Item</h4>
                 <p>${info.personalItem.description}</p>`;
        if (info.personalItem.medicallyNecessary) html += `<p>${info.personalItem.medicallyNecessary}</p>`;
    }
    
    if (info.specialCarryOnItems && info.specialCarryOnItems.items && info.specialCarryOnItems.items.length > 0) {
        html += `<h4>Special Carry-on Items</h4>`;
        if (info.specialCarryOnItems.note) html += `<p class="small-note">${info.specialCarryOnItems.note}</p>`;
        html += `<ul>`;
        info.specialCarryOnItems.items.forEach(item => html += `<li>${item}</li>`);
        html += `</ul>`;
    }

    if (info.exemptFromCarryOnLimit && info.exemptFromCarryOnLimit.length > 0) {
        html += `<h4>Items Not Counting Towards Carry-on Limit:</h4><ul>`;
        info.exemptFromCarryOnLimit.forEach(item => {
            let listItem = item;
            if (item.includes("strollers")) { 
                listItem = item.replace("strollers (space availability; battery link for strollers with power).", 
                                       `strollers (space availability; see <a href="${info.batteriesElectronicsPageUrl}" target="_blank" rel="noopener noreferrer">Batteries and Electronics page</a> if the stroller has a battery or power bank).`);
            }
            html += `<li>${listItem}</li>`;
        });
        html += `</ul>`;
        if (info.tsaMedicalUrl) {
            html += `<p class="small-note">For medical items, visit the <a href="${info.tsaMedicalUrl}" target="_blank" rel="noopener noreferrer">TSA website</a>.</p>`;
        }
    }
    html += `<hr>`;

    if (info.checkedBaggage) {
        html += `<h3>Checked Baggage</h3>`;
        if (info.checkedBaggage.paymentMethods) html += `<p>Fees can be paid: ${info.checkedBaggage.paymentMethods}.</p>`;
        
        if (info.checkedBaggage.feesTable && info.checkedBaggage.feesTable.length > 0) {
            html += `<h4>Standard Bag Fees:</h4>
                       <table class="rules-table">
                           <thead><tr><th>Item</th><th>Fee</th></tr></thead>
                           <tbody>`;
            info.checkedBaggage.feesTable.forEach(item => {
                html += `<tr><td>${item.item}</td><td>${item.fee}</td></tr>`;
            });
            html += `   </tbody></table>`;
        }
        if (info.checkedBaggage.feesNote) {
            html += `<p class="small-note">${info.checkedBaggage.feesNote} 
                         <a href="${info.baggageExceptionsUrl}" target="_blank" rel="noopener noreferrer">Exempt items</a>. 
                         <a href="${info.baggageFeeWaiversUrl}" target="_blank" rel="noopener noreferrer">Fee waivers</a>.
                       </p>`;
        }
        if (info.checkedBaggage.oversizeOverweightFeesTable && info.checkedBaggage.oversizeOverweightFeesTable.length > 0) {
            html += `<h4>Oversized or Overweight Baggage Fees:</h4>
                       <table class="rules-table">
                           <thead><tr><th>Condition</th><th>Fee</th></tr></thead>
                           <tbody>`;
            info.checkedBaggage.oversizeOverweightFeesTable.forEach(item => {
                html += `<tr><td>${item.condition}</td><td>${item.fee}</td></tr>`;
            });
            html += `   </tbody></table>`;
        }
        if (info.checkedBaggage.oversizeOverweightNote) html += `<p class="small-note">${info.checkedBaggage.oversizeOverweightNote}</p>`;
        if (info.checkedBaggage.maxLimits) {
            html += `<p><strong>Maximum Limits:</strong> ${info.checkedBaggage.maxLimits} 
                         Contact Cargo at ${info.cargoContactNumber}. 
                         Exception for <a href="${info.musicalInstrumentsPageUrl}" target="_blank" rel="noopener noreferrer">musical instruments</a>.
                       </p>`;
        }
        if (info.checkedBaggage.smartBagsNote) {
            html += `<p class="small-note">For Smart bags, see the <a href="${info.batteriesElectronicsPageUrl}" target="_blank" rel="noopener noreferrer">Batteries and Electronics page</a>.</p>`;
        }
        if (info.sportingEquipmentUrl) { 
             html += `<p class="small-note">For sporting equipment exceptions, see <a href="${info.sportingEquipmentUrl}" target="_blank" rel="noopener noreferrer">sporting equipment page</a>.</p>`;
        }
        html += `<hr>`;
    }

    if (info.airportProcedures) {
        html += `<h3>Getting Your Bags to the Airport</h3>`;
        if (info.airportProcedures.acceptanceHoursVary) html += `<p>${info.airportProcedures.acceptanceHoursVary}</p>`;
        if (info.airportProcedures.arrivalSuggestion) {
            html += `<p>${info.airportProcedures.arrivalSuggestion} 
                         See <a href="${info.airportGuidesUrl}" target="_blank" rel="noopener noreferrer">airport guides</a> and <a href="${info.checkInCutOffTimesUrl}" target="_blank" rel="noopener noreferrer">check-in cut-off times</a>.
                       </p>`;
        }
        if (info.airportProcedures.acceptanceTimeLimit) html += `<p>${info.airportProcedures.acceptanceTimeLimit}</p>`;
        if (info.airportProcedures.specificAirportLimits) html += `<p class="small-note">${info.airportProcedures.specificAirportLimits}</p>`;
        html += `<hr>`;
    }

    if (info.multipleFlights) {
        html += `<h3>Travel with Multiple Flights or Tickets</h3>`;
        if (info.multipleFlights.alaskaOnly) html += `<p><strong>Multiple Alaska/Partner Flights:</strong> ${info.multipleFlights.alaskaOnly}</p>`;
        if (info.multipleFlights.layover18Plus) html += `<p><strong>Layover 18+ Hours:</strong> ${info.multipleFlights.layover18Plus}</p>`;
        if (info.multipleFlights.multipleAirlines) html += `<p><strong>Multiple Airlines:</strong> ${info.multipleFlights.multipleAirlines.replace(info.reservationsContactNumber, `<a href="tel:${info.reservationsContactNumber.replace(/[^0-9]/g, '')}">${info.reservationsContactNumber}</a>`)}</p>`;
        if (info.multipleFlights.multipleTickets) html += `<p><strong>Multiple Tickets:</strong> ${info.multipleFlights.multipleTickets}</p>`;
        html += `<hr>`;
    }

    if (info.contactDetails) {
        html += `<h3>Contact Alaska Airlines</h3>`;
        if (info.contactDetails.chatText) html += `<p>${info.contactDetails.chatText}</p>`;
        if (info.contactDetails.chatNote) {
            html += `<p class="small-note">${info.contactDetails.chatNote} 
                         (<a href="${info.termsAndConditionsUrl}" target="_blank" rel="noopener noreferrer">Terms</a> | 
                         <a href="${info.privacyPolicyUrl}" target="_blank" rel="noopener noreferrer">Privacy</a>)
                       </p>`;
        }
        if (info.contactDetails.usCanada && info.contactDetails.usCanada.length > 0) {
            html += `<h4>Within US and Canada:</h4><ul>`;
            info.contactDetails.usCanada.forEach(dept => {
                html += `<li><strong>${dept.department}:</strong> ${dept.contact} <em>(${dept.hours || 'See notes'})</em><br><span class="small-note">${dept.notes || ''}</span></li>`;
            });
            html += `</ul>`;
        }
        if (info.contactDetails.corporateOffices && info.contactDetails.corporateOffices.length > 0) {
            html += `<h4>Corporate Offices:</h4><ul>`;
            info.contactDetails.corporateOffices.forEach(office => {
                html += `<li><strong>${office.name}:</strong> ${office.contact || ''} ${office.address}</li>`;
            });
            html += `</ul>`;
        }
        if (info.contactDetails.international) {
            html += `<h4>International (Outside US and Canada):</h4>
                       <p>${info.contactDetails.international.contact} <em>(${info.contactDetails.international.note})</em></p>`;
        }
    }
    
    placeholderElement.innerHTML = html;
}