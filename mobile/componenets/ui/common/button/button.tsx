import React from 'react';
import {
  View,
  Text,
  Button as NativeButton,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { PrimaryStyle, TertiaryStyle } from './button.style';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'tertiary';
}

export default function Button({ children, variant = 'primary' }: ButtonProps) {
  const styles = variant == 'primary' ? PrimaryStyle : TertiaryStyle;

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button__text}>{children}</Text>
    </TouchableOpacity>
  );
}
