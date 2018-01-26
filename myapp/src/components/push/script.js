import axios from "axios"
import Header from './../header'
export default{
	components:{
		"v-header": Header,
	},
	data(){
		return{
			list:[
			{path:"/home",name:"首页"},
			{path:"/hot",name:"热门"},
			{path:"/video",name:"视频"},
			{path:"/scene",name:"风光"},
			]
		}
	},
	mounted(){
//		axios.get("https://api.tuchong.com/feed-app?os_api=22&device_type=MI&device_platform=android&ssmix=a&manifest_version_code=232&dpi=400&abflag=0&uuid=651384659521356&version_code=232&app_name=tuchong&version_name=2.3.2&openudid=65143269dafd1f3a5&resolution=1280*1000&os_version=5.8.1&ac=wifi&aid=0&page=1&type=refresh",{
//		}).then((response)=>{
//			console.log(response)
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
