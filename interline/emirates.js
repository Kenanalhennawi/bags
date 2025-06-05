// interline/emirates.js
// --- FINAL & COMPLETE VERSION ---
// Contains all information for Emirates (EK), including free allowance, excess fees, and contact details.

// ##################################################################
// # START OF LARGE DATA OBJECT: emiratesInfo                     #
// ##################################################################
export const emiratesInfo = {
    baggagePageUrl: "https://www.emirates.com/us/english/before-you-fly/baggage/checked-baggage/",
    manageBookingUrl: "https://www.emirates.com/us/english/manage-booking/",

    // --- SECTION 1: Free Baggage Allowance ---
    weightConcept: {
        title: "Weight Concept - Free Allowance",
        description: "Applies to all routes, except when you travel to and from the Americas and Africa. You can check in as many bags as you like up to the total weight allowance for your travel class. Each individual bag must not weigh more than 32kg.",
        maxDimensions: "The total dimensions (length + width + height) of an individual bag should not exceed 300 cm (118 inches).",
        allowances: [
            { travelClass: 'Economy Class', special: '20 kg', saver: '25 kg*', flex: '30 kg', flexPlus: '35 kg' },
            { travelClass: 'Premium Economy', allowance: '35 kg' },
            { travelClass: 'Business Class', allowance: '40 kg' },
            { travelClass: 'First Class', allowance: '50 kg' }
        ],
        notes: [
            "*The allowance is 30 kg in Economy Saver for some routes and specific ticket issue dates."
        ]
    },
    pieceConcept: {
        title: "Piece Concept (The Americas and Africa) - Free Allowance",
        description: "Applies to flights to/from the Americas and flights to/from Africa. You can check in a specific number of bags, and each bag has a weight allowance.",
        maxDimensions: "The total dimensions (length + width + height) of each piece must not exceed 150 cm (59 inches).",
        routes: [
            {
                name: "To/from the Americas & Africa",
                note: "(Except flights within the Americas and between US & Europe)",
                allowances: [
                    { travelClass: "Economy Class", allowance: "One piece up to 23 kg for Special fares. Two pieces up to 23 kg each for Saver, Flex, and Flex Plus fares." },
                    { travelClass: "Premium Economy", allowance: "Two pieces up to 23 kg each." },
                    { travelClass: "Business Class", allowance: "Two pieces up to 32 kg each." },
                    { travelClass: "First Class", allowance: "Two pieces up to 32 kg each." }
                ]
            },
            {
                name: "Within the Americas and between US & Europe",
                note: "",
                allowances: [
                    { travelClass: "Economy Class", allowance: "One piece up to 23 kg for Special and Saver fares. Two pieces up to 23 kg each for Flex and Flex Plus fares." },
                    { travelClass: "Premium Economy", allowance: "Two pieces up to 23 kg each." },
                    { travelClass: "Business Class", allowance: "Two pieces up to 32 kg each." },
                    { travelClass: "First Class", allowance: "Two pieces up to 32 kg each." }
                ]
            }
        ]
    },
    
    // --- SECTION 2: Excess Baggage Fees (All new details are here) ---
    excessBaggage: {
        title: "Excess Baggage Fees",
        weightConcept: {
            title: "Purchasing Additional Weight (Weight Concept)",
            notes: [
                "Get a 50% to 60% discount on the check-in amount if you buy baggage in advance online (up to 4 hours before departure).",
                "You can buy extra baggage allowance in blocks of 5kg, up to a maximum of 50kg."
            ],
            rates: {
                headers: ["From / To", "Middle East / South Asia", "Africa", "Far East", "Europe*", "Australia & NZ"],
                rows: [
                    { from: "Middle East / South Asia", to_ME_SA: "USD 15", to_Africa: "USD 25", to_FarEast: "USD 25", to_Europe: "USD 25", to_AUNZ: "USD 40" },
                    { from: "Far East", to_ME_SA: "USD 25", to_Africa: "USD 30", to_FarEast: "USD 15", to_Europe: "USD 30", to_AUNZ: "USD 30" },
                    { from: "Europe*", to_ME_SA: "USD 25", to_Africa: "USD 30", to_FarEast: "USD 30", to_Europe: "USD 40", to_AUNZ: "USD 50" },
                    { from: "Australia & New Zealand", to_ME_SA: "USD 40", to_Africa: "USD 50", to_FarEast: "USD 30", to_Europe: "USD 50", to_AUNZ: "USD 15" }
                ],
                footnote: "*$15 per kilogram for travel between Larnaca and Malta"
            },
            regionalClassification: [
                { region: "Middle East", countries: "Bahrain, Iran, Iraq, Jordan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, UAE, Israel" },
                { region: "South Asia", countries: "Afghanistan, Bangladesh, India, Maldives, Pakistan, Sri Lanka, Nepal, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan" },
                { region: "Africa", countries: "Algeria, Angola, Cote D’Ivoire, Egypt, Ethiopia, Ghana, Guinea, Kenya, Libya, Madagascar, Mauritius, Morocco, Nigeria, Senegal, Seychelles, South Africa, Sudan, Tanzania, Tunisia, Uganda, Zambia, Zimbabwe, Congo, Djibouti, Eritrea, Somalia, South Sudan" },
                { region: "Europe", countries: "Austria, Belgium, Croatia, Cyprus, Czech Republic, Denmark, France, Germany, Greece, Hungary, Ireland, Italy, Malta, Netherlands, Norway, Poland, Portugal, Russia, Spain, Sweden, Switzerland, Türkiye, Ukraine, United Kingdom, Armenia, Azerbaijan, Bosnia, Bulgaria, Georgia, Macedonia, Rep. of Montenegro, Romania, Serbia, Slovakia, Finland" },
                { region: "Far East", countries: "Cambodia, China, Hong Kong, Indonesia, Japan, Malaysia, Myanmar, Philippines, Singapore, South Korea, Taiwan, Thailand, Vietnam" }
            ]
        },
        pieceConcept: {
            title: "Purchasing Additional Pieces (Piece Concept)",
            notes: [
                "Get a 35% to 50% discount if you buy in advance online (up to 4 hours before departure), except for travel to/from Canada.",
                "Weight allowance for each additional piece is 23kg in Economy/Premium Economy, and 32kg in Business/First Class."
            ],
            rates: {
                headers: ["From / To", "Middle East / South Asia", "Africa", "Far East", "Europe", "Australia & NZ", "Americas"],
                rows: [
                    { from: "From/to Africa", to_ME_SA: "USD 200", to_Africa: "USD 200", to_FarEast: "USD 250", to_Europe: "USD 200", to_AUNZ: "USD 250", to_Americas: "USD 200" },
                    { from: "From/to Americas", to_ME_SA: "USD 225", to_Africa: "USD 200", to_FarEast: "USD 250", to_Europe: "USD 100", to_AUNZ: "USD 250", to_Americas: "USD 100" },
                    { from: "From/to Canada", to_ME_SA: "CAD 280", to_Africa: "CAD 250", to_FarEast: "CAD 300", to_Europe: "CAD 125", to_AUNZ: "CAD 300", to_Americas: "CAD 125" }
                ]
            },
            overweightOversizeFees: [
                { title: "Fees for pieces within your standard allowance", headers: ["", "Overweight", "Oversized", "Overweight & Oversized"], rows: [ { route: "Flights to/from Americas & Africa", ow: "USD 75", os: "USD 75", owos: "USD 150"}, { route: "Flights to/from Canada", ow: "CAD 95", os: "CAD 95", owos: "CAD 185"}] },
                { title: "Fees for additional pieces you purchase", headers: ["", "Overweight", "Oversized", "Overweight & Oversized"], rows: [ { route: "Flights to/from Americas & Africa", ow: "Piece Cost + USD 75", os: "Piece Cost + USD 75", owos: "Piece Cost + USD 150"}, { route: "Flights to/from Canada", ow: "Piece Cost + CAD 95", os: "Piece Cost + CAD 95", owos: "Piece Cost + CAD 185"}] }
            ],
            historicalRates: {
                title: "For tickets purchased before 21 December 2020:",
                note: "USD 200 per piece from/to the Americas, and for journeys originating from Africa.",
                overweightOversizeFees: [
                     { title: "Fees for pieces within standard allowance (before 21 Dec 2020)", headers: ["", "Overweight", "Oversized", "Overweight & Oversized"], rows: [ { route: "Flights to/from Americas & Africa", ow: "USD 75", os: "USD 250", owos: "USD 325"}] },
                     { title: "Fees for additional pieces (before 21 Dec 2020)", headers: ["", "Overweight", "Oversized", "Overweight & Oversized"], rows: [ { route: "Flights to/from Americas & Africa", ow: "USD 275", os: "USD 325", owos: "USD 400"}] }
                ]
            }
        }
    },

    // --- SECTION 3: Special Categories & Contact Info ---
    specialCategories: [
        { title: "Passengers with Disabilities", details: [ "May check a fully collapsible wheelchair.", "May check braces or crutches.", "Passengers dependent on a portable dialysis machine are entitled to check one machine and its associated equipment free of charge." ] },
        { title: "Passengers with Infants (under 2)", details: [ "Allowed one cabin bag (up to 5 kg) and one checked bag (up to 10 kg) on Weight Concept routes.", "Allowed one cabin bag (up to 5 kg) on Piece Concept routes.", "One fully collapsible stroller, infant's carrycot, or infant's car seat may be carried free of charge if space is available." ] },
        { title: "Sports Equipment", details: [ "Accepted as part of standard baggage allowance.", "Items >300cm must be sent as cargo.", "Contact airline 24 hours in advance for bicycles." ] },
        { title: "Pets", details: [ "Not permitted in the cabin (exception for falcons on some routes).", "Carried as cargo or as checked baggage in the hold.", "Charges apply based on the combined weight and size of the animal and its cage." ] },
        { title: "Musical Instruments", details: [ "No special free baggage allowance.", "Handled as normal checked or cabin baggage or transported on a paid-for seat." ] }
    ],
    contactDetails: {
        departments: [
            { name: "Emirates Contact Centre", phone: "+971 600 555555" }
        ]
    }
};
// ##################################################################
// # END OF DATA OBJECT                                             #
// ##################################################################


