
export const deltaInfo = {
    baggagePageUrl: "https://www.delta.com/us/en/baggage/overview#estimate",
    
    carryOnBaggageUrl: "https://www.delta.com/us/en/baggage/carry-on-baggage",
    militaryBaggageUrl: "https://www.delta.com/us/en/baggage/checked-baggage/military-baggage-allowance",
    medallionBaggageUrl: "https://www.delta.com/us/en/baggage/checked-baggage/medallion-baggage-allowance",
    amexBaggageUrl: "https://www.delta.com/us/en/baggage/checked-baggage/medallion-baggage-allowance#credit_card",

    standardFees: {
        title: "Common Domestic U.S. Baggage Fees",
        note: "Applies to Delta Comfort+ and Main Cabin customers without Medallion Status or other exceptions. Prices are each way for standard bags under 50 lbs (23 kg) and 62 inches (158 cm). Fees vary by specific route and fare class.",
        fees: [
            { item: "First Standard Checked Bag", fee: "$35 USD" },
            { item: "Second Standard Checked Bag", fee: "$45 USD" },
            { item: "Carry-On Bag", fee: "1 Free" },
            { item: "Personal Item", fee: "1 Free" }
        ]
    },

    exceptions: {
        title: "Fee Waivers & Exceptions",
        items: [
            { text: "Active U.S. Military members have special baggage allowances.", url: "https://www.delta.com/us/en/baggage/checked-baggage/military-baggage-allowance" },
            { text: "Delta SkyMiles Medallion Members receive waived bag fees depending on their tier.", url: "https://www.delta.com/us/en/baggage/checked-baggage/medallion-baggage-allowance" },
            { text: "Eligible Delta SkyMiles® American Express Card Members can check their first standard bag for free.", url: "https://www.delta.com/us/en/baggage/checked-baggage/medallion-baggage-allowance#credit_card" },
        ]
    },
    
    generalNotes: [
        "To speak with a representative about a new or existing reservation, call 800-221-1212 (24/7).",
        "If you are a Medallion® Member, check the Contact Us section in the Fly Delta mobile app for your dedicated phone line.",
        "If you purchased a ticket from a third-party travel agency, please refer directly to your travel agent for changes or cancellations."
    ],

    contactDetails: {
        title: "Delta Air Lines Contact Information",
        departments: [
            { name: "General Sales & Services", details: ["800-221-1212", "800-323-2323 for SkyMiles", "800-325-1999 for Flight Information"], notes: "Hearing & Speech Impaired: Message us" },
            { name: "International Sales & Service", details: ["800-241-4141"], hours: "24 hours/day, 7 days/week" },
            { name: "Baggage", details: ["800-325-8224"], hours: "6:00 am - 12:00 am ET, 7 days/week" },
            { name: "Refund Status", details: ["800-847-0578"], hours: "8am - 7pm ET | Mon-Fri (Closed: Sat-Sun, U.S. holidays)" },
            { name: "Comment & Complaint (Post-Travel)", details: ["Delta Air Lines, Inc.", "Customer Care", "P.O. Box 20980", "Department 980", "Atlanta, GA 30320-2980"] },
            { name: "Accessible Travel Services", details: ["404-209-3434"], hours: "24 hours/day, 7 days/week", notes: "For customers with hearing or speech disabilities: Dial 711" },
            { name: "Delta Vacations", details: ["800-800-1504"], hours: "Phone hours: 6a-11p CT. Messaging hours: 6a-9p CT", notes: "Chat with Us" },
            { name: "Delta Gift Cards", details: ["800-225-1366 for airline reservations", "deltaGifts@delta.com"], hours: "24 hours/day, 7 days/week" }
        ]
    }
};

/**
 * Displays Delta Air Lines baggage information in the provided placeholder element.
 * @param {HTMLElement} placeholderElement - The DOM element where the HTML should be injected.
 */
export function displayDeltaInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Delta placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Delta Air Lines.</p>";
        return;
    }

    const info = deltaInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>View Delta Air Lines Baggage Details</h4>
                <p>For personalized baggage fees based on your specific trip, status, and fare, please use the official baggage calculator on the Delta website.</p>
                <a href="${info.baggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT DELTA BAGGAGE CALCULATOR</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
    `;

    if (info.standardFees) {
        html += `<h4>${info.standardFees.title}</h4>`;
        if (info.standardFees.note) {
            html += `<p class="small-note">${info.standardFees.note}</p>`;
        }
        html += `<table class="rules-table">
                   <thead><tr><th>Item</th><th>Fee</th></tr></thead>
                   <tbody>`;
        info.standardFees.fees.forEach(item => {
            html += `<tr><td>${item.item}</td><td>${item.fee}</td></tr>`;
        });
        html += `</tbody></table>`;
    }

    if (info.exceptions) {
        html += `<hr style="margin: 20px 0;"><h4>${info.exceptions.title}</h4>`;
        html += `<ul>`;
        info.exceptions.items.forEach(item => {
            html += `<li>${item.text} <a href="${item.url}" target="_blank" rel="noopener noreferrer">Learn more</a>.</li>`;
        });
        html += `</ul>`;
    }

    if (info.generalNotes && info.generalNotes.length > 0) {
        html += `<hr style="margin: 20px 0;"><h4>Additional Assistance</h4>`;
        html += `<ul>`;
        info.generalNotes.forEach(note => {
            html += `<li>${note}</li>`;
        });
        html += `</ul>`;
    }

    if (info.contactDetails) {
        html += `<hr style="margin: 20px 0;"><h3>${info.contactDetails.title}</h3>`;
        info.contactDetails.departments.forEach(dept => {
            html += `<h4>${dept.name}</h4><ul>`;
            dept.details.forEach(line => {
                html += `<li>${line}</li>`;
            });
            if (dept.hours) {
                html += `<li><em>Hours: ${dept.hours}</em></li>`;
            }
            if (dept.notes) {
                html += `<li><em>Note: ${dept.notes}</em></li>`;
            }
            html += `</ul>`;
        });
    }

    placeholderElement.innerHTML = html;
}