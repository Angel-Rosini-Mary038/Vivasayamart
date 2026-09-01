
const products = [
    {
        id: 1,
        name: "நெல் விதைகள்",
        category: "விதைகள்",
        price: 157,
        oldPrice: 207,
        icon: "🌾",
        image: "images/seeds/paddy.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான நெல் விதைகள்."
    },
    {
        id: 2,
        name: "தக்காளி விதைகள்",
        category: "விதைகள்",
        price: 194,
        oldPrice: 244,
        icon: "🍅",
        image: "images/seeds/Tomato.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான தக்காளி விதைகள்."
    },
    {
        id: 3,
        name: "கத்தரிக்காய் விதைகள்",
        category: "விதைகள்",
        price: 231,
        oldPrice: 281,
        icon: "🍆",
        image: "images/seeds/Brinjal.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கத்தரிக்காய் விதைகள்."
    },
    {
        id: 4,
        name: "மிளகாய் விதைகள்",
        category: "விதைகள்",
        price: 268,
        oldPrice: 318,
        icon: "🌶️",
        image: "images/seeds/chilli.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான மிளகாய் விதைகள்."
    },
    {
        id: 5,
        name: "வெண்டைக்காய் விதைகள்",
        category: "விதைகள்",
        price: 305,
        oldPrice: 355,
        icon: "🥒",
        image: "images/seeds/ladies.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான வெண்டைக்காய் விதைகள்."
    },
    {
        id: 6,
        name: "முருங்கை விதைகள்",
        category: "விதைகள்",
        price: 342,
        oldPrice: 392,
        icon: "🌿",
        image: "images/seeds/drums.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான முருங்கை விதைகள்."
    },
    {
        id: 7,
        name: "பீர்க்கங்காய் விதைகள்",
        category: "விதைகள்",
        price: 379,
        oldPrice: 429,
        icon: "🥬",
        image: "images/seeds/ridge.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பீர்க்கங்காய் விதைகள்."
    },
    {
        id: 8,
        name: "பாகற்காய் விதைகள்",
        category: "விதைகள்",
        price: 416,
        oldPrice: 466,
        icon: "🥕",
        image: "images/seeds/bitter.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பாகற்காய் விதைகள்."
    },
    {
        id: 9,
        name: "கீரை விதைகள்",
        category: "விதைகள்",
        price: 453,
        oldPrice: 503,
        icon: "🌱",
        image: "images/seeds/greens.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கீரை விதைகள்."
    },
    {
        id: 10,
        name: "கேரட் விதைகள்",
        category: "விதைகள்",
        price: 490,
        oldPrice: 540,
        icon: "🪴",
        image: "images/seeds/carrot.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கேரட் விதைகள்."
    },

    {
        id: 11,
        name: "மண்புழு உரம்",
        category: "இயற்கை உரங்கள்",
        price: 527,
        oldPrice: 577,
        icon: "🌾",
        image: "images/fertilizers/vermicompost.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான மண்புழு உரம்."
    },
    {
        id: 12,
        name: "பஞ்சகவ்யம்",
        category: "இயற்கை உரங்கள்",
        price: 564,
        oldPrice: 614,
        icon: "🍅",
        image: "images/fertilizers/panchakaviyam.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பஞ்சகவ்யம்."
    },
    {
        id: 13,
        name: "ஜீவாமிர்தம்",
        category: "இயற்கை உரங்கள்",
        price: 601,
        oldPrice: 651,
        icon: "🍆",
        image: "images/fertilizers/jeevamrutham.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான ஜீவாமிர்தம்."
    },
    {
        id: 14,
        name: "வேப்பம் புண்ணாக்கு",
        category: "இயற்கை உரங்கள்",
        price: 638,
        oldPrice: 688,
        icon: "🌶️",
        image: "images/fertilizers/neem.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான வேப்பம் புண்ணாக்கு."
    },
    {
        id: 15,
        name: "கடலை புண்ணாக்கு",
        category: "இயற்கை உரங்கள்",
        price: 675,
        oldPrice: 725,
        icon: "🥒",
        image: "images/fertilizers/nut.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கடலை புண்ணாக்கு."
    },
    {
        id: 16,
        name: "மீன் அமினோ அமிலம்",
        category: "இயற்கை உரங்கள்",
        price: 712,
        oldPrice: 762,
        icon: "🌿",
        image: "images/fertilizers/fish.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான மீன் அமினோ அமிலம்."
    },
    {
        id: 17,
        name: "இயற்கை கம்போஸ்ட்",
        category: "இயற்கை உரங்கள்",
        price: 749,
        oldPrice: 799,
        icon: "🥬",
        image: "images/fertilizers/compost.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான இயற்கை கம்போஸ்ட்."
    },
    {
        id: 18,
        name: "எலும்பு உரம்",
        category: "இயற்கை உரங்கள்",
        price: 786,
        oldPrice: 836,
        icon: "🥕",
        image: "images/fertilizers/born.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான எலும்பு உரம்."
    },
    {
        id: 19,
        name: "தாவர ஊட்டச்சத்து உரம்",
        category: "இயற்கை உரங்கள்",
        price: 823,
        oldPrice: 873,
        icon: "🌱",
        image: "images/fertilizers/plant.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான தாவர ஊட்டச்சத்து உரம்."
    },
    {
        id: 20,
        name: "சாண உரம்",
        category: "இயற்கை உரங்கள்",
        price: 860,
        oldPrice: 910,
        icon: "🪴",
        image: "images/fertilizers/cow.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான சாண உரம்."
    },

    {
        id: 21,
        name: "வேப்பெண்ணெய் கரைசல்",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 897,
        oldPrice: 947,
        icon: "🌾",
        image: "images/pesticides/neem.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான வேப்பெண்ணெய் கரைசல்."
    },
    {
        id: 22,
        name: "வேப்பிலை பூச்சி விரட்டி",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 934,
        oldPrice: 984,
        icon: "🍅",
        image: "images/pesticides/neemleaf.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான வேப்பிலை பூச்சி விரட்டி."
    },
    {
        id: 23,
        name: "பூண்டு மிளகாய் கரைசல்",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 971,
        oldPrice: 1021,
        icon: "🍆",
        image: "images/pesticides/garlic.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பூண்டு மிளகாய் கரைசல்."
    },
    {
        id: 24,
        name: "இஞ்சி பூச்சி விரட்டி",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 1008,
        oldPrice: 1058,
        icon: "🌶️",
        image: "images/pesticides/ginger.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான இஞ்சி பூச்சி விரட்டி."
    },
    {
        id: 25,
        name: "மூலிகை பூச்சி விரட்டி",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 1045,
        oldPrice: 1095,
        icon: "🥒",
        image: "images/pesticides/herbal.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான மூலிகை பூச்சி விரட்டி."
    },
    {
        id: 26,
        name: "தசபர்ணி கரைசல்",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 1082,
        oldPrice: 1132,
        icon: "🌿",
        image: "images/pesticides/thasaparani.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான தசபர்ணி கரைசல்."
    },
    {
        id: 27,
        name: "மஞ்சள் கரைசல்",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 1119,
        oldPrice: 1169,
        icon: "🥬",
        image: "images/pesticides/turmeric.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான மஞ்சள் கரைசல்."
    },
    {
        id: 28,
        name: "நொச்சி இலை கரைசல்",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 1156,
        oldPrice: 1206,
        icon: "🥕",
        image: "images/pesticides/nochi.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான நொச்சி இலை கரைசல்."
    },
    {
        id: 29,
        name: "புகையிலை கரைசல்",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 1193,
        oldPrice: 1243,
        icon: "🌱",
        image: "images/pesticides/tobacco.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான புகையிலை கரைசல்."
    },
    {
        id: 30,
        name: "இயற்கை பூஞ்சை தடுப்பு கரைசல்",
        category: "இயற்கை பூச்சி விரட்டிகள்",
        price: 1230,
        oldPrice: 1280,
        icon: "🪴",
        image: "images/pesticides/natural.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான இயற்கை பூஞ்சை தடுப்பு கரைசல்."
    },

    {
        id: 31,
        name: "களை எடுக்கும் கருவி",
        category: "விவசாய கருவிகள்",
        price: 1267,
        oldPrice: 1317,
        icon: "🌾",
        image: "images/farming-tools/kalai.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான களை எடுக்கும் கருவி."
    },
    {
        id: 32,
        name: "மண் வெட்டி",
        category: "விவசாய கருவிகள்",
        price: 1304,
        oldPrice: 1354,
        icon: "🍅",
        image: "images/farming-tools/manvetti.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான மண் வெட்டி."
    },
    {
        id: 33,
        name: "கை மண்வெட்டி",
        category: "விவசாய கருவிகள்",
        price: 1341,
        oldPrice: 1391,
        icon: "🍆",
        image: "images/farming-tools/hand.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கை மண்வெட்டி."
    },
    {
        id: 34,
        name: "விதை விதைக்கும் கருவி",
        category: "விவசாய கருவிகள்",
        price: 1378,
        oldPrice: 1428,
        icon: "🌶️",
        image: "images/farming-tools/seed.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான விதை விதைக்கும் கருவி."
    },
    {
        id: 35,
        name: "கத்தரிக்கோல்",
        category: "விவசாய கருவிகள்",
        price: 1415,
        oldPrice: 1465,
        icon: "🥒",
        image: "images/farming-tools/sis.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கத்தரிக்கோல்."
    },
    {
        id: 36,
        name: "கை ரேக்",
        category: "விவசாய கருவிகள்",
        price: 1452,
        oldPrice: 1502,
        icon: "🌿",
        image: "images/farming-tools/rake.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கை ரேக்."
    },
    {
        id: 37,
        name: "அறுவடை அரிவாள்",
        category: "விவசாய கருவிகள்",
        price: 1489,
        oldPrice: 1539,
        icon: "🥬",
        image: "images/farming-tools/harvesting.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான அறுவடை அரிவாள்."
    },
    {
        id: 38,
        name: "தேங்காய் அறுவடை கருவி",
        category: "விவசாய கருவிகள்",
        price: 1526,
        oldPrice: 1576,
        icon: "🥕",
        image: "images/farming-tools/cocanut.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான தேங்காய் அறுவடை கருவி."
    },
    {
        id: 39,
        name: "தோட்டக் கருவி தொகுப்பு",
        category: "விவசாய கருவிகள்",
        price: 1563,
        oldPrice: 1613,
        icon: "🌱",
        image: "images/farming-tools/tools.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான தோட்டக் கருவி தொகுப்பு."
    },
    {
        id: 40,
        name: "கை தெளிப்பான்",
        category: "விவசாய கருவிகள்",
        price: 1600,
        oldPrice: 1650,
        icon: "🪴",
        image: "images/farming-tools/sprayer.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கை தெளிப்பான்."
    },

    {
        id: 41,
        name: "சொட்டு நீர்ப்பாசன தொகுப்பு",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1637,
        oldPrice: 1687,
        icon: "🌾",
        image: "images/irrigation/trip.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான சொட்டு நீர்ப்பாசன தொகுப்பு."
    },
    {
        id: 42,
        name: "மைக்ரோ ஸ்பிரிங்க்ளர்",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1674,
        oldPrice: 1724,
        icon: "🍅",
        image: "images/irrigation/micro.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான மைக்ரோ ஸ்பிரிங்க்ளர்."
    },
    {
        id: 43,
        name: "நீர் குழாய்",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1711,
        oldPrice: 1761,
        icon: "🍆",
        image: "images/irrigation/water.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான நீர் குழாய்."
    },
    {
        id: 44,
        name: "நீர் தெளிப்பான்",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1748,
        oldPrice: 1798,
        icon: "🌶️",
        image: "images/irrigation/sparay.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான நீர் தெளிப்பான்."
    },
    {
        id: 45,
        name: "தோட்ட நீர்ப்பாசன கிட்",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1785,
        oldPrice: 1835,
        icon: "🥒",
        image: "images/irrigation/kit.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான தோட்ட நீர்ப்பாசன கிட்."
    },
    {
        id: 46,
        name: "பயிர் சொட்டு குழாய்",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1822,
        oldPrice: 1872,
        icon: "🌿",
        image: "images/irrigation/trip.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பயிர் சொட்டு குழாய்."
    },
    {
        id: 47,
        name: "நீர் சேமிப்பு டைமர்",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1859,
        oldPrice: 1909,
        icon: "🥬",
        image: "images/irrigation/time.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான நீர் சேமிப்பு டைமர்."
    },
    {
        id: 48,
        name: "மினி ஸ்பிரிங்க்ளர்",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1896,
        oldPrice: 1946,
        icon: "🥕",
        image: "images/irrigation/sprinkler.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான மினி ஸ்பிரிங்க்ளர்."
    },
    {
        id: 49,
        name: "குழாய் இணைப்பு தொகுப்பு",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1933,
        oldPrice: 1983,
        icon: "🌱",
        image: "images/irrigation/fitting.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான குழாய் இணைப்பு தொகுப்பு."
    },
    {
        id: 50,
        name: "விவசாய நீர்ப்பாசன கிட்",
        category: "நீர்ப்பாசன பொருட்கள்",
        price: 1970,
        oldPrice: 2020,
        icon: "🪴",
        image: "images/irrigation/agririgation.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான விவசாய நீர்ப்பாசன கிட்."
    },

    {
        id: 51,
        name: "பண்ணை தக்காளி",
        category: "பண்ணை காய்கறிகள்",
        price: 2007,
        oldPrice: 2057,
        icon: "🌾",
        image: "images/vegetables/tomato.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பண்ணை தக்காளி."
    },
    {
        id: 52,
        name: "புதிய கேரட்",
        category: "பண்ணை காய்கறிகள்",
        price: 2044,
        oldPrice: 2094,
        icon: "🍅",
        image: "images/vegetables/carrot.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான புதிய கேரட்."
    },
    {
        id: 53,
        name: "புதிய பீட்ரூட்",
        category: "பண்ணை காய்கறிகள்",
        price: 2081,
        oldPrice: 2131,
        icon: "🍆",
        image: "images/vegetables/peetroot.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான புதிய பீட்ரூட்."
    },
    {
        id: 54,
        name: "புதிய பீன்ஸ்",
        category: "பண்ணை காய்கறிகள்",
        price: 2118,
        oldPrice: 2168,
        icon: "🌶️",
        image: "images/vegetables/beens.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான புதிய பீன்ஸ்."
    },
    {
        id: 55,
        name: "பச்சை மிளகாய்",
        category: "பண்ணை காய்கறிகள்",
        price: 2155,
        oldPrice: 2205,
        icon: "🥒",
        image: "images/vegetables/chilli.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பச்சை மிளகாய்."
    },
    {
        id: 56,
        name: "கத்தரிக்காய்",
        category: "பண்ணை காய்கறிகள்",
        price: 2192,
        oldPrice: 2242,
        icon: "🌿",
        image: "images/vegetables/brinjal.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான கத்தரிக்காய்."
    },
    {
        id: 57,
        name: "வெண்டைக்காய்",
        category: "பண்ணை காய்கறிகள்",
        price: 2229,
        oldPrice: 2279,
        icon: "🥬",
        image: "images/vegetables/ladies.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான வெண்டைக்காய்."
    },
    {
        id: 58,
        name: "பீர்க்கங்காய்",
        category: "பண்ணை காய்கறிகள்",
        price: 2266,
        oldPrice: 2316,
        icon: "🥕",
        image: "images/vegetables/ridgegaurd.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பீர்க்கங்காய்."
    },
    {
        id: 59,
        name: "பாகற்காய்",
        category: "பண்ணை காய்கறிகள்",
        price: 2303,
        oldPrice: 2353,
        icon: "🌱",
        image: "images/vegetables/bitter.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான பாகற்காய்."
    },
    {
        id: 60,
        name: "முருங்கைக்காய்",
        category: "பண்ணை காய்கறிகள்",
        price: 2340,
        oldPrice: 2390,
        icon: "🪴",
        image: "images/vegetables/drumsstick.png",
        description: "இயற்கை விவசாயத்திற்கு ஏற்ற தரமான முருங்கைக்காய்."
    }
];


