import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Messages from '../pages/messages/list'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import shezhangList from '../pages/shezhang/list'
import shezhangDetail from '../pages/shezhang/detail'
import shezhangAdd from '../pages/shezhang/add'
import shetuanxinxiList from '../pages/shetuanxinxi/list'
import shetuanxinxiDetail from '../pages/shetuanxinxi/detail'
import shetuanxinxiAdd from '../pages/shetuanxinxi/add'
import shetuanshenqingList from '../pages/shetuanshenqing/list'
import shetuanshenqingDetail from '../pages/shetuanshenqing/detail'
import shetuanshenqingAdd from '../pages/shetuanshenqing/add'
import shetuanhuodongList from '../pages/shetuanhuodong/list'
import shetuanhuodongDetail from '../pages/shetuanhuodong/detail'
import shetuanhuodongAdd from '../pages/shetuanhuodong/add'
import huodongbaomingList from '../pages/huodongbaoming/list'
import huodongbaomingDetail from '../pages/huodongbaoming/detail'
import huodongbaomingAdd from '../pages/huodongbaoming/add'
import shetuanleixingList from '../pages/shetuanleixing/list'
import shetuanleixingDetail from '../pages/shetuanleixing/detail'
import shetuanleixingAdd from '../pages/shetuanleixing/add'
import changdixinxiList from '../pages/changdixinxi/list'
import changdixinxiDetail from '../pages/changdixinxi/detail'
import changdixinxiAdd from '../pages/changdixinxi/add'
import changdishenqingList from '../pages/changdishenqing/list'
import changdishenqingDetail from '../pages/changdishenqing/detail'
import changdishenqingAdd from '../pages/changdishenqing/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'messages',
					component: Messages
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'shezhang',
					component: shezhangList
				},
				{
					path: 'shezhangDetail',
					component: shezhangDetail
				},
				{
					path: 'shezhangAdd',
					component: shezhangAdd
				},
				{
					path: 'shetuanxinxi',
					component: shetuanxinxiList
				},
				{
					path: 'shetuanxinxiDetail',
					component: shetuanxinxiDetail
				},
				{
					path: 'shetuanxinxiAdd',
					component: shetuanxinxiAdd
				},
				{
					path: 'shetuanshenqing',
					component: shetuanshenqingList
				},
				{
					path: 'shetuanshenqingDetail',
					component: shetuanshenqingDetail
				},
				{
					path: 'shetuanshenqingAdd',
					component: shetuanshenqingAdd
				},
				{
					path: 'shetuanhuodong',
					component: shetuanhuodongList
				},
				{
					path: 'shetuanhuodongDetail',
					component: shetuanhuodongDetail
				},
				{
					path: 'shetuanhuodongAdd',
					component: shetuanhuodongAdd
				},
				{
					path: 'huodongbaoming',
					component: huodongbaomingList
				},
				{
					path: 'huodongbaomingDetail',
					component: huodongbaomingDetail
				},
				{
					path: 'huodongbaomingAdd',
					component: huodongbaomingAdd
				},
				{
					path: 'shetuanleixing',
					component: shetuanleixingList
				},
				{
					path: 'shetuanleixingDetail',
					component: shetuanleixingDetail
				},
				{
					path: 'shetuanleixingAdd',
					component: shetuanleixingAdd
				},
				{
					path: 'changdixinxi',
					component: changdixinxiList
				},
				{
					path: 'changdixinxiDetail',
					component: changdixinxiDetail
				},
				{
					path: 'changdixinxiAdd',
					component: changdixinxiAdd
				},
				{
					path: 'changdishenqing',
					component: changdishenqingList
				},
				{
					path: 'changdishenqingDetail',
					component: changdishenqingDetail
				},
				{
					path: 'changdishenqingAdd',
					component: changdishenqingAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
