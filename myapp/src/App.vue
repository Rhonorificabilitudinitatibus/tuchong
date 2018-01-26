<template>
	<div id="app">
		<!--<v-header></v-header>-->
		<router-view></router-view>
		<!--<v-footer></v-footer>-->
	</div>

</template>

<script>
	import Vue from 'vue'
//	import Header from './components/header'
//	import Footer from './components/footer'

	export default {
		name: 'App',
		components: {
//			"v-footer": Footer,
//			"v-header": Header,
		},
		data() {
			return {}
		},
		mounted() {
			$("button").click(function() {
				console.log(3243)
			})
		},
		methods: {

		},
	}
</script>

<style lang="scss">
	.router-link-active {
		background-color: #00CA79;
		color: #fff;
	}
	
	@import "~@/lib/reset.scss";
	html,
	body,
	#app {
		@include rect(100%, 100%)
	}
	
	#app {
		@include flexbox();
		@include flex-direction(column);
		.container {
			@include flex();
			@include rect(100%, auto);
			@include flexbox();
			@include flex-direction(column);
			padding: 0;
			margin: 0;
			header {
				@include rect(100%, 0.44rem);
				ul {
					@include flexbox();
					@include rect(100%, 100%);
					li {
						@include flexbox();
						@include flex();
						@include justify-content();
						@include align-items();
						@include flex-direction(column);
						/*@include border(0 0 4px 0,orange,solid)*/
					}
				}
			}
			.content {
				@include flex();
				@include rect(100%, auto);
				@include flexbox();
				@include flex-direction(column);
				overflow-y: auto;
			}
		}
		footer {
			@include rect(100%, 0.5rem);
			@include background-color(#eee);
			@include text-color(#333);
			ul {
				@include flexbox();
				@include rect(100%, 100%);
				li {
					@include flexbox();
					@include flex();
					@include justify-content();
					@include flex-direction(column);
					@include align-items();
					font-size:0.12rem;
					.iconfont{
						font-size:0.22rem;
					}
				}
			}
		}
	}
</style>