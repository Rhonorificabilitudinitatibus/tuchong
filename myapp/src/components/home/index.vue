<template>
	<div class="container">
		<v-header></v-header>
		<div class="content">
			<div class="video" v-for="(item,index) in list">
				<!--上面部分-->
				<div class="title-part">
					<span class="portrait">
						<img :src="item.author.icon"/>
					</span>
					<p class="title">
						<span class="tit">{{item.author.name}}</span>
						<span class="date">2017-10-23</span>
					</p>
					<em class="iconfont icon-guanbi"></em>
				</div>
				<!--视频部分-->
				<div class="v">
					<video controls="controls" :poster="item.coverForDetail">
						<source :src="item.playUrl" type="video/mp4"></source>
					</video>
					<!--<div class="play-button" @click=this.style.display="none"></div>-->
				</div>
				<h2>
					<em class="iconfont icon-quotation"></em>
					{{item.title}}
				</h2>
				<div class="video-bottom">
					<em class="iconfont icon-xin"><i>{{item.consumption.collectionCount}}</i></em>
					<em class="iconfont icon-informatiom_"><i>{{item.consumption.replyCount}}</i></em>
					<em class="iconfont icon-share"></em>
					<em class="iconfont icon-gengduo"></em>
				</div>
				<aside></aside>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
<!--<style lang="css" src="./../../assets/css/bootstrap.css"></style>-->
<!--<link rel="stylesheet" type="text/css" href="./../assets/css/bootstrap.css" />-->