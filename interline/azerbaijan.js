
/**
 * Validates the Azerbaijan Airlines info object structure
 * @param {Object} info - The info object to validate
 * @returns {boolean} - Whether the info object is valid
 */
function validateAzerbaijanInfo(info) {
    if (!info || typeof info !== 'object') return false;
    const requiredFields = ['name', 'ctaTitle', 'ctaText', 'ctaButtonText', 'officialSiteUrl'];
    return requiredFields.every(field => info[field] && typeof info[field] === 'string');
}
export const azerbaijanAirlinesInfo = {
    name: "Azerbaijan Airlines (AZAL)",
    ctaTitle: "Azerbaijan Airlines (AZAL) Baggage Information",
    ctaText: "For the most current details on baggage allowances, fees, and specific conditions for your AZAL flight, please visit their official website or use their booking management tools.",
    ctaButtonText: "VISIT OFFICIAL AZAL SITE",
    officialSiteUrl: "https://www.azal.az/en/", 

    manageBookingUrl: "https://www.azal.az/en/#booking",
    onlineCheckInUrl: "https://www.azal.az/en/#checkin",
    callCenterNumber: "+994 (12) 598 88 80", 
    officialContactPageUrl: "https://www.azal.az/en/contact-us/",

    handLuggage: {
        title: "Baggage allowance in the cabin of the aircraft (Hand Luggage)",
        weight: "Up to 10 kg (one piece).",
        dimensions: "Size in three dimensions must not exceed 118 cm (55 cm x 40 cm x 23 cm).",
        allowanceByClass: [
            { cabin: "Premium Economy passengers", pieces: "2 pieces" },
            { cabin: "Business Class passengers", pieces: "2 pieces" },
            { cabin: "Economy Class passengers", pieces: "1 piece" }
        ],
        additionalItems: "Additionally, the following items may be carried in a cabin: handbags, briefcases, and portable computer."
    },
    checkedBaggageFees: {
        title: "Checked Baggage: Size, Weight, and Overweight/Oversize Fees for Different Directions",
        categories: [
            {
                name: "Europe and the United Kingdom",
                additionalPiece: {
                    description: "Each additional baggage item must not exceed 23 kg. Total linear dimensions (H x W x L) must not exceed 158 cm.",
                    fee: "80 EUR / 85 USD / 75 GBP"
                },
                oversize: [
                    { dimensions: "Dimensions between 158 cm and 203 cm", fee: "80 EUR / 85 USD / 75 GBP (additional fee)" },
                    { dimensions: "Dimensions exceeding 203 cm", fee: "160 EUR / 170 USD / 150 GBP (additional fee)" }
                ],
                overweight: {
                    description: "Weight over 23 kg but not more than 32 kg",
                    fee: "80 EUR / 85 USD / 75 GBP (additional fee)"
                }
            },
            {
                name: "USA and China",
                additionalPiece: {
                    description: "Each additional baggage item must not exceed 23 kg. Total linear dimensions (H x W x L) must not exceed 158 cm.",
                    fee: "150 EUR / 160 USD"
                },
                oversize: [
                    { dimensions: "Dimensions between 158 cm and 203 cm", fee: "150 EUR / 160 USD (additional fee)" },
                    { dimensions: "Dimensions exceeding 203 cm", fee: "300 EUR / 320 USD (additional fee)" }
                ],
                overweight: {
                    description: "Weight over 23 kg but not more than 32 kg",
                    fee: "150 EUR / 160 USD (additional fee)"
                }
            },
            {
                name: "Other Destinations",
                additionalPiece: {
                    description: "Each additional baggage item must not exceed 23 kg. Total linear dimensions (H x W x L) must not exceed 158 cm.",
                    fee: "80 EUR / 85 USD / 75 GBP"
                },
                oversize: [
                    { dimensions: "Dimensions between 158 cm and 203 cm", fee: "70 EUR / 75 USD / 290 AED / 285 SAR / 24 KWD (additional fee)" },
                    { dimensions: "Dimensions exceeding 203 cm", fee: "140 EUR / 150 USD / 580 AED / 570 SAR / 48 KWD (additional fee)" }
                ],
                overweight: {
                    description: "Weight over 23 kg but not more than 32 kg",
                    fee: "140 EUR / 150 USD / 580 AED / 570 SAR / 48 KWD (additional fee)"
                }
            }
        ]
    },
    additionalInfoSection: { 
        title: "Additional Information",
        children: {
            under2: "Children under 2 years of age traveling on a parent's lap without a separate seat are allowed 1 free baggage item weighing up to 10 kg, with a total linear dimension not exceeding 115 cm.",
            age2to12: "For children aged 2 to 12 years, the baggage allowance is the same as for adult passengers.",
            itemsNeededDuringFlight: [
                "Baby food for the duration of the flight",
                "Travel cradle for infants/children under 2 years",
                "Lightweight foldable stroller for infants/children under 2 years (transported in the aircraft's cargo hold)"
            ]
        },
        currencyAccepted: "All baggage payments (EUR, AED, USD, GBP, SAR, KWD – depending on the departure country) are made in the local currency at the official exchange rate.",
        extraChargesNote: "Additional charges apply for both within the allowance limits and for each additional baggage item.",
        strollersWheelchairs: "All types of baby strollers and wheelchairs are transported in the cargo hold and are accepted free of charge in addition to the standard baggage allowance.",
        azalMiles: "AZAL Miles Platinum and Gold members have the opportunity to get 1 PC of baggage not exceeding 23 kg free of charge in accordance with the current rules and conditions of AZAL Miles program on the flights of Azerbaijan Airlines."
    },
    purchaseMethods: {
        title: "How to Purchase Additional Baggage",
        methods: [
            { 
                methodText: "Via www.azal.az:",
                details: [
                    { text: "While booking your tickets"}, 
                    { text: "Through Manage My Booking - no later than 1 hour before departure", linkKey: "manageBookingUrl", linkText: "Manage My Booking" },
                    { text: "During online check-in - from 48 hours up to 4 hours before departure", linkKey: "onlineCheckInUrl", linkText: "online check-in" }
                ] 
            },
            { 
                methodText: "Through the Call Center:",
                details: ["If more than 4 hours remain before departure and online check-in has not been completed"],
                isCallCenter: true
            },
            { 
                methodText: "At the airport check-in desk:", 
                details: ["Before check-in closes and if online check-in hasn't been completed"] 
            }
        ],
        costEffectiveNote: "The most cost-effective way is via www.azal.az."
    },
    contactDetails: {
        mainContactPromptTemplate: "For further inquiries or assistance, please contact the AZAL Call Center at [CALL_CENTER_LINK] or visit the [CONTACT_PAGE_LINK]."
    }
};



