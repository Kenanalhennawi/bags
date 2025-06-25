
export const chinaSouthernInfo = {
    name: "China Southern Airlines (CZ)",
    ctaTitle: "China Southern Airlines Baggage Information",
    ctaText: "For comprehensive details on baggage allowances, excess baggage fees, special baggage, and other related policies for your China Southern flight, please visit their official website.",
    ctaButtonText: "VISIT CHINA SOUTHERN BAGGAGE INFO",
    officialBaggagePageUrl: "https://www.csair.com/global/en/tourguide/luggage_service/", 

    excessBaggageIntro: "Please check your baggage at the check-in counter or self-service baggage check-in kiosk in advance. China Southern may inspect your baggage at the check-in counter, security check counter, boarding gate and in the cabin. Baggage exceeding the free baggage allowance will be charged as per excess baggage rate.",
    
    excessCheckedBaggage: {
        title: "1. Excess Checked Baggage",
        domestic: {
            title: "1.1 Domestic Travel",
            rule: "Regardless of the fare class actually paid by the passengers and the actual position of their seats, baggage carried on China Southern flights (the flight actually operated by China Southern) which exceeds the free baggage allowance will be charged according to the following excess baggage rates: Excess baggage is charged by each kilogram at a rate of 0.6% of the published normal fares of an adult Economy Class ticket price (one-way) applicable on the day the excess baggage ticket is filled; If no direct normal fares are published, the rate is calculated by adding different flights(The above charges are for ordinary checked baggage)."
        },
        internationalRegional: {
            title: "1.2 International/Regional Travel",
            generalRule: "1.2.1 Any checked baggage that exceeds the limit on pieces, dimensions, or weight will be charged according to the following standard. If a baggage exceeds the standards of two or more limits among pieces, dimensions, and weight, it will be charged accumulatively.",
            chargeCriteriaTitle: "1.2.2 Charge criteria and currency selection for excess baggage are as follows:",
            chargeCriteria: [
                "(1) If the commencement of itinerary is within the Chinese mainland (excluding Hong Kong, Macao and Taiwan), the excess baggage is charged on CNY basis.",
                "(2) If the commencement of itinerary is within the European region, the excess baggage is charged on Euro basis.",
                "(3) Except for the above two situations, the excess baggage is charged on U.S. dollars basis."
            ],
            feeStandardTitle: "1.2.3 Excess baggage charge standard",
            areas: [
                {
                    areaName: "Area 1",
                    description: "(1) Itineraries between Chinese mainland and Hong Kong, Macao, Taiwan and the Americas, Africa. (2) Itineraries between the Americas and Japan, South Korea, Southeast Asia, South Asia, Central and Western Asia, Southwest Pacific, Europe, Middle East, Africa. (3) Itineraries between Africa and Japan, South Korea, Southeast Asia, South Asia, Central and Western Asia, Southwest Pacific, Europe.",
                    headers: ["Type", "Weight", "Dimension (L+W+H)", "CNY (Yuan)", "EUR", "USD"],
                    fees: [
                        { type: "The first piece in addition to the standard allowance", weight: "≤23kg", dimension: "≤158cm", cny: "1380/pc", eur: "200/pc", usd: "225/pc" },
                        { type: "The second piece or more in addition to the standard allowance", weight: "≤23kg", dimension: "≤158cm", cny: "2000/pc", eur: "290/pc", usd: "330/pc" },
                        { type: "Oversize piece", weight: "-", dimension: "159cm-203cm (inclusive)", cny: "1000", eur: "145", usd: "165" },
                        { type: "Overweight piece", weight: "23-28kg (inclusive)", dimension: "-", cny: "500", eur: "75", usd: "85" },
                        { type: "Overweight piece", weight: "28-32kg (inclusive)", dimension: "-", cny: "1010", eur: "145", usd: "170" },
                        { type: "Overweight piece", weight: "32-45kg (inclusive)", dimension: "-", cny: "3000", eur: "435", usd: "495" }
                    ]
                },
                {
                    areaName: "Area 2",
                    description: "(1) Itineraries between Chinese mainland and Hong Kong, Macao, Taiwan and Europe, Middle East, Southwest Pacific, Japan. (2) Itineraries between Japan, South Korea, Southeast Asia, South Asia, Central and Western Asia, Southwest Pacific. (3) Itineraries between Middle East and Japan, South Korea, Southeast Asia, South Asia, Central and Western Asia, Southwest Pacific. (4) Itineraries between Southwest Pacific and Japan, South Korea, Southeast Asia, South Asia, Central and Western Asia. (5) Itineraries between Japan and South Korea, Southeast Asia, South Asia, Central and Western Asia.",
                    headers: ["Type", "Weight", "Dimension (L+W+H)", "CNY (Yuan)", "EUR", "USD"],
                    fees: [
                        { type: "The first piece beyond the free allowance", weight: "≤23kg", dimension: "≤158cm", cny: "1100/pc", eur: "160/pc", usd: "185/pc" },
                        { type: "The second piece or more beyond the free allowance", weight: "≤23kg", dimension: "≤158cm", cny: "2000/pc", eur: "290/pc", usd: "330/pc" },
                        { type: "Oversize piece", weight: "-", dimension: "159cm-203cm (Inclusive)", cny: "1000", eur: "145", usd: "170" },
                        { type: "Overweight piece", weight: "23-28kg (inclusive)", dimension: "-", cny: "500", eur: "75", usd: "85" },
                        { type: "Overweight piece", weight: "28-32kg (inclusive)", dimension: "-", cny: "1010", eur: "145", usd: "170" }
                    ]
                },
                {
                    areaName: "Area 3",
                    description: "(1) Itineraries between Chinese mainland and Hong Kong, Macao, Taiwan and South Korea, Southeast Asia, South Asia, Central and Western Asia. (2) Other itineraries unspecified above.",
                    headers: ["Type", "Weight", "Dimension (L+W+H)", "CNY (Yuan)", "USD"],
                    fees: [
                        { type: "The first piece in addition to the standard allowance", weight: "≤23kg", dimension: "≤158cm", cny: "880/PIECE", usd: "145/PIECE" },
                        { type: "The second piece or more in addition to the standard allowance", weight: "≤23kg", dimension: "≤158cm", cny: "1430/PIECE", usd: "240/PIECE" },
                        { type: "Oversize piece", weight: "-", dimension: "159cm-203cm (inclusive)", cny: "1000", usd: "170" },
                        { type: "Overweight piece", weight: "23-28kg (inclusive)", dimension: "-", cny: "390", usd: "65" },
                        { type: "Overweight piece", weight: "28-32kg (inclusive)", dimension: "-", cny: "910", usd: "155" }
                    ],
                    note: "Note: Itineraries originating from Taiwan to Chinese Mainland, Hong Kong and Macao have special rates for overweight and oversize, specifically the following adjustments: US$50 for overweight 23-28kg (inclusive), US$135 for overweight 28-32kg (inclusive); US$150 for oversize (159cm-203cm (inclusive))."
                }
            ]
        }
    },
    boardingGateCharges: {
        title: "2. Baggage charged at the boarding gate",
        generalRule: "2.1 Any carry-on items exceeding the carry-on baggage limitation will be charged as per applicable excess baggage rules. Any carry-on items exceeding the carry-on baggage limitation will be charged according to the applicable excess baggage fee standard. For details, please refer to 1. Excess Checked Baggage.",
        southKoreaToChina: {
            title: "2.2 For flights operated from South Korea to Chinese Mainland, fees will be charged when you check your baggage at the boarding gate. The standards are as follows:",
            headers: ["Cabin Class", "Type", "Weight", "Dimension (L+W+H)", "Fee (CNY or Equivalent Local Currency)"],
            fees: [
                { cabin: "First Class", type: "The first piece beyond the free allowance", weight: "≤32kg", dimension: "≤158cm", fee: "1000/pc" },
                { cabin: "First Class", type: "The second piece or more beyond the free allowance", weight: "≤32kg", dimension: "≤158cm", fee: "1300/pc" },
                { cabin: "First Class", type: "Oversize piece", weight: "-", dimension: "159cm-300cm", fee: "1000" },
                { cabin: "First Class", type: "Overweight piece", weight: "32-45kg (inclusive)", dimension: "-", fee: "3000" },
                { cabin: "Business Class, Premium Economy Class and Economy Class", type: "The first piece beyond the free allowance", weight: "≤23kg", dimension: "≤158cm", fee: "1000/pc" },
                { cabin: "Business Class, Premium Economy Class and Economy Class", type: "The second piece or more beyond the free allowance", weight: "≤23kg", dimension: "≤158cm", fee: "1300/pc" },
                { cabin: "Business Class, Premium Economy Class and Economy Class", type: "Oversize piece", weight: "-", dimension: "159cm-300cm", fee: "1000" },
                { cabin: "Business Class, Premium Economy Class and Economy Class", type: "Overweight piece", weight: "23-32kg (inclusive)", dimension: "-", fee: "1000" },
                { cabin: "Business Class, Premium Economy Class and Economy Class", type: "Overweight piece", weight: "32-45kg (inclusive)", dimension: "-", fee: "3000" }
            ]
        },
        notes: ["2.3 Fees charged at the boarding gate exclude free baggage allowance (FBA) and prepaid baggage which can only be used at the check-in counter."]
    },
    generalRules: {
        title: "General Rules",
        provisionsTitle: "1. General Provisions",
        provisions: [
            "Passengers must check in their luggage with a valid ticket. Checked baggage must be well-packaged, securely locked, firmly tied, able to withstand a certain amount of pressure, and capable of being safely handled and transported under normal operating conditions. It should meet the following conditions:",
            "(1) Suitcase, handbags and such kind of items should be locked;",
            "(2) It is not allowed to bundled more than two pieces of baggage into one piece;",
            "(3) It is not allowed to attach other items to baggage;",
            "(4) Bamboo baskets, net bags, grass strings and plastic bags are not permitted to be used as packing materials;",
            "(5) Passenger(s) name, detailed address and telephone number should be written on the baggage.",
            "China Southern may refuse to accept and transport any baggage whose packing does not meet the requirements. Even if the transportation is approved, China Southern shall not be liable for damage or breakage, except as otherwise provided by Chinese laws and international conventions. Please refer to the local requirements if the immigration authorities of each country have other requirements on baggage.",
            "Baggage will be transported on the same flight as the passenger whenever possible. For safety, security or operational reasons, China Southern may arrange other flights for transportation. If the passenger's baggage is transported by a subsequent flight, it will be delivered to the passenger by the carrier, and the passenger may be required by law to be physically present for customs clearance."
        ],
        limitationsTitle: "2. Limitations to Baggage Weight and Size",
        limitationsTable: {
            headers: ["Flight Type", "Route", "Maximum Weight per Piece", "Maximum Dimensions per Piece"],
            rows: [
                { flightType: "Domestic Flight", route: "&nbsp;", weight: "50kg/pc", dimensions: "The length, width and height shall not exceed 40*60*100 cm" }, 
                { flightType: "International/Regional Flight", route: "United States destinations involved", weight: "45kg/pc", dimensions: "the sum of L+W+H per piece≤203 cm" },
                { flightType: "International/Regional Flight", route: "no United States destinations involved", weight: "32kg/pc", dimensions: "the sum of L+W+H per piece≤158cm" }
            ]
        },
        limitationsNotes: [
            "1. The maximum weight of each piece of baggage in the domestic segment of international transport shall not exceed the weight specified by the international segment;",
            "2. The specifications (including size and weight) of the above baggage are the maximum of the ordinary checked baggage that the airline can accept and are not free baggage allowance. Passengers need to pay for the excess baggage allowance. For the maximum acceptable size of special baggage such as sports equipment, please refer to Section 4 Special Baggage.",
            "3. If any baggage exceeds the above limitation can be taken apart and the sub package meets the limitation, this baggage can be checked as normal baggage. If any baggage cannot be separated, it shall be transported as special baggage or cargo."
        ]
    },
    freeBaggageAllowance: {
        title: "Free Baggage Allowance",
        domestic: {
            title: "1. Domestic Travel",
            headers: ["First Class", "Business Class", "Premium Economy Class", "Economy Class"],
            allowances: ["40kg", "30kg", "20kg", "20kg"], 
            notes: [
                "1. A child passenger has the same basic baggage allowance as an adult;",
                "2. The infant not occupying a separate seat have no free baggage allowance. For each Infant you may bring a collapsible stroller free of charge;",
                "3. For domestic segments of international transport, the free baggage allowance per passenger is calculated on the basis of the applicable free baggage allowance for international segment.",
                "4. For passengers who involuntarily change cabin class, the free baggage allowance will be the applicable to original class.",
                "5. The specific baggage allowance is subject to the passenger ticket display."
            ]
        },
        internationalRegional: {
            title: "2. International/Regional Travel",
            generalPassengersTitle: "2.1 General Passengers",
            firstClass: {
                title: "2.1.1 First Class",
                allowance: "All itineraries: 3 pcs, 32 kg (70lb)/pc, the sum of L+W+H per piece≤158cm"
            },
            businessClass: {
                title: "2.1.2 Business Class",
                headers: ["Applicable Itinerary", "Business Full Flex", "Business Flex", "Business Standard"],
                rows: [ 
                    { itinerary: "All itineraries", fullFlex: "2 pcs, 32 kg (70lb)/pc, L+W+H ≤158cm", flex: "2 pcs, 32 kg (70lb)/pc, L+W+H ≤158cm", standard: "2 pcs, 32 kg (70lb)/pc, L+W+H ≤158cm" }
                ]
            },
            premiumEconomyClass: {
                title: "2.1.3 Premium Economy Class",
                categories: [
                    {
                        itineraries: [
                            "① Between Europe [Note 1] and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Southwest Pacific [Note 2] / Americas / Middle East [Note 3] / Africa;",
                            "② Between Americas and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Central and West Asia / Southwest Pacific / Middle East / Africa;",
                            "③ Between Southwest Pacific and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Central and West Asia/Middle East / Africa;",
                            "④ Between Middle East and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Central and West Asia[Note 4] / Africa;",
                            "⑤ Between Africa and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Central and West Asia;",
                            "⑥ Between Japan and Chinese mainland, Hong Kong, Macao, Taiwan / South Korea / Southeast Asia / South Asia / Central and West Asia.",
                            "⑦ Between South Korea and the Chinese mainland (excluding Hong Kong, Macao and Taiwan).",
                            "⑧ Between Singapore and the Chinese mainland (excluding Hong Kong, Macao and Taiwan)."
                        ],
                        allowance: "2 pcs, 23 kg (50lb)/pc, the sum of L+W+H per piece≤158cm" 
                    },
                    {
                        itineraries: [
                            "① Between South Korea and Hong Kong, Macao, Taiwan / Southeast Asia / South Asia / Central and West Asia;",
                            "② Between Southeast Asia (excluding Singapore) and the Chinese mainland (excluding Hong Kong, Macao and Taiwan).",
                            "③ Between Southeast Asia and Chinese mainland, Hong Kong, Macao, Taiwan / South Asia / Central and West Asia;",
                            "④ Between South Asia and Chinese mainland, Hong Kong, Macao, Taiwan / Central and West Asia;",
                            "⑤ Between Central and West Asia and Chinese mainland, Hong Kong, Macao, Taiwan;",
                            "⑥ Between Chinese mainland and Hong Kong, Macao, Taiwan;",
                            "⑦ Between Hong Kong, Macao and Taiwan;",
                            "⑧ Other itineraries not specified."
                        ],
                        allowance: "1 pc, 32 kg (70lb)/pc, the sum of L+W+H per piece≤158cm" 
                    }
                ]
            },
            economyClass: {
                title: "2.1.4 Economy Class",
                 categories: [
                     {
                        itineraries: [
                            "① Between Europe and Japan / Southwest Pacific / Americas / Middle East / Africa;",
                            "② Between America and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Central and West Asia / Southwest Pacific / Middle East / Africa;",
                            "③ Between the Southwest Pacific and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Central and West Asia / Middle East / Africa;",
                            "④ Between Middle East and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Central and West Asia / Africa;",
                            "⑤ Between Africa and Chinese mainland, Hong Kong, Macao, Taiwan / Japan, South Korea / Southeast Asia / South Asia / Central and West Asia;",
                            "⑥ Between Japan and Chinese mainland and Hong Kong, Macao, Taiwan / South Korea / Southeast Asia / South Asia / Central and West Asia.",
                            "⑦ Between Singapore and the Chinese mainland (excluding Hong Kong, Macao and Taiwan)."
                        ],
                        allowance: "2 pcs, 23 kg (50lb)/pc, the sum of L+W+H per piece≤158cm"
                    },
                    {
                        itineraries: [
                            "① Between Turkey and Chinese mainland, Hong Kong, Macao, Taiwan;",
                            "② Between Central and West Asia and Chinese mainland, Hong Kong, Macao, Taiwan."
                        ],
                        allowance: "1 pc, 32 kg (70lb)/pc, the sum of L+W+H per piece≤158cm"
                    },
                    {
                        itineraries: [
                            "① Between Europe (except Turkey) and Chinese mainland, Hong Kong, Macao, Taiwan;",
                            "② Between Europe and South Korea / Southeast Asia / South Asia;",
                            "③ Between South Korea and Chinese mainland, Hong Kong, Macao Taiwan / Southeast Asia / South Asia / Central and West Asia;",
                            "④ Between Southeast Asia (excluding Singapore) and the Chinese mainland (excluding Hong Kong, Macao and Taiwan).",
                            "⑤ Between Southeast Asia and Chinese mainland, Hong Kong, Macao, Taiwan / South Asia / Central and West Asia;",
                            "⑥ Between South Asia and Chinese mainland, Hong Kong, Macao, Taiwan / Central and West Asia;",
                            "⑦ Between Chinese mainland and Hong Kong, Macao, Taiwan;",
                            "⑧ Between Hong Kong, Macao and Taiwan;",
                            "⑨ Other itineraries not specified."
                        ],
                        allowance: "1 pc, 23 kg (50lb)/pc, the sum of L+W+H per piece≤158cm"
                    }
                ],
                economySaverLightNote: "In order to meet the travel needs of different passengers, China Southern has introduced “Economy Saver”、“Economy Light” branded fares on some routes. The free checked baggage allowance for the Economy Saver brand fare is one piece less than the Economy Standard brand fare (the weight and size restrictions for each piece remain unchanged), and there is no free checked baggage allowance for the Economy Light brand fare, based on the specific conditions of the purchase of the ticket."
            },
            notesGeographic: {
                note1: "Note 1: Europe refers to Albania / Algeria /Andorra / Austria / Belarus / Belgium / Bosnia and Herzegovina / Bulgaria / Croatia / Cyprus / Czech Republic / Denmark / Estonia / Faroe Islands / Finland / France / Germany / Gibraltar / Greece / Hungary / Iceland / Ireland / Italy / Latvia / Liechtenstein / Lithuania / Luxembourg / Macedonia (FYROM) / Malta / Moldova / Monaco / Montenegro / Morocco / Netherlands / Norway / Poland / Portugal / Romania / Russia (in European) / San Marino / Serbia / Slovakia / Slovenia / Spain / Svalbard and Jan Mayen Islands / Sweden / Switzerland / Tunisia / Turkey / Ukraine / United Kingdom / Vatican , etc.",
                note2: "Note 2: Southwest Pacific refers to American Samoa (US) / Australia / New Zealand / Christmas Island / Cocos (Keeling) Islands / Cook Islands / Fiji / French Polynesia(FR) / Kiribati / Nauru / New Caledonia / Niue / Norfolk Islands / Papua New Guinea / Pitcairn Islands / Samoa / Solomon Islands / Tokelau Islands / Tonga / Tuvalu / Vanuatu / Wallis and Futuna Islands, etc.",
                note3: "Note 3: Middle East refers to UAE / Saudi Arabia / Qatar / Kuwait / Israel / Jordan / Bahrain / Lebanon / Iraq / Egypt / Syria / Sudan / Oman / Yemen / Palestine Territory, Occupied / South Sudan, etc.",
                note4: "Note 4: Central and West Asia refers to Uzbekistan / Tajikistan / Kazakhstan / Kyrgyzstan / Turkmenistan / Iran/ Azerbaijan / Georgia / Armenia and Russia (in Asia)."
            },
            infantNoSeat: {
                title: "2.2 Infant not occupying a seat",
                allowance: "The free checked baggage allowance for infant not occupying a seat is 1 piece, 10kg (22 lbs) per piece, and the sum of three sides of each piece should not exceed 115cm (45 inches), and one collapsible stroller can be checked free of charge."
            },
            internationalStudents: {
                title: "2.3 International Student Passengers",
                allowance: "An international student passenger who purchases a Premium Economy Class or Economy Class, by meeting the following conditions, is entitled to add one piece of baggage as per the above standard for adults. Specific information is subject to the system display.",
                conditions: [
                    "2.3.1 International students refer to students under 30 years of age (excluding) who attend regular schools/colleges/universities in countries/regions other than their place of nationality. Copies of valid passport, visa and study certificate (student ID card, admission notice or invitation for visit and exchange, etc.) should be provided when purchasing tickets.",
                    "2.3.2 The preferential baggage allowance is only applicable to the fares for travel between the country/region of study and the country/region of nationality.",
                    "2.3.3 An international student passenger who is a Sky Pearl Platinum, Gold or Silver Card member of China Southern, or Elite, Elite Plus members of cooperative airlines of China Southern and has already been entitled to the corresponding free checked baggage allowance, will not be entitled to the extra free checked baggage allowance for international student passengers.",
                    "2.3.4 Additional free checked baggage for international student passengers is no longer available when using the Economy Saver brand fare or Economy Light brand fare.",
                    "2.3.5 For the economy class, the specific itineraries or fares are as follows:\n(1) Between the Chinese mainland (excluding Hong Kong, Macao and Taiwan) and Australia, New Zealand, North America, Europe, Central and Western Asia, Pakistan, India, Japan, South Korea.\n(2) Between the Chinese mainland and Hong Kong, Macao, Taiwan\n(3) Between Europe and Australia, New Zealand.",
                    "2.3.6 For the premium economy class, the specific itineraries or fares are as follows:\n(1) Between the Chinese mainland (excluding Hong Kong, Macao and Taiwan) and Australia, New Zealand, North America, Central and Western Asia, Pakistan, India, Japan.\n(2) Between the Chinese mainland and Hong Kong, Macao, Taiwan.\n(3) Between Europe and Australia, New Zealand."
                ]
            },
            laborPassengers: {
                title: "2.4 Labor Passengers",
                allowance: "A labor passenger who purchases a Premium Economy Class or Economy Class, by meeting the following conditions, is entitled to add one piece of baggage as per the above standard for adults. Specific information is subject to the system.",
                conditions: [
                    "2.4.1 Labor passengers refer to passengers who work in countries other than the place of nationality. Copies of the valid passport and labor visa (except work visa) should be provided when purchasing tickets.",
                    "2.4.2 The preferential baggage allowance is only applicable to the fares for the itineraries between the country of employment and the country of nationality.",
                    "2.4.3 For a labor passenger who has already been entitled to the free checked baggage allowance as a Sky Pearl Platinum, Gold or Silver Card member of China Southern, or Elite, Elite Plus members of cooperative airlines of China Southern, will not be entitled to the extra free checked baggage allowance for labor passengers.",
                    "2.4.4 Additional free checked baggage for international student passengers is no longer available when using the Economy Saver brand fare or Economy Light brand fare.", 
                    "2.4.5 The specific itineraries or fares are as follows:\n(1) Between the Chinese mainland (excluding Hong Kong, Macao and Taiwan) and Southeast Asia (excluding Singapore) , South Asia, Central and Western Asia (except Tajikistan);\n(2) Between Korea and South Asia, Central and Western Asia;\n(3) Between the Chinese mainland (excluding Hong Kong, Macao and Taiwan) and South Korea, with Economy Class fares."
                ]
            },
            otherRegulations: {
                title: "2.5 Other regulations",
                points: [
                    "2.5.1 All international and regional itineraries adopt the piecework system to implement baggage transportation rules and follow IATA Resolution 302 for calculation.",
                    "2.5.2 For China Southern code share flights, there are two ways of implementation according to the content of bilateral agreements，according to the operating carrier regulations or marketing carrier regulations, which are subject to the system display.",
                    "2.5.3 The additional free checked baggage allowance for Sky Pearl Platinum, Gold and Silver Card members of China Southern shall be carried out in accordance with the relevant rules.",
                    "2.5.4 In case of voluntary change of tickets, the free checked baggage allowance shall be adopted as follows.\nIn case of any change to the first fare component of a totally unused ticket, the free baggage allowance standard corresponding to the fare applicable on the date of ticket exchange shall be applied. In case of no change to the first fare component of a totally unused ticket, the free baggage allowance standard corresponding to the fare applicable on the original date of issue will be applied.\nIf the ticket is partially used, the free baggage allowance will apply to the fare applicable on the original date of issue.",
                    "2.5.5 For passengers who involuntarily change cabin class, the free baggage allowance will be the applicable to original class."
                ]
            }
        }
    },

    contactDetails: {
        title: "Contact China Southern Airlines",
        websiteServices: {
            title: "Website Service",
            services: [
                { name: "Domestic ticket service", domesticHotline: "4006695539-1-4-1", overseasHotline: "+86-4008695539-1-4-1", hours: "7×24", items: "change or refund for online booked ticket, payment with the assistance of customer service, and complaint of website failure." },
                { name: "International ticket service", domesticHotline: "4006695539-1-4-2", overseasHotline: "+86-4008695539-1-4-2", hours: "7×24", items: "change or refund for online booked ticket, payment with the assistance of customer service, and complaint of website failure." },
                { name: "Vacation Booking", domesticHotline: "4006695539-1-5", overseasHotline: "+86-4008695539-1-5", hours: "7×24", items: "vacation products inquiry and booking, customer service-added payment" },
                { name: "Hotel Booking", domesticHotline: "4006695539-1-5", overseasHotline: "+86-4008695539-1-5", hours: "7×24", items: "hotel products inquiry and booking, customer service-added payment" }
            ]
        },
        complaintAndRecommendation: {
            title: "Complaint and recommendation",
            domesticHotline: "95539-1-9",
            overseasHotline: "+86-4008695539",
            hours: "7×24",
            email: "customerservice@csair.com"
        },
        otherContactInfo: {
            title: "Other contact information",
            contacts: [
                { type: "Fax", details: "4006695539-1-# / +86-4006695539-1-#" },
                { type: "Email", details: "95539@csair.com" }
            ]
        }
    }
};