/* =========================
   PRODUCT CARD
   ========================= */

function productCard(product) {
    return `
        <article class="product-card">

            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    <span class="price">
                        ₹${product.price}
                    </span>

                    <span class="old-price">
                        ₹${product.oldPrice}
                    </span>
                </p>

                <div class="card-actions">

                    <a
                        class="small-btn"
                        href="product-details.html?id=${product.id}"
                    >
                        Details
                    </a>

                    <button
                        class="small-btn primary-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================
   RENDER PRODUCTS
   ========================= */

function renderProducts(list, targetId = "productGrid") {
    const target = document.getElementById(targetId);

    if (!target) {
        return;
    }

    if (list.length) {
        target.innerHTML = list.map(productCard).join("");
    } else {
        target.innerHTML = `
            <div class="empty">
                பொருட்கள் கிடைக்கவில்லை.
            </div>
        `;
    }

    const count = document.getElementById("resultCount");

    if (count) {
        count.textContent = `${list.length} பொருட்கள்`;
    }
}


/* =========================
   PRODUCT FILTER
   ========================= */

function initProductPage() {
    const grid = document.getElementById("productGrid");

    if (!grid) {
        return;
    }

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortFilter = document.getElementById("sortFilter");

    const updateProducts = () => {
        let filteredProducts = [...products];

        const searchText = searchInput.value
            .toLowerCase()
            .trim();

        const selectedCategory = categoryFilter.value;

        const selectedSort = sortFilter.value;


        /* Search */

        if (searchText) {
            filteredProducts = filteredProducts.filter(product => {
                const productText =
                    `${product.name} ${product.category}`
                        .toLowerCase();

                return productText.includes(searchText);
            });
        }


        /* Category */

        if (selectedCategory !== "all") {
            filteredProducts = filteredProducts.filter(product => {
                return product.category === selectedCategory;
            });
        }


        /* Sort - Low to High */

        if (selectedSort === "low") {
            filteredProducts.sort((a, b) => {
                return a.price - b.price;
            });
        }


        /* Sort - High to Low */

        if (selectedSort === "high") {
            filteredProducts.sort((a, b) => {
                return b.price - a.price;
            });
        }


        /* Sort - Name */

        if (selectedSort === "name") {
            filteredProducts.sort((a, b) => {
                return a.name.localeCompare(
                    b.name,
                    "ta"
                );
            });
        }


        renderProducts(filteredProducts);
    };


    searchInput.addEventListener(
        "input",
        updateProducts
    );

    categoryFilter.addEventListener(
        "change",
        updateProducts
    );

    sortFilter.addEventListener(
        "change",
        updateProducts
    );


    updateProducts();
}


/* =========================
   FEATURED PRODUCTS
   ========================= */

function initFeatured() {
    const featuredProducts =
        document.getElementById("featuredProducts");

    if (featuredProducts) {
        renderProducts(
            products.slice(0, 8),
            "featuredProducts"
        );
    }
}


/* =========================
   PAGE LOAD
   ========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {
        initProductPage();
        initFeatured();
    }
);
