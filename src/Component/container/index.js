import React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';

export const Container = ({
  children,
  style,
  loading = false,
  withKeyboard = true,
}) => {
  const renderContainer = React.useCallback(
    () => (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          ...style,
        }}>
        <Modal animationType={'fade'} transparent={true} visible={loading}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#000000aa',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
          </View>
        </Modal>
        {children}
      </View>
    ),
    [children],
  );

  return withKeyboard ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {renderContainer()}
    </TouchableWithoutFeedback>
  ) : (
    renderContainer()
  );
};