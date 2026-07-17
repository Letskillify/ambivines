// Real wine data for all categories
export const WINE_LIST = [
  // --- RED WINES ---
  {
    id: 1,
    name: "Premium Shiraz",
    category: "red",
    shortDescription: "This deep, dark purple-red wine offers a refined medium to full-bodied expression with elegant aromas of ripe blackberries and plums.",
    features: [
      "Deep, dark purple-red wine, medium to full-bodied",
      "Elegant aromas of ripe blackberries and plums",
      "Soft, well-integrated tannins",
      "Warm and lingering finish with delicate spicy and peppery nuances"
    ],
    foodPairing: [
      "Roasted or grilled meats",
      "Pizza",
      "Seekh kebab",
      "Garlic mashed potatoes"
    ],
    abv: "12.1%",
    sizes: ["375ml", "750ml"],
    origin: "Rhône Valley (France); now widely grown in Australia, South Africa, and worldwide",
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407837/d1_bh5fex.jpg",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407835/d2_yvlbvk.jpg"
  },
  {
    id: 2,
    name: "Tempranillo The Class",
    category: "red",
    shortDescription: "Full-bodied, dry red wine with flavors of cherry, dried fig, cedar & tobacco.",
    features: [
      "Made from Tempranillo black grapes of Spain",
      "Full-bodied, dry red wine",
      "Flavor notes: cherry, dried fig, cedar & tobacco"
    ],
    foodPairing: [
      "Roasted meats",
      "Aged cheeses",
      "Tapas"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Spain",
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407845/h1_ky8suu.jpg",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407841/h2_kvpbpq.jpg"
  },
  {
    id: 3,
    name: "Cabernet Sauvignon",
    category: "red",
    shortDescription: "Deep dark red, full-bodied with a velvety texture and complex aromas.",
    features: [
      "Deep dark red, full-bodied, velvety texture",
      "Complex aroma of black cherries with a hint of oak"
    ],
    foodPairing: [
      "Sandwiches, mushroom pizzas",
      "Burgers with blue cheese",
      "Pork, meatballs"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Bordeaux (France), Rioja (Spain), Italy; now grown worldwide",
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407855/f1_dv5f4p.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407840/f2_uze2ak.jpg"
  },
  {
    id: 4,
    name: "Shiraz Cabernet",
    category: "red",
    shortDescription: "Full-bodied, well-structured, smooth mouthfeel with dark fruit notes.",
    features: [
      "Full-bodied, well-structured, smooth mouthfeel",
      "Flavour Notes: Deep dark red, spice, dark fruits, lingering finish"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Bordeaux (France) – Cabernet; Rhône Valley (France) – Shiraz; now grown worldwide",
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407862/e1_y6b05s.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407837/e2_yogmco.jpg"
  },
  {
    id: 5,
    name: "Cab Shiraz",
    category: "red",
    shortDescription: "Medium to full-bodied with a balance of ripe tannins and rich flavor.",
    features: [
      "Medium to full-bodied with a balance of ripe tannins",
      "Flavour Notes: Deep cherry, soft red fruits, spice, rich flavour"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Bordeaux (France) – Cabernet; Rhône Valley (France) – Shiraz; now grown worldwide",
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407840/g1_j1pwwa.jpg",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407840/g2_n2cnq9.jpg"
  },
  {
    id: 6,
    name: "Puzzle (Barrique Wine)",
    category: "red",
    shortDescription: "Rare, multi-layered profile with gentle tannins and soft oak notes.",
    features: [
      "Rare, multi-layered profile with gentle tannins",
      "Flavour Notes: Deep dark red, soft oak, dark plum, violets"
    ],
    sizes: ["750ml"],
    origin: "Blend of Cabernet Sauvignon, Shiraz & Merlot",
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407841/c1_booo6y.jpg",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407838/c2_oejyh9.jpg"
  },
  {
    id: 7,
    name: "Premium Chenin Blanc",
    category: "white",
    shortDescription: "This light gold-hued wine exudes elegance, with delicate aromas of honey, pear, and melon.",
    features: [
      "Light gold-hued wine, exudes elegance",
      "Delicate aromas of honey, pear, and melon",
      "Refined and balanced palate highlighting freshness",
      "Subtle complexity"
    ],
    foodPairing: [
      "Vegetable dishes or salads",
      "Rich fish or cream-based chicken",
      "Seafood"
    ],
    sizes: ["375ml", "750ml"],
    origin: "Loire Valley (France); also found across South Africa, Australia, Argentina, United States, and New Zealand",
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407849/a1_ul0wea.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407834/a2_cbbjcu.jpg"
  },
  {
    id: 8,
    name: "Love Drink",
    category: "rose",
    shortDescription: "This light-bodied rosé displays a delicate pink hue and enticing floral aromas intertwined with fresh strawberries.",
    features: [
      "Crafted from Shiraz and Zinfandel grapes",
      "Delicate pink hue with enticing floral aromas",
      "Vibrant and fruity palate with layered berry flavors",
      "Expertly balanced between subtle sweetness and gentle dryness"
    ],
    foodPairing: [
      "Light salads",
      "Light pasta & rice dishes",
      "Grilled chicken",
      "Fish with herbs"
    ],
    sizes: ["375ml", "750ml"],
    origin: "South of France",
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407849/b1_bms0h3.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407835/b2_hckcj7.jpg"
  },
  {
    id: 9,
    name: "45° Spritzer – Green Apple",
    category: "sparkling",
    shortDescription: "A crisp and refreshing spritzer, highlighting vibrant notes of green apple. Light and easy to enjoy.",
    features: [
      "Crisp and refreshing notes of green apple",
      "Light and easy to enjoy",
      "Perfect for casual sipping or lively gatherings"
    ],
    abv: "9.0%",
    sizes: ["330ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407869/k1_wxrpto.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407835/k2_by4tyj.jpg"
  },
  {
    id: 10,
    name: "45° Spritzer – Cranberry",
    category: "sparkling",
    shortDescription: "Bursting with fruity flavors of cranberry, raspberry, and cherry, offering a playful and invigorating palate.",
    features: [
      "Bursting with fruity flavors of cranberry, raspberry, and cherry",
      "Playful and invigorating palate",
      "Balances lively fruitiness with a gentle warmth"
    ],
    abv: "14.2%",
    sizes: ["330ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407843/i1_n1qt2i.jpg",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407835/i2_u51jnu.jpg"
  },
  {
    id: 11,
    name: "45° Spritzer – Strawberry",
    category: "sparkling",
    shortDescription: "Refreshing and light, showcasing natural strawberry flavors in every sip.",
    features: [
      "Refreshing and light",
      "Showcases natural strawberry flavors",
      "Perfect companion for sunny afternoons or easy-going evenings"
    ],
    abv: "10.0%",
    sizes: ["330ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407873/j1_skf6k1.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407835/j2_v8it08.jpg"
  },
  {
    id: 20,
    name: " Bold ",
    category: "sparkling",
    shortDescription: "A crisp golden fusion drink with citrus, pear, and refreshing fruity notes, delivering a smooth and lively finish.",
    features: [
      "Crisp golden pour with citrus, pear, and a subtle hop-like lift",
      "Unique blend of Chenin Blanc and local Titari grapes",
      "Lively, juicy palate with a smooth, refreshing finish"
    ],
    abv: "13.0%",
    sizes: ["330ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/duzwys877/image/upload/v1783776721/IMG_5943_cj40dy.png",
    img2: "https://res.cloudinary.com/duzwys877/image/upload/v1783776716/IMG_5942_mbydwe.jpg"
  },
  {
    id: 12,
    name: "Malwi Port Wine",
    category: "red",
    shortDescription: "Semi-sweet red wine with a pomegranate flavor.",
    features: [
      "Semi-sweet red wine with a pomegranate (अनार) flavor",
      "Medium-bodied with a smooth and fruity finish"
    ],
    abv: "14.8%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407853/s1_t5ts7n.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407844/s2_xd1bhh.jpg"
  },
  {
    id: 13,
    name: "Malwi White Wine",
    category: "white",
    shortDescription: "Smooth, refreshing, and easy to sip with guava and tropical fruit notes.",
    features: [
      "Tasting notes of guava and tropical fruits",
      "Smooth, refreshing, and easy to sip"
    ],
    abv: "14.8%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407856/r1_xzxzs1.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407842/r2_thpjsh.jpg"
  },
  {
    id: 14,
    name: "Nratya Red",
    category: "red",
    shortDescription: "Sweet wine with fruity cranberry flavour.",
    features: [
      "Sweet wine with fruity cranberry flavour",
      "Rich and aromatic"
    ],
    abv: "13.0%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407865/q1_l5hvgn.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407843/q2_wnwi9s.jpg"
  },
  {
    id: 15,
    name: "Nratya White",
    category: "white",
    shortDescription: "Sweet wine with fruity honey and straw flavour.",
    features: [
      "Sweet wine with fruity honey and straw flavour",
      "Light and sweet"
    ],
    abv: "12.6%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407868/p1_nrmad4.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407841/p2_auz70d.jpg"
  },
  {
    id: 16,
    name: "Apsara Classic",
    category: "red",
    shortDescription: "Reflects flavors of chocolate & toast.",
    features: [
      "Reflects flavors of chocolate & toast",
      "Rich dessert wine character"
    ],
    abv: "14.6%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407855/m1_onrqls.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407840/m2_pnjo8o.jpg"
  },
  // {
  //   id: 17,
  //   name: "Apsara Silver",
  //   category: "red",
  //   shortDescription: "Sweet in taste, light-bodied red blend.",
  //   features: [
  //     "Sweet in taste, light-bodied red blend",
  //     "Smooth finish"
  //   ],
  //   abv: "14.8%",
  //   sizes: ["375ml", "750ml"],
  //   price: "Ask for Price",
  //   img2: ""
  // },
  {
    id: 18,
    name: "Apsara Gold",
    category: "red",
    shortDescription: "Reflects aftertaste of black cherry flavour.",
    features: [
      "Reflects aftertaste of black cherry flavour",
      "Premium fortified blend"
    ],
    abv: "14.4%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407864/n1_wsmdck.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407839/n2_tpelnr.jpg"
  },
  {
    id: 19,
    name: "Apsara Premium",
    category: "red",
    shortDescription: "Sweet in taste with a mix of fruit flavours.",
    features: [
      "Sweet in taste with a mix of fruit flavours",
      "Complex and rich"
    ],
    abv: "14.8%",
    sizes: ["375ml", "750ml"],
    price: "Ask for Price",
    image: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407868/l1_ozspdz.png",
    img2: "https://res.cloudinary.com/dcjn4y284/image/upload/v1783407838/l2_kw0otq.jpg"
  }
];

// Category metadata for hero sections
export const CATEGORY_INFO = {
  all: {
    title: "All Wines",
    subtitle: "Curated Collection",
    description: "Discover our complete collection of wines, from bold reds and crisp whites to refreshing rosé and sparkling pours.",
    heroImage: "https://images.unsplash.com/photo-1510812431409-41d2bd2722f3?w=600&auto=format&fit=crop&q=60"
  },
  red: {
    title: "Red Wines",
    subtitle: "Robust & Earthy Selection",
    description: "Our red wine collection showcases the depth and complexity of carefully selected varietals, each expressing the unique character of our terroir through patient aging and traditional winemaking techniques.",
    heroImage: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVkJTIwd2luZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  white: {
    title: "White Wines",
    subtitle: "Crisp & Mineral Selection",
    description: "From bright, citrus-driven expressions to rich, barrel-fermented styles, our white wines capture the freshness and elegance of carefully tended vineyards.",
    heroImage: "https://plus.unsplash.com/premium_photo-1723741352223-312276e72b15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwd2luZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  rose: {
    title: "Rosé Wines",
    subtitle: "Fresh & Floral Selection",
    description: "Delicate and refreshing, our rosé collection offers the perfect balance of fruit and acidity, crafted for moments of effortless elegance.",
    heroImage: "https://plus.unsplash.com/premium_photo-1686904396892-7f09ce385215?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9zZSUyMHdpbmV8ZW58MHx8MHx8fDA%3D"
  },
  sparkling: {
    title: "Sparkling Wines",
    subtitle: "Fruity & Refreshing",
    description: "Vibrant and playful, our collection brings together fresh fruit flavors and sparkling zest for the perfect low-alcohol refreshment.",
    heroImage: "https://images.unsplash.com/photo-1652862730477-782a6dcb2385?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlciUyMHdpbmV8ZW58MHx8MHx8fDA%3D"
  }
};
