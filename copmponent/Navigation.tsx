import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function Navigation() {
  return (
    <View style={styles.nav}>
      <View style={styles.item}>
        <Feather name="camera" color={"#909AA3"} size={24} />
      </View>
      <View style={styles.itemActive}>
        <Text style={styles.navTextActive}>CHATS</Text>
        <Text style={styles.bubble}>3</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>STATUS</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>CALLS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#222A37",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  navText: {
    color: "#909AA3",
  },
  navTextActive: {
    color: "#0AB09E",
    fontWeight: "800",
  },
  itemActive: {
    borderBottomWidth: 2,
    borderColor: "#0AB09E",
    marginBottom: -3,
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  bubble: {
    backgroundColor: "#0AB09E",
    borderRadius: 10000,
    width: 20,
    height: 20,
    textAlign: "center",
  },
  itemText: {
    color: "#909AA3",
    fontWeight: "800",
  },
});
