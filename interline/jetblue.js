
const jetblueInfo = {
    baggageInfoUrl: "https://www.jetblue.com/at-the-airport/baggage-information",
    contactPageUrl: "https://www.jetblue.com/contact-us",
    lostBaggageClaimUrl: "https://app.nettracer.aero/pax/jetblue/bso/login",
    liabilityInfoUrl: "https://www.jetblue.com/help/checked-bags#liability-limits",

    carryOnRules: {
        title: "Carry-on Bags",
        allowance: "All fares include 1 carry-on bag and 1 personal item.",
        bagSize: "Must not exceed 22 x 14 x 9 inches.",
        personalItemSize: "Must not exceed 17 x 13 x 8 inches."
    },

    checkedBaggage: {
        title: "Checked Bags",
        generalNotes: [
            "Save money by paying for your first two bags more than 24 hours before departure.",
            "Checked bags must not exceed 62 inches (total dimensions) or 50 pounds to avoid additional fees.",
        ],
        feeTables: [
            {
                route: "Flights within U.S., Latin America, Caribbean & Canada",
                headers: ["Fare / Status", "1st Bag (>24h prior)", "2nd Bag (>24h prior)", "1st Bag (<24h prior)", "2nd Bag (<24h prior)"],
                offPeak: [
                    { fare: "Blue/Blue Basic/Blue Extra", pre_1: "$35", pre_2: "$50", post_1: "$45", post_2: "$60" },
                    { fare: "Blue Plus", pre_1: "Included", pre_2: "$50", post_1: "Included", post_2: "$60" },
                    { fare: "Mosaic", pre_1: "Included", pre_2: "Included", post_1: "Included", post_2: "Included" },
                    { fare: "JetBlue Plus Cardmember", pre_1: "Included", pre_2: "$50", post_1: "Included", post_2: "$60" },
                    { fare: "JetBlue Premier Cardmember", pre_1: "Included", pre_2: "$50", post_1: "Included", post_2: "$60" },
                    { fare: "Mint", pre_1: "Included (70 lbs)", pre_2: "Included (70 lbs)", post_1: "Included (70 lbs)", post_2: "Included (70 lbs)" }
                ],
                peak: [
                    { fare: "Blue/Blue Basic/Blue Extra", pre_1: "$40", pre_2: "$60", post_1: "$50", post_2: "$70" },
                    { fare: "Blue Plus", pre_1: "Included", pre_2: "$60", post_1: "Included", post_2: "$70" },
                    { fare: "JetBlue Plus Cardmember", pre_1: "Included", pre_2: "$60", post_1: "Included", post_2: "$70" },
                    { fare: "JetBlue Premier Cardmember", pre_1: "Included", pre_2: "$60", post_1: "Included", post_2: "$70" }
                ],
                thirdPlusBagFees: "3rd bag: $125 off-peak / $135 peak. 4th+ bag: $150 off-peak / $160 peak."
            },
            {
                route: "Transatlantic Flights",
                headers: ["Fare / Status", "1st Bag (>24h prior)", "2nd Bag (>24h prior)", "1st Bag (<24h prior)", "2nd Bag (<24h prior)"],
                 offPeak: [
                    { fare: "Blue Basic", pre_1: "$60/£50/€55", pre_2: "$100/£80/€90", post_1: "$65/£55/€60", post_2: "$105/£85/€95" },
                    { fare: "Blue/Blue Plus/Blue Extra", pre_1: "Included", pre_2: "$100/£80/€90", post_1: "Included", post_2: "$105/£85/€95" },
                    { fare: "JetBlue Plus Cardmember", pre_1: "Included", pre_2: "$100/£80/€90", post_1: "Included", post_2: "$105/£85/€95" },
                    { fare: "JetBlue Premier Cardmember", pre_1: "Included", pre_2: "$100/£80/€90", post_1: "Included", post_2: "$105/£85/€95" },
                    { fare: "Mosaic / Mint", pre_1: "Included (70 lbs)", pre_2: "Included (70 lbs)", post_1: "Included (70 lbs)", post_2: "Included (70 lbs)"}
                ],
                peak: [
                   { fare: "Blue Basic", pre_1: "$65/£55/€60", pre_2: "$110/£90/€100", post_1: "$70/£60/€65", post_2: "$115/£95/€105" },
                   { fare: "Blue/Blue Plus/Blue Extra", pre_1: "Included", pre_2: "$110/£90/€100", post_1: "Included", post_2: "$115/£95/€105" },
                   { fare: "JetBlue Plus Cardmember", pre_1: "Included", pre_2: "$110/£90/€100", post_1: "Included", post_2: "$115/£95/€105" },
                   { fare: "JetBlue Premier Cardmember", pre_1: "Included", pre_2: "$110/£90/€100", post_1: "Included", post_2: "$115/£95/€105" }
                ],
                thirdPlusBagFees: "3rd+ bag: $200/£150/€185 off-peak / $210/£160/€195 peak."
            }
        ],
        peakSeason: {
            title: "Peak-Season Pricing Dates",
            note: "The applicable peak dates depend on when the ticket was booked. Please check the JetBlue website for the specific list of dates."
        }
    },

    overweightOversizeFees: {
        title: "Overweight & Oversized Bag Fees",
        fees: [
            "51-99 lbs: $150 per bag ($150/£120/€140 on transatlantic).",
            "63-80 inches: $150 per bag ($150/£120/€140 on transatlantic).",
            "Bags over 70 lbs are not accepted on transatlantic flights."
        ]
    },

    specialItems: {
        title: "Special Items & Assistive Devices",
        notes: [
            "A golf bag, fishing rod, skis or snowboard counts as one checked bag and will not incur an oversized bag fee if it is within weight limits.",
            "Assistive devices like strollers and wheelchairs do not count towards your bag limit but are subject to carry-on size and weight restrictions. If they don't fit, they will be gate-checked."
        ]
    },

    checkInTimes: {
        title: "Check-in Times for Bags",
        notes: [
            "Bags will not be accepted for check-in more than six hours prior to scheduled departure.",
            "<strong>US Domestic flights:</strong> All bags must be checked 40-60 minutes prior to departure.",
            "<strong>International flights:</strong> All bags must be checked 60-80 minutes prior to departure."
        ]
    },

    groupTravel: {
        title: "Group Bookings",
        notes: [
            "All group travelers may board with one small personal item.",
            "<strong>US Domestic/International (non-transatlantic):</strong> Carry-on bag not allowed. Two checked bags allowed.",
            "<strong>Transatlantic routes:</strong> One carry-on allowed. One checked bag allowed. Fee for second bag is $45 at the airport."
        ]
    },

    contactDetails: {
        title: "Contact JetBlue & Associated Fees",
        contactPageUrl: "https://www.jetblue.com/contact-us",
        notes: [
            "Phone support is available 24/7.",
            "A non-refundable fee of <strong>$25 per person</strong> applies to flights booked or modified by phone or chat.",
            "For reservations made through travel agencies, a <strong>$50 per-person service fee</strong> applies for assistance from JetBlue."
        ]
    }
};

