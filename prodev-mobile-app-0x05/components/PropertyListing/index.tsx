import { View } from 'react-native';
import PropertyListingCard from '../common/PropertyListingCard';
import { PropertyListingProps } from '@/interfaces';

interface PropertyListingListProps {
  listings: PropertyListingProps[];
}

const PropertyListing = ({ listings }: PropertyListingListProps) => {
  return (
    <View style={{
      flex: 1,
      rowGap: 10,
    }}>
      {listings?.map((listing, index) => (
        <PropertyListingCard 
          key={`${listing.propertyName}-${index}`} 
          {...listing} 
        />
      ))}
    </View>
  );
};

export default PropertyListing;
