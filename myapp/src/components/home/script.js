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
			list:[],
		}
	},
	mounted(){
		var url = BASE_URL + "/users/recommend"
		axios.get(url,{
		}).then((response)=>{
//			console.log(response.data[0].videoList)
			this.list=response.data[0].videoList;
		}).catch((error)=>{
			console.log(error)
		})
	},
	methods:{
//		play:function(){
//			console.log(this)
//		}
	},
	computed:{
		
	},
	watch:{
		
	}
}
