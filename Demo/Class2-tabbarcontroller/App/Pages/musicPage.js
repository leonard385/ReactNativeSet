/**
 * Created by niwanglong on 2017/2/16.
 */
import  React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class MusicPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>我是音乐界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:20,
        backgroundColor:'#f3f3f3',
    },
    welcomeText:{
        textAlign:'center',
        fontSize:20,
        color:'#333333',
    }
})