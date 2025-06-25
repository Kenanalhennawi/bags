
const kenyaairwaysInfo = {
    baggageInfoUrl: "https://www.kenya-airways.com/en-ae/plan/baggage-information/",
    contactPageUrl: "https://www.kenya-airways.com/en/contact/",

    handBaggage: {
        title: "Hand Baggage Allowance",
        allowances: [
            { travelClass: "Business Class", allowance: "2 pieces (up to 18kg total)" },
            { travelClass: "Economy Class", allowance: "1 piece (up to 12kg total)" },
            { travelClass: "Economy (on Embraer 145)", allowance: "1 piece (up to 8kg total)" }
        ],
        notes: [
            "Each piece must not exceed L55 x W25 x H35cm.",
            "In addition to the allowance, 1 personal accessory (e.g., handbag, laptop bag) and 1 duty-free bag are permitted.",
            "Infants (< 2 years) not occupying a seat are allowed 1 piece of cabin baggage up to 12kg."
        ]
    },

    checkedBaggage: {
        title: "Free Checked Baggage Allowance",
        allowanceTable: {
            headers: ["Routing (From/To)", "Business Class", "Economy Class"],
            rows: [
                { route: "Africa <-> America/Europe", business: "2 pieces, 32kg each", economy: "2 pieces, 23kg each" },
                { route: "Africa <-> Middle East/Asia", business: "2 pieces, 32kg each", economy: "2 pieces, 23kg each" },
                { route: "Africa <-> Africa", business: "2 pieces, 32kg each", economy: "2 pieces, 23kg each" },
                { route: "Domestic", business: "1 piece, 32kg", economy: "1 piece, 23kg" }
            ]
        },
        frequentFlyerNote: "Asante Silver, Gold & Platinum members get 1 additional piece (23kg in Economy, 32kg in Business).",
        generalRules: [
            "Maximum weight of each piece is 32kg.",
            "Total dimensions (L+W+H) shall not exceed 158cm (62 inches), except for bags from specific Asian airports which allow up to 180cm.",
            "The allowance shown on your e-ticket is the final authority.",
            "For interline/codeshare journeys, the Most Significant Carrier's rules apply."
        ],
        referenceTable: {
            title: "Routing Reference Table",
            definitions: [
                { zone: "Domestic", points: "Kisumu, Mombasa, Malindi and Eldoret" },
                { zone: "Africa", points: "All Africa points" },
                { zone: "Middle East/Asia", points: "Middle East and Asian points" },
                { zone: "Europe/America", points: "All Europe and American points" }
            ]
        }
    },

    extraSeatBaggage: {
        title: "Extra Seat for Cabin Baggage (CBBG)",
        notes: [
            "An extra seat can be purchased for fragile items, valuables, or passenger comfort (EXST).",
            "The normal free checked baggage allowance applies for each extra seat purchased.",
            "Items placed on a seat may not weigh more than 46 kg.",
        ],
        sizeTable: {
            headers: ["Aircraft Type", "Maximum Size of Item on Seat (W x H x L)"],
            rows: [
                { aircraft: "B787", size: "48 x 73 x 40 cm" },
                { aircraft: "B737 Series", size: "48 x 60 x 40 cm" },
                { aircraft: "E190", size: "43 x 60 x 40 cm" },
            ]
        }
    },
    
    poolingPolicy: {
        title: "Baggage Pooling / Sharing Policy",
        notes: [
            "Pooling of baggage allowance is permitted for families or groups travelling together to the same destination on the same flight.",
            "This allows pooling the number of bags, but not the weight per piece (e.g., two people can't bring one 18kg bag and one 26kg bag if the limit is 23kg per bag).",
            "Each passenger will still receive their own individual baggage claim tag."
        ]
    },

    contactDetails: {
        title: "Contact Information",
        mainContact: {
            note: "For excess baggage rates or other inquiries, contact the call center.",
            phone: "+254 711 024747"
        },
        media: {
            note: "For accredited members of the press, bloggers, and influencers.",
            email: "corporate.communications@kenya-airways.com"
        }
    }
};

function displayKenyaairwaysInfo(placeholderElement) {
    if (!placeholderElement) { return; }

    const info = kenyaairwaysInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Kenya Airways Baggage Information</h4>
                <p>Learn more about what you can travel with, standard allowances, and policies for special items.</p>
                <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW BAGGAGE INFORMATION</a>
            </div>
        </div>`;

    const hb = info.handBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${hb.title}</h3>`;
    html += `<table class="rules-table"><thead><tr><th>Class</th><th>Allowance</th></tr></thead><tbody>`;
    hb.allowances.forEach(row => html += `<tr><td><strong>${row.travelClass}</strong></td><td>${row.allowance}</td></tr>`);
    html += `</tbody></table>`;
    hb.notes.forEach(note => html += `<p class="small-note">${note}</p>`);

    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3>`;
    html += `<table class="rules-table"><thead><tr>${cb.allowanceTable.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    cb.allowanceTable.rows.forEach(row => html += `<tr><td><strong>${row.route}</strong></td><td>${row.business}</td><td>${row.economy}</td></tr>`);
    html += `</tbody></table>`;
    html += `<p class="small-note" style="margin-top: 10px;"><strong>Frequent Flyers:</strong> ${cb.frequentFlyerNote}</p>`;
    html += `<h5 style="margin-top: 15px;">General Rules & Conditions</h5><ul>`;
    cb.generalRules.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;
    
    const rt = cb.referenceTable;
    html += `<h5 style="margin-top: 15px;">${rt.title}</h5>`;
    rt.definitions.forEach(def => html += `<p class="small-note"><strong>${def.zone}:</strong> ${def.points}</p>`);

    const esb = info.extraSeatBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${esb.title}</h3><ul>`;
    esb.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;
    html += `<h5 style="margin-top: 15px;">Maximum Item Size on Extra Seat</h5>`;
    html += `<table class="rules-table"><thead><tr>${esb.sizeTable.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
    esb.sizeTable.rows.forEach(row => html += `<tr><td><strong>${row.aircraft}</strong></td><td>${row.size}</td></tr>`);
    html += `</tbody></table>`;

    const pp = info.poolingPolicy;
    html += `<hr style="margin: 20px 0;"><h3>${pp.title}</h3><ul>`;
    pp.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;

    const cd = info.contactDetails;
    html += `<hr style="margin: 20px 0;"><h3>${cd.title}</h3>`;
    html += `<p>${cd.mainContact.note}</p><ul><li><strong>Phone:</strong> ${cd.mainContact.phone}</li></ul>`;
    html += `<h5>Other Contacts</h5><ul>`;
    html += `<li><strong>Media inquiries:</strong> ${cd.media.email}</li>`;
    html += `</ul>`;
    html += `<a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">VISIT CONTACT PAGE</a>`;

    placeholderElement.innerHTML = html;
}

export { kenyaairwaysInfo, displayKenyaairwaysInfo };