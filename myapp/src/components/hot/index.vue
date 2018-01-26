<template>
	<div class="container">
		<v-header></v-header>
		<div class="content">
			我是热搜页面
			<div v-for="(item,index) in coverarr" :key="index">
				<!--{{item}}-->
				<img :src="item"/>
			</div>
			<!--第一种样式-->
			<div class="one">
				<div class="one-one all-por">
					<div class="im">
						<!--<img :src="{{cover[0]}}"/>-->
					</div>
					<em class="like"><i class="iconfont"></i></em>
					<em class="msg"><i class="iconfont"></i></em>
					<span class="num">12</span>
				</div>
				<div class="one-two all-por">
					<div class="im"></div>
					<span class="num">2</span>
				</div>
			</div>
			<!--第二种-->
			<div class="two">
				<div class="two-one all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
				<div class="two-two all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
			</div>
			<!--第三种-->
			<div class="three all-por">
				<div class="im">

				</div>
				<span class="num">342</span>
			</div>
			<!--第四种-->
			<div class="four">
				<div class="four-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="four-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第五种-->
			<div class="five">
				<div class="five-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="five-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第六种-->
			<div class="six">
				<div class="six-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="six-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第七种-->
			<div class="three im all-por">
				<span class="num">342</span>
			</div>

			<!--第一种样式-->
			<div class="one">
				<div class="one-one all-por">
					<div class="im"></div>
					<em class="like"><i class="iconfont"></i></em>
					<em class="msg"><i class="iconfont"></i></em>
					<span class="num">12</span>
				</div>
				<div class="one-two all-por">
					<div class="im"></div>
					<span class="num">2</span>
				</div>
			</div>
			<!--第二种-->
			<div class="two">
				<div class="two-one all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
				<div class="two-two all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
			</div>
			<!--第三种-->
			<div class="three all-por">
				<div class="im">

				</div>
				<span class="num">342</span>
			</div>
			<!--第四种-->
			<div class="four">
				<div class="four-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="four-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第五种-->
			<div class="five">
				<div class="five-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="five-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第六种-->
			<div class="six">
				<div class="six-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="six-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第七种-->
			<div class="three im all-por">
				<span class="num">342</span>
			</div>
			<!--第一种样式-->
			<div class="one">
				<div class="one-one all-por">
					<div class="im"></div>
					<em class="like"><i class="iconfont"></i></em>
					<em class="msg"><i class="iconfont"></i></em>
					<span class="num">12</span>
				</div>
				<div class="one-two all-por">
					<div class="im"></div>
					<span class="num">2</span>
				</div>
			</div>
			<!--第二种-->
			<div class="two">
				<div class="two-one all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
				<div class="two-two all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
			</div>
			<!--第三种-->
			<div class="three all-por">
				<div class="im">

				</div>
				<span class="num">342</span>
			</div>
			<!--第四种-->
			<div class="four">
				<div class="four-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="four-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第五种-->
			<div class="five">
				<div class="five-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="five-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第六种-->
			<div class="six">
				<div class="six-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="six-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第七种-->
			<div class="three im all-por">
				<span class="num">342</span>
			</div>
			<!--第一种样式-->
			<div class="one">
				<div class="one-one all-por">
					<div class="im"></div>
					<em class="like"><i class="iconfont"></i></em>
					<em class="msg"><i class="iconfont"></i></em>
					<span class="num">12</span>
				</div>
				<div class="one-two all-por">
					<div class="im"></div>
					<span class="num">2</span>
				</div>
			</div>
			<!--第二种-->
			<div class="two">
				<div class="two-one all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
				<div class="two-two all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
			</div>
			<!--第三种-->
			<div class="three all-por">
				<div class="im">

				</div>
				<span class="num">342</span>
			</div>
			<!--第四种-->
			<div class="four">
				<div class="four-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="four-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第五种-->
			<div class="five">
				<div class="five-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="five-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第六种-->
			<div class="six">
				<div class="six-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="six-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第七种-->
			<div class="three im all-por">
				<span class="num">342</span>
			</div>
			<!--第一种样式-->
			<div class="one">
				<div class="one-one all-por">
					<div class="im"></div>
					<em class="like"><i class="iconfont"></i></em>
					<em class="msg"><i class="iconfont"></i></em>
					<span class="num">12</span>
				</div>
				<div class="one-two all-por">
					<div class="im"></div>
					<span class="num">2</span>
				</div>
			</div>
			<!--第二种-->
			<div class="two">
				<div class="two-one all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
				<div class="two-two all-por">
					<div class="im"></div>
					<span class="num">12</span>
				</div>
			</div>
			<!--第三种-->
			<div class="three all-por">
				<div class="im">

				</div>
				<span class="num">342</span>
			</div>
			<!--第四种-->
			<div class="four">
				<div class="four-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="four-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第五种-->
			<div class="five">
				<div class="five-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="five-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第六种-->
			<div class="six">
				<div class="six-one all-por">
					<div class="im"></div>
					<span class="num">342</span>
				</div>
				<div class="six-two all-por">
					<div class="im"></div>
					<span class="num">32</span>
				</div>
			</div>
			<!--第七种-->
			<div class="three im all-por">
				<span class="num">342</span>
			</div>
		</div>
		<v-footer></v-footer>
	</div>

</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
<!--<style lang="css" src="./../../assets/css/bootstrap.css"></style>-->
<!--<link rel="stylesheet" type="text/css" href="./../assets/css/bootstrap.css" />-->