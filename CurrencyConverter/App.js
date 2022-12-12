
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const CurrencyConverter = () => {
  const [rates, setRates] = useState(0);
  const [result, setResult] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState('NZD');
  const [amount, setAmount] = useState(0);

  const [itemNZDA, setItemNZDA] = useState(0.944);
  const [itemNZDU, setItemNZDU] = useState(0.640);
  const [itemAUDU, setItemAUDU] = useState(0.680);
  const [itemAUDN, setItemAUDN] = useState(1.06);
  const [itemUSDN, setItemUSDN] = useState(1.56);

  useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest?base=NZD')
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = data.rates && data.rates.AUD;
        setRates(exchangeRate);
      });
  }, []);

  const convert = () => {
    const exchangeRate = rates;
    const convertedAmount = amount * exchangeRate;
    setResult(convertedAmount);
  };

  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View style={StyleSheet.mainContainer}>
          <Text style={styles.textInput}>1 NZD = {rates} AUD</Text>
          <TextInput
            style={styles.mainContainer}
            placeholder="Enter amount to convert"
            keyboardType="numeric"
            onChangeText={(amount) => convert(amount)}
            onSubmitEditing={() => convert(amount)}
          />
              <Text>To: {result}</Text>
            </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    height: 400,
    backgroundColor: '#fff'
  },
  second:{
    padding: 20,
    height: 400,
    flexDirection: 'column',
    flex: '1',
  },
  textInput: {
    backgroundColor: 'lightgrey'
  }
})

export default CurrencyConverter;