<template>
	<div class="reg">
		<mt-header title="注册">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
		</mt-header>
		<div class="regcon">
			<mt-field placeholder="手机号" type="tel" v-model="phone" :state="phoneState"></mt-field>
			<mt-field placeholder="密码" type="password" v-model="password" :state="passwordState"></mt-field>
			<mt-field placeholder="验证码" v-model="captcha">
				<mt-button type="default" :disabled="codeState" @click="sendCode()">{{msg}}</mt-button>
			</mt-field>
			<mt-button class="registerBtn" :type="registerState" @click="register()" size="large">注册</mt-button>
		</div>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>