import * as React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Subscriber() {
  return (
    <>
    <View style= {styles.container}>
    <View style={styles.imageContainer1}>
    < Image source={require('../assets/man.jpeg')} />
    <Text style={styles.headerText}> John Crawford </Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.normalText}>john123@gmail.com</Text>
    </View>
    <View style={styles.messageContainer}>
      <Text style={styles.normalText}>Transaction done on</Text>
       <Text style={styles.headerText}> 12th January 2018.</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.normalText}>your reference number is 03492390</Text>
    </View>
    <View style={styles.button}>
    <Button
        title="Continue"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
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
  imageContainer1: {
    backgroundColor: '#EE9972',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  infoContainer: {
    backgroundColor: '#EE9972',
    alignItems:'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }, 
  messageContainer: {
    paddingTop: 20,
    backgroundColor: '#EE9972',
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  headerText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  normalText: {
    paddingLeft: 40,
    fontSize: 10,
    color: 'black',
  },
  amountText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
   button: {
   position: 'absolute',
    bottom:50,
    left:150,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