/**
 * Displays Azerbaijan Airlines (AZAL) baggage information.
 * @param {HTMLElement} placeholderElement - The DOM element to inject HTML into.
 */
export function displayAzerbaijanAirlinesInfo(placeholderElement) {
    if (!placeholderElement || !(placeholderElement instanceof HTMLElement)) {
        console.error("Invalid placeholder element provided for Azerbaijan Airlines info display");
        return;
    }

    placeholderElement.innerHTML = '<div class="loading-spinner" role="status" aria-label="Loading Azerbaijan Airlines information">Loading...</div>';

    const info = azerbaijanAirlinesInfo;

    if (!validateAzerbaijanInfo(info)) {
        placeholderElement.innerHTML = `
            <div class="error-message" role="alert">
                <p>Error: Unable to display Azerbaijan Airlines information due to invalid data structure.</p>
                <p>Please try refreshing the page or contact support if the issue persists.</p>
            </div>`;
        return;
    }

    let html = '<div class="azerbaijan-airlines-info" role="region" aria-label="Azerbaijan Airlines Baggage Information">';

    if (info.ctaTitle && info.ctaText && info.ctaButtonText && info.officialSiteUrl) {
        html += `
            <section class="calculator-cta-section" aria-labelledby="cta-title">
                <span class="calculator-cta-icon" aria-hidden="true">✈️</span>
                <div class="calculator-cta-content">
                    <h4 id="cta-title">${info.ctaTitle}</h4>
                    <p>${info.ctaText}</p>
                    <a href="${info.officialSiteUrl}" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       class="calculator-cta-button"
                       aria-label="Visit official Azerbaijan Airlines website">
                        ${info.ctaButtonText}
                    </a>
                </div>
            </section>
            <hr aria-hidden="true">`;
    }

    if (info.handLuggage) {
        html += `
            <section class="hand-luggage-section" aria-labelledby="hand-luggage-title">
                <h3 id="hand-luggage-title">${info.handLuggage.title || 'Cabin Baggage'}</h3>
                <div class="hand-luggage-details">
                    <p><strong>Weight:</strong> ${info.handLuggage.weight}</p>
                    <p><strong>Dimensions:</strong> ${info.handLuggage.dimensions}</p>`;

        if (info.handLuggage.allowanceByClass?.length > 0) {
            html += `
                <div class="allowance-by-class">
                    <h4>Allowance by Class:</h4>
                    <ul class="class-allowance-list">`;
            info.handLuggage.allowanceByClass.forEach(item => {
                html += `<li><strong>${item.cabin}:</strong> ${item.pieces}</li>`;
            });
            html += `</ul></div>`;
        }

        if (info.handLuggage.additionalItems) {
            html += `<p class="small-note" role="note">${info.handLuggage.additionalItems}</p>`;
        }
        html += `</div></section><hr aria-hidden="true">`;
    }

    if (info.checkedBaggageFees?.categories?.length > 0) {
        html += `
            <section class="checked-baggage-section" aria-labelledby="checked-baggage-title">
                <h3 id="checked-baggage-title">${info.checkedBaggageFees.title || 'Checked Baggage Fees'}</h3>`;

        info.checkedBaggageFees.categories.forEach((cat, index) => {
            html += `
                <div class="baggage-category" aria-labelledby="category-${index}">
                    <h4 id="category-${index}">${cat.name}</h4>`;

            if (cat.additionalPiece) {
                html += `
                    <div class="additional-piece-info">
                        <p><strong>Additional Piece:</strong> ${cat.additionalPiece.fee}</p>
                        <p class="small-note" role="note">${cat.additionalPiece.description}</p>
                    </div>`;
            }

            if (cat.oversize?.length > 0) {
                html += `
                    <div class="oversize-fees">
                        <h5>Oversize Fees (Additional):</h5>
                        <ul class="oversize-list">`;
                cat.oversize.forEach(os => {
                    html += `<li>${os.dimensions}: ${os.fee}</li>`;
                });
                html += `</ul></div>`;
            }

            if (cat.overweight) {
                html += `
                    <div class="overweight-info">
                        <p><strong>Overweight Fee (Additional):</strong> ${cat.overweight.fee}</p>
                        <p class="small-note" role="note">${cat.overweight.description}</p>
                    </div>`;
            }
            html += `</div>`;
        });
        html += `</section><hr aria-hidden="true">`;
    }

    if (info.additionalInfoSection) {
        html += `
            <section class="additional-info-section" aria-labelledby="additional-info-title">
                <h3 id="additional-info-title">${info.additionalInfoSection.title || 'Additional Information'}</h3>`;

        if (info.additionalInfoSection.children) {
            html += `
                <div class="children-info">
                    <h4>For Children:</h4>
                    <p><strong>Under 2 years (on lap):</strong> ${info.additionalInfoSection.children.under2}</p>
                    <p><strong>Ages 2-12:</strong> ${info.additionalInfoSection.children.age2to12}</p>`;

            if (info.additionalInfoSection.children.itemsNeededDuringFlight?.length > 0) {
                html += `
                    <div class="flight-items">
                        <p>Items needed during flight (may be brought in addition to free allowance):</p>
                        <ul class="flight-items-list">`;
                info.additionalInfoSection.children.itemsNeededDuringFlight.forEach(item => {
                    html += `<li>${item}</li>`;
                });
                html += `</ul></div>`;
            }
            html += `</div>`;
        }

        const additionalInfoItems = [
            { key: 'currencyAccepted', label: 'Currency for Baggage Payment' },
            { key: 'extraChargesNote', label: 'Extra Charges Note' },
            { key: 'strollersWheelchairs', label: 'Strollers and Wheelchairs' },
            { key: 'azalMiles', label: 'For AZAL Miles Members' }
        ];

        additionalInfoItems.forEach(item => {
            if (info.additionalInfoSection[item.key]) {
                html += `<p><strong>${item.label}:</strong> ${info.additionalInfoSection[item.key]}</p>`;
            }
        });

        html += `</section><hr aria-hidden="true">`;
    }

    if (info.purchaseMethods?.methods?.length > 0) {
        html += `
            <section class="purchase-methods-section" aria-labelledby="purchase-methods-title">
                <h3 id="purchase-methods-title">${info.purchaseMethods.title || 'How to Purchase Additional Baggage'}</h3>`;

        if (info.purchaseMethods.costEffectiveNote) {
            html += `<p class="small-note" role="note">${info.purchaseMethods.costEffectiveNote}</p>`;
        }

        html += `<ul class="purchase-methods-list">`;

        info.purchaseMethods.methods.forEach((pm, index) => {
            let methodDisplay = pm.methodText;

            if (pm.isCallCenter && info.callCenterNumber) {
                const formattedNumber = info.callCenterNumber.replace(/\s|\(|\)/g, '');
                methodDisplay = `Through the Call Center at <a href="tel:${formattedNumber}" aria-label="Call Azerbaijan Airlines at ${info.callCenterNumber}">${info.callCenterNumber}</a>:`;
            } else if (pm.methodText.includes("www.azal.az") && info.officialSiteUrl) {
                methodDisplay = `Via <a href="${info.officialSiteUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit Azerbaijan Airlines website">www.azal.az</a>:`;
            }

            html += `
                <li class="purchase-method-item">
                    <strong>${methodDisplay}</strong>`;

            if (pm.details?.length > 0) {
                html += `<ul class="purchase-method-details">`;
                pm.details.forEach(detailItem => {
                    if (typeof detailItem === 'string') {
                        html += `<li>${detailItem}</li>`;
                    } else if (typeof detailItem === 'object' && detailItem.text) {
                        let detailHtml = detailItem.text;
                        if (detailItem.linkKey && detailItem.linkText && info[detailItem.linkKey]) {
                            const linkTag = `<a href="${info[detailItem.linkKey]}" target="_blank" rel="noopener noreferrer">${detailItem.linkText}</a>`;
                            detailHtml = detailHtml.includes(detailItem.linkText) 
                                ? detailHtml.replace(detailItem.linkText, linkTag)
                                : `${detailHtml} (${linkTag})`;
                        }
                        html += `<li>${detailHtml}</li>`;
                    }
                });
                html += `</ul>`;
            }
            html += `</li>`;
        });

        html += `</ul></section>`;
    }

    if (info.contactDetails?.mainContactPromptTemplate) {
        const callCenterLinkHtml = info.callCenterNumber 
            ? `<a href="tel:${info.callCenterNumber.replace(/\s|\(|\)/g, '')}" aria-label="Call Azerbaijan Airlines at ${info.callCenterNumber}">${info.callCenterNumber}</a>`
            : "their call center";

        const contactPageLinkHtml = info.officialContactPageUrl
            ? `<a href="${info.officialContactPageUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit Azerbaijan Airlines contact page">official AZAL contact page</a>`
            : "their official website";

        let contactPromptHtml = info.contactDetails.mainContactPromptTemplate
            .replace("[CALL_CENTER_LINK]", callCenterLinkHtml)
            .replace("[CONTACT_PAGE_LINK]", contactPageLinkHtml);

        html += `
            <section class="contact-section" aria-labelledby="contact-title">
                <hr aria-hidden="true">
                <h4 id="contact-title">Contact Azerbaijan Airlines (AZAL)</h4>
                <p>${contactPromptHtml}</p>
            </section>`;
    }

    html += '</div>';
    placeholderElement.innerHTML = html;
}

export { displayAzerbaijanAirlinesInfo as displayAzerbaijanInfo };