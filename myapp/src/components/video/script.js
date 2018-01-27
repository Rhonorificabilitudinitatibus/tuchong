import axios from "axios"
import Header from './../header'
import Footer from './../footer'
export default{
	data(){
		return{
			
		}
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
