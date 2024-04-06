import React, { ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

interface DismissKeyboardHocProps {
  children: ReactNode;
}

const DismissKeyboardHoc: React.FC<DismissKeyboardHocProps> = ({ children }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} accessible = {false} >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardHoc;
