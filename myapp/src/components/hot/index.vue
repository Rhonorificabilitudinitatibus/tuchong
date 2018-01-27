<template>
	<div class="container">
		<v-header></v-header>
		<div class="content">
			<h3>{{content.title.title}}</h3>
			<p>{{content.title.content}}</p>
			<article v-for="(item,index) in content.list">
				<p v-for="(item2,index2) in item.images">
					<img :src="item2">
				</p>
				<p style="color:#0000FF">{{item.b1}}</p>
				<p style="font-weight: bold;">图虫摄影师
					<a href="javascript:;">{{item.b2name}}</a>
				</p>
				<p>
					{{item.comments}}
				</p>
			</article>
			<h4>{{content.title.end}}</h4>
		</div>
		<v-footer></v-footer>
	</div>

</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>
