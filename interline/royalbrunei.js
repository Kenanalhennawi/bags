
const royalbruneiInfo = {
    baggageInfoUrl: "https://www.flyroyalbrunei.com/united-arab-emirates/en/information/checked-baggage/",
    contactPageUrl: "https://www.flyroyalbrunei.com/united-arab-emirates/en/help-support/contact-us/",
    tagline: "You Are Why We Fly",

    carryOnBaggage: {
        title: "Carry-On Baggage Allowance",
        allowances: [
            { travelClass: "Economy Class", allowance: "1 piece, up to 7kg" },
            { travelClass: "Business Class", allowance: "2 pieces, up to 12kg combined total (max 7kg per piece)" }
        ],
        note: "Dimensions for each bag must not exceed 55 x 38 x 20 cm. A small personal item (handbag, laptop bag) is also permitted."
    },

    checkedBaggage: {
        title: "Free Checked Baggage Allowance",
        notes: [
            "The sum of dimensions (L+W+H) for any checked bag must not exceed 158cm (62 inches).",
            "A single piece of baggage may not weigh more than 32kg.",
            "If you’re travelling with family or friends on the same flight and booking, you can pool your total weight allowance."
        ],
        headers: ["RB Super Saver", "RB Saver", "RB Value", "RB Flexi", "Business Saver", "Business"],
        allowances: ["20kg", "25kg", "30kg", "30kg", "40kg", "40kg"]
    },

    prepaidExcessBaggage: {
        title: "Pre-purchased Extra Baggage Allowance Rates",
        note: "Available online up to 4 hours before departure. The rates below are from Brunei to the listed destinations (and vice-versa).",
        headers: ["Destination", "5kg", "10kg", "15kg", "20kg", "25kg", "30kg", "35kg"],
        rows: [
            { dest: "Kota Kinabalu, Kuching, Balikpapan", kg5: "USD 25", kg10: "USD 49", kg15: "USD 73", kg20: "USD 96", kg25: "USD 120", kg30: "USD 143", kg35: "USD 167" },
            { dest: "Singapore, Kuala Lumpur, Manila, Jakarta, Surabaya", kg5: "USD 32", kg10: "USD 62", kg15: "USD 92", kg20: "USD 121", kg25: "USD 152", kg30: "USD 180", kg35: "USD 210" },
            { dest: "Ho Chi Minh, Bangkok", kg5: "USD 60", kg10: "USD 118", kg15: "USD 175", kg20: "USD 231", kg25: "USD 288", kg30: "USD 342", kg35: "USD 399" },
            { dest: "Hong Kong, Taiwan, Beijing, Nanning, Hangzhou, Seoul, Tokyo, Chennai", kg5: "USD 90", kg10: "USD 177", kg15: "USD 262", kg20: "USD 346", kg25: "USD 432", kg30: "USD 513", kg35: "USD 599" },
            { dest: "Dubai, Jeddah, Melbourne", kg5: "USD 115", kg10: "USD 226", kg15: "USD 335", kg20: "USD 442", kg25: "USD 552", kg30: "USD 656", kg35: "USD 765" },
            { dest: "London", kg5: "USD 135", kg10: "USD 265", kg15: "USD 393", kg20: "USD 519", kg25: "USD 648", kg30: "USD 770", kg35: "USD 898" }
        ]
    },
    
    airportExcessBaggage: {
        title: "Airport Excess Baggage Rates (Per Kilogram)",
        note: "The following per-kilogram rates apply at the airport if you exceed your allowance and have not pre-purchased extra baggage.",
        headers: ["Destination (from Brunei)", "Rate per kg"],
        rows: [
            { destination: "Kota Kinabalu, Kuching, Balikpapan", rate: "USD 9" },
            { destination: "Singapore, Kuala Lumpur, Manila, Jakarta, Surabaya", rate: "USD 11" },
            { destination: "Ho Chi Minh City, Bangkok", rate: "USD 20" },
            { destination: "Hong Kong, Taiwan, Beijing, Nanning, Hangzhou, Seoul, Tokyo, Chennai", rate: "USD 31" },
            { destination: "Dubai, Jeddah, Melbourne", rate: "USD 39" },
            { destination: "London", rate: "USD 46" }
        ]
    },

    specialAllowances: {
        title: "Other Allowances & Policies",
        items: [
            { name: "Infants", detail: "Are entitled to 10kg of checked baggage and one collapsible stroller." },
            { name: "Students", detail: "Are given an additional 15kg of baggage allowance upon presentation of a valid student ID or visa." },
            { 
                name: "Sports Equipment", 
                detail: "Carried as part of the checked baggage allowance. If the allowance is exceeded, excess baggage rates apply. Accepted equipment includes:",
                includes: [
                    "Snow and/or water skiing equipment",
                    "Angling equipment",
                    "Surfboards (excluding windsurfing)",
                    "Bowling balls",
                    "Golf equipment",
                    "Bicycles",
                    "Diving equipment",
                    "Cricket equipment"
                ]
            }
        ]
    },
    
    contactDetails: {
        title: "Contact Royal Brunei Airlines",
        offices: [
            { 
                name: "GSA – Passenger (Dubai)", 
                address: "ITVAR GSA TRAVEL LLC, No. 402, B Block, Centurion Star Tower, Port Saeed, Deira, Dubai, UAE",
                phone: ["+971 4 3344884 (Customer Service)", "+971 4 3344686 (Sales)"],
                email: "dxbres@rba.com.bn"
            },
            {
                name: "Head Office (Brunei Darussalam)",
                address: "Royal Brunei Airlines Sdn Bhd, PO Box 737, Bandar Seri Begawan BS 8671, Brunei Darussalam",
                phone: ["+673 2212222"]
            }
        ]
    }
};

