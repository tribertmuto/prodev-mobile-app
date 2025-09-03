import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} 
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Edit Profile</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Change Password</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Notification Settings</Text>
        </View>
      </View>
      
      <View style={[styles.section, { marginTop: 20 }]}>
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Help Center</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Contact Us</Text>
        </View>
        <View style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Text style={[styles.menuText, { color: 'red' }]}>Sign Out</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 15,
    color: '#666',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
  },
});
