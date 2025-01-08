import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  displayContainer: {
    width: '90%',
    padding: 10,
    alignItems: 'flex-end',
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 18,
  },
  inputText: {
    fontSize: 30,
    color: '#333',
  },
  resultText: {
    fontSize: 40,
    color: '#000',
  },
  buttonsContainer: {
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  row_dot: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  button_dot: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    margin: 5,
  },
  button: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  operatorButton: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4d4d4',
    borderRadius: 20,
  },
  specialButton: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
    borderRadius: 20,
  },
  equalsButton: {
    width: '22%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BC8F8F',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 28,
    color: '#000',
  },
});

export default styles;
