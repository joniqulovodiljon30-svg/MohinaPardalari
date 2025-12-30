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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
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
            "https://imagine-public.x.ai/imagine-public/images/9fc77379-f83b-4cf4-8a31-0d9fe8a231a5.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/a8650a58-fe94-4bf4-9543-913844b2df52.png?cache=1&dl=1",
            "https://imagine-public.x.ai/imagine-public/images/70b1e49e-4d45-4547-b2a6-0414910a056f.png?cache=1&dl=1"
        ],
        badge: "15% Chegirma"
    }
];
