import React, { Component } from 'react'
import { StyleSheet, View, Vibration, Button } from 'react-native';
export default class RequestFocusAndKeyboardAvoidingViewPage extends Component {
    static navigationOptions = {
        title: 'Request Focus And Keyboard Avoiding View',
        headerStyle: {
            backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View></View>
        )
    }
}

// import React, {Component} from 'react';

// import {
//     StyleSheet,
//     TextInput,
//     View,
//     Button,
//     Text,
//     KeyboardAvoidingView,
//     Keyboard,
//     TouchableOpacity,
//     ScrollView,
// } from 'react-native';
// import {Icon} from 'react-native-elements';

// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         UserName: '',
//         UserEmail: '',
//         UserAge: '',
//         UserAddress: '',
//         };
//     }

//     render() {
//         return (
//         <View
//             style={{
//             flex: 1,
//             backgroundColor: '#FFFFFF',
//             justifyContent: 'center',
//             }}
//         >
//             <ScrollView keyboardShouldPersistTaps="handled">
//             <View style={{marginTop: 100}}>
//                 <KeyboardAvoidingView enabled>
//                 <View style={styles.SectionStyle}>
//                     <Icon
//                     name="user"
//                     type="font-awesome"
//                     size={15}
//                     iconStyle={{padding: 10}}
//                     color="#413E4F"
//                     />

//                     <TextInput
//                     style={{flex: 1, color: '#413E4F'}}
//                     onChangeText={UserName => this.setState({UserName})}
//                     underlineColorAndroid="#413E4F"
//                     placeholder="Enter  Name"
//                     placeholderTextColor="#413E4F"
//                     autoCapitalize="sentences"
//                     ref={ref => {
//                         this._nameinput = ref;
//                     }}
//                     returnKeyType="next"
//                     onSubmitEditing={() =>
//                         this._emailinput && this._emailinput.focus()
//                     }
//                     blurOnSubmit={false}
//                     />
//                 </View>
//                 <View style={styles.SectionStyle}>
//                     <Icon
//                     name="envelope"
//                     type="font-awesome"
//                     size={15}
//                     iconStyle={{padding: 10}}
//                     color="#413E4F"
//                     />

//                     <TextInput
//                     style={{flex: 1, color: '#413E4F'}}
//                     onChangeText={UserEmail => this.setState({UserEmail})}
//                     underlineColorAndroid="#413E4F"
//                     placeholder="Enter  Email"
//                     placeholderTextColor="#413E4F"
//                     autoCapitalize="sentences"
//                     keyboardType="email-address"
//                     ref={ref => {
//                         this._emailinput = ref;
//                     }}
//                     returnKeyType="next"
//                     onSubmitEditing={() =>
//                         this._ageinput && this._ageinput.focus()
//                     }
//                     blurOnSubmit={false}
//                     />
//                 </View>
//                 <View style={styles.SectionStyle}>
//                     <Icon
//                     name="birthday-cake"
//                     type="font-awesome"
//                     size={15}
//                     iconStyle={{padding: 10}}
//                     color="#413E4F"
//                     />

//                     <TextInput
//                     style={{flex: 1, color: '#413E4F'}}
//                     onChangeText={UserAge => this.setState({UserAge})}
//                     underlineColorAndroid="#413E4F"
//                     placeholder="Enter  Age"
//                     placeholderTextColor="#413E4F"
//                     autoCapitalize="sentences"
//                     keyboardType="numeric"
//                     ref={ref => {
//                         this._ageinput = ref;
//                     }}
//                     onSubmitEditing={() =>
//                         this._addressinput && this._addressinput.focus()
//                     }
//                     blurOnSubmit={false}
//                     />
//                 </View>

//                 <View style={styles.SectionStyle}>
//                     <Icon
//                     name="place"
//                     type="material-icons"
//                     size={15}
//                     iconStyle={{padding: 10}}
//                     color="#413E4F"
//                     />

//                     <TextInput
//                     style={{flex: 1, color: '#413E4F'}}
//                     onChangeText={UserAddress => this.setState({UserAddress})}
//                     underlineColorAndroid="#413E4F"
//                     placeholder="Enter  Address"
//                     placeholderTextColor="#413E4F"
//                     autoCapitalize="sentences"
//                     ref={ref => {
//                         this._addressinput = ref;
//                     }}
//                     returnKeyType="next"
//                     onSubmitEditing={Keyboard.dismiss}
//                     blurOnSubmit={false}
//                     />
//                 </View>
//                 <TouchableOpacity
//                     style={styles.ButtonStyle}
//                     activeOpacity={0.5}
//                     onPress={this.UserRegisterFunction}
//                 >
//                     <Text
//                     style={{
//                         color: '#FFFFFF',
//                         paddingVertical: 10,
//                         fontSize: 16,
//                     }}
//                     >
//                     REGISTER
//                     </Text>
//                 </TouchableOpacity>
//                 </KeyboardAvoidingView>
//             </View>
//             </ScrollView>
//         </View>
//         );
//     }
//     }
//     const styles = StyleSheet.create({
//     SectionStyle: {
//         flexDirection: 'row',
//         height: 40,
//         marginTop: 20,
//         marginLeft: 35,
//         marginRight: 35,
//         margin: 10,
//     },

//     ButtonStyle: {
//         backgroundColor: '#51D8C7',
//         borderWidth: 0,
//         color: '#FFFFFF',
//         borderColor: '#51D8C7',
//         height: 40,
//         alignItems: 'center',
//         borderRadius: 5,
//         marginLeft: 35,
//         marginRight: 35,
//         marginTop: 30,
//     },
// });
