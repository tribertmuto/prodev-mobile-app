export interface PropertyLocationProps {
  street: string;
  city: string;
  country: string;
}

export interface PropertyListingProps {
  propertyName: string;
  rate: number;
  currency: string;
  amount: number;
  location: PropertyLocationProps;
  favorite: boolean;
  image?: string | any; // any is for require() type
}

export interface PropertyListingListProps {
  listings: PropertyListingProps[];
}

export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  rating: number;
  image: string;
  images?: string[];
  description?: string;
  features?: string[];
  isFavorite?: boolean;
  type?: 'apartment' | 'house' | 'villa' | 'condo';
  status?: 'for_sale' | 'for_rent' | 'sold' | 'rented';
  location?: {
    lat: number;
    lng: number;
  };
  yearBuilt?: number;
  garage?: number;
  agent?: {
    name: string;
    phone: string;
    email: string;
    image?: string;
  };
  postedDate?: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  image?: string;
  favorites?: string[];
  type?: 'buyer' | 'seller' | 'agent' | 'admin';
  location?: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  settings?: {
    notifications: boolean;
    emailNotifications: boolean;
    pushNotifications: boolean;
    theme: 'light' | 'dark' | 'system';
  };
  createdAt?: string;
  updatedAt?: string;
}
