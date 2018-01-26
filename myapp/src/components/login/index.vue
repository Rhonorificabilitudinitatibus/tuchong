<template>
	<div class="login">
		<mt-header title="登录">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="logincon">
			<mt-field placeholder="手机号" type="tel" ></mt-field>
			<mt-field placeholder="密码" type="password" ></mt-field>
			<mt-button class="loginbtn" size="large">登录</mt-button>
		</div>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>