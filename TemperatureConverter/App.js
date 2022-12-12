
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const handleCelsiusToFahrenheit = () => {
    const convertedTemp = (temperature * 9) / 5 + 32;
    setConvertedTemperature(convertedTemp);
  };

  const handleFahrenheitToCelsius = () => {
    const convertedTemp = ((temperature - 32) * 5) / 9;
    setConvertedTemperature(convertedTemp);
  };

  return (
    <View>
      <Text>Enter temperature:</Text>
      <TextInput
        value={temperature}
        onChangeText={(text) => setTemperature(text)}
        keyboardType="numeric"
      />

      <Button title="Celsius to Fahrenheit" onPress={handleCelsiusToFahrenheit} />
      <Button title="Fahrenheit to Celsius" onPress={handleFahrenheitToCelsius} />

      <Text>Converted temperature: {convertedTemperature}</Text>
    </View>
  );
};

export default TemperatureConverter;