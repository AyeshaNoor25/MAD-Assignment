import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#2F4F4F',
    flex: 1,
    borderRadius: 30,
    width:'90%',
    maxHeight:'70%',
  },
  
  title: {
    fontSize: 26,
    fontWeight: "bold",
    margin: 25,
    textAlign: 'center',
    color: '#F5FFFA',
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F5FFFA',
  },

  itemName: {
    fontSize: 18,
    color: '#F5FFFA',
    flex: 2,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
    color: '#F5FFFA',
  },

  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color: '#F5FFFA',
  },

  Qbutton: {
    backgroundColor: '#BC8F8F',
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#BC8F8F',
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
