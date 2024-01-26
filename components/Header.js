import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <>
    <View style= {styles.container}>
    <View style={styles.imageContainer}>
    < Image source={require('../assets/sendMoney.jpeg')} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.normalText}>Send successfully to</Text>
      <Text style={styles.headerText}> Lela Crawford </Text>
    </View>
    <View style={styles.amountContainer}>
      <Text style={styles.amountText}> $100.00</Text>
    </View>
</View>
    </>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#EE9972',
  },
  imageContainer: {
    paddingTop: 120,
    backgroundColor: '#EE9972',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  textContainer: {
    backgroundColor: '#EE9972',
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  amountContainer: {
    backgroundColor: '#EE9972',
    alignItems:'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }, 
  headerText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  normalText: {
    padding: 3,
    fontSize: 10,
    color: 'black',
  },
  amountText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});