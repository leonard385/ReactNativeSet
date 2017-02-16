/**
 * Created by niwanglong on 2017/2/16.
 */
import  React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class MoviePage extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>我是电影界面</Text>
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
        backgroundColor:'#00dddd',
    },
    welcomeText:{
        textAlign:'center',
        fontSize:20,
        color:'#333333',
    }
})