<template>
	<div class="container">
		<div class="content">
			<mt-search>
			  v-model="value"
			  cancel-text="取消"
			  placeholder="搜索标签 活动  摄影师">
			</mt-search>
			
			<mt-swipe :show-indicators="false">
			  <mt-swipe-item><a href=""><img src="https://s1.tuchong.com/content-image/9db55235ea495183b033acd39fa02ab9.jpg"/></a></mt-swipe-item>
			  <mt-swipe-item><a href=""><img src="https://s1.tuchong.com/content-image/18bf5eaf5199284f834459817b6cbd8b.jpg"/></a></mt-swipe-item>
			  <mt-swipe-item><a href=""><img src="https://s1.tuchong.com/content-image/1f4fa902e57c1fe8bb4b09ed93623ea1.jpeg"/></a></mt-swipe-item>
			  <mt-swipe-item><a href=""><img src="https://s1.tuchong.com/content-image/cf74d6000acc35d1a7aacd407fc12e54.jpg"/></a></mt-swipe-item>
			  <mt-swipe-item><a href=""><img src="https://s1.tuchong.com/content-image/a256575b84eae059fdc8cc4cb8fb3364.jpg"/></a></mt-swipe-item>
			</mt-swipe>
			<ul class="list">
				<li><i class="iconfont icon-remen"></i><b>推荐摄影师</b></li>
				<li><i class="iconfont icon-weibiaoti1"></i><b>影音频道</b></li>
				<li><i class="iconfont icon-ai-book"></i><b>摄影教程</b></li>
			</ul>
			<div class="tit">
				<i class="iconfont icon-remen"></i>
				<p>热　门　活　动</p>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped="scoped"></style>
<!--<style lang="css" src="./../../assets/css/bootstrap.css"></style>-->
<!--<link rel="stylesheet" type="text/css" href="./../assets/css/bootstrap.css" />-->