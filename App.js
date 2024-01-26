import * as React from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Subscriber from './components/Subscriber';
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Subscriber/>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
      
       
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE9972',

  },
footerContainer: { backgroundColor: '#333333' },

});
