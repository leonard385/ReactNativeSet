/**
 * Created by niwanglong on 2017/2/16.
 */
import  * as types from './actionTypes';

export function changTabVc(pageName) {
    return{
        type:types.k_Change_TabController,
        pageName
    }
}

export function tabBarNoticeIncrease(pageName) {
    return{
        type:types.k_TabBar_Notice_Increse,
        pageName
    }
}


export function tabBarNoticeDecrease(pageName) {
    return{
        type:types.k_TabBar_Notice_Decrease,
        pageName
    }
}