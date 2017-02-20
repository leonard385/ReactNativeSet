/**
 * Created by niwanglong on 2017/2/16.
 */
import * as types from '../Actions/actionTypes';

// 声明组件需要的字段
const initialState = {
    currentPage:'home',
    tabBarNoticeNum:{
        home:0,
        read:0,
        music:0,
        movie:0,
    }
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

        {/*下面调整badgetext基于上面进行扩展可以先不看*/}
        case types.k_TabBar_Notice_Increse:{
            var pageName = action.pageName;
            switch (pageName){
                case 'home':{
                    return Object.assign({},state,{
                        tabBarNoticeNum:{
                            home:state.tabBarNoticeNum.home + 1,
                        }
                    })
                }
                case 'read':{
                    return Object.assign({},state,{
                        tabBarNoticeNum:{
                            read:state.tabBarNoticeNum.read + 1,
                        }
                    })
                }
                case 'music':{
                    return Object.assign({},state,{
                        tabBarNoticeNum:{
                            music:state.tabBarNoticeNum.music + 1,
                        }
                    })
                }
                case 'movie':{
                    return Object.assign({},state,{
                        tabBarNoticeNum:{
                            movie:state.tabBarNoticeNum.movie + 1,
                        }
                    })
                }
            }
        }
        case types.k_TabBar_Notice_Decrease:{
            var pageName = action.pageName;
            switch (pageName){
                case 'home':{
                    return Object.assign({},state,{
                        tabBarNoticeNum:{
                            home:state.tabBarNoticeNum.home - 1,
                        }
                    })
                }
                case 'read':{
                    return Object.assign({},state,{
                        tabBarNoticeNum:{
                            read:state.tabBarNoticeNum.read - 1,
                        }
                    })
                }
                case 'music':{
                    return Object.assign({},state,{
                        tabBarNoticeNum:{
                            music:state.tabBarNoticeNum.music - 1,
                        }
                    })
                }
                case 'movie':{
                    return Object.assign({},state,{
                        tabBarNoticeNum:{
                            movie:state.tabBarNoticeNum.movie - 1,
                        }
                    })
                }
            }
        }

        default:{
            return state;
        }
    }
}
