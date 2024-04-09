import React, { FC } from 'react';
import { View, Image, StyleSheet, ImageSourcePropType, DimensionValue } from 'react-native';
import Colors from '../utils/Colors';

interface AvatarProps {
    source : ImageSourcePropType,
    size : DimensionValue,
}

const CircleAvatar: FC<AvatarProps> = ({ source, size }) => {
  return (
    <View style={[styles.avatarContainer, { width: size, height: size }]}>
      <Image source={source} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 50, 
    overflow: 'hidden', 
    justifyContent: "center",
    alignItems: "center",
   
    backgroundColor: Colors.iconBackground
  },
  avatar: {
    width: '45%',
    height: '45%',
  },
});

export default CircleAvatar;
