
export const saudiaInfo = {
    baggagePageUrl: "https://www.saudia.com/pages/before-flying/baggage/baggage-allowances",
    prepaidBaggageUrl: "https://www.saudia.com/travel-with-saudia/manage/extra-baggage",
    contactPageUrl: "https://www.saudia.com/pages/help/contact-us/call-centers",
    baggageCalculatorUrl: "https://www.saudia.com/pages/plan-and-book/baggage/baggage-allowance/baggage-calculator",

    summary: {
        title: "Saudia (Saudi Arabian Airlines) Baggage Summary",
        items: [
            "<strong>Free Checked Allowance:</strong> Piece-based system. Typically 1x23kg for Guest (Economy), 2x23kg for Business, and 2x32kg for First Class. Varies by route.",
            "<strong>Carry-On:</strong> 1 piece at 7kg for Guest Class. A 12kg handbag + 9kg briefcase for Business/First Class. A personal item is also allowed.",
            "<strong>Special Allowances:</strong> Additional baggage is granted to AlFursan elite members and Renal Kidney Failure patients (8 extra pieces).",
            "<strong>Excess Baggage:</strong> Significant discounts are available for pre-purchasing extra bags or weight online. Airport rates are higher.",
            "<strong>Prohibited Items:</strong> Strict rules apply, especially for liquids, lithium batteries, and power banks. Country-specific rules for USA, UK, China, and Oman."
        ]
    },

    handLuggage: {
        title: "Cabin Baggage (Carry-On) Allowance",
        allowances: [
            {
                serviceClass: "First and Business Class",
                items: [
                    { piece: "One Handbag", weight: "12 kg", dimensions: "56 x 45 x 25 cm (115 cm total)" },
                    { piece: "One Briefcase", weight: "9 kg", dimensions: "45 x 20 x 35 cm" }
                ]
            },
            {
                serviceClass: "Guest (Economy) Class",
                items: [
                    { piece: "One Handbag or Briefcase", weight: "7 kg", dimensions: "56 x 45 x 25 cm (115 cm total)" }
                ]
            }
        ],
        freeCarryOnItems: {
            title: "Free Personal Carry-On Items",
            note: "In addition to your main carry-on, one of the following personal items is permitted:",
            items: ["Coat or wrap", "Small camera", "Women's handbag", "Computer tablet", "Stroller / baby cradle", "Special supplies for people with disabilities"]
        },
        notes: {
            title: "Important Carry-On Notes",
            items: [
                "For passengers departing from USA/Canada to Saudi Arabia, only ONE carry-on bag is permitted across all classes, not to exceed 16 lbs (7.2kg) and 45 inches.",
                "For flights to/from the USA and UK, all electronic devices must be powered on for security checks. Powerless devices may be confiscated.",
                "On connecting flights, carry-on may need to be checked at the gate due to different aircraft types."
            ]
        }
    },
    
    specialAllowances: {
        title: "Additional Free Baggage Allowances",
        alfursan: {
            title: "AlFursan Member Benefits",
            note: "AlFursan Gold, Silver, Elite, and Elite Plus members are entitled to additional baggage allowances on both domestic and international flights. The exact allowance depends on the tier and flight sector.",
            internationalNote: "On international flights to/from the USA and Canada, all 6th freedom passengers are allowed 2 pieces in all classes."
        },
        renalPatients: {
            title: "Renal Kidney Failure Patients Allowance",
            note: "Saudia provides a significant additional allowance for passengers with renal failure on flights departing from KSA.",
            allowance: "<strong>(8) additional free pieces</strong> shall be waived, not exceeding 32 kg per piece.",
            conditions: [
                "A special card from the Saudi Center for Organ Transplantation or an approved medical report must be presented at the airport.",
                "This allowance does not appear on the ticket but is granted at check-in.",
                "All solutions must be packed in special containers to prevent leakage.",
                "Not applicable on Code Share, SPA Agreement, NEGO, or Promotional Fares."
            ]
        }
    },
    
    allowedGoods: {
        title: "Allowed Goods with Special Conditions",
        zamzam: {
            title: "Zamzam Water",
            notes: [
                "A complimentary 5-litre gallon package of Zamzam water from the Sogia factory is accepted as checked baggage for all passengers departing from Prince Mohammed Bin Abdulaziz Airport in Madinah.",
                "From other domestic airports (except Jeddah Terminal 1), one 5-litre gallon may be carried as part of the free checked allowance. Excess weight charges apply if it exceeds the allowance.",
                "For safety, Zamzam water bottles are strictly prohibited from being placed inside other checked bags."
            ]
        },
        sportsEquipment: {
            title: "Sports Equipment",
            notes: [
                "Accepted as part of the free checked baggage allowance if within the size and weight limits.",
                "If it exceeds the allowance, excess baggage fees for sports equipment apply (see fees section).",
                "Must be properly wrapped in special cases with shock absorption.",
                "Equipment exceeding standard dimensions is accepted on Boeing B777 and B787 aircraft."
            ]
        },
        electricalDevices: {
            title: "Electrical Devices",
            note: "Items like TVs and household appliances are accepted as checked baggage according to the standard allowance. Excess charges apply if they exceed the weight or dimension limits."
        },
        heavyItems: {
            title: "Items Over 32 kg",
            note: "If an item weighs more than 32 kg and cannot be separated into smaller pieces (e.g., musical instruments, large sports equipment, medical devices), you must notify Saudia in advance to make necessary arrangements."
        }
    },

    excessBaggage: {
        title: "Additional / Extra Baggage Fees",
        generalNotes: [
            "Purchasing extra baggage online via the 'Purchase Additional Baggage' link is cheaper than at the airport.",
            "Vouchers are valid for one year, are non-refundable and non-reroutable.",
            "In case of a no-show, the voucher's value is lost.",
            "Infant excess baggage is not permitted on any flight.",
            "For Guest class, extra pieces should not exceed 23kg. For First/Business, 32kg.",
            "Pieces exceeding 205cm are not accepted and must be shipped as cargo.",
            "On flights to/from USA and Europe, the absolute maximum weight per piece is 32kg."
        ],
        domestic: {
            title: "Domestic Flights - Excess Fees",
            headers: ["Condition", "Fee (includes VAT)"],
            fees: [
                { condition: "Extra piece (pre-paid online)", fee: "SAR 138" },
                { condition: "Extra piece (at airport)", fee: "SAR 172.50" },
                { condition: "Overweight piece (24-32 kg)", fee: "SAR 154" },
                { condition: "Oversized (158-205 cm) OR Overweight (33-45 kg)", fee: "SAR 257.50" }
            ]
        },
        prepaidInternationalPiece: {
            title: "International - Additional Piece Fees (Pre-Paid Online)",
            headers: ["From > To", "Saudi Arabia", "USA", "EU", "UK", "Arabian Gulf***", "Middle East*", "India", "Asia**", "Africa", "China", "Canada"],
            fees: [
                { from: 'Saudi Arabia', rates: ['-', '$180', '$172', '$172', '$105', '$105', '$100', '$140', '$88', '$160', 'CAD 240']},
                { from: 'USA', rates: ['$180', '-', '$192', '$192', '$200', '$200', '$192', '$200', '-', '-', '-']},
                { from: 'EU', rates: ['$172', '-', '-', '$184', '$184', '$200', '$200', '$160', '$200', '-', '-']},
                { from: 'UK', rates: ['$172', '-', '$184', '-', '$184', '$200', '$200', '$160', '$200', '-', '-']},
                { from: 'Arabian Gulf***', rates: ['$105', '$192', '$184', '$184', '-', '$105', '$192', '$183', '$155', '$183', 'CAD 240']},
                { from: 'Middle East*', rates: ['$105', '$192', '$184', '$184', '$105', '-', '$192', '$183', '$155', '$183', 'CAD 240']},
                { from: 'India', rates: ['$100', '$200', '$200', '$200', '$192', '$192', '-', '$176', '-', '-', 'CAD 240']},
                { from: 'Asia**', rates: ['$140', '$200', '$200', '$200', '$183', '$183', '-', '-', '$155', '-', 'CAD 260']},
                { from: 'Africa', rates: ['$88', '$192', '$160', '$160', '$155', '$155', '$176', '$155', '-', '$155', 'CAD 215']},
                { from: 'China', rates: ['$160', '$200', '$200', '$200', '$183', '$183', '-', '-', '$155', '-', 'CAD 260']},
                { from: 'Canada', rates: ['CAD 240', '-', '-', '-', 'CAD 240', 'CAD 240', 'CAD 240', 'CAD 260', 'CAD 215', 'CAD 260', '-']}
            ],
            notes: ["*Jordan: $120", "**Pakistan: $80", "***Kuwait: $70"]
        },
        airportInternationalPiece: {
            title: "International - Additional Piece Fees (at Airport)",
            headers: ["From > To", "Saudi Arabia", "USA", "EU", "UK", "Arabian Gulf***", "Middle East", "India", "Asia**", "Africa", "China", "Canada"],
             fees: [
                { from: 'Saudi Arabia', rates: ['-', '$225', '$215', '$215', '$150', '$150', '$130', '$200', '$125', '$200', 'CAD 280']},
                { from: 'USA', rates: ['$225', '-', '$240', '$240', '$250', '$250', '$240', '$250', '-', '-', '-']},
                { from: 'EU', rates: ['$215', '-', '-', '$230', '$230', '$250', '$250', '$200', '$250', '-', '-']},
                { from: 'UK', rates: ['$215', '-', '$230', '-', '$230', '$250', '$250', '$200', '$250', '-', '-']},
                { from: 'Arabian Gulf***', rates: ['$150', '$240', '$230', '$230', '-', '$150', '$240', '$260', '$220', '$260', 'CAD 280']},
                { from: 'Middle East', rates: ['$150', '$240', '$230', '$230', '$150', '-', '$240', '$260', '$220', '$260', 'CAD 280']},
                { from: 'India', rates: ['$130', '$250', '$250', '$250', '$240', '$240', '-', '$220', '-', '-', 'CAD 280']},
                { from: 'Asia**', rates: ['$200', '$250', '$250', '$250', '$260', '$260', '-', '-', '$220', '-', 'CAD 300']},
                { from: 'Africa', rates: ['$125', '$240', '$200', '$200', '$220', '$220', '$220', '$220', '-', '$220', 'CAD 250']},
                { from: 'China', rates: ['$200', '$250', '$250', '$250', '$260', '$260', '-', '-', '$220', '-', 'CAD 300']},
                { from: 'Canada', rates: ['CAD 280', '-', '-', '-', 'CAD 280', 'CAD 280', 'CAD 280', 'CAD 300', 'CAD 250', 'CAD 300', '-']}
            ],
            notes: ["**Pakistan: $100", "***Kuwait: $85"]
        },
        onlineOverweight: {
            title: "International - Overweight Fees (24-32 kg) (Pre-Paid Online)",
            note: "For Domestic, the fee is SAR 115. Between KSA and Kuwait, it is $45.",
            headers: ["From > To", "Saudi Arabia", "USA", "EU", "UK", "Arabian Gulf", "Middle East", "India", "Asia", "Africa", "China", "Canada"],
            fees: [
                { from: 'Saudi Arabia', rates: ['-','$55','$90','$90','$65','$50','$50','$90','$55','$105','CAD 80']},
                { from: 'USA', rates: ['$55','-','$102','$102','$105','$105','$102','$105','-','-','-']},
                { from: 'EU', rates: ['$90','-','-','$98','$98','$105','$105','$90','$105','-','-']},
                { from: 'UK', rates: ['$90','-','$98','-','$98','$105','$105','$90','$105','-','-']},
                { from: 'Arabian Gulf', rates: ['$65','$102','$98','$98','-','$65','$102','$110','$93','$110','CAD 80']},
                { from: 'Middle East', rates: ['$50','$102','$98','$98','$65','-','$102','$110','$93','$110','CAD 80']},
                { from: 'India', rates: ['$50','$105','$105','$105','$102','$102','-','$93','-','-','CAD 80']},
                { from: 'Asia', rates: ['$90','$105','$105','$105','$110','$110','-','-','$93','-','CAD 80']},
                { from: 'Africa', rates: ['$55','$102','$90','$90','$93','$93','$93','$93','-','$93','CAD 80']},
                { from: 'China', rates: ['$105','$105','$105','$105','$110','$110','-','-','$93','-','CAD 80']},
                { from: 'Canada', rates: ['CAD 80','-','-','-','CAD 80','CAD 80','CAD 80','CAD 80','CAD 80','CAD 80','-']}
            ]
        },
        airportOverweight: {
            title: "International - Overweight Fees (24-32 kg) (at Airport)",
             headers: ["From > To", "Saudi Arabia", "USA", "EU", "UK", "Arabian Gulf***", "Middle East", "India", "Asia", "Africa", "China", "Canada"],
            fees: [
                { from: 'Saudi Arabia', rates: ['-','$60','$100','$100','$75','$75','$55','$100','$60','$125','CAD 90']},
                { from: 'USA', rates: ['$60','-','$120','$120','$125','$125','$120','$125','-','-','-']},
                { from: 'EU', rates: ['$100','-','-','$115','$115','$125','$125','$100','$125','-','-']},
                { from: 'UK', rates: ['$100','-','$115','-','$115','$125','$125','$100','$125','-','-']},
                { from: 'Arabian Gulf***', rates: ['$75','$120','$115','$115','-','$75','$120','$130','$110','$130','CAD 90']},
                { from: 'Middle East', rates: ['$75','$120','$115','$115','$75','-','$120','$130','$110','$130','CAD 90']},
                { from: 'India', rates: ['$55','$125','$125','$125','$120','$120','-','$110','-','-','CAD 90']},
                { from: 'Asia', rates: ['$100','$125','$125','$125','$130','$130','-','-','$110','-','CAD 90']},
                { from: 'Africa', rates: ['$60','$120','$100','$100','$110','$110','$110','$110','-','$110','CAD 90']},
                { from: 'China', rates: ['$125','$125','$125','$125','$130','$130','-','-','$110','-','CAD 90']},
                { from: 'Canada', rates: ['CAD 90','-','-','-','CAD 90','CAD 90','CAD 90','CAD 90','CAD 90','CAD 90','-']}
            ],
            notes: ["***Kuwait: $50"]
        },
        veryOverweightPiece: {
            title: "International - Very Overweight Piece Fees (32-45kg)",
            note: "Applies to a single piece between 32kg and 45kg. Not applicable to/from USA/Europe where the 32kg limit is strict.",
            headers: ["From > To", "Saudi Arabia", "Arabian Gulf***", "Middle East", "India", "Asia**", "Africa", "China"],
            fees: [
                { from: 'Saudi Arabia', rates: ['-', '$316', '$316', '$285', '$420', '$260', '$458'] },
                { from: 'Arabian Gulf', rates: ['$316', '-', '$316', '$504', '$546', '$462', '$522'] },
                { from: 'Middle East', rates: ['$316', '$316', '-', '$504', '$546', '$462', '$522'] },
                { from: 'India', rates: ['$285', '$504', '$504', '-', '-', '$462', '-'] },
                { from: 'Asia', rates: ['$420', '$546', '$546', '-', '-', '$462', '-'] },
                { from: 'Africa', rates: ['$260', '$462', '$462', '$462', '$462', '-', '$462'] },
                { from: 'China', rates: ['$458', '$522', '$522', '-', '-', '$462', '-'] }
            ],
            notes: ["**Pakistan: $245", "***Kuwait: $150"]
        },
        sportsEquipmentFees: {
            title: "Sports Equipment - Excess & Oversized Fees",
            international: [
                "<strong>$100 USD</strong> for pieces oversized between 158cm and 205cm.",
                "<strong>$167 USD</strong> ($100 + $67) for pieces oversized between 206cm and 300cm.",
                "To/From Canada, an additional <strong>$89 CAD</strong> is charged on top of the $100 USD fee for oversized pieces."
            ],
            domestic: [
                 "<strong>100 SAR</strong> for pieces oversized between 158cm and 205cm.",
                 "<strong>200 SAR</strong> (100 + 100) for pieces oversized between 206cm and 300cm."
            ],
            note: "Items over 300cm or over 32kg must be shipped via Cargo."
        }
    },

    prohibitedItems: {
        title: "Prohibited & Restricted Goods",
        general: {
            title: "General Prohibited Items",
            items: ["Firearms, ammunition, swords, and knives", "Explosives, incendiary materials, flammable substances, toxic substances, and compressed gases"]
        },
        usa_ca_eu: {
            title: "Restrictions for USA, Canada, and EU Flights",
            items: ["All liquids, gels, toothpaste, liquid cosmetics, and perfumes in hand luggage (unless compliant with 100ml rule)", "Cigarette lighters in both hand and checked baggage"]
        },
        china: {
            title: "Restrictions for China Flights (CAAC)",
            checkedBaggageProhibited: [
                "Lighters, lithium batteries, spare batteries",
                "Power banks, power cases, rechargeable items",
                "Electronic cigarettes (all kinds)",
                "Gold, jewelry, cash",
                "All food products and beverages"
            ],
            carryOnAllowed: "Power banks are allowed in carry-on (max 2 pieces), but note that some authorities like India may not permit them."
        },
        oman: {
            title: "Restrictions by Oman Customs",
            items: ["Alcohol (restricted quantities)", "Controlled drugs", "Cash over OMR 6,000", "E-Cigarettes", "Stun guns, weapons, ammunition", "Remote controlled aircraft/drones", "Items similar to weapons (e.g., toy guns)", "Night-vision goggles, laser pointers", "And other items as per Oman customs law."]
        },
        selfBalancingDevices: {
            title: "Self-Balancing Devices (Hoverboards)",
            note: "Saudia does not accept any lithium battery-powered self-balancing personal transportation devices. These are prohibited as both carry-on and checked baggage on all flights."
        }
    },
    
    contactDetails: {
        title: "Contact Saudia",
        mainKSA: {
            country: "Saudi Arabia",
            number: "920022222"
        },
        otherNumbers: [
            { country: "Kuwait", number: "22200072" },
            { country: "United Arab Emirates", number: "042485777" },
            { country: "Qatar", number: "00800101093" },
            { country: "Bahrain", number: "65005665" },
            { country: "Oman", number: "80074248" },
            { country: "Jordan", number: "065777766" },
            { country: "Egypt", number: "19898" },
            { country: "UK", number: "+44 (0) 1217900430 / +44 (0) 1613940567 / +44 (0) 2079931238" },
            { country: "France", number: "33187651866 / 33187651055" },
            { country: "Switzerland", number: "0848006600" },
            { country: "Germany", number: "01803698888" },
            { country: "Spain", number: "+34910602163 or Toll-Free +34900499006" },
            { country: "Italy", number: "+3906895848" },
            { country: "USA", number: "1-800-472-8342" },
            { country: "Canada", number: "1-855-588-0999" },
            { country: "Turkey", number: "90-8504551601" }
        ]
    }
};

