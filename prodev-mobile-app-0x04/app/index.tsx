import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <ImageBackground
            source={HEROLOGO}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Let's Get Started</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Connect with each other with chatting
            </Text>
            <Text style={styles.titleSubText}>
              Calling, Enjoy Safe and private texting
            </Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => router.push('/join')}
          >
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => router.push('/signin')}
          >
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={{ color: 'white' }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/signin')}>
            <Text style={{ color: 'white', textDecorationLine: 'underline' }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}