function displayRoyalbruneiInfo(placeholderElement) {
    if (!placeholderElement) { return; }

    const info = royalbruneiInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Royal Brunei Baggage Information</h4>
                <p>Find information on checked baggage allowances and rates for extra baggage. You can save time and get a discount by purchasing extra baggage online.</p>
                <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW BAGGAGE ALLOWANCE</a>
            </div>
        </div>
    `;

    const co = info.carryOnBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${co.title}</h3>`;
    html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance</th></tr></thead><tbody>`;
    co.allowances.forEach(row => {
        html += `<tr><td><strong>${row.travelClass}</strong></td><td>${row.allowance}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `<p class="small-note">${co.note}</p>`;

    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3>`;
    cb.notes.forEach(note => html += `<p class="small-note">${note}</p>`);
    html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${cb.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    html += `<tr>${cb.allowances.map(a => `<td>${a}</td>`).join('')}</tr>`;
    html += `</tbody></table></div>`;
    
    const peb = info.prepaidExcessBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${peb.title}</h3><p class="small-note">${peb.note}</p>`;
    html += `<div style="overflow-x:auto;"><table class="rules-table"><thead><tr>${peb.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    peb.rows.forEach(row => {
        html += `<tr><td><strong>${row.dest}</strong></td><td>${row.kg5}</td><td>${row.kg10}</td><td>${row.kg15}</td><td>${row.kg20}</td><td>${row.kg25}</td><td>${row.kg30}</td><td>${row.kg35}</td></tr>`;
    });
    html += `</tbody></table></div>`;
    
    const aeb = info.airportExcessBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${aeb.title}</h3><p class="small-note">${aeb.note}</p>`;
    html += `<table class="rules-table"><thead><tr>${aeb.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    aeb.rows.forEach(row => {
        html += `<tr><td><strong>${row.destination}</strong></td><td>${row.rate}</td></tr>`;
    });
    html += `</tbody></table>`;
    
    const sa = info.specialAllowances;
    html += `<hr style="margin: 20px 0;"><h3>${sa.title}</h3><ul>`;
    sa.items.forEach(item => {
        html += `<li><strong>${item.name}:</strong> ${item.detail}`;
        if (item.includes && item.includes.length > 0) {
            html += `<ul style="margin-top: 5px; margin-bottom: 5px;">`;
            item.includes.forEach(subItem => {
                html += `<li><small>${subItem}</small></li>`;
            });
            html += `</ul>`;
        }
        html += `</li>`;
    });
    html += `</ul>`;
    
    const cd = info.contactDetails;
    html += `<hr style="margin: 20px 0;"><h3>${cd.title}</h3>`;
    cd.offices.forEach(office => {
        html += `<h5>${office.name}</h5><ul>`;
        if (office.address) { html += `<li><strong>Address:</strong> ${office.address}</li>`; }
        if (office.phone) { office.phone.forEach(p => html += `<li><strong>Phone:</strong> ${p}</li>`); }
        if (office.email) { html += `<li><strong>Email:</strong> ${office.email}</li>`; }
        html += `</ul>`;
    });
    html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">VIEW ALL CONTACTS</a>`;

    placeholderElement.innerHTML = html;
}

export { royalbruneiInfo, displayRoyalbruneiInfo };