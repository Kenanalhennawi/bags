
export const airChinaInfo = {
    baggagePageUrl: "https://www.airchina.ae/AE/GB/info/checked-baggage/",
    generalPacking: [
        "Baggage must be locked (unless special requirements apply).",
        "No other items may be attached to the outside of the baggage.",
        "Two or more pieces of baggage (inclusive) cannot be tied together and checked in as one piece of baggage.",
        "Bamboo/wicker baskets, string bags, straw rope, plastic bags, etc. may not be used as packaging for baggage.",
        "We recommend that you attach an information card to your checked baggage with at least your name and contact number so that we can contact you promptly if necessary."
    ],
    checkedBagRestrictions: {
        sizeOverall: "The total dimensions (length + width + height, including wheels and handles) of each piece of checked baggage may not exceed 203 cm or 80” and may not be less than 60 cm or 24”. Baggage that exceeds these size limits should be split up and checked in separately.",
        sizeFreeDomestic: "On domestic flights, each piece of free checked baggage cannot be more than 100 cm (39”) in length, 60 cm (24”) in width and 40 cm (16”) in height.",
        sizeFreeInternational: "For international/regional flights, the total dimensions (length + width + height, including wheels and handles) of each piece of free checked baggage may not exceed 158 cm or 62”.",
        excessSizeNote: "Excess baggage fees must be paid for checked baggage that exceeds the above size limits for free baggage. The size limits for checked baggage on domestic flights that form part of international carriage shall be as per the limits for checked baggage on international/regional flights.",
        weightPerPiece: "Each piece of checked baggage must not weigh less than 2 kg or 4 pounds. The weight of each piece of checked baggage must not exceed 32 kg or 70 pounds.",
        excessWeightNote: "The above weight limits for baggage are not free baggage allowances. You will need to pay excess baggage fees if your baggage exceeds your free baggage allowance. Baggage that exceeds the 32kg limit cannot be carried as checked baggage; it should be transported as cargo."
    },
    freeAllowanceConcept: "Free baggage allowances on Air China-operated flights are determined by either a 'Weight Concept' (typically for Domestic Routes in China, Mainland) or a 'Piece Concept' (for international/regional routes, including Hong Kong SAR, Macao SAR, and Taiwan region). The specific allowance depends on your route and fare class. Please refer to Air China's official website and documentation for detailed tables.",
    excessBaggageConcept: "Fee schedules for excess ordinary checked baggage and special baggage are detailed in Air China's official documents (often as Annexes) and can vary based on IATA World Area Divisions and whether the route is a 'Piece Concept' or 'Weight Concept' route. For domestic carriage under Weight Concept, excess is typically charged at 1.5% of the adult Economy Class one-way fare per additional kilogram.",
    contactDetails: { 
        callCenter: [
            { region: "Americas", contact: "0018008828122-4-3", hours: "Business Hours (Pacific Time): 06:00-21:00 Mon-Fri, 07:30-16:00 Sat, Sun & public holidays" },
            { region: "China", contact: "+86-10-95583 / +86-10-59281588", hours: "24/7" },
            { region: "Europe", contact: "Tel: +80086100999 (Multilingual). Tel: +34800000099 (Spain, Spanish service). Email: ca-europe@airchina.com", hours: "Chinese,German,Spanish,French,Italian,Russian: Mon-Sun 06:00-22:00(GMT); English: 24/7" },
            { region: "Japan", contact: "TEL: 0570-0-95583, FAX: 03-3501-1801 (Only in Japan)", hours: "09:00 - 18:00, 7 days a week" },
            { region: "Korea", contact: "TEL: +800-86-100-999", hours: "09:00 - 18:00, 7 days a week" },
            { region: "Australia", contact: "TEL: 1800-860-999 (Only in Australia)", hours: "10:30 - 20:00, 7 days a week" },
            { region: "Singapore", contact: "800 86 100 999 (International number, dial international prefix first)", hours: "08:30 - 18:00, 7 days a week" },
            { region: "Hong Kong, China", contact: "00680086100999 (Only for Hong Kong communications services)", hours: "Mon-Sun: 08:30-18:00" },
            { region: "Manila", contact: "TEL: +800-86-100-999", hours: "08:30-18:00, 7 days a week" },
            { region: "The United Arab Emirates", contact: "TEL: +800035704517", hours: "08:30-18:00, 7 days a week" },
            { region: "India", contact: "TEL: +8000501566", hours: "08:30-18:00, 7 days a week" }
        ],
        membersHotline: {
            contact: "Tel:+86-4006-100-666 | +86-95583 | +86-10-95583. Fax:(+8610)-59281560",
            emailOrdinary: "ffp@airchina.com",
            emailVip: "ffpvip@airchina.com",
            website: "https://ffp.airchina.com.cn, http://www.phoenixmiles.com",
            hours: "24 hours a day, seven days a week"
        },
        generalNote: "Depending on the telecommunications operator, dialing methods may vary in some countries and regions; charges may apply whether using mobile phone or landline."
    }
};

