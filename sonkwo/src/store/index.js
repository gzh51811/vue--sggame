import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 核心概念
// 1. store ： 一个用于存储仓库
// 2. state ：状态（数据，相当于组件中的data）
// 3. getters:（理解为组件中的computed，只读）
// 4. mutations ：负责更改state中的数据（同步，理解为组件中的methods）
// 5. actions : 类似于 mutations，负责做异步操作
    // * actions用来操作mutations，mutations用来操作state
const store =new Vuex.Store({
	//公共数据
	state:{
		postsList:[],
		cartList:[]
	},
	//更新数据
	mutations:{
		updatePostsList(state,{payload=[],method}){
			if (method==1) {
				this.state.postsList=[];
			}
			for (let i=0;i<payload.length;i++) {
				this.state.postsList.push(payload[i]);
			}
		},
		updateCartList(state,payload){
			this.state.cartList=[];
			for (let i=0;i<payload.length;i++) {
				this.state.cartList.push(payload[i]);
			}
		}
	}
	
});
export default store;
