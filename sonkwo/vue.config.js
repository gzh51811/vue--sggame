const path = require("path");

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	devServer: {
		proxy: {
			"/api/*": {
		        target: "https://www.sonkwo.com", ///api/v5/home.json
		        changeOrigin: true,
		        pathRewrite: {
		          "/api": "/api" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
		        }
		    },
			"/community/lunbo": {
				target: "https://www.sonkwo.com/api/community_home.json", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/community/lunbo": "" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			},
			"/community/posts": {
				target: "https://www.sonkwo.com/api/search/posts", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/community/posts": "" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			},
			"/group/id": {
				target: "https://www.sonkwo.com/api/tags.json", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/group/id": "" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			},
			"/group/new": {
				target: "https://www.sonkwo.com/api/communities/groups.json", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/group/new": "" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			},
			"/cart/shop": {
				target: "http://localhost:1811", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/cart/shop": "/cart/shop" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			},
			"/cart/test": {
				target: "http://localhost:1811", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/cart/test": "/cart/test" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			},
			"/user": {
				target: "https://www.sonkwo.com/api/profile", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/user": "" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			},
			"/group/info": {
				target: "https://www.sonkwo.com/api/groups/534.json", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/group/info": "" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			},
			"/find": {
				target: "http://localhost:1811", //设置你调用的接口域名和端口号 别忘了加http
				changeOrigin: true,
				pathRewrite: {
					"^/find": "/find" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
				}
			}
			
		}
	}

};