import React from 'react';
import { View } from 'react-native';
import { styles } from './layout.style';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <View style={styles.layout}>
      <View style={styles.layout__body}>{children}</View>
    </View>
  );
}
