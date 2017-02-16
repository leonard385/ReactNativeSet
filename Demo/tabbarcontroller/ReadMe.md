##模仿 ONE TabbarController
redux 学完之后我们试着来一个简单的tabbarcontroller项目。
我们先看下整个界面大概的功能。

![](/Users/niwanglong/Desktop/WorkSelf 倪望龙/React-native/ReactNativeSet/Demo/tabbarcontroller/ReadMeResourse/1.png)

tabbarController 我没有用官方的 tarbarIOS 控件，因为tarbarIOS只适用于IOS，我选择了
[react-native-tab-navigator](https://github.com/exponent/react-native-tab-navigator)
这个控件IOS Android通用。官方给出的demo写法：
![](/Users/niwanglong/Desktop/WorkSelf 倪望龙/React-native/ReactNativeSet/Demo/tabbarcontroller/ReadMeResourse/2.png)

由TabNavigator给出的代码看我们需要的state字段信息很简单：
     一个字符型的selectTab即可，这里我暂且命名整个主页需要的信息对象名字为TabBarInfo，显示哪个界面为TabBarInfo 对象 中的字符值 currentPage决定。以此一个简单的state结构就有了像下面这样子：
     
 ~~~
   //state 
   {
     TabBarInfo:{
        currentPage:'xxxx'
     }
   }
   
 ~~~
 
 如果考虑tarBarItem 的徽标现实数值的话，state就成了下面这个样子：
 
 ~~~
     //state
     {
       TabBarInfo:{
        currentPage:'xxxx',
        bageInfo:{
          homeNum:xx,
          readNum:xx,
          musicNum:xx,
          movieNum:xx,
        }
       }
     }
 ~~~   

考虑到该教程面向初学者，我们先不考虑徽标数的情况。

由图可知我们需要的actionTypes 和 actionfuns 非常简单
 
 actionTypes.js    

~~~javascript
export const k_Change_TabController = 'k_Change_TabController';
~~~
actionfuns.js

~~~
import  * as types from './actionTypes';

export function changTabVc(pageName) {
    return{
        type:types.k_Change_TabController,
        pageName
    }
}
~~~


然后我们再来写首页的reducer函数,


~~~
/**
 * Created by niwanglong on 2017/2/16.
 */
import * as types from '../Actions/actionTypes';

// 声明组件需要的字段
const initialState = {
    currentPage:'home',//应用启动的时候我们希望显示的为首页所以我们给了一个初始值为'home'
}

// 在该函数返回对state的处理结果,注意不能修改原state,一般通过Object.assign来返回一个新的副本
// initialState为初始state,action参数为匹配到的action,必定有type属性,可以携带其他要素,这里使用的是pageName
// 无匹配情况为default,一定要返回state
export default  function ChangePage (state = initialState,action){
    switch (action.type) {
        case types.k_Change_TabController:{
            return Object.assign({},state,{
                currentPage:action.pageName//对应actionfuns里面的附加字段key
            });
        }
        default:{
            return state;
        }
    }
}
~~~

  

     


##依赖组建
~~~
"react-native-tab-navigator": "^0.3.3",
"react-redux": "^5.0.2",
"redux": "^3.6.0",
"redux-thunk": "^2.2.0"
~~~ 