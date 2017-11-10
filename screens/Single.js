import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';
import Button from 'react-native-button';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <StatusBar backgroundColor="blue" barStyle="light-content" hidden={true} />
        <Image
          source={require('../assets/icon.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0F1F2B',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'flex-start',
    height: 65,
  },
  buttoner: {
    flex: 1,
    backgroundColor: '#fefefe',
    color: '#0F1F2B',
    margin: 8,
    padding: 12,
    fontSize: 18,
    borderRadius: 8
  }
});