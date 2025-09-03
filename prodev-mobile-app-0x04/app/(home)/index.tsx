import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PropertyListingCard from '../../components/common/PropertyListingCard';
import { properties } from '../../constants/data';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Properties</Text>
      <ScrollView style={styles.scrollView}>
        {properties.map((property, index) => (
          <PropertyListingCard key={index} property={property} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
});
