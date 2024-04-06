import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

interface AppTextProps extends TextProps {
  fontWeight?: 'regular' | 'bold' | 'medium'; 
}

const AppText: React.FC<AppTextProps> = ({ children, fontWeight = 'regular', style, ...rest }) => {
  const fontFamily = `outfit-${fontWeight}`;

  // Merge selected font family with additional styles passed as prop
  const mergedStyle = [{ fontFamily }, style ];

  
  return (
    <Text style={mergedStyle} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;
