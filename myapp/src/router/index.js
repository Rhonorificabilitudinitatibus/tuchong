import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//1、引入路由
import Home from '@/components/home'
import Login from '@/components/login'
import Register from '@/components/register'
import Hot from '@/components/hot'
import Video from '@/components/video'
import Scene from '@/components/scene'
import Find from '@/components/find'
import Push from '@/components/push'
import Message from '@/components/message'
import User from '@/components/user'
export default new Router({
	routes: [{
			path: '/',
			redirect: "/home"
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/hot',
			name: 'hot',
			component: Hot
		},
		{
			path: '/video',
			name: 'video',
			component: Video
		},
		{
			path: '/scene',
			name: 'scene',
			component: Scene
		},
		{
			path: '/find',
			name: 'find',
			component: Find
		},
		{
			path: '/push',
			name: 'push',
			component: Push
		},
		{
			path: '/message',
			name: 'message',
			component: Message
		},
		{
			path: '/user',
			name: 'user',
			component: User
		},
	]
})