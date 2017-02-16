/**
 * Created by niwanglong on 2017/2/16.
 */
import * as types from '../Actions/actionTypes';

// 声明组件需要的字段
const initialState = {
    currentPage:'home',
}

// 在该函数返回对state的处理结果,注意不能修改原state,一般通过Object.assign来返回一个新的副本
// initialState为初始state,action参数为匹配到的action,必定有type属性,可以携带其他要素,这里使用的是pageName
// 无匹配情况为default,一定要返回state
export default  function ChangePage (state = initialState,action){
    switch (action.type) {
        case types.k_Change_TabController:{
            return Object.assign({},state,{
                currentPage:action.pageName
            });
        }
        default:{
            return state;
        }
    }
}
