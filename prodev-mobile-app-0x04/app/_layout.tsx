import React from 'react';
import { View } from 'react-native';
import '../styles/global.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  );
}