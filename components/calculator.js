import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './CalculatorStyles';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => setInput((prev) => prev + value);

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEquals = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult('Error');
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.specialButton} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.specialButton} onPress={handleBackspace}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => handlePress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>

        {[[7, 8, 9, '-'], [4, 5, 6, '+'], [1, 2, 3, '=']].map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map((item) => (
              <TouchableOpacity
                key={item}
                style={item === '=' ? styles.equalsButton : styles.button}
                onPress={() => (item === '=' ? handleEquals() : handlePress(item.toString()))}
              >
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <View style={styles.row_dot}>
          <TouchableOpacity style={styles.button_dot} onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_dot} onPress={() => handlePress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Calculator;
