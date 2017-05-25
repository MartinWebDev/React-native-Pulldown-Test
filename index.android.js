import React, { Component } from 'react';

import {
    AppRegistry
} from 'react-native';

import { App } from './build/App';

// TEMP - Ignore warning about deprecated type. 
// This issue will be fixed in react-navigation beta10 when that gets released
console.ignoredYellowBox = ['Warning: View.propTypes', 'Warning: BackAndroid', 'Remote debugger'];

const AppBootstrap = () => <App />;

AppRegistry.registerComponent('PullDownRefreshList', () => AppBootstrap);
