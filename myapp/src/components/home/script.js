import Header from './../header'
import Footer from './../footer'
//获取数据
import axios from "axios"
import {BASE_URL} from  "@/common/base.js"
export default{
	components:{
		"v-header": Header,
		"v-footer": Footer,
	},
	data(){
		return{
//			list:[
//			{path:"/home",name:"首页"},
//			{path:"/hot",name:"热门"},
//			{path:"/video",name:"视频"},
//			{path:"/scene",name:"风光"},
//			]
		}
	},
	mounted(){
//		var url = BASE_URL + "/users/data"
//		axios.get(url,{
//		}).then((response)=>{
////			console.log(response)
//			console.log(response.data[0].videoList)
//		}).catch((error)=>{
//			console.log(error)
//		})
	},
	methods:{
		
	},
	computed:{
		
	},
	watch:{
		
	}
}
