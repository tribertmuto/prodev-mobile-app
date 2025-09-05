import React from 'react';
import PropertyListing from '@/components/PropertyListing';
import { SAMPLE_DATA } from '@/constants/data';

// Simple styles for the home page
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: '16px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  content: {
    flex: 1,
  },
};

export default function HomeScreen() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Featured Properties</h1>
      <div style={styles.content}>
        <PropertyListing listings={SAMPLE_DATA} />
      </div>
    </div>
  );
}