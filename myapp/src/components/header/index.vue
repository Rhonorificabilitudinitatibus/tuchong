<template>
	<header>
		<ul>
			<router-link v-for="(item,index) in list" :key="index" :to="item.path" tag="li">
				{{item.name}}
			</router-link>
		</ul>
	</header>

</template>

<script src="./script.js"></script>

<style scoped lang="scss" src='./style.scss'>
	/*@import "~@/lib/reset.scss"*/
</style>