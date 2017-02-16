/**
 * Created by niwanglong on 2017/2/16.
 */

import React,{Component} from 'react';
import { connect } from 'react-redux';
import IndexPage from '../Pages/index';

class IndexContainer extends Component{
    render(){
        return(
            <IndexPage {...this.props}/>
        )
    }
}

//分拣 state树中需要的字段
//dispatch和子状态树counter将以props的形式传入
let mapStateToProps = (state) =>{
    const { TabBarInfo } = state;
    return { TabBarInfo };
}

export default connect(mapStateToProps)(IndexContainer);