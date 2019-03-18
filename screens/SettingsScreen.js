import React from 'react';
import {
  Image,
  Switch,
   ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'ICM Settings',
  };
  constructor(props) {
    super(props); 
    this.state = {
      activeSwitch: null,
    }   
     this.user = {
      "_id": "5c687316f285704b130f76c0",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "firstName": "Amell ",
      "surname": "Fezaii",
      "company": "FRENEX",
      "email": "searsjohnston@frenex.com",
      "phone": "+1 (979) 501-3787",
      "address": "797 Grove Place, Bawcomville, North Dakota, 2871"
    };
}   

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} >
        	<View>
        		<Text style={styles.textTitleInfo}  >   General settings </Text>
      		</View>
          <View elevation={5}  style={styles.card}   >
            <View style={styles.containerInfo} >
            <Text style={styles.textInfo}>
                 Notifications
                 </Text>
                 <Switch   style={styles.switchInfo}
                   onValueChange={this.switchNotification}
                   value={this.state.activeSwitch !== 1}
                   />
             </View>
           </View>
           <View elevation={5}  style={styles.card}   >
           <View style={styles.containerInfo} >
            <Text style={styles.textInfo}>
                 Dark theme
                 </Text>
                 <Switch   style={styles.switchInfo}
                    onValueChange={this.switchTheme}
                    value={this.state.activeSwitch === 2}
                    />
             </View>
           </View>
           <View elevation={5}  style={styles.card}   >
           <View style={styles.containerInfo} >
            <Text style={styles.textInfo}>
                 Sounds
                 </Text>
                 <Switch   style={styles.switchInfo}
                       onValueChange={this.switchSound}
                       value={this.state.activeSwitch !== 3} 
                    />
             </View>
           </View>


           <View>
        		<Text style={styles.textTitleInfo}  >   Account settings </Text>
      		</View>

           <View elevation={5}  style={styles.card}   >
           <View style={styles.containerInfo} >
            <Text style={styles.textInfo}>
                 Back up Data
                 </Text>
                 <Switch   style={styles.switchInfo}
                    onValueChange={this.switchBackUpData}
                    value={this.state.activeSwitch === 4}
                    />
             </View>
           </View>
          
         
           <View elevation={5}  style={ styles.card }   >
             <TouchableOpacity onPress={this._signoutUserAsync}>
               <Text style={styles.textInfo}>
               <Icon name="sign-out"  style={styles.iconInfo} /> Sign Out
                 </Text>
             </TouchableOpacity>
           </View>
        </ScrollView>
      </View>
    );
  }

  _signoutUserAsync = async () => {
    this.props.navigation.navigate('Auth');
 };
 _toggleSwitchAsync = (switchName) => {
  this.setState({
    activeSwitch: switchName === this.state.activeSwitch ? null : switchName
  })
};

switchNotification  = (value) => { this._toggleSwitchAsync(1) };
switchTheme  = (value) => { this._toggleSwitchAsync(2) };
switchSound  = (value) => { this._toggleSwitchAsync(3) };
switchBackUpData  = (value) => { this._toggleSwitchAsync(4) };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
 
  iconInfo: {
    margin: 5,
    fontSize: 20,
  },
 
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    resizeMode: 'contain',
 
    marginBottom: 5,
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0

  },
  textTitleInfo: {
    fontWeight: '900',
    textTransform: 'lowercase',
    fontSize: 19,
    padding : 10,
    color: '#e14eca',
  },
  containerInfo:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textInfo:{
    flex: 1,
    padding : 15,
  },
  switchInfo:{
    flex: 1,
  }

});
