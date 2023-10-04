import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from './copmponent/Header';
import Navigation from './copmponent/Navigation';
import ChatList from './copmponent/ChatList';
export default function App() {
  return (
 <View style={styles.container}>
  <Header/>
      <Navigation/>
      <ChatList/>
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#131B28',
   
  },
});