/**
 * Displays China Southern Airlines baggage information
 * @param {HTMLElement} placeholderElement - The DOM element to inject HTML into
 */
export function displayChinaSouthernInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("China Southern placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for China Southern.</p>";
        return;
    }

    const info = chinaSouthernInfo;
    let html = "";

    if (info.ctaTitle && info.ctaText && info.ctaButtonText && info.officialBaggagePageUrl) {
        html += `
            <div class="calculator-cta-section">
                <span class="calculator-cta-icon">✈️</span>
                <div class="calculator-cta-content">
                    <h4>${info.ctaTitle}</h4>
                    <p>${info.ctaText}</p>
                    <a href="${info.officialBaggagePageUrl}" target="_blank" rel="noopener noreferrer" class="calculator-cta-button">${info.ctaButtonText}</a>
                </div>
            </div>
            <hr style="margin: 20px 0;">`;
    }

    if (info.excessBaggageIntro) {
        html += `<p>${info.excessBaggageIntro}</p>`;
    }

    if (info.excessCheckedBaggage) {
        html += `<h3>${info.excessCheckedBaggage.title || 'Excess Checked Baggage'}</h3>`;
        if (info.excessCheckedBaggage.domestic) {
            html += `<h4>${info.excessCheckedBaggage.domestic.title}</h4>`;
            html += `<p>${info.excessCheckedBaggage.domestic.rule}</p>`;
        }
        if (info.excessCheckedBaggage.internationalRegional) {
            const ir = info.excessCheckedBaggage.internationalRegional;
            html += `<h4>${ir.title}</h4>`;
            if (ir.generalRule) html += `<p>${ir.generalRule}</p>`;
            if (ir.chargeCriteriaTitle) html += `<h5>${ir.chargeCriteriaTitle}</h5>`;
            if (ir.chargeCriteria && ir.chargeCriteria.length > 0) {
                html += `<ul>`;
                ir.chargeCriteria.forEach(crit => html += `<li>${crit}</li>`);
                html += `</ul>`;
            }
            if (ir.feeStandardTitle) html += `<h5>${ir.feeStandardTitle}</h5>`;
            if (ir.areas && ir.areas.length > 0) {
                ir.areas.forEach(area => {
                    html += `<h6>${area.areaName}</h6>`;
                    html += `<p class="small-note">${area.description}</p>`;
                    html += `<table class="rules-table"><thead><tr>`;
                    area.headers.forEach(header => html += `<th>${header}</th>`);
                    html += `</tr></thead><tbody>`;
                    area.fees.forEach(fee => {
                        html += `<tr>
                                    <td>${fee.type || ''}</td>
                                    <td>${fee.weight || ''}</td>
                                    <td>${fee.dimension || ''}</td>
                                    <td>${fee.cny || ''}</td>
                                    <td>${fee.eur || (area.headers.includes("EUR") ? '' : '-')}</td>
                                    <td>${fee.usd || (area.headers.includes("USD") ? '' : '-')}</td>
                                 </tr>`;
                    });
                    html += `</tbody></table>`;
                    if (area.note) html += `<p class="small-note">${area.note}</p>`;
                });
            }
        }
        html += `<hr>`;
    }

    if (info.boardingGateCharges) {
        html += `<h3>${info.boardingGateCharges.title || 'Baggage Charged at Boarding Gate'}</h3>`;
        if (info.boardingGateCharges.generalRule) html += `<p>${info.boardingGateCharges.generalRule}</p>`;
        if (info.boardingGateCharges.southKoreaToChina) {
            const sk = info.boardingGateCharges.southKoreaToChina;
            html += `<h4>${sk.title}</h4>`;
            html += `<table class="rules-table"><thead><tr>`;
            sk.headers.forEach(header => html += `<th>${header}</th>`);
            html += `</tr></thead><tbody>`;
            sk.fees.forEach(fee => {
                html += `<tr>
                            <td>${fee.cabin}</td>
                            <td>${fee.type}</td>
                            <td>${fee.weight}</td>
                            <td>${fee.dimension}</td>
                            <td>${fee.fee}</td>
                         </tr>`;
            });
            html += `</tbody></table>`;
        }
        if (info.boardingGateCharges.notes && info.boardingGateCharges.notes.length > 0) {
             info.boardingGateCharges.notes.forEach(note => html += `<p class="small-note">${note}</p>`);
        }
        html += `<hr>`;
    }

    if (info.generalRules) {
        html += `<h3>${info.generalRules.title || 'General Rules'}</h3>`;
        if (info.generalRules.provisionsTitle) html += `<h4>${info.generalRules.provisionsTitle}</h4>`;
        if (info.generalRules.provisions && info.generalRules.provisions.length > 0) {
            html += `<ul>`;
            info.generalRules.provisions.forEach(prov => html += `<li>${prov.replace(/\n/g, "<br>")}</li>`);
            html += `</ul>`;
        }
        if (info.generalRules.limitationsTitle) html += `<h4>${info.generalRules.limitationsTitle}</h4>`;
        if (info.generalRules.limitationsTable && info.generalRules.limitationsTable.rows) {
            html += `<table class="rules-table"><thead><tr>`;
            info.generalRules.limitationsTable.headers.forEach(header => html += `<th>${header}</th>`);
            html += `</tr></thead><tbody>`;
            info.generalRules.limitationsTable.rows.forEach(row => {
                 html += `<tr>
                            <td>${row.flightType}</td>
                            <td>${row.route}</td>
                            <td>${row.weight}</td>
                            <td>${row.dimensions}</td>
                          </tr>`;
            });
            html += `</tbody></table>`;
        }
        if (info.generalRules.limitationsNotes && info.generalRules.limitationsNotes.length > 0) {
            html += `<h5>Notes:</h5><ul class="small-note">`;
            info.generalRules.limitationsNotes.forEach(note => html += `<li>${note}</li>`);
            html += `</ul>`;
        }
        html += `<hr>`;
    }

    if (info.freeBaggageAllowance) {
        html += `<h3>${info.freeBaggageAllowance.title || 'Free Baggage Allowance'}</h3>`;
        if (info.freeBaggageAllowance.domestic) {
            const dom = info.freeBaggageAllowance.domestic;
            html += `<h4>${dom.title}</h4>`;
            html += `<table class="rules-table"><thead><tr>`;
            dom.headers.forEach(header => html += `<th>${header}</th>`);
            html += `</tr></thead><tbody><tr>`;
            dom.allowances.forEach(allow => html += `<td>${allow}</td>`);
            html += `</tr></tbody></table>`;
            if (dom.notes && dom.notes.length > 0) {
                html += `<h5>Notes:</h5><ul class="small-note">`;
                dom.notes.forEach(note => html += `<li>${note}</li>`);
                html += `</ul>`;
            }
        }
        if (info.freeBaggageAllowance.internationalRegional) {
            const ir = info.freeBaggageAllowance.internationalRegional;
            html += `<h4>${ir.title}</h4>`;
            if (ir.generalPassengersTitle) html += `<h5>${ir.generalPassengersTitle}</h5>`;
            if (ir.firstClass) html += `<p><strong>${ir.firstClass.title}:</strong> ${ir.firstClass.allowance}</p>`;
            if (ir.businessClass && ir.businessClass.rows) {
                 html += `<h6>${ir.businessClass.title}:</h6><table class="rules-table"><thead><tr>`;
                 ir.businessClass.headers.forEach(h => html += `<th>${h}</th>`);
                 html += `</tr></thead><tbody>`;
                 ir.businessClass.rows.forEach(row => {
                    html += `<tr><td>${row.itinerary}</td><td>${row.fullFlex}</td><td>${row.flex}</td><td>${row.standard}</td></tr>`;
                 });
                 html += `</tbody></table>`;
            }
            const renderClassCategory = (classTitle, categories) => {
                html += `<h6>${classTitle}</h6>`;
                categories.forEach(cat => {
                    html += `<p><strong>Applicable Itineraries:</strong></p><ul>`;
                    cat.itineraries.forEach(it => html += `<li>${it.replace(/\[Note \d\]/g, match => `<em>${match}</em>`)}</li>`); 
                    html += `</ul><p><strong>Allowance:</strong> ${cat.allowance}</p><br>`;
                });
            };
            if (ir.premiumEconomyClass && ir.premiumEconomyClass.categories) {
                renderClassCategory(ir.premiumEconomyClass.title, ir.premiumEconomyClass.categories);
            }
            if (ir.economyClass && ir.economyClass.categories) {
                renderClassCategory(ir.economyClass.title, ir.economyClass.categories);
            }
            if (ir.economyClass && ir.economyClass.economySaverLightNote) {
                html += `<p class="small-note">${ir.economyClass.economySaverLightNote}</p>`;
            }
             if (ir.notesGeographic) {
                html += `<p class="small-note">${ir.notesGeographic.note1}</p>`;
                html += `<p class="small-note">${ir.notesGeographic.note2}</p>`;
                html += `<p class="small-note">${ir.notesGeographic.note3}</p>`;
                html += `<p class="small-note">${ir.notesGeographic.note4}</p>`;
            }
            if(ir.infantNoSeat) html += `<h5>${ir.infantNoSeat.title}</h5><p>${ir.infantNoSeat.allowance}</p>`;
            if(ir.internationalStudents) {
                html += `<h5>${ir.internationalStudents.title}</h5><p>${ir.internationalStudents.allowance}</p><ul class="small-note">`;
                ir.internationalStudents.conditions.forEach(cond => html+=`<li>${cond.replace(/\n/g, "<br>")}</li>`);
                html += `</ul>`;
            }
             if(ir.laborPassengers) {
                html += `<h5>${ir.laborPassengers.title}</h5><p>${ir.laborPassengers.allowance}</p><ul class="small-note">`;
                ir.laborPassengers.conditions.forEach(cond => html+=`<li>${cond.replace(/\n/g, "<br>")}</li>`);
                html += `</ul>`;
            }
            if(ir.otherRegulations && ir.otherRegulations.points) {
                html += `<h5>${ir.otherRegulations.title}</h5><ul class="small-note">`;
                ir.otherRegulations.points.forEach(point => html+=`<li>${point.replace(/\n/g, "<br>")}</li>`);
                html += `</ul>`;
            }
        }
        html += `<hr>`;
    }

    if (info.contactDetails) {
        html += `<h3>${info.contactDetails.title || 'Contact China Southern'}</h3>`;
        const cd = info.contactDetails;

        if (cd.websiteServices && cd.websiteServices.services) {
            html += `<h4>${cd.websiteServices.title || 'Website Service'}</h4>`;
            cd.websiteServices.services.forEach(s => {
                html += `<div class="contact-card">
                            <h5>${s.name}</h5>
                            <p>Domestic Hotline: ${s.domesticHotline}</p>
                            <p>Overseas Hotline: ${s.overseasHotline}</p>
                            <p>Service Hours: ${s.hours}</p>
                            <p>Service Items: ${s.items}</p>
                         </div>`;
            });
        }
        if (cd.complaintAndRecommendation) {
            const cr = cd.complaintAndRecommendation;
            html += `<h4>${cr.title || 'Complaint and Recommendation'}</h4>
                     <div class="contact-card">
                        <p>Domestic Hotline: ${cr.domesticHotline}</p>
                        <p>Overseas Hotline: ${cr.overseasHotline}</p>
                        <p>Service Hours: ${cr.hours}</p>
                        <p>Email: <a href="mailto:${cr.email}">${cr.email}</a></p>
                     </div>`;
        }
        if (cd.otherContactInfo && cd.otherContactInfo.contacts) {
            html += `<h4>${cd.otherContactInfo.title || 'Other Contact Information'}</h4><ul>`;
            cd.otherContactInfo.contacts.forEach(c => {
                html += `<li><strong>${c.type}:</strong> ${c.details}</li>`;
            });
            html += `</ul>`;
        }
    }
    
    placeholderElement.innerHTML = html;
}
export { displayChinaSouthernInfo as displayChinasouthernInfo };