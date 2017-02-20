/**
 * Created by niwanglong on 2017/2/16.
 */
import  React,{Component} from 'react';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import * as actions from '../Actions/actionFuns';

export default class HomePage extends Component{
    render(){
        const {dispatch} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>我是主页</Text>
                <RoundButton
                    style={styles.button}
                    onPress={()=>{dispatch(actions.tabBarNoticeIncrease('home'))}}
                    text="badgeText + 1"
                >
                </RoundButton>

                <RoundButton
                    style={styles.button}
                    onPress={()=>{dispatch(actions.tabBarNoticeDecrease('home'))}}
                    text="badgeText - 1"
                >
                </RoundButton>
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
    },
    button:{
        width:120,
        height:35,
        marginTop:5,
        marginBottom:5,
        borderRadius:5,
    }
})