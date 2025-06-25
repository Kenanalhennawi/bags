
const qantasInfo = {
    baggageInfoUrl: "https://www.qantas.com/au/en/travel-info/baggage/checked-baggage.html",
    contactPageUrl: "https://www.qantas.com/au/en/support/contact-us.html",
    tagline: "The Spirit of Australia",

    carryOnBaggage: {
        title: "Carry-on Baggage Allowance",
        international: {
            title: "International Flights (excluding Americas)",
            allowances: [
                { class: "Economy", allowance: "1 piece, up to 7kg" },
                { class: "Premium Economy, Business, First", allowance: "Up to 2 pieces, 14kg total (max 10kg per piece)" }
            ]
        },
        domestic: {
            title: "Australian Domestic Flights",
            allowances: [
                { class: "All Classes (except Dash 8)", allowance: "Up to 2 pieces, 14kg total (max 10kg per piece)" },
                { class: "Dash 8 Services", allowance: "1 piece, up to 7kg" }
            ]
        },
        note: "Standard bag dimensions are 56x36x23cm. One small personal item (e.g., handbag, laptop) is also permitted."
    },

    checkedBaggage: {
        title: "Free Checked Baggage Allowance",
        generalNote: "The allowance system depends on your destination. No single bag may exceed 32kg.",
        domestic: {
            title: "Domestic Flights (within Australia)",
            headers: ["Frequent Flyer Status", "Allowance"],
            rows: [
                { status: "Non-Frequent Flyer / Bronze / Silver / Gold", allowance: "1 piece, up to 23kg" },
                { status: "Platinum / Platinum One", allowance: "2 pieces, up to 32kg each" },
                { status: "Qantas Club Member", allowance: "1 piece, up to 32kg" }
            ]
        },
        internationalWeight: {
            title: "International Flights (Weight Concept - e.g., to Europe, Asia, NZ)",
            headers: ["Class", "Bronze", "Silver/Qantas Club", "Gold", "Platinum/Platinum One"],
            rows: [
                { class: "Economy", bronze: "30kg", silver: "42kg", gold: "46kg", platinum: "50kg" },
                { class: "Premium Economy", bronze: "40kg", silver: "52kg", gold: "56kg", platinum: "60kg" },
                { class: "Business", bronze: "40kg", silver: "52kg", gold: "56kg", platinum: "60kg" },
                { class: "First", bronze: "50kg", silver: "62kg", gold: "66kg", platinum: "70kg" }
            ]
        },
        internationalPiece: {
            title: "International Flights (Piece Concept - to/from North & South America)",
            headers: ["Class", "Bronze", "Silver/Gold/Qantas Club", "Platinum/Platinum One"],
            rows: [
                { class: "Economy", bronze: "1 piece, up to 23kg", silverGold: "1 piece, up to 32kg", platinum: "2 pieces, up to 32kg each" },
                { class: "Premium Economy", bronze: "2 pieces, up to 23kg each", silverGold: "2 pieces, up to 32kg each", platinum: "3 pieces, up to 32kg each" },
                { class: "Business", bronze: "2 pieces, up to 32kg each", silverGold: "2 pieces, up to 32kg each", platinum: "3 pieces, up to 32kg each" }
            ]
        }
    },
    
    excessBaggage: {
        title: "Airport Excess Baggage Charges",
        note: "The following charges apply at the airport. It is cheaper to pre-purchase additional baggage online. Carriage is subject to space availability.",
        headers: ["Category / Route", "Fee"],
        charges: [
            { category: "Australian Domestic - Extra Piece", fee: "A$130" },
            { category: "Australian Domestic - Heavy Charge (>23kg)", fee: "A$50" },
            { category: "International to the Americas - Extra Piece", fee: "A$300" },
            { category: "International from the Americas - Extra Piece", fee: "US$200" },
            { category: "International by Weight - Australia to NZ, Fiji, etc.", fee: "A$20 per kg" },
            { category: "International by Weight - Australia to Asia", fee: "A$35 per kg" },
            { category: "International by Weight - Asia to UK", fee: "A$60 per kg" },
            { category: "International by Weight - Australia to Europe, South Africa, UK", fee: "A$80 per kg" }
        ]
    }
};

function displayQantasInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Qantas placeholder not found for displaying info.");
        return;
    }

    const info = qantasInfo;
    let html = "";

html += `
    <div class="calculator-cta-section">
        <span class="calculator-cta-icon">✈️</span>
        <div class="calculator-cta-content">
            <h4>View Qantas Baggage Allowance</h4>
            <p>View the baggage allowance for your flight based on your route, cabin class, and frequent flyer status on the official Qantas website.</p>
            <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW ALLOWANCE</a>
        </div>
    </div>
`;

    const co = info.carryOnBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${co.title}</h3>`;
    html += `<h5>${co.international.title}</h5>`;
    html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance</th></tr></thead><tbody>`;
    co.international.allowances.forEach(row => html += `<tr><td><strong>${row.class}</strong></td><td>${row.allowance}</td></tr>`);
    html += `</tbody></table>`;
    html += `<h5 style="margin-top:15px;">${co.domestic.title}</h5>`;
    html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance</th></tr></thead><tbody>`;
    co.domestic.allowances.forEach(row => html += `<tr><td><strong>${row.class}</strong></td><td>${row.allowance}</td></tr>`);
    html += `</tbody></table><p class="small-note">${co.note}</p>`;


    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3><p class="small-note">${cb.generalNote}</p>`;
    html += `<h4>${cb.domestic.title}</h4>`;
    html += `<table class="rules-table"><thead><tr>${cb.domestic.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    cb.domestic.rows.forEach(row => html += `<tr><td><strong>${row.status}</strong></td><td>${row.allowance}</td></tr>`);
    html += `</tbody></table>`;
    html += `<h4 style="margin-top:15px;">${cb.internationalWeight.title}</h4>`;
    html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${cb.internationalWeight.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    cb.internationalWeight.rows.forEach(row => html += `<tr><td><strong>${row.class}</strong></td><td>${row.bronze}</td><td>${row.silver}</td><td>${row.gold}</td><td>${row.platinum}</td></tr>`);
    html += `</tbody></table></div>`;
    html += `<h4 style="margin-top:15px;">${cb.internationalPiece.title}</h4>`;
    html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${cb.internationalPiece.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    cb.internationalPiece.rows.forEach(row => html += `<tr><td><strong>${row.class}</strong></td><td>${row.bronze}</td><td>${row.silverGold}</td><td>${row.platinum}</td></tr>`);
    html += `</tbody></table></div>`;
    
    const eb = info.excessBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${eb.title}</h3><p class="small-note">${eb.note}</p>`;
    html += `<table class="rules-table"><thead><tr>${eb.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    eb.charges.forEach(charge => {
        html += `<tr><td><strong>${charge.category}</strong></td><td>${charge.fee}</td></tr>`;
    });
    html += `</tbody></table>`;
    
    html += `<hr style="margin: 20px 0;"><h3>Contact Qantas</h3>`;
    html += `<p>For specific questions about your booking or baggage, please visit the official Qantas contact page.</p>`;
    html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">FIND CONTACT INFO</a>`;

    placeholderElement.innerHTML = html;
}

export { qantasInfo, displayQantasInfo };