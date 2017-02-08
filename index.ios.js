/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  Button,
  StyleSheet,
  Navigator,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import MyScene from './MyScene';

const onButtonPress = () => {
	Alert.alert('Hello World!');
};

export default class FirstReactiveNative extends Component {

  	render() {
    	return (
			<Navigator
		        initialRoute={{ title: 'My Initial Scene', index: 0 }}
				configureScene={(route, routeStack) =>
    								Navigator.SceneConfigs.FloatFromRight
								}
		        renderScene={(route, navigator) =>
		          <MyScene
		            title={route.title}

		            // Function to call when a new scene should be displayed
		            onForward={() => {
		              const nextIndex = route.index + 1;
		              navigator.push({
		                title: 'Scene ' + nextIndex,
		                index: nextIndex,
		              });
		            }}

		            // Function to call to go back to the previous scene
		            onBack={() => {
		              if (route.index > 0) {
		                navigator.pop();
		              }
		            }}
		          />
		        }
        		style={{flex: 1}}
				navigationBar={
		     		<Navigator.NavigationBar
						style={ styles.nav }
				       	routeMapper={{
				         	LeftButton: (route, navigator, index, navState) =>
					          	{
									if(route.index > 0) {
										return (
											<TouchableHighlight
												underlayColor='transparent'
												onPress={() => {
													if(route.index > 0){
														navigator.pop()
													}
												}}
												style={ styles.leftNavBarText }
											><Text style={ styles.buttonText }>Back</Text>
											</TouchableHighlight>
										);
									}else{
										return null
									}
								},
				         	RightButton: (route, navigator, index, navState) =>
		           				{ return (
									<TouchableHighlight
										underlayColor='transparent'
										onPress={() => {
											navigator.push({ title:  'Page ' + route.index , index: route.index+1 });
										}}
										style={ styles.rightNavBarText }
									><Text style={ styles.buttonText }>Next</Text>
									</TouchableHighlight>);
								},
		         			Title: (route, navigator, index, navState) =>
		           				{ return (<Text style={ styles.title }>{route.title}</Text>); },
		       			}}
		     		/>
  				}
      		/>
    	);
  	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
	  fontSize: 18,
	  color: '#007AFF',
  },
  leftNavBarText: {
	  marginTop : 5,
	  marginLeft: 13
  },
  rightNavBarText: {
	  marginTop : 5,
	  marginRight: 13,
  },
  nav: {
	  height: 60,
	  marginBottom: 10,
      backgroundColor: '#efefef',
	  borderBottomColor: '#DDD',
	  borderBottomWidth: 0.5
  },
  title: {
	marginTop: 6,
	fontSize: 18
  }
});

AppRegistry.registerComponent('FirstReactiveNative', () => FirstReactiveNative);
