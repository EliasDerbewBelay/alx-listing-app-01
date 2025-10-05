export const APP_TITLE = "ALX Listing App";
export const API_BASE_URL = "";
export const PLACEHOLDER_IMAGE = "/assets/placeholder.jpg";

// constants/index.ts
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "https://unsplash.com/photos/a-building-on-a-beach-erl3gMLzWt0", // beach villa
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image:
      "https://unsplash.com/photos/wooden-chalets-nestled-in-a-mountain-landscape-ExFp1eVHC0I", // mountain chalet
    discount: "30",
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image:
      "https://unsplash.com/photos/a-body-of-water-surrounded-by-trees-and-rocks-MN6nDwzIh30", // desert-ish landscape
    discount: "",
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image:
      "https://unsplash.com/photos/a-view-of-the-ocean-from-a-balcony-_2Q7YN3WJG0", // balcony + view
    discount: "15",
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image:
      "https://unsplash.com/photos/tropical-house-surrounded-by-palm-trees-JLZHR7jYn5I", // lush riverside-like house
    discount: "20",
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image:
      "https://unsplash.com/photos/an-aerial-view-of-a-beach-with-a-house-on-it-5OLT28gQXwM", // beachfront villa aerial
    discount: "",
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image:
      "https://unsplash.com/photos/a-house-on-a-cliff-overlooking-the-ocean-jsE7QlfqM40", // lake or water + elevation
    discount: "10",
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image:
      "https://unsplash.com/photos/a-large-house-with-palm-trees-in-front-of-it-abIVeB8E5GA", // tropical + palms
    discount: "25",
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany",
    },
    rating: 4.6,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "https://unsplash.com/photos/houses-on-seashore-EKPK3wh3JCo", // urban + sea edges or buildings
    discount: "",
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image:
      "https://unsplash.com/photos/a-body-of-water-surrounded-by-trees-and-rocks-MN6nDwzIh30", // forest + water
    discount: "40",
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy",
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image:
      "https://unsplash.com/photos/historic-italian-villas-perched-on-a-cliff-overlooking-the-sea-1VZU1gQCT3I", // Amalfi‐like cliff villa
    discount: "50",
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia",
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image:
      "https://unsplash.com/photos/a-body-of-water-with-buildings-along-it-7u4Wu1RyvFA", // coastal buildings
    discount: "",
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy",
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image:
      "https://unsplash.com/photos/yellow-villa-on-a-cliff-overlooking-the-ocean-3gkejmdEf6E", // quaint villa, cliff view
    discount: "35",
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan",
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2",
    },
    image:
      "https://unsplash.com/photos/a-view-of-the-ocean-from-a-balcony-_2Q7YN3WJG0", // reused for urban / balcony view
    discount: "",
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania",
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image:
      "https://unsplash.com/photos/tropical-house-surrounded-by-palm-trees-JLZHR7jYn5I", // safari / tropical vibe
    discount: "20",
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK",
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image:
      "https://unsplash.com/photos/a-house-on-a-cliff-overlooking-the-ocean-jsE7QlfqM40", // reused but rustic / hillside feel
    discount: "25",
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France",
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image:
      "https://unsplash.com/photos/a-body-of-water-with-buildings-along-it-7u4Wu1RyvFA", // river / water edge
    discount: "30",
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image:
      "https://unsplash.com/photos/wooden-chalets-nestled-in-a-mountain-landscape-ExFp1eVHC0I", // reuse mountain chalet
    discount: "",
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image:
      "https://unsplash.com/photos/an-aerial-view-of-a-resort-in-the-middle-of-the-ocean-kjicxykvfiA", // over-water / island resort
    discount: "60",
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image:
      "https://unsplash.com/photos/a-large-yellow-building-sitting-on-top-of-a-cliff-XbYCc7p5S5E", // cliff/top building
    discount: "",
  },
];

export const HERO_BACKGROUND_IMAGE = "/assets/bg.png";
