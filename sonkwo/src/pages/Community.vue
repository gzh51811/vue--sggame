<template>
	<div>
		<mt-header title="彬果校区" class="header-black">
			<div slot="left" >
				<mt-button icon="back"></mt-button>
			</div>
			<mt-button icon="search" slot="right"></mt-button>
		</mt-header>
		
		<mt-navbar v-model="selected" style="width: 100px;margin:0 auto;">
			<mt-tab-item id="1" class="com-nav" @click.native="tag(1)">果帖</mt-tab-item>
			<mt-tab-item id="2" class="com-nav" @click.native="tag(2)">小组</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1" v-if="isShow">
				<!--果帖-->
				<comnavgt></comnavgt>
			</mt-tab-container-item>
			<mt-tab-container-item id="2" v-if="!isShow">
				<!--小组-->
				<comnavgp></comnavgp>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import { Header } from "mint-ui";
	import { Navbar, TabItem } from 'mint-ui';
	import comnavgt from "./community/com-nav-gt.vue";
	import comnavgp from "./community/com-nav-gp.vue";
	export default {
		data() {
			return {
				selected: '1',
				isShow:true
			}
		},
		methods: {
			tag(idx){
				if (idx==2) {
					this.isShow=false;
				}else{
					this.isShow=true;
				}
				
			}
		},
		components: {
			Header,
			Navbar,
			TabItem,
			comnavgt,
			comnavgp
		}
	}
</script>

<style scoped="scoped">
	.header-black {
		background: #333333;
	}
	
	.com-nav {
		font-size: 12px !important;
	}
	
	.is-selected {
		color: orangered !important;
		border-color: orange !important;
	}
</style>