/**
 * Displays Air China baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayAirChinaInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Air China placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Air China.</p>";
        return;
    }

    const info = airChinaInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>View Air China (CA) Checked Baggage Information</h4>
                <p>For detailed baggage allowances, fees, and specific rules for your route, please visit the official Air China website.</p>
                <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT AIR CHINA BAGGAGE PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    html += `<h4>General Packing Requirements:</h4><ul>`;
    info.generalPacking.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>
        <h4>General Checked Baggage Restrictions:</h4>
        <ul>
            <li><strong>Overall Size Limits (per piece):</strong> ${info.checkedBagRestrictions.sizeOverall}</li>
            <li><strong>Free Baggage Size (Domestic):</strong> ${info.checkedBagRestrictions.sizeFreeDomestic}</li>
            <li><strong>Free Baggage Size (International/Regional):</strong> ${info.checkedBagRestrictions.sizeFreeInternational}</li>
            <li><em>${info.checkedBagRestrictions.excessSizeNote}</em></li>
            <li><strong>Weight Limits (per piece):</strong> ${info.checkedBagRestrictions.weightPerPiece}</li>
            <li><em>${info.checkedBagRestrictions.excessWeightNote}</em></li>
        </ul>
        <p><strong>Free Allowance & Excess Fees:</strong> ${info.freeAllowanceConcept}</p>
        <p><strong>Special Baggage & Excess Fees:</strong> ${info.excessBaggageConcept}</p>
    `;
    
    if (info.contactDetails) {
        html += `<hr style="margin: 20px 0;"><h4>Contact Air China (CA):</h4>`;
        
        if (info.contactDetails.callCenter && info.contactDetails.callCenter.length > 0) {
            html += `<h5>Call Center:</h5><ul>`;
            info.contactDetails.callCenter.forEach(cc => {
                html += `<li><strong>${cc.region}:</strong> ${cc.contact} (<em>Service Hours: ${cc.hours}</em>)</li>`;
            });
            html += `</ul>`;
            if (info.contactDetails.generalNote) {
                 html += `<p class="small-note">${info.contactDetails.generalNote}</p>`;
            }
        }

        if (info.contactDetails.membersHotline) {
            html += `<h5>PhoenixMiles Members Hotline:</h5><ul>`;
            const mh = info.contactDetails.membersHotline;
            html += `<li><strong>Tel:</strong> ${mh.contact}</li>`;
            html += `<li><strong>Fax:</strong> ${mh.fax}</li>`;
            html += `<li><strong>Email (Ordinary Card):</strong> ${mh.emailOrdinary}</li>`;
            html += `<li><strong>Email (VIP Card):</strong> ${mh.emailVip}</li>`;
            let websites = mh.website.split(',').map(ws => `<a href="${ws.trim()}" target="_blank" rel="noopener noreferrer">${ws.trim()}</a>`).join(', ');
            html += `<li><strong>Websites:</strong> ${websites}</li>`;
            html += `<li><em>Service Hours: ${mh.hours}</em></li>`;
            html += `</ul>`;
        }
    }
    
    placeholderElement.innerHTML = html;
}
