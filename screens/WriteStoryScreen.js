import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config.js';
import { ToastAndroid } from 'react-native';
 
export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory=()=>{
        db.collection('stories').add({
            author: this.state.author,
            storyText: this.state.storyText,
            title: this.state.title
        });
        this.setState({
            author: '',
            storyText: '',
            title: ''
        });
        ToastAndroid.show('STORY SUBMITTED', ToastAndroid.SHORT)
    }

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'pink'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 30}
                    }}
                />

                <KeyboardAvoidingView>
                    <TextInput 
                        placeholder="Story Title"
                        onChangeText= {(text)=>{
                            this.setState({
                                title: text
                            })
                        }}
                        value={this.state.title}
                        style={styles.title}
                        placeholderTextColor='black'/>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView>
                    <TextInput
                        placeholder="Author"
                        onChangeText= {(text)=>{
                            this.setState({
                                author: text
                            })
                        }}
                        placeholderTextColor='black'
                        value={this.state.author}
                        style={styles.author} />
                </KeyboardAvoidingView>

                <KeyboardAvoidingView>
                    <TextInput 
                        placeholder="Write your story"
                        onChangeText= {(text)=>{
                            this.setState({
                                storyText: text
                            })
                        }}
                        placeholderTextColor='black'
                        value={this.state.storyText}
                        style={styles.storyText}
                        multiline={true}/>
                </KeyboardAvoidingView>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,

  },
  author: {
      height: 40,
      borderWidth: 2,
      margin: 10,
       padding: 6,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10, 
      padding: 6,
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40,
      color:'black',
  },
  SubmitButtonText:{
      padding: 10,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
  }
});