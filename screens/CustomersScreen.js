import React from 'react';
import { ScrollView, StyleSheet ,View, Text, TextInput, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
export default class CustomersScreen extends React.Component {
  static navigationOptions = {
    title: 'Customers',
  };
  constructor(props) {
    super(props);        
    this.dataList = [
      {
        "_id": "5c687316f285704b130f76c0",
        "picture": "http://placehold.it/32x32",
        "age": 22,
        "firstName": "Sears ",
        "surname": "Johnston",
        "company": "FRENEX",
        "email": "searsjohnston@frenex.com",
        "phone": "+1 (979) 501-3787",
        "address": "797 Grove Place, Bawcomville, North Dakota, 2871",
        "tags": [
          "laborum",
          "quis",
          "do"
        ],
        "cars": [
          {
            "id": 0,
            "name": "Rachael Justice"
          },
          {
            "id": 1,
            "name": "Tessa Rhodes"
          },
          {
            "id": 2,
            "name": "Bryant Caldwell"
          }
        ]
      },
      {
        "_id": "5c687316adaee0dfecf126ec",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "firstName": "Santana ",
        "surname": "Preston",
        "company": "TALAE",
        "email": "santanapreston@talae.com",
        "phone": "+1 (982) 522-2317",
        "address": "575 Chapel Street, Mulberry, Tennessee, 6346",
        "tags": [
          "pariatur",
          "cupidatat",
          "elit"
        ],
        "cars": [
          {
            "id": 0,
            "name": "Virginia Mcguire"
          },
          {
            "id": 1,
            "name": "Fanny Paul"
          },
          {
            "id": 2,
            "name": "Charlotte Lynch"
          }
        ]
      },
      {
        "_id": "5c687316fff517dc18876c40",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "firstName": "Calhoun ",
        "surname": "Gates",
        "company": "AUTOMON",
        "email": "calhoungates@automon.com",
        "phone": "+1 (877) 448-3436",
        "address": "625 Eastern Parkway, Siglerville, Illinois, 3282",
        "tags": [
          "irure",
          "reprehenderit",
          "ea"
        ],
        "cars": [
          {
            "id": 0,
            "name": "Irma Huber"
          },
          {
            "id": 1,
            "name": "Constance Copeland"
          },
          {
            "id": 2,
            "name": "Anderson Greene"
          }
        ]
      },
      {
        "_id": "5c687316c112e2e2051020fd",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "firstName": "Gould ",
        "surname": "Bass",
        "company": "ISODRIVE",
        "email": "gouldbass@isodrive.com",
        "phone": "+1 (917) 414-2176",
        "address": "914 Cambridge Place, Osmond, Marshall Islands, 8135",
        "tags": [
          "incididunt",
          "sunt",
          "deserunt"
        ],
        "cars": [
          {
            "id": 0,
            "name": "Davidson Hawkins"
          },
          {
            "id": 1,
            "name": "Dominique Sheppard"
          },
          {
            "id": 2,
            "name": "Kelley Rutledge"
          }
        ]
      },
      {
        "_id": "5c68731611158cd0a91d1dd1",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "firstName": "Regina ",
        "surname": "Mccall",
        "company": "HAWKSTER",
        "email": "reginamccall@hawkster.com",
        "phone": "+1 (913) 502-2021",
        "address": "513 Madeline Court, Kansas, Rhode Island, 394",
        "tags": [
          "do",
          "mollit",
          "veniam"
        ],
        "cars": [
          {
            "id": 0,
            "name": "Edith Reese"
          },
          {
            "id": 1,
            "name": "Mills Mann"
          },
          {
            "id": 2,
            "name": "Gates Sawyer"
          }
        ]
      }
    ];
}   
    
  render() {
    return (
      <View style={styles.container}>
        <ActionButton style={styles.actionButton}  buttonColor="#ea4c89"  onPress={this._addUserAsync}>
        </ActionButton>
        <ScrollView style={styles.container}>
        <View style={styles.searchInputSection}>
          <Icon name="search" style={styles.searchIcon}/> 
           <TextInput
            style={styles.input}
            placeholder="Search for a user"
           />
        </View>
         {this.dataList.map(r => 
           <View elevation={5}  style={styles.card} key={r._id} >
             <View>
               <Text style={styles.textHeaderInfo}  >
                 {r.firstName.toUpperCase()} {r.surname.toUpperCase()}
               </Text>
               <Text style={styles.textInfo}>
                 <Icon name="phone" style={styles.iconInfo} />  {r.phone} 
                </Text>
               <Text style={styles.textInfo}>
               <Icon name="globe"  style={styles.iconInfo}/> {r.address}
                 </Text>
             </View>
           </View>)}
        </ScrollView>
      </View>
    );
  };
  _addUserAsync = async () => {
    this.props.navigation.navigate('NewCustomer');
 };
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     paddingTop: 5,
    // backgroundColor: '#f5f6fa',
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    resizeMode: 'contain',
    height: 150,
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
  textInfo: {
    fontWeight: '300',
    padding: 5,
  },
  textHeaderInfo: {
    fontWeight: '300',
    padding: 5,
    color: '#e14eca',
  },
  iconInfo: {
    margin: 5,
    fontSize: 15,
  },
  searchInputSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(29, 37, 59, 0.2)',
    borderWidth: 1,
    borderRadius: 15,
     marginBottom: 10,
    marginRight: 20,  
    marginLeft: 20,

  },
  searchIcon: {
    padding: 10,
    color: '#e14eca',
  },
  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
     color: '#424242',

  },
  actionButton: {
     zIndex: 22,
   },
});