// ##################################################################
// # START OF DISPLAY FUNCTION                                      #
// ##################################################################
/**
 * Displays Emirates baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayEmiratesInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Emirates placeholder not found for displaying info.");
        return;
    }

    const info = emiratesInfo;
    let html = "";

    // CTA Section
    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>View Your Specific Emirates Baggage Allowance</h4>
                <p>To check the baggage rules for your journey and see extra baggage costs, visit the official Emirates baggage information page.</p>
                <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW BAGGAGE FEES</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    // Free Allowance Section
    html += `<h3>Free Baggage Allowance</h3>`;
    // Weight Concept - Free
    const wc = info.weightConcept;
    html += `<h4>${wc.title}</h4><p>${wc.description}</p><p class="small-note"><strong>Dimensions:</strong> ${wc.maxDimensions}</p>`;
    html += `<table class="rules-table"><thead><tr><th>Class</th><th>Special</th><th>Saver</th><th>Flex</th><th>Flex Plus</th></tr></thead><tbody>`;
    wc.allowances.forEach(item => {
        if(item.allowance) html += `<tr><td><strong>${item.travelClass}</strong></td><td colspan="4">${item.allowance}</td></tr>`;
        else html += `<tr><td><strong>${item.travelClass}</strong></td><td>${item.special}</td><td>${item.saver}</td><td>${item.flex}</td><td>${item.flexPlus}</td></tr>`;
    });
    html += `</tbody></table>`;
    if(wc.notes) wc.notes.forEach(note => html += `<p class="small-note">${note}</p>`);

    // Piece Concept - Free
    const pc = info.pieceConcept;
    html += `<hr style="margin: 20px 0;"><h4>${pc.title}</h4><p>${pc.description}</p><p class="small-note"><strong>Dimensions:</strong> ${pc.maxDimensions}</p>`;
    pc.routes.forEach(route => {
        html += `<h5>${route.name} <span class="small-note">${route.note}</span></h5>`;
        html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance</th></tr></thead><tbody>`;
        route.allowances.forEach(item => html += `<tr><td><strong>${item.travelClass}</strong></td><td>${item.allowance}</td></tr>`);
        html += `</tbody></table>`;
    });
    
    // Excess Baggage Fees Section
    if(info.excessBaggage) {
        html += `<hr style="margin: 25px 0; border-color: #FF7A00;"><h3>${info.excessBaggage.title}</h3>`;
        // Excess - Weight
        const exWc = info.excessBaggage.weightConcept;
        html += `<h4>${exWc.title}</h4>`;
        exWc.notes.forEach(note => html += `<p>${note}</p>`);
        html += `<h5>At the Airport Rates (USD per kg)</h5>`;
        html += `<table class="rules-table"><thead><tr>${exWc.rates.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        exWc.rates.rows.forEach(row => html += `<tr><td><strong>${row.from}</strong></td><td>${row.to_ME_SA}</td><td>${row.to_Africa}</td><td>${row.to_FarEast}</td><td>${row.to_Europe}</td><td>${row.to_AUNZ}</td></tr>`);
        html += `</tbody></table><p class="small-note">${exWc.rates.footnote}</p>`;
        html += `<h5>Regional Classifications</h5>`;
        exWc.regionalClassification.forEach(r => html += `<p class="small-note"><strong>${r.region}:</strong> ${r.countries}</p>`);

        // Excess - Piece
        const exPc = info.excessBaggage.pieceConcept;
        html += `<hr><h4>${exPc.title}</h4>`;
        exPc.notes.forEach(note => html += `<p>${note}</p>`);
        html += `<h5>At the Airport Rates (per additional piece)</h5>`;
        html += `<table class="rules-table"><thead><tr>${exPc.rates.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        exPc.rates.rows.forEach(row => html += `<tr><td><strong>${row.from}</strong></td><td>${row.to_ME_SA || '-'}</td><td>${row.to_Africa || '-'}</td><td>${row.to_FarEast || '-'}</td><td>${row.to_Europe || '-'}</td><td>${row.to_AUNZ || '-'}</td><td>${row.to_Americas || '-'}</td></tr>`);
        html += `</tbody></table>`;
        
        exPc.overweightOversizeFees.forEach(tableInfo => {
             html += `<h5>${tableInfo.title}</h5>`;
             html += `<table class="rules-table"><thead><tr>${tableInfo.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
             tableInfo.rows.forEach(row => html += `<tr><td><strong>${row.route}</strong></td><td>${row.ow}</td><td>${row.os}</td><td>${row.owos}</td></tr>`);
             html += `</tbody></table>`;
        });
        
        // Historical rates for Piece Concept
        if(exPc.historicalRates) {
            html += `<hr><h5>${exPc.historicalRates.title}</h5><p class="small-note">${exPc.historicalRates.note}</p>`;
            exPc.historicalRates.overweightOversizeFees.forEach(tableInfo => {
                html += `<h6>${tableInfo.title}</h6>`;
                html += `<table class="rules-table"><thead><tr>${tableInfo.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
                tableInfo.rows.forEach(row => html += `<tr><td><strong>${row.route}</strong></td><td>${row.ow}</td><td>${row.os}</td><td>${row.owos}</td></tr>`);
                html += `</tbody></table>`;
            });
        }
    }

    // Special Categories
    if(info.specialCategories) {
        html += `<hr style="margin: 25px 0; border-color: #FF7A00;"><h3>Special Baggage & Other Items</h3>`;
        info.specialCategories.forEach(category => {
            html += `<h4>${category.title}</h4><ul>`;
            category.details.forEach(detail => html += `<li>${detail}</li>`);
            html += `</ul>`;
        });
    }

    // Contact Information
    if(info.contactDetails && info.contactDetails.departments) {
        html += `<hr style="margin: 20px 0;"><h3>Contact Information</h3>`;
        info.contactDetails.departments.forEach(dept => {
            html += `<h4>${dept.name}</h4><ul>`;
            if (dept.phone) html += `<li><strong>Phone:</strong> ${dept.phone}</li>`;
            html += `</ul>`;
        });
    }

    placeholderElement.innerHTML = html;
}