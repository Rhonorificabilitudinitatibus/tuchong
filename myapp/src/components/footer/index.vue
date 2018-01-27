<template>
	<footer>
		<ul>
			<router-link v-for="(item,index) in list" :key="index" :to="item.path" tag="li">
				<!--<em :class='{{item.icon}}'>哈哈</em>-->
				<em class="iconfont" :class="item.classObject"></em>
				<span>{{item.name}}</span>
			</router-link>
		</ul>
	</footer>

</template>

<script src="./script.js"></script>

<style scoped lang="scss" src='./style.scss'></style>