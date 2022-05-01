import React, { useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useAnimation } from '../../hooks/useAnimation';

const GradientBackground = ({ children, colors, prevColors }) => {
  const { opacity, fadeIn, fadeOut } = useAnimation();

  useEffect(() => {
    fadeIn(() => {
      fadeOut(0);
    });
  }, [colors]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 1 }}
      />
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 1 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;
