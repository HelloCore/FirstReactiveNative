import React, { Component, PropTypes } from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
	render() {
		return (
      		<View style={{marginTop: 65}}>
		        <Text>Current Scene: {this.props.title}</Text>

      		</View>
		)
	}
}

MyScene.propTypes = {
	title: PropTypes.string.isRequired,
	onForward: PropTypes.func.isRequired,
  	onBack: PropTypes.func.isRequired,
};
