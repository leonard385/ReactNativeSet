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