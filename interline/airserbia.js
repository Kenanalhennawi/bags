
export const airSerbiaInfo = {
    name: "Air Serbia (JU)",
    officialBaggagePageUrl: "https://www.airserbia.com/en/information/baggage",
    tsaLiquidsUrl: "https://www.tsa.gov/travel/security-screening/whatcanibring/all",
    musicalInstrumentsUrl: "https://www.airserbia.com/en/explore/services/baggage/musical-instruments",
    sportsEquipmentUrl: "https://www.airserbia.com/en/explore/services/baggage/sports-equipment",
    wheelchairAssistanceUrl: "https://www.airserbia.com/en/explore/services/baggage/wheelchair-and-other-mobility-aids",
    handLuggage: {
        allowance: "1 item, up to 8kg.",
        dimensions: "40 x 23 x 55 cm (Length x Width x Height).",
        placement: "Marked with a blue tag, placed in overhead compartment.",
        excessNote: "If dimensions/weight exceeded or more pieces carried, it will be accepted as checked baggage per policy and pricelist.",
        holdTransferNote: "May be transferred to hold due to limited cabin space; crew will place it by airstairs after landing. Remove hazardous substances, valuables, electronics, documents, medication before transfer.",
        prohibitedInHoldFromHand: [
            "Spare lithium-metal or lithium-ion batteries",
            "Matches or lighters",
            "Barometers or mercury thermometers",
            "Heat-producing objects - battery devices"
        ],
        usFlightsLiquids: {
            generalRule: "Liquids, gels, aerosols, pastes in containers up to 100ml. Larger containers not permitted, even if partially full.",
            packaging: "All containers in a transparent plastic bag (grooved/zip closure), max 1 liter volume. Bag must be closed, handed separately at security. One bag per passenger.",
            powderRestriction: "Powder-based substances > 350ml bought at airports not allowed on flights to New York, even in security bags.",
            dutyFreeBelgradeToUSA: "Liquids > 100ml from Belgrade Nikola Tesla Airport duty-free allowed if in transparent security bag on direct flights to New York/Chicago (purchased within 48hrs, invoice available). Non-scannable items not allowed.",
            dutyFreeOtherAirportsToUSA: "Duty-free items > 100ml from airports other than Belgrade not allowed as hand luggage to USA, even in security bags. If continuing journey in USA, transfer to checked baggage after picking it up at first US port of entry.",
            dutyFreePurchaseTiming: "Finish duty-free purchases up to 60 minutes before flight. Bags must not be opened before final destination."
        }
    },
    personalItem: {
        allowance: "1 small item, up to 4kg.",
        placement: "Under the seat in front of you.",
        examples: [
            "A purse or laptop bag",
            "A file case or briefcase",
            "A small backpack",
            "A sack with duty-free products",
            "A small camera",
            "Binoculars",
            "A box with possessions"
        ],
        additionalAllowed: [
            "A jacket or coat",
            "Food and drink for baby during flight",
            "Orthopaedic aids (regulatory standards)",
            "A walking stick"
        ],
        notSeparateItems: "Folders, tablets, mobile phones, another sack with duty-free, newspapers, books must be packed in handbag or additional luggage.",
        strollersWheelchairs: "Show folding pushchairs or wheelchairs at check-in/gate. Transported in hold free of charge."
    },
    checkedBaggage: {
        standardBag: {
            weight: "Up to 23kg.",
            dimensions: "Length + Width + Height = 158cm (max)."
        },
        xlBag: {
            weight: "Up to 32kg.",
            dimensions: "Length + Width + Height = 203cm (max).",
            includedIn: "All Business Class fares.",
            economyNote: "Can be purchased as additional baggage if in Economy Class."
        },
        generalNotes: [
            "Number of free bags depends on cabin, fare type, destination, and Etihad Guest membership tier.",
            "If not included in fare, additional baggage can be purchased."
        ],
        exceedingLimitsNote: "Baggage > 32kg and/or sum of dimensions > 203cm only as cargo. Exceptions (with prior Air Serbia approval): musical instruments, sports equipment, wheelchairs/mobility aids."
    },
    allowanceTables: [
        {
            title: "Within Europe and between Europe and the Middle East",
            fares: [
                { type: "Economy Light", personalItem: "1 bag up to 4kg", handLuggage: "1 bag up to 8kg", checkedBaggage: "For a fee" },
                { type: "Economy Standard", personalItem: "1 bag up to 4kg", handLuggage: "1 bag up to 8kg", checkedBaggage: "1 bag up to 23kg" },
                { type: "Economy Comfort", personalItem: "1 bag up to 4kg", handLuggage: "1 bag up to 8kg", checkedBaggage: "1 bag up to 23kg" },
                { type: "Business All Inclusive", personalItem: "1 bag up to 4kg", handLuggage: "2 bags up to 8kg each", checkedBaggage: "2 bags up to 32kg each" }
            ],
            infantNote: "Infants under 2 not entitled to hand luggage, except collapsible strollers/baby carriages (bassinet/carrycot) & baby food for flight."
        },
        {
            title: "Between Belgrade and the USA",
            fares: [
                { type: "Economy Class", personalItem: "1 bag up to 4kg", handLuggage: "1 bag up to 8kg", checkedBaggage: "2 bags up to 23kg each" },
                { type: "Business Class", personalItem: "1 bag up to 4kg", handLuggage: "1 bag up to 8kg", checkedBaggage: "2 bags up to 32kg each" }
            ],
            infantNote: "Infants under 2 not entitled to hand luggage, except collapsible strollers/baby carriages (bassinet/carrycot) & baby food for flight."
        },
        {
            title: "Between USA and other destinations via Belgrade",
            fares: [
                { type: "Economy Class", personalItem: "1 bag up to 4kg", handLuggage: "1 bag up to 8kg", checkedBaggage: "1 bag up to 23kg" },
                { type: "Business Class", personalItem: "1 bag up to 4kg", handLuggage: "1 bag up to 8kg", checkedBaggage: "2 bags up to 32kg each" }
            ],
            infantNote: "Infants under 2 not entitled to hand luggage, except collapsible strollers/baby carriages (bassinet/carrycot) & baby food for flight."
        },
        {
            title: "Between Belgrade and China",
            fares: [
                { type: "Economy Class", personalItem: "1 bag up to 4kg", handLuggage: "1 bag up to 8kg", checkedBaggage: "1 bag up to 23kg" },
                { type: "Business Class", personalItem: "1 bag up to 4kg", handLuggage: "2 bags up to 8kg each", checkedBaggage: "2 bags up to 32kg each" }
            ],
            infantNote: "Infants under 2 not entitled to hand luggage, except collapsible strollers/baby carriages (bassinet/carrycot) & baby food for flight."
        }
    ],
    usDotRegulations: { 
        title: "Regulations that apply for travel to/from the USA (US DOT order 2009-9-20)",
        points: [
            "The carrier on the first flight segment usually determines baggage rules for the entire journey (if they have US traffic rights & filed tariffs with DOT).",
            "For codeshare first flights, the Marketing Carrier's rules usually apply (if they have US economy rights & filed tariffs with DOT).",
            "Air Serbia has US traffic rights and filed tariffs; its rules usually apply when these conditions are met.",
            "For journeys starting/ending in US territory, all carriers must apply the same baggage policy and fees throughout (including return), regardless of stopovers.",
            "Excess/other baggage charges apply from check-in to the next stopover or baggage collection point. Re-checking incurs same charges.",
            "Each operating carrier's carry-on allowances apply to their flight segment in an interline itinerary.",
            "If another carrier is on the first flight segment, they can choose their rules, MSC rules, or another carrier's rules for the ticket. These chosen rules then apply to Air Serbia's flight if it's part of the itinerary.",
            "Applicable free baggage allowance, dimensions, weight, and fees (if any) for the first two checked bags and carry-on are shown on the e-ticket and email confirmation."
        ]
    },
    contactDetails: {
        contactCenter: {
            workingHours: "Every day from 06:00 - 23:00, except Sunday 06:00 – 02:00",
            workingHoursTimeZone: "Stated times are local (UTC+2)",
            peakCallTimesNote: "Information on peak call times may be available on the Air Serbia website to help you plan your call.",
            phoneNumbers: [
                { region: "Serbia", number: "0800 111 528", note: "The call is free for all Serbian networks" },
                { region: "USA and Canada", number: "+ 1 (718) 725 8642", noteSource: "*" },
                { region: "USA (Special Assistance - toll-free)", number: "+ 1 (888) 390 9847" },
                { region: "Australia", number: "+ 61 39 005 56 99", noteSource: "*" },
                { region: "Austria", number: "+ 43 720 77 53 38", noteSource: "*" },
                { region: "Bosnia and Herzegovina - Republika Srpska", number: "+ 387 (51) 981 281", noteSource: "*" },
                { region: "Belgium", number: "+ 32 (2) 7810158", noteSource: "*" },
                { region: "Croatia", number: "+ 385 18 000 240", noteSource: "*" },
                { region: "Czech Republic", number: "+ 42 023 40 92 522", noteSource: "*" },
                { region: "Denmark", number: "+45 33 22 31 41", noteSource: "*" },
                { region: "France", number: "+ 33 1 78 900 459", noteSource: "*" },
                { region: "Germany", number: "+ 4 96 920 756, + 4 96 920 956", noteSource: "*" },
                { region: "Italy", number: "+ 39 068 58 74034", noteSource: "*" },
                { region: "Netherlands", number: "+ 31 (20) 3690926", noteSource: "*" },
                { region: "Russia", number: "+7 925 102-23-69" },
                { region: "Slovenia", number: "+ 386 17 774 390", noteSource: "*" },
                { region: "Sweden", number: "+ 46 8 1241 00 58", noteSource: "*" },
                { region: "Switzerland", number: "+ 41 43 55 00 225", noteSource: "*" },
                { region: "United Kingdom", number: "+ 44 20 37 695 856", noteSource: "*" },
                { region: "Other countries", number: "+381 11 311 21 23", noteSource: "*" }
            ],
            hearingImpairment: {
                text: "If you have a hearing or speech impairment, you may contact Air Serbia US toll-free number via Telecommunications Relay Service (TRS).",
                trsLink: "https://www.fcc.gov/consumers/guides/telecommunications-relay-service-trs",
                trsLinkNote: "Opens external site in a new window. External site may or may not meet accessibility guidelines."
            },
            callChargeNoteKey: "*",
            callChargeNoteText: "(The call will be charged in accordance with the tariff of the network the call was made from)"
        },
        contactPrompt: "For more details or specific queries, please visit the official Air Serbia website or contact their customer service."
    }
};

