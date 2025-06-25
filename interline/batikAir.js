
export const batikAirInfo = {
    officialBaggagePageUrl: "https://www.batikair.com.my/experience/baggage", 
    termsAndConditionsAncillariesUrl: "https://www.batikair.com.my/terms-and-conditions", 

    contactDetails: {
        customerCareCentre: {
            whatsapp: { 
                number: "+62 811-1938-0888", 
                availability: "24 hours (chat only)", 
                link: "https://wa.me/6281119380888",
                description: "Reach out to us wherever you are in the world." 
            },
            callCenter: { 
                number: "+603 78415 388", 
                availability: "Daily, 9.00am - 6.00pm (GMT+8)" 
            },
            generalEnquiriesEmail: "od_customercare@batikair.com.my",
            generalEnquiriesHours: "Monday - Sunday: 9am - 6pm (GMT+8)",
        },
        corporateAddress: "Malindo Airways Sdn. Bhd. (D.B.A Batik Air), Meritus @ Oasis Corporate Park, B2-1-01 Jalan PJU 1A/2, Ara Damansara 47301 Petaling Jaya, Selangor Darul Ehsan, Malaysia.",
        lostAndFound: {
            email: "baggage.queries@batikair.com.my",
            hours: "4.00am - 12.00am (GMT +8)"
        },
        regionalContacts: [
            { region: "India", email: "info_india@batikair.com.my", hours: "Mon-Fri: 9.30am-5.30pm, Sat: 9.30am-2pm, Sun: Closed" },
            { region: "Australia", phone: "+61291588599", email: "batikair@airlinerepservices.com", hours: "Mon-Fri: 9.00am-8.00pm (AEST), Sat/Sun & Public Holiday: Closed" },
            { region: "New Zealand", phone: "+6498714033", email: "batikair@airlinerepservices.com", hours: "Mon-Fri: 9.00am-5.30pm (NZST), Sat/Sun & Public Holiday: Closed" }
        ]
    },

    cabinBaggage: {
        intro: "The amount of checked baggage that you can take with you free of charge will vary according to the route, class of travel, terms and conditions of ticket. For most destinations, your free checked baggage allowance is determined by weight (Weight System).",
        policyTitle: "Cabin baggage allowance policy",
        allowance: [
            { class: "Business Class", bags: "Two (2) pieces cabin bags", personalItemsDescription: "additional ONE of the following personal items carried, such as overcoat, laptop bag, Infant amenities bag, small infant carrycot, walking stick, crutches", totalWeight: "10 kgs" },
            { class: "Economy class", bags: "One (1) piece cabin bag", personalItemsDescription: "additional ONE of the following personal items carried, such as overcoat, laptop bag, Infant amenities bag, small infant carrycot, walking stick, crutches", totalWeight: "7 kgs" }
        ],
        additionalPersonalItems: [
            "1 Ladies Handbag (not exceeding 22 x 27 x 8cm with a linear dimension of 57cm) OR 1 Men's Pouch bag (not exceeding 10 x 15 x 20cm with a linear dimension of 45cm)",
            "1 Bag with Duty Free entitlement purchased within the airport before flight departure."
        ],
        excessChargeAtGate: "Any Cabin baggage weight in excess of the allowance policy will be charged at RM 50 per Kg.",
        dimensions: "Must not exceed 56 x 36 x 23 cm with a linear dimension of 115 cm.",
        maxCheckedWeightPerPiece: "Maximum weight limit for each piece of check-in baggage is 32kgs.",
        restrictions: [
            "Non-compliance of baggage dimensions will result in removal and loaded as checked-in baggage.",
            "'Smart Cabin Luggage': Non–removable lithium battery is strictly prohibited to be carried as cabin baggage.",
            "All transmitting functions (example: GPS tracking, Bluetooth, RFID, Wi-Fi) must be switched off.",
            "Interline/Codeshare flights will follow the operating carrier's baggage allowance."
        ]
    },

    freeCheckedBaggage: {
        title: "Free Baggage Allowance",
        categories: [
            { 
                name: "International Routes (unless otherwise stated below)", 
                fares: ["Business Flexi: 40 kg", "Business Promo: 30 kg", "Economy Flexi: 25 kg", "Economy Value: 20 kg", "Super Saver: 0 kg"] 
            },
            { 
                name: "Other International Routes", 
                countries: [
                    { country: "Bangladesh", businessFlexi: "40 kg", businessPromo: "40 kg", economyFlexi: "35 kg", economyValue: "35 kg", superSaver: "35 kg" },
                    { country: "Pakistan", businessFlexi: "40 kg", businessPromo: "30 kg", economyFlexi: "30 kg", economyValue: "20 kg", superSaver: "20 kg" },
                    { country: "Saudi Arabia", businessFlexi: "40 kg", businessPromo: "30 kg", economyFlexi: "30 kg", economyValue: "30 kg", superSaver: "30 kg" },
                    { country: "Uzbekistan", businessFlexi: "40 kg", businessPromo: "30 kg", economyFlexi: "35 kg", economyValue: "23 kg", superSaver: "0 kg" }
                ] 
            },
            {
                name: "For Nepal",
                routes: [
                    { route: "KUL - KTM", businessFlexi: "40 kg", businessPromo: "30 kg", economyFlexi: "35 kg", economyValue: "35 kg", superSaver: "35 kg" },
                    { route: "KTM - KUL", businessFlexi: "40 kg", businessPromo: "30 kg", economyFlexi: "30 kg", economyValue: "20 kg", superSaver: "20 kg" }
                ]
            },
            {
                name: "Domestic and ASEAN Routes",
                fares: ["Business Flexi: 40 kg", "Business Promo: 30 kg", "Economy Flexi: 25 kg", "Economy Value: 20 kg", "Super Saver: 0 kg"],
                note: "Applicable on OD-operated flight only."
            }
        ]
    },

    additionalBaggagePurchase: {
        intro: "You may carry additional baggage at very attractive pre-purchase baggage rates.",
        methods: "Purchase the additional allowances up to 12 hours before departure via Manage Booking or contact our Call Centre (Whatsapp chat only) at +62 811-1938-0888, or call us at +603 78415 388 (9am to 6pm daily, GMT +8).",
        airportRateNote: "At the airport check-in counter, the Excess Baggage rates will apply for baggage exceeding the Free Baggage Allowance."
    },

    prepaidBaggageInitialBooking: {
        title: "Pre-paid Baggage Rate for Initial Flight Booking",
        sections: [
            {
                title: "Domestic (from/to KLIA)",
                currency: "MYR",
                headers: ["Route", "10 kgs", "20 kgs", "30 kgs", "40 kgs"],
                rates: [
                    { route: "Alor Setar, Kota Bharu, Penang, Johor Bahru, Langkawi", "10kgs": "60", "20kgs": "95", "30kgs": "120", "40kgs": "190" },
                    { route: "Penang, Kota Bharu (*to / from Subang)", "10kgs": "50", "20kgs": "85", "30kgs": "110", "40kgs": "170" },
                    { route: "Bintulu, Kuching, Sibu, Miri", "10kgs": "70", "20kgs": "110", "30kgs": "150", "40kgs": "220" },
                    { route: "Tawau (*to / from Kota Kinabalu)", "10kgs": "70", "20kgs": "110", "30kgs": "150", "40kgs": "220" },
                    { route: "Tawau, Kota Kinabalu, Sandakan", "10kgs": "90", "20kgs": "130", "30kgs": "190", "40kgs": "260" },
                    { route: "Kota Kinabalu (*to / from Subang)", "10kgs": "80", "20kgs": "120", "30kgs": "180", "40kgs": "240" }
                ]
            },
            {
                title: "All Routes except for Domestic (from/to KLIA)",
                currency: "MYR",
                headers: ["Route", "10 kgs", "20 kgs", "30 kgs", "40 kgs"],
                rates: [
                    { route: "Hat Yai, Krabi", "10kgs": "60", "20kgs": "95", "30kgs": "120", "40kgs": "190" },
                    { route: "Singapore, Da Nang, Medan, Amritsar", "10kgs": "60", "20kgs": "100", "30kgs": "140", "40kgs": "200" },
                    { route: "Singapore (*to / from Subang)", "10kgs": "50", "20kgs": "90", "30kgs": "130", "40kgs": "180" },
                    { route: "Bangkok (*to / from Johor Bahru)", "10kgs": "80", "20kgs": "125", "30kgs": "165", "40kgs": "250" },
                    { route: "Jakarta (*to / from Penang, Johor Bahru)", "10kgs": "80", "20kgs": "125", "30kgs": "165", "40kgs": "250" },
                    { route: "Bangkok, Phuket, Jakarta", "10kgs": "80", "20kgs": "125", "30kgs": "165", "40kgs": "250" },
                    { route: "Taiwan", "10kgs": "90", "20kgs": "130", "30kgs": "190", "40kgs": "260" },
                    { route: "Delhi, Mumbai, Haikou, Guangzhou", "10kgs": "90", "20kgs": "140", "30kgs": "230", "40kgs": "280" },
                    { route: "Haikou (*to / from Penang)", "10kgs": "80", "20kgs": "130", "30kgs": "220", "40kgs": "260" },
                    { route: "Hanoi, Batam, Surabaya, Lombok, Bali, Kochi, Tiruchirapally, Chengdu", "10kgs": "100", "20kgs": "160", "30kgs": "260", "40kgs": "320" },
                    { route: "Bangalore", "10kgs": "110", "20kgs": "170", "30kgs": "270", "40kgs": "340" },
                    { route: "Japan, Korea, Perth", "10kgs": "110", "20kgs": "170", "30kgs": "290", "40kgs": "340" },
                    { route: "Japan (*to / from Kota Kinabalu)", "10kgs": "100", "20kgs": "160", "30kgs": "280", "40kgs": "320" },
                    { route: "Korea (*to / from Kota Kinabalu)", "10kgs": "110", "20kgs": "170", "30kgs": "290", "40kgs": "340" },
                    { route: "Hong Kong, Kunming, Melbourne, Shanghai, Sydney", "10kgs": "110", "20kgs": "190", "30kgs": "290", "40kgs": "380" },
                    { route: "Changsha, Maldives, Guilin, Xiamen, Zhengzhou, Zhangjiajie", "10kgs": "130", "20kgs": "210", "30kgs": "310", "40kgs": "420" },
                    { route: "Brisbane", "10kgs": "160", "20kgs": "260", "30kgs": "410", "40kgs": "520" },
                    { route: "United Arab Emirates, Saudi Arabia", "10kgs": "170", "20kgs": "330", "30kgs": "490", "40kgs": "660" },
                    { route: "Uzbekistan", "10kgs": "190", "20kgs": "320", "30kgs": "440", "40kgs": "640" },
                    { route: "Bangladesh, Nepal, Pakistan", "10kgs": "290", "20kgs": "520", "30kgs": "740", "40kgs": "1,040" }
                ]
            },
            {
                title: "Other Routes (vice versa)",
                currency: "MYR",
                headers: ["Route", "10 kgs", "20 kgs", "30 kgs", "40 kgs"],
                rates: [
                    { route: "Taiwan to Japan", "10kgs": "65", "20kgs": "115", "30kgs": "190", "40kgs": "230" },
                    { route: "Indonesia to Australia", "10kgs": "130", "20kgs": "250", "30kgs": "360", "40kgs": "500" }
                ]
            },
            {
                title: "Departing from Australia",
                currency: "AUD",
                headers: ["Route", "10 kgs", "20 kgs", "30 kgs", "40 kgs"],
                rates: [
                    { route: "Perth - Kuala Lumpur", "10kgs": "60", "20kgs": "90", "30kgs": "120", "40kgs": "150" },
                    { route: "Melbourne - Kuala Lumpur", "10kgs": "70", "20kgs": "90", "30kgs": "120", "40kgs": "150" },
                    { route: "Sydney / Brisbane - Kuala Lumpur", "10kgs": "70", "20kgs": "110", "30kgs": "160", "40kgs": "180" },
                    { route: "Perth / Brisbane / Sydney / Melbourne - Bali", "10kgs": "55", "20kgs": "105", "30kgs": "150", "40kgs": "205" }
                ]
            }
        ]
    },

    prepaidBaggagePostBooking: {
        title: "Pre-paid Baggage Rate for Post Flight Booking",
        sections: [
            {
                title: "Domestic (from/to KLIA)",
                currency: "MYR",
                headers: ["Route", "10 kgs", "20 kgs", "30 kgs"],
                rates: [
                    { route: "Alor Setar, Kota Bharu, Penang, Johor Bahru", "10kgs": "100", "20kgs": "200", "30kgs": "300" },
                    { route: "Penang, Kota Bharu (*to / from Subang)", "10kgs": "100", "20kgs": "200", "30kgs": "300" },
                    { route: "Langkawi", "10kgs": "110", "20kgs": "210", "30kgs": "310" },
                    { route: "Bintulu, Kuching, Sibu", "10kgs": "130", "20kgs": "250", "30kgs": "370" },
                    { route: "Tawau (*to / from Kota Kinabalu)", "10kgs": "120", "20kgs": "240", "30kgs": "360" },
                    { route: "Kota Kinabalu, Miri, Sandakan, Tawau", "10kgs": "140", "20kgs": "280", "30kgs": "420" }
                ]
            },
            {
                title: "All Routes except for Domestic (from/to KLIA)",
                currency: "MYR",
                headers: ["Route", "10 kgs", "20 kgs", "30 kgs"],
                rates: [
                    { route: "Vietnam, Thailand, Singapore, Indonesia, China, Hong Kong, Taiwan, Korea, Bangalore, Kochi, Tiruchirapally", "10kgs": "165", "20kgs": "330", "30kgs": "495" },
                    { route: "Bangkok (*to / from Johor Bahru)", "10kgs": "165", "20kgs": "330", "30kgs": "495" },
                    { route: "Jakarta (*to / from Penang)", "10kgs": "165", "20kgs": "330", "30kgs": "495" },
                    { route: "Delhi, Mumbai, Amritsar, Kolkata, Maldives, Japan, United Arab Emirates, Australia, New Zealand, Saudi Arabia", "10kgs": "220", "20kgs": "440", "30kgs": "660" },
                    { route: "Bangladesh, Pakistan, Nepal", "10kgs": "330", "20kgs": "610", "30kgs": "880" },
                    { route: "Uzbekistan", "10kgs": "300", "20kgs": "600", "30kgs": "880" }
                ]
            },
            {
                title: "Others Routes (vice versa)",
                currency: "MYR",
                headers: ["Route", "10 kgs", "20 kgs", "30 kgs"],
                rates: [
                    { route: "Indonesia to Australia", "10kgs": "180", "20kgs": "360", "30kgs": "540" },
                    { route: "Taiwan to Japan", "10kgs": "180", "20kgs": "360", "30kgs": "540" },
                    { route: "Australia to New Zealand", "10kgs": "220", "20kgs": "440", "30kgs": "660" }
                ]
            }
        ],
        notes: [
            "Rates apply on per sector basis. For multi sectors in each direction, please check the applicable rates between the relevant destinations.",
            "Available for purchase up to 12 hours before scheduled departure time.",
            "Rates quoted MYR currency are converted ex-origin as per the rate of exchange. Actual amount may differ.",
            "Fees subject to taxes where applicable (e.g. Malaysia SST / India K3 tax).",
            "Prepaid baggage rates are subject to change from time to time without notice."
        ]
    },

    excessBaggageRatesAirport: {
        title: "Excess baggage rates on one way direct flights operated by Batik Air",
        headers: ["From", "To", "Per Kg"],
        rates: [
            { from: "Malaysia", to: "All Domestic points", perKg: "RM 37" },
            { from: "Malaysia", to: "All International points except Bangladesh, Pakistan, Nepal & New Zealand", perKg: "RM 48" },
            { from: "Malaysia", to: "Bangladesh, Pakistan & Nepal", perKg: "RM 58" },
            { from: "Malaysia", to: "New Zealand", perKg: "RM 65" },
            { from: "Australia", to: "Malaysia", perKg: "AUD 20" },
            { from: "Australia", to: "Indonesia", perKg: "AUD 18" },
            { from: "Australia", to: "New Zealand", perKg: "AUD 30" },
            { from: "Bangladesh", to: "Malaysia", perKg: "BDT 1,500" },
            { from: "China", to: "Malaysia", perKg: "CNY 75" },
            { from: "India", to: "Malaysia", perKg: "INR 1,000" },
            { from: "Indonesia", to: "Malaysia", perKg: "IDR 150,000" },
            { from: "Indonesia", to: "Australia", perKg: "IDR 120,000" },
            { from: "Indonesia", to: "New Zealand", perKg: "IDR 337,000" },
            { from: "Nepal", to: "Malaysia", perKg: "USD 20" },
            { from: "Pakistan", to: "Malaysia", perKg: "PKR 2,100" },
            { from: "Singapore", to: "Malaysia", perKg: "SGD 20" },
            { from: "Thailand", to: "Malaysia", perKg: "THB 400" },
            { from: "Vietnam", to: "Malaysia", perKg: "USD 10" },
            { from: "Hong Kong", to: "Malaysia", perKg: "HKD 85" },
            { from: "Taiwan", to: "Malaysia", perKg: "TWD 330" },
            { from: "Japan", to: "Malaysia", perKg: "JPY 1,600" },
            { from: "Korea", to: "Malaysia", perKg: "KRW 14,500" },
            { from: "Maldives", to: "Malaysia", perKg: "USD 15" },
            { from: "Taiwan", to: "Japan", perKg: "TWD 275" },
            { from: "Japan", to: "Taiwan", perKg: "JPY 1,200" },
            { from: "Saudi Arabia", to: "Malaysia", perKg: "SAR 40" },
            { from: "United Arab Emirates", to: "Malaysia", perKg: "AED 40" },
            { from: "Uzbekistan", to: "Malaysia", perKg: "USD 15" },
            { from: "New Zealand", to: "Malaysia", perKg: "NZD 25" },
            { from: "New Zealand", to: "Australia", perKg: "NZD 32" }
        ]
    },

    limitedReleaseTag: {
        description: "The following categories of checked in baggage will be accepted upon passengers signing the Limited Release Tag (LRT):",
        categories: [
            "Fragile - includes any sporting equipment",
            "Unsuitable packing",
            "Perishables",
            "Damaged items",
            "Bags with broken handles, damaged straps, tears, dents, scratches",
            "Late checkin",
            "Not permitted to carry into cabin"
        ]
    },

    highValueBaggage: "Accepted as checked in baggage upon signing the Limited Release check-in baggage, you are advised to purchase Travel insurance as the airline will not be responsible for any damage to the high value checked in baggage.",

    lithiumBatteries: {
        intro: "Under the Provision of IATA Dangerous Goods Regulations, some items containing Lithium Batteries are accepted provided items MUST BE properly packaged and comply to the following:",
        items: [
            { item: "Laptop", spec: "Less than 100Wh" },
            { item: "Electronic Cigarette", spec: "< 2 unit per passenger" },
            { item: "Wheelchair", spec: "< 300Wh" },
            { item: "Baby strollers", spec: "< 300Wh" },
            { item: "Dry Ice", spec: "< 2.5kg" },
            { item: "Power bank/spare dry batteries", spec: "< 100Wh, < 2g. Each person is allowed to carry a maximum of 2 power banks." }
        ],
        protectionNote: "Batteries must be individually protected to avoid short circuit.",
        powerBankPolicy: "DO NOT place power bank in hand carry or checkin baggage. Power bank MUST ALWAYS BE CARRIED ON-PERSON. The use of power banks within aircraft cabin is strictly prohibited under all circumstances. Power banks must not exceed 100W (as per IATA regulations)."
    },

    sportsEquipment: {
        general: "Accepted as CHECKED IN BAGGAGE within the permitted baggage allowance and MUST SIGN the Limited Release Tag (LRT) and subject to the following conditions. Though we exercise all care necessary in handling these items, you are advised to purchase Travel Insurance as the airline will not be responsible for damage any unintentional damage.",
        surfboard: "Prohibited on ATR operating routes. RM65 handling charge for the second surfboard.",
        bicycle: "Maximum 10 units are allowed to be onboard at the same time. Packed in a approved bicycle bag max length of 165cm.",
        divingBowlingGolf: "Weight calculated within given flight ticket regular baggage allowance. RM65 handling charge for the second surfboard (Note: text mentions surfboard again, likely a typo and refers to these items or is a general handling fee for a second special item). Packed in approved bags/boxes.",
        notPermitted: ["Hang gliders", "sails", "kayaks", "canoes and oars", "pole vaults", "javelins"]
    },

    babyStrollersManualWheelchairs: {
        general: "Baby strollers and wheelchairs are carried free and will not be calculated against the free baggage allowance. They may be used up to the boarding gate. Passengers MUST SIGN the Limited Release Tag (LRT) at the check-in counter.",
        lithiumBatteryWheelchairs: "Wheelchairs that contain Lithium Batteries may be accepted on board the aircraft by complying to the safety handling guidelines. This requires advance notification to the airline for the necessary preparations. The battery must not exceed 300Wh and the wheelchair is in proper packaging with correct markings and labeling."
    },

    electronicsElectrical: {
        intro: "Regulations prohibit the use of any portable electronic devices that could interfere with navigational aid and communication system, both on the ground and in flight.",
        unacceptable: ["AM/FM radios", "Portable telephones or transmitters, cellular/mobile telephones", "Calculators with printer", "Personal/portable computers with printer", "Radio controlled toys", "Any equipment operating through an antenna", "Any other electronic equipment not mentioned as acceptable"],
        acceptableWithRestrictions: ["CD player", "Portable tape recorders/players/walkman", "Hearing aids*", "Heart pacemaker*", "Electric shavers", "Pocket calculators (without printer)", "Personal computers (without printer)", "Electronic games", "Photographic equipment"],
        acceptableNote: "Note: *Except for hearing aids and pacemakers, acceptable electronic devices are prohibited from use during take-off, landing, and approach."
    },

    largeMusicalInstrumentsDiplomaticBag: {
        smallItems: "Small items such as guitar, violin, saxophone can be taken on board as hand carry (subject to hand carry limitations on size and weight).",
        bulkyHeavy: "For bulky and heavy equipment, passengers MUST SIGN the Limited Release Tag (LRT) and will be checked-in as checked baggage. Though we put in place all effort to ensure that your items are handled with care, If the instrument is expensive or of sentimental value you're advised to purchase Travel Insurance coverage in the event the item is damaged unintentionally.",
        extraSeatOption: "Alternatively, large musical instrument e.g. cello in a carry case with a maximum height of 65inches (165cm) with base 10 x 18 inches (44x66cm) upper part with the zipper is 18x26 inches (44x66cm) and maximum weight 75kgs may be placed on an EXTRA seat which can be purchased at any nearest ticketing office."
    },

    perishablesSeafoodFrozenMeat: {
        acceptance: "Accepted ONLY as CABIN BAGGAGE provided:",
        conditions: [
            "they are properly packed at source,",
            "within the cabin baggage weight/size limitations,",
            "MUST display accurate marking, description and content labeling."
        ],
        dryIce: "If DRY ICE is used, a maximum of 2.5kgs per passenger is permitted."
    },

    livePlantsFlowers: "We do not accept live plants and flowers as check-in nor as hand carry on our international flights. Only hand held bouquets are allowed in our cabin. Ensure the stem or ends of the bouquet are properly wrapped to avoid spillage of water that they are placed in. Water may cause damage to our aircraft and carry-on items belonging to other passengers should the bouquet be stored in the overhead locker.",

    syringesInjectableMedication: {
        allowance: "Passengers requiring use of medical syringes or injectable medications during flight such as for diabetics, or other documented proof of medical needs, are allowed to carry such items on board subject to the following:",
        conditions: [
            "hold a doctor's certificate stating the medical need,",
            "unused syringes come together with medications such as insulin or insulin medication loaded in syringes,",
            "the syringes or injectable medications are professionally packed and labeled so that they can be identified,",
            "the items are available at any time for security inspection such as X-ray check,",
            "used syringes must not be disposed off in the cabin; we would require you to take the syringe with you and discard upon disembarkment."
        ]
    },

    zamzamWater: {
        allowance: "Batik Air has made provisions to enable Batik Air passengers returning after performing their Umrah in Saudi Arabia, to check-in two (2) bottles of Zam Zam water, each with a maximum of 5 Kgms.",
        condition: "ACCEPTANCE IS CONDITIONAL subject to the packaging to avoid spillage inside the aircraft.",
        connectingFlights: "Passengers connecting to destinations beyond Kuala Lumpur on Batik Air flights and the airlines of the Lion Group, will be permitted to check-through their Zamzam water to the final destination.",
        cabinBaggage: "Container capacity not greater than 100 ml, or equivalent in other volumetric measurements.",
        checkedBaggagePackaging: [
            "The Zam Zam water must be in containers with a maximum of 5 litres or 1.32 gallons and properly packed with a plastic covering to avoid leakage and damage to other bags;",
            "The containers must be sealed as per manufacturer's packaging;",
            "The plastic covering must be of high quality and sufficient thickness to prevent containers from leaking. Special plastic covers are manufactured for such uplifts and must be used and have passed the stringent controls imposed by the Saudi Authorities."
        ],
        packagingAcceptanceNote: "- Acceptable as Check-in Baggage as per packaging displayed\n- Not Acceptable neither as check in- nor as a cabin baggage (if not meeting requirements)",
        liability: "Batik Air is not liable for delay, loss or damage of Zam Zam water and/or containers."
    },

    prohibitedItems: {
        intro: "Dangerous goods are articles or substances which are capable of posing a risk to health, safety, property or the environment. Below is the list of Dangerous Goods in compliance with regulation requirements. Includes the carriage of dry cell batteries, knives, scissors, sharp instruments, tools, fire arms, ammunition, and their toy replicas are prohibited in the passenger cabin.",
        dangerousArticlesInBaggage: [
            "Briefcases and attaché cases with installed alarm devices.",
            "Compressed gases - (Deeply refrigerated, flammable, non-flammable and poisonous) such as butane, oxygen, and liquid nitrogen, aqualung cylinders and compressed gas cylinders.",
            "Corrosives - such as acids, alkalis, mercury and wet cell batteries and apparatus containing mercury.",
            "Explosives - ammunitions, fireworks and flares. Ammunition including blank cartridges, hand guns, fireworks, and pistol cabs.",
            "Flammable liquids and solids such as lighter refills, lighter fuel, matches, paints, thinners, fire-lighters that need inverting before ignition.",
            "Radioactive material",
            "Oxidizing materials such as bleaching powder and peroxides.",
            "Poisons and infectious substances such as insecticides, weed-killers and live virus materials.",
            "Other dangerous articles such as magnetized materials, offensive or irritating materials.",
            "Etiologic agents (bacteria, viruses etc).",
            "Apparatus containing mercury must not be carried in baggage."
        ],
        personalMovementElectronicDevices: {
            note: "This Notice is intended to ensure safe and efficient operations. The following are requirements needed to be adhered to, in accordance to the Department of Civil Aviation of Malaysia (DCAM) and as recommended by the International Air Transport Association (IATA).",
            eSmokingDevicesInChecked: "Passengers are prohibited from carrying battery-powered portable electronic smoking devices including electronic cigarettes in checked baggage.",
            rechargingESmokingInCabin: "Passengers are prohibited from re-charging the battery-powered portable electronic smoking devices in aircraft cabins.",
            eSmokingBatteryStorage: "If you are in possession of any electronic smoking device, the batteries must be removed and to be put in proper storage.",
            eSmokingBuiltInBattery: "For all electronic smoking device with built-in battery, ensure it is switched off and kept in your carry-on baggage.",
        },
        electronicSmokingDeviceVape: {
            note: "This Notice is intended to ensure safe and efficient operations. The following are requirements needed to be adhered to, in accordance to the International Civil Aviation (ICAO) 2015-2016 editions of Technical Instructions for the safe transport of Dangerous Goods by air (ICAO Doc 9284).",
            personalMovementDevicesProhibited: "Passengers are prohibited from carrying personal movement devices such as hover boards, mini wheels, electric scooters, electric Segways, electric bicycles, which are categorized as Dangerous Goods and they are prohibited.",
            rechargeablePacksLaptopsCameras: "Rechargeable battery packs and electronic devices such as laptops and digital camera for personal use or related to medical electronic devices with lithium batteries less than 100 Watt-hour rating or lithium content of less than 2g re allowed on carry on baggage however the carrier assume no liability for such items if were to allowed as checked baggage under limited release.",
            spareLithiumBatteries: "Spare lithium batteries must be placed in a separate plastic bag or protective pouch or its terminal insulated by taping over the exposed terminal."
        }
    },

    packingTravelTips: [
        "Passengers are advised to only write their names and phone numbers in the name tags of their checked in bags. Airlines are advising passengers to avoid giving criminal rings a chance to use your checked in baggage as a mule to ferry illicit drugs or contraband. The ring is able to follow the trail with the address. Airlines will still be able to contact you in case of any disruption with the telephone number which is sufficient for tracing passengers.",
        "Passengers are encouraged to purchase the necessary Travel Insurance for this purpose.",
        "Safety Regulations: According to safety regulations, passengers are advised:\n- Not to accept any packets from unknown passengers\n- Not to leave baggage unattended at any time, especially within airport area. Unattended baggage may be removed by airport security staff as an object of suspicion\n- To declare before checking-in, if carrying any arms or explosive substances. Concealment is an offence under the Aircraft Act and Rules.",
        "Valuable Articles: Currency, precious metals, jewelry, keys, negotiable instruments, securities, personal identification documents and other items of value are best carried with the passengers in the cabin. Batik Air assumes no liability for any valuable articles carried.",
        "Restricted Articles: Medicines and toiletries in limited quantities for passenger use during the journey.",
        "All claims of mishandled bags, damaged or pilferage must be reported prior to leaving the baggage reclaim area or the concern airport vicinity. The validity of the PIR(Property Irregularity Report) will commence immediately upon passenger claimed bag is mishandle. Our baggage compensation policy for mishandled baggage follows the Warsaw and Montreal Convention as applicable. All Baggage related compensation claims will be settled within 60 Working Days."
    ]
};

