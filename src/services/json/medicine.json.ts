import type { Medicine } from "../../typescript/interface/medicine.interface";
export const medicines: Medicine[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    description:
      "Used to reduce fever and relieve mild to moderate pain such as headache and body pain.",
    price: 45,
    stock: 120,
    category: "Pain Relief",
    manufacturer: {
      name: "HealthCare Pharma",
      country: "India",
      establishedYear: 2005,
    },
    dosage: {
      type: "Tablet",
      strength: "500mg",
      frequency: "Twice a day",
    },
    subMedicines: [
      {
        id: 101,
        name: "Paracetamol Syrup",
        price: 65,
        quantity: "100ml",
      },
      {
        id: 102,
        name: "Paracetamol Extra",
        price: 80,
        quantity: "10 Tablets",
      },
    ],
    reviews: [
      {
        id: 1,
        user: "Rahul",
        rating: 4.5,
        comment: "Works fast for fever.",
      },
      {
        id: 2,
        user: "Anjali",
        rating: 5,
        comment: "Very effective and affordable.",
      },
    ],
    available: true,
    tags: ["fever", "pain", "tablet"],
  },

  {
    id: 2,
    name: "Amoxicillin 250mg",
    description: "Antibiotic medicine used to treat bacterial infections.",
    price: 120,
    stock: 80,
    category: "Antibiotic",
    manufacturer: {
      name: "MediLife",
      country: "USA",
      establishedYear: 2010,
    },
    dosage: {
      type: "Capsule",
      strength: "250mg",
      frequency: "Three times a day",
    },
    subMedicines: [
      {
        id: 201,
        name: "Amoxicillin Syrup",
        price: 140,
        quantity: "60ml",
      },
      {
        id: 202,
        name: "Amoxicillin Forte",
        price: 180,
        quantity: "15 Capsules",
      },
    ],
    reviews: [
      {
        id: 3,
        user: "Sourav",
        rating: 4,
        comment: "Helped recover infection quickly.",
      },
      {
        id: 4,
        user: "Priya",
        rating: 4.8,
        comment: "Doctor recommended and worked well.",
      },
    ],
    available: true,
    tags: ["infection", "capsule", "antibiotic"],
  },

  {
    id: 3,
    name: "Vitamin C Tablets",
    description: "Boosts immunity and helps maintain healthy skin and bones.",
    price: 90,
    stock: 200,
    category: "Supplements",
    manufacturer: {
      name: "NutriWell",
      country: "Germany",
      establishedYear: 2015,
    },
    dosage: {
      type: "Tablet",
      strength: "1000mg",
      frequency: "Once a day",
    },
    subMedicines: [
      {
        id: 301,
        name: "Vitamin C Gummies",
        price: 150,
        quantity: "30 Gummies",
      },
      {
        id: 302,
        name: "Vitamin C Powder",
        price: 220,
        quantity: "250gm",
      },
    ],
    reviews: [
      {
        id: 5,
        user: "Amit",
        rating: 5,
        comment: "Good quality supplement.",
      },
      {
        id: 6,
        user: "Neha",
        rating: 4.2,
        comment: "Improved my immunity.",
      },
    ],
    available: false,
    tags: ["vitamin", "health", "supplement"],
  },
];
