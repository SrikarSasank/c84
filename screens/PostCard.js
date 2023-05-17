import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
              <View style={styles.authorImageContainer}>
                <Image
                
                  style={styles.profileImage}></Image>
              </View>
              <View style={styles.authorNameContainer}>
                <Text style={styles.authorNameText}>
                 {this.props.posts.author}
                </Text>
              </View>
            </View>
            <Image
              source={require('../assets/post.jpeg')}
              style={styles.postImage}
            />
            <View style={styles.captionContainer}>
              <Text style={styles.captionText}>{this.props.posts.caption}</Text>
              </View>
              <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a54333b',
  },
  cardContainer: {
    margin: RFValue(13),

    borderRadius: RFValue(20),
  },
  postImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },

  captionText: {
    fontSize: RFValue(25),

    color: 'white',
  },
  authorNameText: {
    fontSize: RFValue(18),

    color: 'white',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',

    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