/**
 * Displays Air Serbia baggage information in a modern card style, with all details.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayAirSerbiaInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Air Serbia placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Air Serbia.</p>";
        return;
    }

    const info = airSerbiaInfo;

    let html = `
    <div class="airline-info-card">
        <div class="airline-card-title">Air Serbia (JU)</div>
        <div class="airline-card-content">
            <div class="airline-card-row">
                <span class="airline-card-plane">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="#7ecbff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V21l2-1 2 1V13.5l8 2.5z"/>
                    </svg>
                </span>
                <div>
                    <div class="airline-card-cta-title">View Air Serbia (JU) Baggage Details</div>
                    <div class="airline-card-desc">
                        For detailed baggage allowances, fees, and to use their official calculator, please visit the Air Serbia website.
                    </div>
                </div>
            </div>
            <a href="${info.officialBaggagePageUrl}" target="_blank" class="airline-card-cta-btn">
                VISIT AIR SERBIA BAGGAGE PAGE
            </a>
        </div>
    </div>
    `;
         html += `
    <div class="airline-details-section">
        <!-- Allowance Tables -->
        ${info.allowanceTables.map(tableData => `
            <h4>${tableData.title}</h4>
            <table class="rules-table">
                <thead>
                    <tr>
                        <th>Fare type / Cabin</th>
                        <th>Personal item</th>
                        <th>Hand luggage</th>
                        <th>Checked baggage</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableData.fares.map(fare => `
                        <tr>
                            <td>${fare.type}</td>
                            <td>${fare.personalItem}</td>
                            <td>${fare.handLuggage}</td>
                            <td>${fare.checkedBaggage}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            ${tableData.infantNote ? `<p class="small-note">${tableData.infantNote}</p>` : ''}
        `).join('')}
        <hr>
        <!-- Hand Luggage Details -->
        <h3>Hand Luggage</h3>
        <p><strong>Allowance:</strong> ${info.handLuggage.allowance}</p>
        <p><strong>Dimensions:</strong> ${info.handLuggage.dimensions}</p>
        <p>${info.handLuggage.placement}</p>
        <p class="small-note"><strong>Excess:</strong> ${info.handLuggage.excessNote}</p>
        <p class="small-note"><strong>Transfer to Hold:</strong> ${info.handLuggage.holdTransferNote}</p>
        ${info.handLuggage.prohibitedInHoldFromHand && info.handLuggage.prohibitedInHoldFromHand.length > 0 ? `
            <h5>Items to remove if hand luggage is moved to hold:</h5>
            <ul>
                ${info.handLuggage.prohibitedInHoldFromHand.map(item => `<li>${item}</li>`).join('')}
            </ul>
        ` : ''}
        ${info.handLuggage.usFlightsLiquids ? `
            <h4>Hand Luggage on Flights to the USA</h4>
            <p><strong>Liquids General Rule:</strong> ${info.handLuggage.usFlightsLiquids.generalRule}</p>
            <p><strong>Packaging:</strong> ${info.handLuggage.usFlightsLiquids.packaging}</p>
            <p class="small-note">Visit the <a href="${info.tsaLiquidsUrl}" target="_blank" rel="noopener noreferrer">official TSA website</a> for detailed rules.</p>
            <p><strong>Powder Restriction (to New York):</strong> ${info.handLuggage.usFlightsLiquids.powderRestriction}</p>
            <p><strong>Duty-Free Purchase Timing:</strong> ${info.handLuggage.usFlightsLiquids.dutyFreePurchaseTiming}</p>
            <p><strong>Duty-Free from Belgrade to USA:</strong> ${info.handLuggage.usFlightsLiquids.dutyFreeBelgradeToUSA}</p>
            <p class="small-note"><strong>Duty-Free from Other Airports to USA / Continuing US Journeys:</strong> ${info.handLuggage.usFlightsLiquids.dutyFreeOtherAirportsToUSA}</p>
        ` : ''}
        <hr>
        <!-- Personal Item Details -->
        <h3>Personal Item</h3>
        <p><strong>Allowance:</strong> ${info.personalItem.allowance}</p>
        <p>${info.personalItem.placement}</p>
        ${info.personalItem.examples && info.personalItem.examples.length > 0 ? `
            <h5>Examples:</h5>
            <ul>
                ${info.personalItem.examples.map(item => `<li>${item}</li>`).join('')}
            </ul>
        ` : ''}
        ${info.personalItem.additionalAllowed && info.personalItem.additionalAllowed.length > 0 ? `
            <h5>Additionally Allowed Items:</h5>
            <ul>
                ${info.personalItem.additionalAllowed.map(item => `<li>${item}</li>`).join('')}
            </ul>
        ` : ''}
        ${info.personalItem.notSeparateItems ? `<p class="small-note">${info.personalItem.notSeparateItems}</p>` : ''}
        ${info.personalItem.strollersWheelchairs ? `<p class="small-note">${info.personalItem.strollersWheelchairs}</p>` : ''}
        <hr>
        <!-- Checked Baggage Details -->
        <h3>Checked Baggage</h3>
        <h4>Standard Bag:</h4>
        <p><strong>Weight:</strong> ${info.checkedBaggage.standardBag.weight}</p>
        <p><strong>Dimensions:</strong> ${info.checkedBaggage.standardBag.dimensions}</p>
        <h4>XL Bag:</h4>
        <p><strong>Weight:</strong> ${info.checkedBaggage.xlBag.weight}</p>
        <p><strong>Dimensions:</strong> ${info.checkedBaggage.xlBag.dimensions}</p>
        <p class="small-note">${info.checkedBaggage.xlBag.includedIn} ${info.checkedBaggage.xlBag.economyNote}</p>
        <h5>General Notes:</h5>
        <ul>
            ${info.checkedBaggage.generalNotes.map(note => `<li>${note}</li>`).join('')}
        </ul>
        <p class="small-note"><strong>Exceeding Limits:</strong> ${info.checkedBaggage.exceedingLimitsNote} 
            Links for exceptions: 
            <a href="${info.musicalInstrumentsUrl}" target="_blank" rel="noopener noreferrer">Musical Instruments</a>, 
            <a href="${info.sportsEquipmentUrl}" target="_blank" rel="noopener noreferrer">Sports Equipment</a>, 
            <a href="${info.wheelchairAssistanceUrl}" target="_blank" rel="noopener noreferrer">Wheelchair/Mobility Aids</a>.
        </p>
        <hr>
        <!-- US DOT Regulations -->
        <h3>${info.usDotRegulations.title}</h3>
        <ul>
            ${info.usDotRegulations.points.map(point => `<li>${point}</li>`).join('')}
        </ul>
        <hr>
        <!-- Contact Information Section -->
        <h3>Contact Air Serbia Call Centre</h3>
        <p><strong>Working Hours:</strong> ${info.contactDetails.contactCenter.workingHours} (${info.contactDetails.contactCenter.workingHoursTimeZone})</p>
        <p class="small-note">${info.contactDetails.contactCenter.peakCallTimesNote}</p>
        <h5>Phone Numbers:</h5>
        <ul>
            ${info.contactDetails.contactCenter.phoneNumbers.map(pn => `
                <li><strong>${pn.region}:</strong> ${pn.number} ${pn.note ? `<em>(${pn.note})</em>` : (pn.noteSource ? `<sup>${pn.noteSource}</sup>` : '')}</li>
            `).join('')}
        </ul>
        <p class="small-note"><sup>${info.contactDetails.contactCenter.callChargeNoteKey}</sup> ${info.contactDetails.contactCenter.callChargeNoteText}</p>
        <h4>For Passengers with Hearing or Speech Impairment:</h4>
        <p>${info.contactDetails.contactCenter.hearingImpairment.text} 
            <a href="${info.contactDetails.contactCenter.hearingImpairment.trsLink}" target="_blank" rel="noopener noreferrer">TRS Details</a>
            <em>(${info.contactDetails.contactCenter.hearingImpairment.trsLinkNote})</em>
        </p>
        <hr>
        <p>${info.contactDetails.contactPrompt}</p>
    </div>
    `;

    placeholderElement.innerHTML = html;
}

export { displayAirSerbiaInfo as displayAirserbiaInfo };