<template>
<div class="home-preview" :style='{"width":"1200px","margin":"0 auto","background":"none"}'>



<div class="recommend" :style='{"border":"2px solid #a4d9b7","padding":"20px","margin":"20px 0 0 0","overflow":"hidden","borderRadius":"8px","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","justifyContent":"space-between"}'>
	
    <div class="title" :style='{"width":"auto","padding":"0px","margin":"0px ","lineHeight":"54px","textAlign":"left","order":"0"}'>
		<span :style='{"padding":"10px","borderColor":"#55b44b","fontSize":"32px","color":"#000","borderStyle":"solid","borderWidth":" 0 0 5px 0"}'>社团信息推荐</span>
	</div>
	
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","margin":"0 auto","flexWrap":"wrap-reverse","background":"none","display":"flex","width":"80%","justifyContent":"space-between","height":"300px"}'>
		<div class="box1" :style='{"width":"10%","background":"#cce199","height":"20%"}'></div>
		<div class="box2" :style='{"width":"10%","background":"#acd598","height":"40%"}'></div>
		<div class="box3" :style='{"width":"10%","background":"#8ac998","height":"60%"}'></div>
		<div class="box4" :style='{"width":"10%","background":"#85ccc9","height":"80%"}'></div>
		<div class="box5" :style='{"width":"10%","background":"#7fcef4","height":"100%"}'></div>
		<div class="box6" :style='{"width":"10%","background":"#89abda","height":"120%"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"padding":"0px","margin":"20px 0 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"2"}'>
		<div :style='{"border":"1px solid #bee4cc","padding":"4px","margin":"8px 0","borderRadius":"4px","flexWrap":"wrap","background":"none","display":"flex","width":"19%","position":"relative","height":"auto"}' v-for="(item,index) in shetuanxinxiRecommend" :key="index" @click="toDetail('shetuanxinxiDetail', item)" class="list-item animation-box">
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"0","display":"block","height":"220px"}' v-if="preHttp(item.shetuantupian)" :src="item.shetuantupian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"0","display":"block","height":"220px"}' v-else :src="baseUrl + (item.shetuantupian?item.shetuantupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"0 10px","margin":"0 auto","borderColor":"#e1f6e9","color":"#333","background":"#f1fdf5","borderWidth":"0 0 1px 0","display":"block","width":"100%","lineHeight":"30px","fontSize":"14px","borderStyle":"solid"}'>{{item.shetuanmingcheng}}</div>
			<div class="name line1" :style='{"padding":"0 10px","margin":"0 auto","borderColor":"#e1f6e9","color":"#333","background":"#f1fdf5","borderWidth":"0 0 1px 0","display":"block","width":"100%","lineHeight":"30px","fontSize":"14px","borderStyle":"solid"}'>{{item.shetuanleixing}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('shetuanxinxi')" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0","textAlign":"center","display":"block","float":"right","borderRadius":"30px","background":"#3db769","width":"auto","lineHeight":"40px","height":"40px","order":"0"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"16px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>
<div class="recommend" :style='{"border":"2px solid #a4d9b7","padding":"20px","margin":"20px 0 0 0","overflow":"hidden","borderRadius":"8px","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","justifyContent":"space-between"}'>
	
    <div class="title" :style='{"width":"auto","padding":"0px","margin":"0px ","lineHeight":"54px","textAlign":"left","order":"0"}'>
		<span :style='{"padding":"10px","borderColor":"#55b44b","fontSize":"32px","color":"#000","borderStyle":"solid","borderWidth":" 0 0 5px 0"}'>社团活动推荐</span>
	</div>
	
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","margin":"0 auto","flexWrap":"wrap-reverse","background":"none","display":"flex","width":"80%","justifyContent":"space-between","height":"300px"}'>
		<div class="box1" :style='{"width":"10%","background":"#cce199","height":"20%"}'></div>
		<div class="box2" :style='{"width":"10%","background":"#acd598","height":"40%"}'></div>
		<div class="box3" :style='{"width":"10%","background":"#8ac998","height":"60%"}'></div>
		<div class="box4" :style='{"width":"10%","background":"#85ccc9","height":"80%"}'></div>
		<div class="box5" :style='{"width":"10%","background":"#7fcef4","height":"100%"}'></div>
		<div class="box6" :style='{"width":"10%","background":"#89abda","height":"120%"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"padding":"0px","margin":"20px 0 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto","order":"2"}'>
		<div :style='{"border":"1px solid #bee4cc","padding":"4px","margin":"8px 0","borderRadius":"4px","flexWrap":"wrap","background":"none","display":"flex","width":"19%","position":"relative","height":"auto"}' v-for="(item,index) in shetuanhuodongRecommend" :key="index" @click="toDetail('shetuanhuodongDetail', item)" class="list-item animation-box">
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"0","display":"block","height":"220px"}' v-if="preHttp(item.huodongtupian)" :src="item.huodongtupian.split(',')[0]" alt="" />
			<img :style='{"width":"100%","objectFit":"cover","borderRadius":"0","display":"block","height":"220px"}' v-else :src="baseUrl + (item.huodongtupian?item.huodongtupian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"padding":"0 10px","margin":"0 auto","borderColor":"#e1f6e9","color":"#333","background":"#f1fdf5","borderWidth":"0 0 1px 0","display":"block","width":"100%","lineHeight":"30px","fontSize":"14px","borderStyle":"solid"}'>{{item.shetuanmingcheng}}</div>
			<div class="name line1" :style='{"padding":"0 10px","margin":"0 auto","borderColor":"#e1f6e9","color":"#333","background":"#f1fdf5","borderWidth":"0 0 1px 0","display":"block","width":"100%","lineHeight":"30px","fontSize":"14px","borderStyle":"solid"}'>{{item.huodongmingcheng}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('shetuanhuodong')" :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0","textAlign":"center","display":"block","float":"right","borderRadius":"30px","background":"#3db769","width":"auto","lineHeight":"40px","height":"40px","order":"0"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"16px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

	
<div class="news" :style='{"border":"2px solid #a4d9b7","padding":"20px","margin":"20px 0 0 0","borderRadius":"8px","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","justifyContent":"space-between"}'>
	
	<div class="title" :style='{"width":"auto","padding":"0px","margin":"0px  ","lineHeight":"54px","textAlign":"left","order":"0"}'>
		<span :style='{"padding":"10px","borderColor":"#55b44b","fontSize":"32px","color":"#000","borderStyle":"solid","borderWidth":" 0 0 5px 0"}'>公告信息</span>
	</div>
	
	
	
	
	
	
	
	
	
	
	<!-- 样式九 -->
	<div v-if="newsList.length" class="list list9 index-pv1" :style='{"padding":"0px","margin":"20px auto","background":"none","flexDirection":"column","display":"flex","width":"100%","height":"auto","order":"4"}'>
	  <div v-for="(item,index) in newsList" v-if="index<6" :key="index" @click="toDetail('newsDetail', item)" :style='{"cursor":"pointer","padding":"20px","margin":"0px 0","borderColor":"#bee4cc","background":"none","borderWidth":"0 0 1px 0","width":"100%","position":"relative","borderStyle":"solid","height":"auto"}' class="new9-list-item animation-box">
		<div :style='{"margin":"0 100px 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","textAlign":"left","background":"none","width":"calc(100% - 180px)","fontSize":"16px","lineHeight":"28px","textOverflow":"ellipsis"}' class="new9-list-item-title line1">{{ item.title }}</div>
		<div :style='{"fontSize":"12px","lineHeight":"24px","position":"absolute","right":"10px","color":"#999","top":"20px"}' class="new9-list-item-time">{{ item.addtime.split(' ')[0] }}</div>
	    <div :style='{"margin":"0 100px","whiteSpace":"nowrap","overflow":"hidden","color":"#666","textAlign":"left","background":"none","width":"calc(100% - 180px)","fontSize":"14px","lineHeight":"24px","textOverflow":"ellipsis","height":"24px"}' class="new9-list-item-descript line2">{{ item.introduction }}</div>
		<div :style='{"padding":"12px","color":"#fff","borderRadius":"12px","textAlign":"center","background":"radial-gradient(circle, rgba(95,218,140,1) 0%, rgba(61,183,105,1) 100%)","bottom":"10px","display":"inline-block","width":"40px","fontSize":"14px","lineHeight":"1.1","position":"absolute","height":"80px"}' class="new9-list-item-identification">新闻动态</div>
	  </div>
	</div>
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","padding":"0 24px","margin":"0","borderRadius":"30px","textAlign":"center","background":"#3db769","display":"block","width":"auto","lineHeight":"40px","height":"40px","order":"0"}'>
		<span :style='{"color":"#f5f5f5","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#f5f5f5","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
	<div v-if="false" class="idea newsIdea" :style='{"padding":"0","flexWrap":"wrap","background":"#fff","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"140%","background":"rgba(227, 232, 222,1)","height":"10px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#cce199","height":"60px"}'></div>
		<div class="box3" :style='{"width":"15%","background":"#8ac998","height":"120px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#cce199","height":"60px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
</div>




</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        newsList: [],
        shetuanxinxiRecommend: [],
        shetuanhuodongRecommend: [],

      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 5,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "shetuanxinxi/autoSort";
			this.$http.get(autoSortUrl, {params: {
				sfsh: '是',
				page: 1,
				limit: 10,
			}}).then(res => {
				if (res.data.code == 0) {
					this.shetuanxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "shetuanhuodong/autoSort";
			this.$http.get(autoSortUrl, {params: {
				sfsh: '是',
				page: 1,
				limit: 10,
			}}).then(res => {
				if (res.data.code == 0) {
					this.shetuanhuodongRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(165, 195, 180);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(165, 195, 180);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0) scale(0.98) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(-2px, -2px, 20px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: 0;
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: #3db769;
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: #3db769;
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0) scale(0.98) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: 0;
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