/**
 * Displays Batik Air (Malaysia) baggage information with enhanced contact section.
 * @param {HTMLElement} placeholderElement - The DOM element to inject HTML into.
 */
export function displayBatikAirInfo(placeholderElement) {
    if (!placeholderElement) {
        console.error("Batik Air placeholder not found for displaying info.");
        placeholderElement.innerHTML = "<p>Error: Placeholder element not found for Batik Air.</p>";
        return;
    }

    const info = batikAirInfo;
    
    let html = `
<div class="airline-info-card">
    <div class="airline-card-title">Batik Air Malaysia (OD)</div>
    <div class="airline-card-content">
        <div class="airline-card-row">
            <span class="airline-card-plane">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#7ecbff" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V21l2-1 2 1V13.5l8 2.5z"/>
                </svg>
            </span>
            <div>
                <div class="airline-card-cta-title">View Batik Air (OD) Checked Baggage Information</div>
                <div class="airline-card-desc">
                    For detailed baggage allowances, fees, and specific rules for your route, please visit the official Batik Air website.
                </div>
            </div>
        </div>
        <a href="${info.officialBaggagePageUrl}" target="_blank" class="airline-card-cta-btn">
            VISIT BATIK AIR BAGGAGE PAGE
        </a>
    </div>
</div>
`;

    if (info.cabinBaggage) {
        html += `<h3>Cabin Baggage</h3>`;
        if(info.cabinBaggage.intro) html += `<p>${info.cabinBaggage.intro}</p>`;
        html += `<h4>${info.cabinBaggage.policyTitle || 'Allowance Policy'}:</h4>`;
        info.cabinBaggage.allowance.forEach(item => {
            html += `<p><strong>${item.class}:</strong> ${item.bags}, ${item.personalItemsDescription}. Total combined weight: ${item.totalWeight}.</p>`;
        });
        if (info.cabinBaggage.additionalPersonalItems && info.cabinBaggage.additionalPersonalItems.length > 0) {
            html += `<p><strong>AND</strong></p><ul>`;
            info.cabinBaggage.additionalPersonalItems.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if (info.cabinBaggage.excessChargeAtGate) html += `<p><strong>Excess Baggage Charges at Boarding Gate:</strong> ${info.cabinBaggage.excessChargeAtGate}</p>`;
        html += `<h5>Restrictions:</h5><ul>`;
        if (info.cabinBaggage.dimensions) html += `<li><strong>Dimensions:</strong> ${info.cabinBaggage.dimensions}</li>`;
        if (info.cabinBaggage.maxCheckedWeightPerPiece) html += `<li>Maximum weight limit for each piece of check-in baggage is ${info.cabinBaggage.maxCheckedWeightPerPiece}.</li>`;
        info.cabinBaggage.restrictions.forEach(res => html += `<li>${res}</li>`);
        html += `</ul><hr>`;
    }

    if (info.freeCheckedBaggage) {
        html += `<h3>${info.freeCheckedBaggage.title || 'Free Checked Baggage Allowance'}</h3>`;
        info.freeCheckedBaggage.categories.forEach(cat => {
            html += `<h4>${cat.name}</h4>`;
            if (cat.fares && cat.fares.length > 0) {
                html += `<table class="rules-table"><thead><tr><th>Fare Type</th><th>Allowance</th></tr></thead><tbody>`;
                cat.fares.forEach(fare => {
                    const parts = fare.split(':');
                    html += `<tr><td>${parts[0].trim()}</td><td>${parts[1] ? parts[1].trim() : ''}</td></tr>`;
                });
                html += `</tbody></table>`;
            }
            if (cat.countries && cat.countries.length > 0) {
                html += `<table class="rules-table"><thead><tr><th>Country</th><th>Business Flexi</th><th>Business Promo</th><th>Economy Flexi</th><th>Economy Value</th><th>Super Saver</th></tr></thead><tbody>`;
                cat.countries.forEach(countryFare => {
                    html += `<tr>
                                <td>${countryFare.country}</td>
                                <td>${countryFare.businessFlexi}</td>
                                <td>${countryFare.businessPromo}</td>
                                <td>${countryFare.economyFlexi}</td>
                                <td>${countryFare.economyValue}</td>
                                <td>${countryFare.superSaver}</td>
                             </tr>`;
                });
                html += `</tbody></table>`;
            }
            if (cat.routes && cat.routes.length > 0) {
                 html += `<table class="rules-table"><thead><tr><th>Route</th><th>Business Flexi</th><th>Business Promo</th><th>Economy Flexi</th><th>Economy Value</th><th>Super Saver</th></tr></thead><tbody>`;
                cat.routes.forEach(routeFare => {
                    html += `<tr>
                                <td>${routeFare.route}</td>
                                <td>${routeFare.businessFlexi}</td>
                                <td>${routeFare.businessPromo}</td>
                                <td>${routeFare.economyFlexi}</td>
                                <td>${routeFare.economyValue}</td>
                                <td>${routeFare.superSaver}</td>
                             </tr>`;
                });
                html += `</tbody></table>`;
            }
            if (cat.note) html += `<p class="small-note">${cat.note}</p>`;
        });
        html += `<hr>`;
    }

    if (info.additionalBaggagePurchase) {
        html += `<h3>Purchasing Additional Baggage</h3>`;
        if (info.additionalBaggagePurchase.intro) html += `<p>${info.additionalBaggagePurchase.intro}</p>`;
        if (info.additionalBaggagePurchase.methods) {
            let methodsHtml = info.additionalBaggagePurchase.methods;
            methodsHtml = methodsHtml.replace(info.contactDetails.customerCareCentre.whatsapp.number, `<a href="${info.contactDetails.customerCareCentre.whatsapp.link}" target="_blank">${info.contactDetails.customerCareCentre.whatsapp.number}</a>`);
            methodsHtml = methodsHtml.replace(info.contactDetails.customerCareCentre.callCenter.number, `<a href="tel:${info.contactDetails.customerCareCentre.callCenter.number.replace(/\s/g, '')}">${info.contactDetails.customerCareCentre.callCenter.number}</a>`);
            html += `<p><strong>Methods:</strong> ${methodsHtml}</p>`;
        }
        if (info.additionalBaggagePurchase.airportRateNote) html += `<p class="small-note">${info.additionalBaggagePurchase.airportRateNote}</p>`;
        html += `<p class="small-note">Please refer to the Batik Air website for detailed pre-paid baggage rate tables for Initial and Post Flight Bookings, as these are extensive and subject to change.</p><hr>`;
    }
    
    const renderFeeTable = (title, currency, headers, rates, dataKeys) => {
        let tableHtml = `<h4>${title} (Currency: ${currency})</h4>`;
        tableHtml += `<table class="rules-table"><thead><tr>`;
        headers.forEach(header => tableHtml += `<th>${header}</th>`);
        tableHtml += `</tr></thead><tbody>`;
        rates.forEach(rate => {
            tableHtml += `<tr>`;
            dataKeys.forEach(key => tableHtml += `<td>${rate[key] || ''}</td>`);
            tableHtml += `</tr>`;
        });
        tableHtml += `</tbody></table>`;
        return tableHtml;
    };

    if (info.prepaidBaggageInitialBooking && info.prepaidBaggageInitialBooking.sections) {
        html += `<h3>${info.prepaidBaggageInitialBooking.title || 'Pre-paid Baggage Rate for Initial Flight Booking'}</h3>`;
        info.prepaidBaggageInitialBooking.sections.forEach(section => {
            const dataKeys = ["route", "10kgs", "20kgs", "30kgs", "40kgs"].slice(0, section.headers.length);
            html += renderFeeTable(section.title, section.currency, section.headers, section.rates, dataKeys);
        });
    }

    if (info.prepaidBaggagePostBooking && info.prepaidBaggagePostBooking.sections) {
        html += `<h3>${info.prepaidBaggagePostBooking.title || 'Pre-paid Baggage Rate for Post Flight Booking'}</h3>`;
        info.prepaidBaggagePostBooking.sections.forEach(section => {
             const dataKeys = ["route", "10kgs", "20kgs", "30kgs"].slice(0, section.headers.length);
            html += renderFeeTable(section.title, section.currency, section.headers, section.rates, dataKeys);
        });
        if(info.prepaidBaggagePostBooking.notes && info.prepaidBaggagePostBooking.notes.length > 0){
            html += `<h5>Notes:</h5><ul class="small-note">`;
            info.prepaidBaggagePostBooking.notes.forEach(note => html += `<li>${note}</li>`);
            html += `</ul>`;
        }
        if(info.termsAndConditionsAncillariesUrl && info.termsAndConditionsAncillariesUrl !== "#") {
            html += `<p class="small-note">Kindly refer to the applicable <a href="${info.termsAndConditionsAncillariesUrl}" target="_blank" rel="noopener noreferrer">Terms and Conditions for purchase of Ancillaries</a>.</p>`;
        }
    }
     html += `<hr>`;

    if (info.excessBaggageRatesAirport && info.excessBaggageRatesAirport.rates) {
        html += `<h3>${info.excessBaggageRatesAirport.title || 'Excess Baggage Rates (Airport)'}</h3>`;
        html += `<table class="rules-table"><thead><tr>`;
        info.excessBaggageRatesAirport.headers.forEach(header => html += `<th>${header}</th>`);
        html += `</tr></thead><tbody>`;
        info.excessBaggageRatesAirport.rates.forEach(rate => {
            html += `<tr><td>${rate.from}</td><td>${rate.to}</td><td>${rate.perKg}</td></tr>`;
        });
        html += `</tbody></table><hr>`;
    }

    if (info.limitedReleaseTag) {
        html += `<h3>Limited Release Tag (LRT)</h3>`;
        if (info.limitedReleaseTag.description) html += `<p>${info.limitedReleaseTag.description}</p>`;
        if (info.limitedReleaseTag.categories && info.limitedReleaseTag.categories.length > 0) {
            html += `<ul>`;
            info.limitedReleaseTag.categories.forEach(cat => html += `<li>${cat}</li>`);
            html += `</ul>`;
        }
        html += `<hr>`;
    }

    if (info.highValueBaggage) html += `<h3>High Value Baggage</h3><p>${info.highValueBaggage}</p><hr>`;
    
    if (info.lithiumBatteries) {
        html += `<h3>Items Containing Lithium Batteries</h3>`;
        if (info.lithiumBatteries.intro) html += `<p>${info.lithiumBatteries.intro}</p>`;
        if (info.lithiumBatteries.items && info.lithiumBatteries.items.length > 0) {
            html += `<ul>`;
            info.lithiumBatteries.items.forEach(item => html += `<li><strong>${item.item}:</strong> ${item.spec}</li>`);
            html += `</ul>`;
        }
        if (info.lithiumBatteries.protectionNote) html += `<p class="small-note">${info.lithiumBatteries.protectionNote}</p>`;
        if (info.lithiumBatteries.powerBankPolicy) html += `<p class="small-note"><strong>Power Bank Policy:</strong> ${info.lithiumBatteries.powerBankPolicy}</p>`;
        html += `<hr>`;
    }

    if (info.sportsEquipment) {
        html += `<h3>Sports Equipment</h3>`;
        if (info.sportsEquipment.general) html += `<p>${info.sportsEquipment.general}</p>`;
        html += `<ul>`;
        if (info.sportsEquipment.surfboard) html += `<li><strong>Surfboard/Windboard:</strong> ${info.sportsEquipment.surfboard}</li>`;
        if (info.sportsEquipment.bicycle) html += `<li><strong>Bicycle:</strong> ${info.sportsEquipment.bicycle}</li>`;
        if (info.sportsEquipment.divingBowlingGolf) html += `<li><strong>Diving equipment/Bowling ball/Golf bag:</strong> ${info.sportsEquipment.divingBowlingGolf}</li>`;
        html += `</ul>`;
        if (info.sportsEquipment.notPermitted && info.sportsEquipment.notPermitted.length > 0) {
            html += `<p><strong>NOT PERMITTED on Batik Air:</strong> ${info.sportsEquipment.notPermitted.join(', ')}.</p>`;
        }
        html += `<hr>`;
    }

    if (info.babyStrollersManualWheelchairs) {
        html += `<h3>Baby Strollers and Manual Wheelchairs</h3>`;
        if (info.babyStrollersManualWheelchairs.general) html += `<p>${info.babyStrollersManualWheelchairs.general}</p>`;
        if (info.babyStrollersManualWheelchairs.lithiumBatteryWheelchairs) html += `<p><strong>Lithium Battery Wheelchairs:</strong> ${info.babyStrollersManualWheelchairs.lithiumBatteryWheelchairs}</p>`;
        html += `<hr>`;
    }

    if (info.electronicsElectrical) {
        html += `<h3>Electronics & Electrical Items</h3>`;
        if (info.electronicsElectrical.intro) html += `<p>${info.electronicsElectrical.intro}</p>`;
        if (info.electronicsElectrical.unacceptable && info.electronicsElectrical.unacceptable.length > 0) {
            html += `<h4>Unacceptable Equipment (MUST NOT be operated at all times):</h4><ul>`;
            info.electronicsElectrical.unacceptable.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if (info.electronicsElectrical.acceptableWithRestrictions && info.electronicsElectrical.acceptableWithRestrictions.length > 0) {
            html += `<h4>Acceptable Equipment (NOT PERMITTED during take off, approach and landing):</h4><ul>`;
            info.electronicsElectrical.acceptableWithRestrictions.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if (info.electronicsElectrical.acceptableNote) html += `<p class="small-note">${info.electronicsElectrical.acceptableNote}</p>`;
        html += `<hr>`;
    }
    
    if(info.largeMusicalInstrumentsDiplomaticBag){
        html += `<h3>Large Musical Instruments / Diplomatic Bag</h3>`;
        if(info.largeMusicalInstrumentsDiplomaticBag.smallItems) html += `<p><strong>Small Items:</strong> ${info.largeMusicalInstrumentsDiplomaticBag.smallItems}</p>`;
        if(info.largeMusicalInstrumentsDiplomaticBag.bulkyHeavy) html += `<p><strong>Bulky/Heavy:</strong> ${info.largeMusicalInstrumentsDiplomaticBag.bulkyHeavy}</p>`;
        if(info.largeMusicalInstrumentsDiplomaticBag.extraSeatOption) html += `<p><strong>Extra Seat Option:</strong> ${info.largeMusicalInstrumentsDiplomaticBag.extraSeatOption}</p>`;
        html += `<hr>`;
    }

    if(info.perishablesSeafoodFrozenMeat){
        html += `<h3>Perishables / Seafood / Frozen Meat</h3>`;
        if(info.perishablesSeafoodFrozenMeat.acceptance) html += `<p><strong>Acceptance:</strong> ${info.perishablesSeafoodFrozenMeat.acceptance}</p>`;
        if(info.perishablesSeafoodFrozenMeat.conditions && info.perishablesSeafoodFrozenMeat.conditions.length > 0){
            html += `<ul>`;
            info.perishablesSeafoodFrozenMeat.conditions.forEach(cond => html += `<li>${cond}</li>`);
            html += `</ul>`;
        }
        if(info.perishablesSeafoodFrozenMeat.dryIce) html += `<p><strong>Dry Ice:</strong> ${info.perishablesSeafoodFrozenMeat.dryIce}</p>`;
        html += `<hr>`;
    }

    if(info.livePlantsFlowers) html += `<h3>Live Plants & Flowers</h3><p>${info.livePlantsFlowers}</p><hr>`;

    if(info.syringesInjectableMedication){
        html += `<h3>Syringes or Other Injectable Medication</h3>`;
        if(info.syringesInjectableMedication.allowance) html += `<p>${info.syringesInjectableMedication.allowance}</p>`;
        if(info.syringesInjectableMedication.conditions && info.syringesInjectableMedication.conditions.length > 0){
            html += `<ul>`;
            info.syringesInjectableMedication.conditions.forEach(cond => html += `<li>${cond}</li>`);
            html += `</ul>`;
        }
        html += `<hr>`;
    }
    
    if(info.zamzamWater){
        html += `<h3>Zamzam Holy Water</h3>`;
        if(info.zamzamWater.allowance) html += `<p><strong>Allowance:</strong> ${info.zamzamWater.allowance}</p>`;
        if(info.zamzamWater.condition) html += `<p><strong>Condition:</strong> ${info.zamzamWater.condition}</p>`;
        if(info.zamzamWater.connectingFlights) html += `<p><strong>Connecting Flights:</strong> ${info.zamzamWater.connectingFlights}</p>`;
        if(info.zamzamWater.cabinBaggage) html += `<p><strong>Cabin Baggage:</strong> ${info.zamzamWater.cabinBaggage}</p>`;
        if(info.zamzamWater.checkedBaggagePackaging && info.zamzamWater.checkedBaggagePackaging.length > 0){
            html += `<strong>Checked Baggage Packaging:</strong><ul>`;
            info.zamzamWater.checkedBaggagePackaging.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if(info.zamzamWater.packagingAcceptanceNote) html += `<p class="small-note">${info.zamzamWater.packagingAcceptanceNote.replace(/\n/g, "<br>")}</p>`;
        if(info.zamzamWater.liability) html += `<p class="small-note"><strong>Liability:</strong> ${info.zamzamWater.liability}</p>`;
        html += `<hr>`;
    }

    if(info.prohibitedItems){
        html += `<h3>Prohibited Items (Dangerous Goods)</h3>`;
        if(info.prohibitedItems.intro) html += `<p>${info.prohibitedItems.intro}</p>`;
        if(info.prohibitedItems.dangerousArticlesInBaggage && info.prohibitedItems.dangerousArticlesInBaggage.length > 0){
            html += `<h4>Dangerous Articles in Baggage (Not to be carried):</h4><ul>`;
            info.prohibitedItems.dangerousArticlesInBaggage.forEach(item => html += `<li>${item}</li>`);
            html += `</ul>`;
        }
        if(info.prohibitedItems.personalMovementElectronicDevices){
            const pmDev = info.prohibitedItems.personalMovementElectronicDevices;
            html += `<h4>Personal Movement Electronic Devices:</h4>`;
            if(pmDev.note) html += `<p class="small-note">${pmDev.note}</p>`;
            html += `<ul>`;
            if(pmDev.eSmokingDevicesInChecked) html += `<li>${pmDev.eSmokingDevicesInChecked}</li>`;
            if(pmDev.rechargingESmokingInCabin) html += `<li>${pmDev.rechargingESmokingInCabin}</li>`;
            if(pmDev.eSmokingBatteryStorage) html += `<li>${pmDev.eSmokingBatteryStorage}</li>`;
            if(pmDev.eSmokingBuiltInBattery) html += `<li>${pmDev.eSmokingBuiltInBattery}</li>`;
            html += `</ul>`;
        }
         if(info.prohibitedItems.electronicSmokingDeviceVape){
            const vapeDev = info.prohibitedItems.electronicSmokingDeviceVape;
            html += `<h4>Electronic Smoking Device (E-Cigarettes / Vape):</h4>`;
            if(vapeDev.note) html += `<p class="small-note">${vapeDev.note}</p>`;
             html += `<ul>`;
            if(vapeDev.personalMovementDevicesProhibited) html += `<li>${vapeDev.personalMovementDevicesProhibited}</li>`;
            if(vapeDev.rechargeablePacksLaptopsCameras) html += `<li>${vapeDev.rechargeablePacksLaptopsCameras}</li>`;
            if(vapeDev.spareLithiumBatteries) html += `<li>${vapeDev.spareLithiumBatteries}</li>`;
            html += `</ul>`;
        }
        html += `<hr>`;
    }

    if(info.packingTravelTips && info.packingTravelTips.length > 0){
        html += `<h3>Packing & Travel Tips</h3><ul>`;
        info.packingTravelTips.forEach(tip => html += `<li>${tip.replace(/\n/g, "<br>")}</li>`);
        html += `</ul><hr>`;
    }
html += `<div style="margin-top: 40px; font-family: Arial, sans-serif; color: #ffffff; background-color: #333333; padding: 20px; border-radius: 5px;">
            <h2 style="font-size: 1.5em; border-bottom: 2px solid #ffffff; padding-bottom: 5px; margin-bottom: 20px;">Contact Batik Air</h2>
            
            <!-- Customer Care Centre -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 1.2em; margin-bottom: 10px;">Customer Care Centre</h3>
                <p style="font-style: italic; color: #dddddd; margin-bottom: 15px;">Reach out to us wherever you are in the world.</p>
                
                <div style="margin-left: 10px;">
                    <p style="margin: 8px 0; line-height: 1.5;">
                        <strong>WhatsApp:</strong> ${info.contactDetails.customerCareCentre.whatsapp.number}<br>
                        <span style="color: #bbbbbb; font-size: 0.9em;">${info.contactDetails.customerCareCentre.whatsapp.availability}</span>
                    </p>
                    
                    <p style="margin: 8px 0; line-height: 1.5;">
                        <strong>Call Us:</strong> ${info.contactDetails.customerCareCentre.callCenter.number}<br>
                        <span style="color: #bbbbbb; font-size: 0.9em;">${info.contactDetails.customerCareCentre.callCenter.availability}</span>
                    </p>
                </div>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #555555; margin: 20px 0;">
            
            <!-- Corporate Address -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 1.2em; margin-bottom: 10px;">Corporate Address</h3>
                <p style="margin-left: 10px; line-height: 1.5;">${info.contactDetails.corporateAddress}</p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #555555; margin: 20px 0;">
            
            <!-- Lost & Found -->
            <div style="margin-bottom: 25px;">
                <h3 style="font-size: 1.2em; margin-bottom: 10px;">Batik Air Lost & Found</h3>
                <div style="margin-left: 10px;">
                    <p style="margin: 8px 0; line-height: 1.5;">
                        <strong>Email:</strong> ${info.contactDetails.lostAndFound.email}
                    </p>
                    <p style="margin: 8px 0; color: #bbbbbb; font-size: 0.9em;">
                        Operation Hours: ${info.contactDetails.lostAndFound.hours}
                    </p>
                </div>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #555555; margin: 20px 0;">
            
            <!-- Regional Contacts -->
            <div>
                <h3 style="font-size: 1.2em; margin-bottom: 15px;">Regional Contacts</h3>
                
                ${info.contactDetails.regionalContacts.map(region => `
                    <div style="margin-bottom: 20px; margin-left: 10px;">
                        <h4 style="font-size: 1.1em; margin-bottom: 5px;">${region.region}</h4>
                        ${region.phone ? `
                            <p style="margin: 8px 0; line-height: 1.5;">
                                <strong>Phone:</strong> ${region.phone}
                            </p>
                        ` : ''}
                        <p style="margin: 8px 0; line-height: 1.5;">
                            <strong>Email:</strong> ${region.email}
                        </p>
                        <p style="margin: 8px 0; color: #bbbbbb; font-size: 0.9em;">
                            ${region.hours}
                        </p>
                    </div>
                `).join('')}
            </div>
        </div>`;
    placeholderElement.innerHTML = html;
}


export { displayBatikAirInfo as displayBatikairInfo };

