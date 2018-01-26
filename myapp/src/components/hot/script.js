import axios from "axios"
import Header from './../header'
import Footer from './../footer'
import {BASE_URL} from  "@/common/base.js"
export default{
	data(){
		return{
			list:[],
			cover:"",
			coverarr:[],
		}
	},
	mounted(){
		var url = BASE_URL + "/users/test"
		axios.get(url,{
		}).then((response)=>{
			console.log(response.data[0].feedList)
//			this.list=response.data[0].feedList;
			var test = response.data[0].feedList;
			var j = "";
			var arr = [];
			console.log(test.length)
			for(var i = 0; i < test.length; i++){
				j = "https://photo.tuchong.com/"+ test[i].images[0].user_id + "/f/" + test[i].images[0].img_id + ".jpg"
				arr.push(j)
			}
//			this.cover="https://photo.tuchong.com/"+ response.data[0].feedList[0].images[0].user_id + "/f/" + response.data[0].feedList[0].images[0].img_id + ".jpg" 
			this.coverarr = arr;
		}).catch((error)=>{
			console.log(error)
		})
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
