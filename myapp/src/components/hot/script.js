import axios from "axios"
import Header from './../header'
import Footer from './../footer'
import {BASE_URL} from  "@/common/base.js"
export default{
	data(){
		return{
			list:[],
			content:{},
		}
	},
	created(){
		var url = BASE_URL + "/users/hotnews"
		axios.get(url,{
		}).then((response)=>{
			console.log(response.data[0])
			this.content=response.data[0];
		}).catch((error)=>{
			console.log(error)
		})
	},
	mounted(){
		var show = document.getElementsByTagName("footer")[0].children[0].children[0];
		show.style.color="#fff";
		show.style.backgroundColor="#00CA79";
		
	},
	methods:{
		
	},
	computed:{
		
	},
	components:{
		"v-header":Header,
		"v-footer":Footer,
	},
	watch:{
		
	}
}
