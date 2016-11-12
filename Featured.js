import React,  { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import BookList from './BookList'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Featured extends Component {
  render() {
    return (
      <NavigatorIOS
      translucent={false}
      style={styles.container}
      initialRoute={{
        title: 'Featured Books',
        component: BookList
      }}/>
    );
  }
}
