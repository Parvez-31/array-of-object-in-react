interface Manufacturer {
  name: string;
  country: string;
  establishedYear: number;
}

interface Dosage {
  type: string;
  strength: string;
  frequency: string;
}

interface SubMedicine {
  id: number;
  name: string;
  price: number;
  quantity: string;
}

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
}

export interface Medicine {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;

  manufacturer: Manufacturer;

  dosage: Dosage;

  subMedicines: SubMedicine[];

  reviews: Review[];

  available: boolean;

  tags: string[];
}
