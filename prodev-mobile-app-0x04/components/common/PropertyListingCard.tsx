// Simple property card component for web
interface PropertyListingProps {
  propertyName: string;
  rate: number;
  currency: string;
  amount: number;
  location: {
    street: string;
    city: string;
    country: string;
  };
  favorite?: boolean;
  image: string;
}

export default function PropertyListingCard({
  propertyName,
  rate,
  currency,
  amount,
  location,
  favorite = false,
  image,
}: PropertyListingProps) {
  // Simple implementation without state for now
  const isFavorite = favorite;
  const toggleFavorite = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    // State update would go here if we had a state management solution
  };

  // Inline styles for web
  const styles = {
    cardContainer: {
      width: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#FFF',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '16px',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      height: '200px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
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
