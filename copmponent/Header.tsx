import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function Header() {
  return (
    <View style={styles.nav}>
      <Text style={styles.titleText}>WhatsApp</Text>
      <View style={styles.icon}>
        <Feather name="camera" size={24} color="#909AA3" />
        <Feather name="search" size={24} color="#909AA3" />
        <Feather name="menu" size={24} color="#909AA3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    padding: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#222A37",
    alignItems: "center",
  },
  icon: {
    gap: 20,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#909AA3",
    fontWeight: "800",
    fontSize: 20,
  },
});
