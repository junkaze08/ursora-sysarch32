import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/honkaisplash4.png')} style={styles.logo} />
      <Text>Welcome to my App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default HomeScreen;
