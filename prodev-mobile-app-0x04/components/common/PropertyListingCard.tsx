import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Property } from '@/interfaces';

interface PropertyListingCardProps extends Omit<Property, 'id'> {
  onPress?: () => void;
  onFavoritePress?: (id: string) => void;
}

const PropertyListingCard: React.FC<PropertyListingCardProps> = ({
  id,
  title,
  price,
  address,
  image,
  rating,
  isFavorite = false,
  onPress,
  onFavoritePress,
}) => {
  const handleFavoritePress = (e: any) => {
    e?.stopPropagation?.();
    onFavoritePress?.(id);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={handleFavoritePress}
        >
          <Text style={styles.favoriteIcon}>{isFavorite ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>${price.toLocaleString()}</Text>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.address} numberOfLines={1}>{address}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>★ {rating.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.2)',
      padding: '12px',
    },
    topBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    ratingContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding: '4px 8px',
      borderRadius: '12px',
    },
    ratingText: {
      color: '#FFF',
      fontSize: '12px',
      fontWeight: 'bold',
      marginLeft: '4px',
    },
    favoriteButton: {
      backgroundColor: 'rgba(255,255,255,0.8)',
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
    },
    detailsContainer: {
      padding: '12px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
      marginRight: '8px',
      overflow: 'hidden',
    },
    propertyName: {
      fontSize: '16px',
      fontWeight: 600,
      color: '#333',
      margin: '0 0 4px 0',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    locationContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    locationText: {
      fontSize: '12px',
      color: '#666',
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    priceContainer: {
      textAlign: 'right',
    },
    priceText: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#333',
      margin: 0,
    },
    nightText: {
      fontSize: '12px',
      color: '#666',
      fontWeight: 400,
    },
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageContainer}>
        <img 
          src={image} 
          alt={propertyName}
          style={styles.image}
        />
        <div style={styles.overlay}>
          <div style={styles.topBar}>
            <div style={styles.ratingContainer}>
              <span style={{ color: '#FFD700' }}>★</span>
              <span style={styles.ratingText}>{rate}</span>
            </div>
            <button 
              onClick={toggleFavorite} 
              style={styles.favoriteButton}
            >
              <span style={{ color: isFavorite ? '#FF5A5F' : '#FFF' }}>
                {isFavorite ? '❤️' : '🤍'}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <div style={styles.detailsContainer}>
        <div style={styles.textContainer}>
          <h3 style={styles.propertyName}>
            {propertyName}
          </h3>
          <div style={styles.locationContainer}>
            <span style={{ color: '#666', marginRight: '4px' }}>📍</span>
            <p style={styles.locationText}>
              {location.street}, {location.city}, {location.country}
            </p>
          </div>
        </div>
        <div style={styles.priceContainer}>
          <p style={styles.priceText}>
            {currency}{amount.toLocaleString()}
            <span style={styles.nightText}> / night</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListingCard;
