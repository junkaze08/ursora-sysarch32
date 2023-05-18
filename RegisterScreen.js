import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    // Perform validation for missing inputs
    if (!name.trim()) {
      Alert.alert('Missing Input', 'Please enter your name.');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Missing Input', 'Please enter your email address.');
      return;
    }

    if (!contactNumber.trim()) {
      Alert.alert('Missing Input', 'Please enter your contact number.');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Missing Input', 'Please enter your password.');
      return;
    }

    // Perform validation for numeric contact number
    if (!/^\d+$/.test(contactNumber)) {
      Alert.alert('Invalid Input', 'Contact number should only contain numbers.');
      return;
    }

    // Perform registration logic here
    // You can access the entered values using the state variables (name, email, contactNumber, password)

    // Show alert when the registration is successful
    Alert.alert('Account Registered!', 'Your account has been successfully registered.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Contact Number"
        value={contactNumber}
        onChangeText={(text) => setContactNumber(text.replace(/[^0-9]/g, ''))}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegisterPress} />
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

export default RegisterScreen;