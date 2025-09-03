import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Property } from '../../interfaces';

interface PropertyListingCardProps {
  property: Property;
}

const PropertyListingCard: React.FC<PropertyListingCardProps> = ({ property }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: property.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${property.price.toLocaleString()}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{property.rating}</Text>
          </View>
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {property.title}
        </Text>
        <Text style={styles.address} numberOfLines={1}>
          {property.address}
        </Text>
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureText}>{property.bedrooms} bd</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>{property.bathrooms} ba</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureText}>{property.area} sqft</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontWeight: '600',
    color: '#333',
    marginLeft: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  feature: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 12,
    color: '#666',
  },
});

export default PropertyListingCard;
