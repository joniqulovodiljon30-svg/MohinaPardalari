// Mahsulotlar ma'lumotlari
const productsData = [
    {
        id: 1,
        name: "Zebo Kun Pardasi - Oq Rang",
        category: "day",
        price: 4500000,
        oldPrice: 5200000,
        description: "Yorug'likni yumshoq o'tkazadigan, oq rangdagi chiroyli kun pardasi. 100% poliester.",
        features: ["Yumshoq", "Oq rang", "Yuviladi", "Uzoq muddatli"],
        images: [
            "https://images.unsplash.com/photo-1575414003591-ece8c3d2f0a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: "Yangi"
    },
    {
        id: 2,
        name: "Tun Pardasi - Qora Qalin",
        category: "night",
        price: 6800000,
        oldPrice: 7500000,
        description: "To'liq qorong'ulik yaratadigan, qalin va sifatli tun pardasi. Issiqlik saqlaydi.",
        features: ["Qalin", "Qorong'ulik", "Issiq saqlaydi", "Shovqin kamaytiradi"],
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: "30% Chegirma"
    },
    {
        id: 3,
        name: "Gul Naqshli Zebo Parda",
        category: "decorative",
        price: 7500000,
        oldPrice: 8500000,
        description: "Gul naqshli, interyerga chiroy bag'ishlovchi zebo parda. Ipak mato.",
        features: ["Gul naqsh", "Ipak mato", "Zebo", "Yugori sifat"],
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: "Yangi"
    },
    {
        id: 4,
        name: "Zamonaviy Rulon Parda",
        category: "roller",
        price: 5200000,
        oldPrice: 6000000,
        description: "Zamonaviy dizayndagi, o'zgaruvchan rulon parda. O'rnatish qulay.",
        features: ["Rulon", "O'zgaruvchan", "Zamonaviy", "Qulay"],
        images: [
            "https://images.unsplash.com/photo-1575414003591-ece8c3d2f0a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: null
    },
    {
        id: 5,
        name: "Roman Pardasi - Jigarrang",
        category: "roman",
        price: 8900000,
        oldPrice: 9500000,
        description: "Klassik roman pardasi, jigarrang rang. Nafis va uyg'un dizayn.",
        features: ["Roman", "Jigarrang", "Klassik", "Nafis"],
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: "Sotuvda"
    },
    {
        id: 6,
        name: "Ikki Qavatli Kun Pardasi",
        category: "day",
        price: 9500000,
        oldPrice: 10500000,
        description: "Ikki qatlamli kun pardasi. Ichki qatlam yorug'likni sochadi.",
        features: ["2 qatlamli", "Yorug'lik sochadi", "Funksional", "Zamonaviy"],
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: "20% Chegirma"
    },
    {
        id: 7,
        name: "Bolalar Uchun Tun Pardasi",
        category: "night",
        price: 5800000,
        oldPrice: 6500000,
        description: "Bolalar xonasi uchun tun pardasi. Sevimli multfilm qahramonlari naqshi.",
        features: ["Bolalar uchun", "Multfilm naqsh", "Qalin", "Xavfsiz"],
        images: [
            "https://images.unsplash.com/photo-1575414003591-ece8c3d2f0a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: "Yangi"
    },
    {
        id: 8,
        name: "Ofis Uchun Rulon Parda",
        category: "roller",
        price: 6200000,
        oldPrice: 7000000,
        description: "Ofis va biznes markazlari uchun zamonaviy rulon parda. Professional ko'rinish.",
        features: ["Ofis uchun", "Professional", "Qulay", "O'rnatish oson"],
        images: [
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: null
    },
    {
        id: 9,
        name: "Geometrik Naqshli Zebo Parda",
        category: "decorative",
        price: 8200000,
        oldPrice: 9000000,
        description: "Geometrik naqshli, zamonaviy zebo parda. Turli rang kombinatsiyalari.",
        features: ["Geometrik naqsh", "Zamonaviy", "Turli rang", "Yuqori sifat"],
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: "Sotuvda"
    },
    {
        id: 10,
        name: "Lux Roman Pardasi - Oltin",
        category: "roman",
        price: 12500000,
        oldPrice: 14000000,
        description: "Luxury roman pardasi, oltin rangdagi. Interyerga hashamat bag'ishlaydi.",
        features: ["Luxury", "Oltin rang", "Hashamatli", "Premium"],
        images: [
            "https://images.unsplash.com/photo-1575414003591-ece8c3d2f0a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        badge: "15% Chegirma"
    }
];
