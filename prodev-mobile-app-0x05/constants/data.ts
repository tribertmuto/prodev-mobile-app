import { Property, PropertyListingProps } from '../interfaces';

// Sample data for the property listings
export const SAMPLE_DATA: PropertyListingProps[] = [
  {
    propertyName: "Villa Arrcifee Beach House",
    location: {
      street: "123 Ocean Drive",
      city: "Miami",
      country: "USA"
    },
    rate: 4.76,
    currency: "$",
    amount: 620,
    favorite: false,
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    propertyName: "Sunset Paradise Villa",
    location: {
      street: "456 Beachfront Lane",
      city: "Cancun",
      country: "Mexico"
    },
    rate: 4.85,
    currency: "$",
    amount: 750,
    favorite: true,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    propertyName: "Golden Sands Retreat",
    location: {
      street: "789 Coastal Road",
      city: "Gold Coast",
      country: "Australia"
    },
    rate: 4.92,
    currency: "$",
    amount: 900,
    favorite: false,
    image: "https://images.unsplash.com/photo-1583845112203-293299e56d52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    propertyName: "Azure Horizon Cottage",
    location: {
      street: "321 Seaside Avenue",
      city: "Nice",
      country: "France"
    },
    rate: 4.78,
    currency: "$",
    amount: 680,
    favorite: false,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    propertyName: "Palm Haven Villa",
    location: {
      street: "654 Palm Street",
      city: "Bali",
      country: "Indonesia"
    },
    rate: 4.88,
    currency: "$",
    amount: 1200,
    favorite: true,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Filters for the home screen
export const FILTERS = [
  "Mansion",
  "CountrySide",
  "Villa",
  "Tropical",
  "New",
  "Amazing",
  "Beachfront",
  "Luxury",
  "Family-Friendly",
  "Pet-Friendly",
  "Secluded"
];

// Original properties data
export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    address: '123 Main St, New York, NY 10001',
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    rating: 4.8,
    type: 'apartment',
    status: 'for_sale',
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1583845112203-293299e56d52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    ],
    description: 'Beautiful modern apartment in the heart of downtown. Features include hardwood floors, stainless steel appliances, and a spacious balcony with city views.',
    features: ['Hardwood Floors', 'Stainless Steel Appliances', 'In-Unit Laundry', 'Balcony', 'Fitness Center', 'Doorman'],
    yearBuilt: 2018,
    garage: 1,
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    agent: {
      name: 'Sarah Johnson',
      phone: '(555) 123-4567',
      email: 'sarah@realestate.com',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    postedDate: '2023-05-15T10:30:00Z',
    updatedAt: '2023-05-20T14:15:00Z'
  },
  {
    id: '2',
    title: 'Luxury Villa with Ocean View',
    address: '456 Beachfront Ave, Miami, FL 33139',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    rating: 4.9,
    type: 'villa',
    status: 'for_sale',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    description: 'Stunning luxury villa with breathtaking ocean views. Features include a private pool, modern kitchen, and spacious living areas.',
    features: ['Private Pool', 'Ocean View', 'Gourmet Kitchen', 'Smart Home System', 'Walk-in Closets', 'Home Office'],
    yearBuilt: 2020,
    garage: 2,
    location: {
      lat: 25.7617,
      lng: -80.1918
    },
    agent: {
      name: 'Michael Chen',
      phone: '(555) 987-6543',
      email: 'michael@luxuryhomes.com',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    postedDate: '2023-06-01T09:15:00Z',
    updatedAt: '2023-06-05T11:45:00Z'
  },
  {
    id: '3',
    title: 'Cozy Suburban Home',
    address: '789 Oak Lane, Austin, TX 78704',
    price: 325000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    rating: 4.6,
    type: 'house',
    status: 'for_sale',
    image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Charming single-family home in a quiet suburban neighborhood. Features a large backyard, updated kitchen, and two-car garage.',
    features: ['Large Backyard', 'Updated Kitchen', 'Two-Car Garage', 'Hardwood Floors', 'Fireplace', 'Fenced Yard'],
    yearBuilt: 2010,
    garage: 2,
    location: {
      lat: 30.2672,
      lng: -97.7431
    },
    agent: {
      name: 'David Wilson',
      phone: '(555) 456-7890',
      email: 'david@homes4u.com',
      image: 'https://randomuser.me/api/portraits/men/64.jpg'
    },
    postedDate: '2023-05-28T14:20:00Z',
    updatedAt: '2023-06-02T16:30:00Z'
  },
  {
    id: '4',
    title: 'Luxury Penthouse with City Views',
    address: '101 Skyline Blvd, Los Angeles, CA 90015',
    price: 2800000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3800,
    rating: 4.9,
    type: 'condo',
    status: 'for_sale',
    image: 'https://images.unsplash.com/photo-1502672260266-37c4c9988705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Stunning penthouse with panoramic city views. Features floor-to-ceiling windows, high-end finishes, and access to luxury building amenities.',
    features: ['City Views', 'Floor-to-Ceiling Windows', 'Private Balcony', 'Smart Home System', 'Concierge Service', 'Rooftop Pool'],
    yearBuilt: 2021,
    garage: 2,
    location: {
      lat: 34.0522,
      lng: -118.2437
    },
    agent: {
      name: 'Jennifer Lee',
      phone: '(555) 234-5678',
      email: 'jennifer@luxurycondos.com',
      image: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    postedDate: '2023-06-10T11:10:00Z',
    updatedAt: '2023-06-15T10:20:00Z'
  },
  {
    id: '5',
    title: 'Charming Townhouse in Historic District',
    address: '202 Maple Street, Boston, MA 02108',
    price: 895000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2200,
    rating: 4.7,
    type: 'condo',
    status: 'for_sale',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Beautifully renovated townhouse in a historic district. Features original architectural details, modern updates, and a private roof deck.',
    features: ['Historic Charm', 'Renovated Kitchen', 'Hardwood Floors', 'Roof Deck', 'Fireplace', 'Walkable Location'],
    yearBuilt: 1920,
    garage: 1,
    location: {
      lat: 42.3601,
      lng: -71.0589
    },
    agent: {
      name: 'Robert Taylor',
      phone: '(555) 765-4321',
      email: 'robert@bostonhomes.com',
      image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    postedDate: '2023-06-05T13:45:00Z',
    updatedAt: '2023-06-12T09:30:00Z'
  }
];

export const featuredProperties = properties.slice(0, 3);

export const recentProperties = [...properties].sort((a, b) => 
  new Date(b.postedDate || '').getTime() - new Date(a.postedDate || '').getTime()
);

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};
