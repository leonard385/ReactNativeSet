/**
 * Created by niwanglong on 2017/2/16.
 */
import React,{Component} from 'react';
import {Provider} from 'react-redux';

import store from './Store/config-Store';
import IndexContainer from './Containers/indexContainer';

export default class Root extends Component{
    render(){
        return(
            <Provider store={ store }>
             <IndexContainer />
            </Provider>
        )
    }
}