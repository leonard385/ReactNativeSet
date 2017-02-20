/**
 * Created by niwanglong on 2017/2/16.
 */
import  React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from  'react-native';

import TabNavigator from 'react-native-tab-navigator';
import HomePage from './homePage';
import ReadPage from './readPage';
import MoviePage from './moviePage';
import MusicPage from './musicPage';

import * as actions from '../Actions/actionFuns';

export default class IndexPage extends Component{
    render(){
        const {dispatch,TabBarInfo} = this.props;

        return(
            <TabNavigator>
                <TabNavigator.Item
                    selected={TabBarInfo.currentPage === 'home'}
                    renderIcon={() => <Image style={styles.tarBarImage} source={require('../Images/home.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tarBarImage} source={require('../Images/home_active.png')} />}
                    badgeText={TabBarInfo.tabBarNoticeNum.home}
                    onPress={() => dispatch(actions.changTabVc('home'))}>
                    {<HomePage dispatch = {dispatch}/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={TabBarInfo.currentPage === 'read'}
                    renderIcon={() => <Image style={styles.tarBarImage} source={require('../Images/reading.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tarBarImage} source={require('../Images/reading_active.png')} />}
                    badgeText={TabBarInfo.tabBarNoticeNum.read}
                    onPress={() => dispatch(actions.changTabVc('read'))}>
                    {<ReadPage dispatch = {dispatch}/>}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={TabBarInfo.currentPage === 'music'}
                    renderIcon={() => <Image style={styles.tarBarImage} source={require('../Images/music.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tarBarImage} source={require('../Images/music_active.png')} />}
                    badgeText={TabBarInfo.tabBarNoticeNum.music}
                    onPress={() => dispatch(actions.changTabVc('music'))}>
                    {<MusicPage dispatch = {dispatch}/>}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={TabBarInfo.currentPage === 'movie'}
                    renderIcon={() => <Image style={styles.tarBarImage} source={require('../Images/movie.png')} />}
                    renderSelectedIcon={() => <Image style={styles.tarBarImage} source={require('../Images/movie_active.png')} />}
                    badgeText={TabBarInfo.tabBarNoticeNum.movie}
                    onPress={() => dispatch(actions.changTabVc('movie'))}>
                    {<MoviePage dispatch = {dispatch}/>}
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tarBarImage:{
        width:60,
        height:30,
    }
})