function displayJetblueInfo(placeholderElement) {
    if (!placeholderElement) { return; }

    const info = jetblueInfo;
    let html = "";

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>JetBlue Baggage Information</h4>
                <p>Find all the info you need about checked bags, carry-on bags, and other items.</p>
                <a href="${info.baggageInfoUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VIEW BAGGAGE POLICIES</a>
            </div>
        </div>`;

    html += `<hr style="margin: 20px 0;"><h3>${info.carryOnRules.title}</h3><ul><li><strong>Bag Size:</strong> ${info.carryOnRules.bagSize}</li><li><strong>Personal Item Size:</strong> ${info.carryOnRules.personalItemSize}</li></ul>`;

    const cb = info.checkedBaggage;
    html += `<hr style="margin: 20px 0;"><h3>${cb.title}</h3>`;
    cb.generalNotes.forEach(note => html += `<p class="small-note">${note}</p>`);
    cb.feeTables.forEach(tableData => {
        html += `<h4>${tableData.route}</h4>`;
        html += `<h5>Off-Peak Pricing</h5>`;
        html += `<table class="rules-table"><thead><tr>${tableData.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        tableData.offPeak.forEach(row => {
            html += `<tr><td><strong>${row.fare}</strong></td><td>${row.pre_1 || '-'}</td><td>${row.pre_2 || '-'}</td><td>${row.post_1 || '-'}</td><td>${row.post_2 || '-'}</td></tr>`;
        });
        html += `</tbody></table>`;
        html += `<h5 style="margin-top:15px;">Peak-Season Pricing</h5>`;
        html += `<table class="rules-table"><thead><tr>${tableData.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>`;
        const peakFares = tableData.peak.map(r => r.fare);
        tableData.offPeak.forEach(row => {
            const peakRow = tableData.peak.find(pr => pr.fare === row.fare);
            if (peakRow) {
                 html += `<tr><td><strong>${peakRow.fare}</strong></td><td>${peakRow.pre_1 || row.pre_1}</td><td>${peakRow.pre_2 || row.pre_2}</td><td>${peakRow.post_1 || row.post_1}</td><td>${peakRow.post_2 || row.post_2}</td></tr>`;
            } else if (row.fare.includes("Mint") || row.fare.includes("Mosaic")) {
                 html += `<tr><td><strong>${row.fare}</strong></td><td colspan="4">Same as Off-Peak</td></tr>`;
            }
        });
        html += `</tbody></table>`;
        html += `<p class="small-note" style="margin-top: 10px;"><strong>3rd+ Bags:</strong> ${tableData.thirdPlusBagFees}</p>`;
    });
    html += `<hr style="margin: 20px 0;"><h4>${cb.peakSeason.title}</h4><p class="small-note">${cb.peakSeason.note}</p>`;

    html += `<hr style="margin: 20px 0;"><h3>${info.overweightOversizeFees.title}</h3><ul>`;
    info.overweightOversizeFees.fees.forEach(fee => html += `<li>${fee}</li>`);
    html += `</ul>`;
    
    html += `<hr style="margin: 20px 0;"><h3>${info.specialItems.title}</h3><ul>`;
    info.specialItems.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;

    html += `<hr style="margin: 20px 0;"><h3>${info.checkInTimes.title}</h3><ul>`;
    info.checkInTimes.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;
    
    html += `<hr style="margin: 20px 0;"><h3>${info.groupTravel.title}</h3><ul>`;
    info.groupTravel.notes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul>`;

    html += `<hr style="margin: 20px 0;"><h3>Lost or Damaged Bag?</h3><p>It’s important to file a report ASAP. Use the <a href="${info.lostBaggageClaimUrl}" target="_blank" rel="noopener noreferrer">online claim form</a>. For liability details, see <a href="${info.liabilityInfoUrl}" target="_blank" rel="noopener noreferrer">here</a>.</p>`;

    if (info.contactDetails) {
        html += `<hr style="margin: 20px 0;"><h3>${info.contactDetails.title}</h3><ul>`;
        info.contactDetails.notes.forEach(note => html += `<li>${note}</li>`);
        html += `</ul><a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="max-width: 300px; margin: 15px auto; display: block;">FIND PHONE NUMBERS</a>`;
    }

    placeholderElement.innerHTML = html;
}

export { jetblueInfo, displayJetblueInfo };