export function displaySaudiarabianInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("saudiarabian.js placeholder not found.");
        return;
    }

    const info = saudiaInfo;
    let html = `
        <style>
            .sv-details { border: 1px solid #eee; border-radius: 8px; margin-bottom: 10px; }
            .sv-details summary { 
                font-weight: bold; 
                cursor: pointer; 
                padding: 12px; 
                background-color: transparent; 
                color: #FF9100; 
                list-style-position: inside; 
            }
            .sv-details summary:hover { 
                color: #E68200; 
            }
            .sv-details-content { padding: 15px; border-top: 1px solid #eee; }
            .sv-table { width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9em; }
            .sv-table th, .sv-table td { border: 1px solid #ddd; padding: 8px; text-align: left; vertical-align: top; }
            .sv-table th { background-color: rgba(0,0,0,0.05); }
            .sv-list { list-style-type: disc; padding-left: 20px; margin-top: 5px; }
            .sv-list li { margin-bottom: 8px; }
            .sv-fee-table-container { overflow-x: auto; }
            .sv-sub-section { margin-top: 15px; }
        </style>
    `;

    html += `
        <div class="calculator-cta-section">
            <span class="calculator-cta-icon">✈️</span>
            <div class="calculator-cta-content">
                <h4>Calculate or Pre-Purchase Baggage</h4>
                <p>Use Saudia's official pages for the most accurate information and to purchase extra baggage at a discount.</p>
                <a href="${info.baggageCalculatorUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">VISIT BAGGAGE CALCULATOR PAGE</a>
            </div>
        </div>
        <hr style="margin: 20px 0;">
        <div class="summary-card"><h4>${info.summary.title}</h4><ul class="sv-list">`;
    info.summary.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div><hr style="margin: 20px 0;">`;
    
    
    html += `<details class="sv-details"><summary>${info.handLuggage.title}</summary><div class="sv-details-content">`;
    info.handLuggage.allowances.forEach(allowance => {
        html += `<div class="sv-sub-section"><h5>${allowance.serviceClass}</h5><ul class="sv-list">`;
        allowance.items.forEach(item => {
            html += `<li><strong>${item.piece}:</strong> ${item.weight} (Max dimensions: ${item.dimensions})</li>`;
        });
        html += `</ul></div>`;
    });
    html += `<details class="sv-details"><summary>${info.handLuggage.freeCarryOnItems.title}</summary><div class="sv-details-content"><p>${info.handLuggage.freeCarryOnItems.note}</p><ul class="sv-list">`;
    info.handLuggage.freeCarryOnItems.items.forEach(item => html += `<li>${item}</li>`);
    html += `</ul></div></details>`;
    html += `<details class="sv-details"><summary>${info.handLuggage.notes.title}</summary><div class="sv-details-content"><ul class="sv-list">`;
    info.handLuggage.notes.items.forEach(note => html += `<li>${note}</li>`);
    html += `</ul></div></details></div></details>`;
    
    html += `<details class="sv-details"><summary>${info.specialAllowances.title}</summary><div class="sv-details-content">`;
    html += `<details class="sv-details"><summary>${info.specialAllowances.alfursan.title}</summary><div class="sv-details-content"><p>${info.specialAllowances.alfursan.note}</p><p><em>${info.specialAllowances.alfursan.internationalNote}</em></p></div></details>`;
    html += `<details class="sv-details"><summary>${info.specialAllowances.renalPatients.title}</summary><div class="sv-details-content"><p>${info.specialAllowances.renalPatients.note}</p><p><strong>Allowance: ${info.specialAllowances.renalPatients.allowance}</strong></p><h6>Conditions:</h6><ul class="sv-list">`;
    info.specialAllowances.renalPatients.conditions.forEach(cond => html += `<li>${cond}</li>`);
    html += `</ul></div></details></div></details>`;

    html += `<details class="sv-details"><summary>${info.excessBaggage.title}</summary><div class="sv-details-content">`;
    html += `<details class="sv-details"><summary>General Conditions & Notes</summary><div class="sv-details-content"><ul class="sv-list">`;
    info.excessBaggage.generalNotes.forEach(note => html += `<li>${note}</li>`);
    html += `</ul></div></details>`;
    const dom = info.excessBaggage.domestic;
    html += `<details class="sv-details"><summary>${dom.title}</summary><div class="sv-details-content"><table class="sv-table"><thead><tr><th>${dom.headers[0]}</th><th>${dom.headers[1]}</th></tr></thead><tbody>`;
    dom.fees.forEach(r => html += `<tr><td>${r.condition}</td><td>${r.fee}</td></tr>`);
    html += `</tbody></table></div></details>`;
    const feeSections = [info.excessBaggage.prepaidInternationalPiece, info.excessBaggage.airportInternationalPiece, info.excessBaggage.onlineOverweight, info.excessBaggage.airportOverweight, info.excessBaggage.veryOverweightPiece];
    feeSections.forEach(sec => {
        html += `<details class="sv-details"><summary>${sec.title}</summary><div class="sv-details-content">`;
        if(sec.note) html += `<p>${sec.note}</p>`;
        html += `<div class="sv-fee-table-container"><table class="sv-table"><thead><tr>`;
        sec.headers.forEach(h => html += `<th>${h}</th>`);
        html += `</tr></thead><tbody>`;
        sec.fees.forEach(row => {
            html += `<tr><td><strong>${row.from}</strong></td>`;
            row.rates.forEach(rate => html += `<td>${rate}</td>`);
            html += `</tr>`;
        });
        html += `</tbody></table></div>`;
        if(sec.notes) html += `<p class="small-note">${sec.notes.join(', ')}</p>`;
        html += `</div></details>`;
    });
    const sf = info.excessBaggage.sportsEquipmentFees;
    html += `<details class="sv-details"><summary>${sf.title}</summary><div class="sv-details-content"><h6>International Flights</h6><ul class="sv-list">${sf.international.map(i => `<li>${i}</li>`).join('')}</ul><h6>Domestic Flights</h6><ul class="sv-list">${sf.domestic.map(i => `<li>${i}</li>`).join('')}</ul><p>${sf.note}</p></div></details>`;
    html += `</div></details>`; 

    html += `<details class="sv-details"><summary>${info.allowedGoods.title}</summary><div class="sv-details-content">`;
    Object.values(info.allowedGoods).slice(1).forEach(section => {
        html += `<details class="sv-details"><summary>${section.title}</summary><div class="sv-details-content">`;
        if(section.note) html += `<p>${section.note}</p>`;
        if(section.notes) html += `<ul class="sv-list">${section.notes.map(n => `<li>${n}</li>`).join('')}</ul>`;
        html += `</div></details>`;
    });
    html += `</div></details>`;
    
    html += `<details class="sv-details"><summary>${info.prohibitedItems.title}</summary><div class="sv-details-content">`;
     Object.values(info.prohibitedItems).slice(1).forEach(section => {
        html += `<details class="sv-details"><summary>${section.title}</summary><div class="sv-details-content">`;
        if(section.note) html += `<p>${section.note}</p>`;
        if(section.items) html += `<ul class="sv-list">${section.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
        if(section.checkedBaggageProhibited) html += `<p><strong>Prohibited in Checked Baggage:</strong></p><ul class="sv-list">${section.checkedBaggageProhibited.map(i => `<li>${i}</li>`).join('')}</ul>`;
        if(section.carryOnAllowed) html += `<p><strong>Allowed in Carry-On:</strong> ${section.carryOnAllowed}</p>`;
        html += `</div></details>`;
    });
    html += `</div></details>`;

    html += `<hr style="margin: 20px 0;"><h3>${info.contactDetails.title}</h3>`;
    html += `<table class="sv-table"><thead><tr><th>Country/Territory</th><th>Telephone Number</th></tr></thead><tbody>`;
    html += `<tr><td><strong>${info.contactDetails.mainKSA.country}</strong></td><td><strong>${info.contactDetails.mainKSA.number}</strong></td></tr>`;
    info.contactDetails.otherNumbers.forEach(c => {
        html += `<tr><td>${c.country}</td><td>${c.number}</td></tr>`;
    });
    html += `</tbody></table>`;
    html += `
        <div style="text-align:center; margin: 20px 0;">
            <a href="${info.contactPageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button" style="background-color: #555; max-width: 300px; display: inline-block;">Visit Full Contact Page</a>
        </div>
    `;
    
    placeholderElement.innerHTML = html;
}