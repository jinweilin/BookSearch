import React,  { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import SearchBooks from './SearchBooks';
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookAuthor: '',
      bookTitle: '',
      isLoading: false,
      errorMessage: ''
    };
  }

  render() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Search Books',
        component: SearchBooks
      }}/>
    );
  }
}
