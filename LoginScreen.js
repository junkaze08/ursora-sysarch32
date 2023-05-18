import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleLoginPress = () => {
    // Perform validation for missing inputs
    if (!email.trim()) {
      Alert.alert('Missing Input', 'Please enter your email address.');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Missing Input', 'Please enter your password.');
      return;
    }

    // Perform login logic here
    // You can access the entered values using the state variables (email, password)

    // Show alert when the login is successful
    Alert.alert('Login Successful!', 'Welcome back to the app.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;