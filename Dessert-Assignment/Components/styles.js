import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight:"bold",
    marginBottom: 5,
    margin: 30,
    textAlign: "center",
  },
});

export const dessertsListStyles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
});
