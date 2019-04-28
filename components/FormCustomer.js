import React from 'react';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, StyleSheet ,View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class FormCustomer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: '',
            phone: '',
            email: '',
            address: '',
        }   

    }   
    componentDidMount(){
        this.setState({
            name: this.props.customer.name ?this.props.customer.name :'',
            phone: this.props.customer.phone ?this.props.customer.phone :'',
            email: this.props.customer.email ?this.props.customer.email :'',
            address: this.props.customer.address ?this.props.customer.address :'',
         });
    }
  render() {
    return (
        <View>
            <View>
                <Text style={styles.titleSectionText} >
                    Personal Client Informations
                </Text>
                <View style={styles.InputSection}>
                    <Icon name="user" style={styles.Icon}/> 
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={value=> this.setState({ name: value})}
                        value= {this.state.name} 
                    /> 
                </View> 
                <View style={styles.InputSection}>
                    <Icon name="phone" style={styles.Icon}/> 
                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                        onChangeText={value=> this.setState({ phone: value})}
                        value= {this.state.phone} 
                    />
                </View> 
                <View style={styles.InputSection}>
                    <Icon name="envelope-o" style={styles.Icon}/> 
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        onChangeText={value=> this.setState({ email: value})}
                        value= {this.state.email} 
                    />
                </View> 
                <View style={styles.InputSection}>
                    <Icon name="globe" style={styles.Icon}/> 
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        onChangeText={value=> this.setState({ address: value})}
                        value= {this.state.address} 
                    />
                </View> 
            </View>
            <View>
                <Text style={styles.titleSectionText} >
                    Cars Informations
                </Text>
                <View style={styles.InputSection}>
                    <Icon name="car" style={styles.Icon}/> 
                    <TextInput
                        style={styles.input}
                        placeholder="car info"
                    />
                </View> 
                <View style={styles.InputSection}>
                    <Icon name="car" style={styles.Icon}/> 
                    <TextInput
                        style={styles.input}
                        placeholder="car info"
                    />
                </View> 
                <View style={styles.InputSection}>
                    <Icon name="car" style={styles.Icon}/> 
                    <TextInput
                        style={styles.input}
                        placeholder="car info"
                    />
                </View> 
                
            </View>
            <View>
                <Text style={styles.titleSectionText} >
                    Additional notes
                </Text>
                
                <View style={styles.InputSection}>
                    <Icon name="pencil" style={styles.Icon}/> 
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        numberOfLines ={5}
                        placeholder="write some additional notes here"
                    />
                </View> 
            </View>
            <View>    
            <TouchableOpacity
                style={styles.ValidationButton}>
             <Text style={styles.ValidationText}> Valider </Text>
            </TouchableOpacity>
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({

    ValidationButton: {
        borderColor: '#e14eca',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        resizeMode: 'contain',
        margin: 10,
        backgroundColor: '#e14eca',
      },
      ValidationText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
      },
      InputSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: 'rgba(29, 37, 59, 0.2)',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        margin: 10
      },
      Icon: {
        padding: 10,
      },

      input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    
      },
      titleSectionText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        color: '#e14eca',  
      }
});