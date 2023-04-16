import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import emailjs from 'emailjs-com';

const ContactScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      message: message,
    };

    emailjs
      .send('CairosKitchen', 'template_gd6cm2e', templateParams, 'Cairos Kitchen')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          // Show success message or perform further actions
        },
        (error) => {
          console.log('FAILED...', error);
          // Show error message or perform further actions
        }
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMessage}
        value={message}
        placeholder="Message"
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#D23A28',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContactScreen;
