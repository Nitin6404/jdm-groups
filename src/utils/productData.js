// Dummy product data utility
export const productData = {
  id: "siddh-shiv-ji-trishul-kavach",
  name: "Kashi Siddh Shiv Ji Trishul Kavach",
  subtitle: "Formed with Shiv Ji Jap Engravings",
  price: 699,
  originalPrice: 1300,
  discount: "26% + Extra 20% OFF",
  rating: 0, // No rating shown in reference
  images: [
    "/product.webp",
    "/product.webp", // Using same image as placeholder
    "/product.webp",
  ],
  thumbnails: [
    "/product.webp",
    "/product.webp", // Using same image as placeholder
    "/product.webp",
  ],
  benefits: [
    "Mahadev's Trishul for Protection",
    "Destroys Negativity & Fear",
    "Blessed for Inner Strength & Power",
  ],
  description:
    "Experience powerful and divine blessings with this Limited Edition Sawan Siddh Shiv Ji Trishul Kavach. Representing Lord Shiva, it's powerfully Siddh with Rudraabhishek at Kashi's 1000 years old Kedareshwar Mahadev Mandir. Siddh on the auspicious First Somwar of Sawan, these Kavach are more powerful and effective.",
  features: [
    "Authentic Rudraksha beads",
    "Blessed at ancient Kashi temple",
    "Handcrafted with precision",
    "Energized with mantras",
  ],
  specifications: {
    material: "Rudraksha, Silver",
    weight: "15-20 grams",
    size: "Adjustable",
    origin: "Kashi (Varanasi)",
  },
  howToWear: [
    "Wear the pendant daily, keeping it close to your heart.",
    "Focus on the Trishul and chant 'Om Namah Shivaya' or meditate.",
    "Set intentions for protection, strength, and overcoming negativity.",
  ],
  styletip:
    "Start wearing on a Monday to strongly align with Lord Shiva's energy.",
  packaging: "Premium gift box with authenticity certificate",
  returns: "7-day return policy with free exchanges",
  shipping: "Free shipping on all orders",
  delivery: "Delivered within 3-5 business days",
  inStock: true,
  stockCount: 86,
  variants: [
    {
      id: "siddh-shiv-ji-trishul-kavach",
      name: "Siddh Shiv Ji Trishul Kavach",
      image: "/product.webp",
      originalPrice: 1300,
      discountedPrice: 699,
      discount: 46,
    },
  ],
  offers: [
    {
      type: "payday",
      text: "Payday Sale: Extra 20% OFF Sitewide",
      icon: "🎯",
    },
    {
      type: "gift",
      text: "FREE Gift worth ₹499 on all prepaid orders",
      icon: "🎁",
    },
    {
      type: "shipping",
      text: "FREE Shipping on all orders",
      icon: "🚚",
    },
  ],
  trustIndicators: {
    ordersDelivered: "92% orders are delivered within 3 days",
    customers: "More than 13L+ users have trusted us",
    certification: "100% authentic & certified products",
  },
  faqs: [
    {
      question: "What are its benefits?",
      answer:
        "This Trishul Kavach provides divine protection, destroys negativity, and enhances inner strength and power through Lord Shiva's blessings.",
    },
    {
      question: "How natural and authentic is this gemstone?",
      answer:
        "This is 100% authentic and natural, blessed at the ancient Kedareshwar Mahadev Mandir in Kashi with proper Rudraabhishek rituals.",
    },
    {
      question: "What is the return policy and estimated delivery duration?",
      answer:
        "We offer a 7-day return policy with free exchanges. Delivery is typically within 3-5 business days with free shipping.",
    },
    {
      question: "How is this energized and how can I wear it?",
      answer:
        "It's energized through Rudraabhishek at Kashi's ancient temple. Wear it close to your heart daily and chant 'Om Namah Shivaya' for best results.",
    },
  ],
  relatedProducts: [
    {
      id: "siddh-shiv-ji-kavach",
      name: "Kashi Siddh Shiv Ji Kavach",
      price: 699,
      originalPrice: 1300,
      image: "/product.webp",
    },
    {
      id: "siddh-mahadev-kavach",
      name: "Kashi Siddh Mahadev Kavach",
      price: 699,
      originalPrice: 1300,
      image: "/product.webp",
    },
  ],
};

// Utility function to get product by ID
export const getProductById = (id) => {
  // In a real app, this would fetch from an API
  return productData;
};

// Utility function to get all products
export const getAllProducts = () => {
  // In a real app, this would fetch from an API
  // For now, return the main product plus related products
  const relatedProductsWithVariants = productData.relatedProducts.map(relatedProduct => ({
    ...relatedProduct,
    variants: [{
      id: relatedProduct.id,
      name: relatedProduct.name,
      image: relatedProduct.image,
      originalPrice: relatedProduct.originalPrice,
      discountedPrice: relatedProduct.price,
      discount: Math.round(((relatedProduct.originalPrice - relatedProduct.price) / relatedProduct.originalPrice) * 100),
    }],
    images: [relatedProduct.image],
    thumbnails: [relatedProduct.image],
    features: productData.features, // Use same features for related products
    benefits: productData.benefits, // Use same benefits for related products
  }));
  
  return [productData, ...relatedProductsWithVariants];
};

// Utility function to format price
export const formatPrice = (price) => {
  return `₹${price.toLocaleString("en-IN")}`;
};

// Combination Sets Data
export const combinationSets = [
  {
    id: "ultimate-problem-solver-combo",
    name: "Ultimate Problem Solver Combo",
    price: 1199,
    originalPrice: 2996,
    image: "/product.webp",
    description: "Complete solution for life's challenges with powerful spiritual protection",
  },
  {
    id: "maha-dhan-yog-combo",
    name: "Maha Dhan Yog Combo",
    price: 999,
    originalPrice: 2397,
    image: "/product.webp",
    description: "Attract wealth and prosperity with this powerful combination",
  },
  {
    id: "raj-yog-combo",
    name: "Raj Yog Combo",
    price: 1199,
    originalPrice: 2996,
    image: "/product.webp",
    description: "Achieve success and leadership with royal planetary combinations",
  },
  {
    id: "protection-power-combo",
    name: "Protection Power Combo",
    price: 899,
    originalPrice: 2197,
    image: "/product.webp",
    description: "Ultimate spiritual protection against negative energies",
  },
  {
    id: "success-magnetism-combo",
    name: "Success Magnetism Combo",
    price: 1099,
    originalPrice: 2697,
    image: "/product.webp",
    description: "Magnetic attraction for success in all endeavors",
  },
];

// Utility function to get combination sets
export const getCombinationSets = () => {
  return combinationSets;
};

// Utility function to calculate discount percentage
export const calculateDiscount = (originalPrice, currentPrice) => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};
