'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS
} from 'react-native';
import Featured from './Featured';
import Search from './Search';
// var React = require('react-native');
// var Featured = require('./featured');
// var Search = require('./search');
// var {
//     AppRegistry,
//     TabBarIOS,
//     Component
//    } = React;

export default class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'featured'
        };
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="Featured"
                    selected={this.state.selectedTab === 'featured'}
                    systemIcon='featured'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Search"
                    selected={this.state.selectedTab === 'search'}
                    systemIcon='search'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);
