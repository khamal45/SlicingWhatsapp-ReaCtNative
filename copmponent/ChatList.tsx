import { Image, StyleSheet, Text, View } from "react-native";

export default function ChatList() {
  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <Image
          style={styles.profileImage}
          source={require("../assets/profile-img.jpg")}
        />
        <View style={styles.columnContainer}>
          <Text style={styles.nameText}>Martin Garrix</Text>
          <Text style={styles.chatText}>Hallo Bro </Text>
        </View>
      </View>
      <View style={styles.columnContainer}>
        <Text style={styles.time}>08:30 AM</Text>
        <Text style={styles.bubble}>1</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 10000,
  },
  chatContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  nameText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },
  chatText: {
    color: "#909AA3",
    fontSize: 14,
  },
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  columnContainer: {
    paddingHorizontal: 10,
    flexDirection: "column",
    gap: 10,
  },
  bubble: {
    backgroundColor: "#0AB09E",
    borderRadius: 10000,
    width: 20,
    height: 20,
    textAlign: "center",
    alignSelf: "flex-end",
  },
  time: {
    color: "#0AB09E",
  },
});
