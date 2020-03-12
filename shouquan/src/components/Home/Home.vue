<!--  -->
<template>
  <div class="home">
      <div class="home_header">
          <div class="home_loge"><img :src="imgSrc+'loge.png'" alt=""></div>
          <div class="city_name"><span>所在城市（或地区）·{{cityName}}</span><img @click="Area" :src="imgSrc+'jiantou.png'" alt=""></div>
          <div class="Home_search">
              <img  :src="imgSrc+'search.png'"  alt="">
              <input @input="search" type="text" v-model="comName"  placeholder="请输入公司名称">
          </div>
      </div>
      <div class="home_Con">
            <div class="authorize_title">
                <span>品牌信息</span>
            </div>
            <div class="authorize_desWrapper">
                <div class="authorize_desPadding">
                    <div class="authorize_des">
                        <div class="authorize_desName">
                            <span class="Authorization_date">授权日期</span>
                            <span class="Authorization_date">截止日期</span>
                            <span class="company_name">公司名称</span>
                            <span class="business_license">品牌loge</span>
                            <span class="Contact_person">联系人</span>
                            <span class="Contact_phone">联系电话</span>
                            <span class="look_over">查看</span>
                        </div>
                        <ul class="authorize_desList">
                            <li v-for="(value,index) in AListData" :key="index">
                                <span class="Authorization_date">{{value.add_time}}</span>
                                <span class="Authorization_date">{{value.end_time}}</span>
                                <span class="company_name">{{value.user_name}}</span>
                                <span class="business_license"> <img :src="value.logo" alt=""> </span>
                                <span class="Contact_person">{{value.nickname}}</span>
                                <span class="Contact_phone">{{value.tel}}</span>
                                <span class="look_over" @click="toDetail(value.id)">查看详情</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>

      <div class="whereArea" v-if="showWhere" @click="hideWhere">
          <div class="whereAreaBox" @click.stop>
               <div class="whereAreaTitle">
                   <div class="whereAreaBtn" @click="whereAreaBtn">取消</div>
                    <span>选择所在城市</span>
                    <div class="whereAreaSure" @click="sureCity" >确定</div>
                </div>
                <ul class="whereSelCity">
                    <li><span :class="['provinceTitle',{'AddStyle':AddStyleY==1}] ">{{provinceTitle}}</span></li>
                    <li><span :class="['cityTitle',{'AddStyle':AddStyleY==2}]">{{cityTitle}}</span></li>
                </ul>
                <div class="swiperWrapper">
                    <div class="swiperWrapp provinceWrapper">
                        <swiper class="swiperList province"  :options="swiperOption" >
                            <swiper-slide :class="['provinceList',{'swiperListStyle':indexPName==index}]"  v-for="(item,index) in provinceList" :key="index">
                                <span @click="provinceBox(item.id,item.name,index)">{{item.name}}</span>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class='swiperWrapp cityWrapper'>
                        
                        <swiper class="swiperList city" :options="swiperOption" >
                            <swiper-slide :class="['cityList',{'swiperListStyle':indexCName==index}]"  v-for="(item,index) in cityList" :key="index">
                                <span @click="cityBox(item.name,index)">{{item.name}}</span>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
          </div>
        </div>
        <!-- 提示盒子 -->
         <transition name="fade">
            <div class="promptFather" v-if="showPrompt">
                <div class="prompt" >
                    {{promptContent}}
                </div>
            </div>
        </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import qs from 'qs'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
        showWhere:false,
        provinceTitle:'',
        cityTitle:'',  //被选中的城市
        provinceList:"",
        provinceList:[],
        cityList:[],
         swiperOption: {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.province'
          },
        },
         swiperOption: {
             direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: '.city'
          },
        },

        AListData:'',//授权列表

        cityName:'',
        comName:'',   //搜索公司名称
        AddStyleY:-1,
        indexPName:-1,
        indexCName:-1,

        // 提示盒子
        promptContent:'', //提示盒子的内容
        showPrompt:false,//提示盒子的吸收和显示
    };
  },
    computed:{
        ...mapState(['imgSrc','detailId','id','pindex','cindex','saveComName','saveProvinceTitle','saveCityName'])
    },

  mounted(){
    if(this.saveComName){
        this.comName=this.saveComName
    }
    if(this.saveProvinceTitle){
        this.provinceTitle=this.saveProvinceTitle
    }
    if(this.saveCityName){
        this.cityName=this.saveCityName
        this.cityTitle=this.saveCityName+'市'
    }
    this.getList(this.comName,this.provinceTitle,this.cityName)
  },
  methods: {
     
      getList(comName,provinceTitle,cityName){
           var obj=qs.stringify({
              user_name:comName,
              province:provinceTitle,
              city:cityName,
          })
          this.$http.post('/pinpai/empower/index',obj).then((res)=>{
              if(res.data.code==200){
                    this.AListData=res.data.data.data  //授权列表数据
              }else{
                  this.alterText(res.data.msg)
              }
        })
      },
    // 提示
    alterText(text){
                var self=this
                clearInterval(self.timer2);
                this.promptContent=text
                this.showPrompt=true
                self.timer2=setTimeout(function(){
                    self.showPrompt=false
                    clearInterval(self.timer2);
                },2000)
                return false;
    },
    //   搜索
      search(){
          if(this.comName==''){
              return
          }
          this.saveComNames(this.comName)
          this.saveProvinceTitles('')
          this.saveCityNames('')
          this.getList(this.comName,'','')
      },
    //   城市 确定
      sureCity(){
          if(this.cityTitle=="市"){ //被选中的城市
            this.showWhere=false   //城市盒子消失
              return
          }
          for(var i=0;i<this.cityTitle.length;i++){  //去掉市
              if(this.cityTitle[i]=="市"){
                 this.cityName=this.cityTitle.slice(0,i)
              }
          }
          
            this.getList('',this.provinceTitle,this.cityName)
            this.showWhere=false   //城市盒子消失
            if(this.provinceId){
                this.ids(this.provinceId)  // 保存省份Id
            }
            
            this.pindexs(this.indexPName)  //保存省份下标
            this.cindexs(this.indexCName)  //保存城市下标
            this.saveComNames('') //保存搜索公司名称为空
            this.saveProvinceTitles(this.provinceTitle)
            this.saveCityNames(this.cityName)
      },
       //   获取省份列表数据
      Area(){
          this.showWhere=true  ////城市盒子显示
          var obj=qs.stringify({
              id:0,
          })
          this.$http.post("/pinpai/empower/region",obj).then((res)=>{
            if(res.data.code==200){
                this.provinceList=res.data.data  //省份列表数据
                if(this.id==""){ 
                    this.ids(this.provinceList[0].id)
                }
                this.getCityData(this.id)
                this.indexPName=this.pindex
                this.indexCName=this.cindex
                this.provinceTitle=this.provinceList[this.pindex].name
            }else{
                this.alterText(res.data.msg)
            }   
          })
      },
      toDetail(id){
          this.detailIds(id)
          this.$router.push('/ADetails')
      },
      //点击灰色区域   选择地址盒子消失
      hideWhere(){
          this.showWhere=false
      },
      // 点击取消  选择地址盒子消失
      whereAreaBtn(){
          this.cityTitle=this.cityName+'市'
          this.showWhere=false
      },
        //   获取城市列表
        getCityData(provinceId){
          //   获取城市列表
           var obj=qs.stringify({
              id:provinceId,
          })
          this.$http.post('/pinpai/empower/region',obj).then((res)=>{
            if(res.data.code==200){
                var data=res.data.data
                this.cityList=data
                
            }else{
                this.alterText(res.data.msg)
            }
          })
      },
      //   点击省份列表
      provinceBox(provinceId,provinceName,index){
          if(index!==this.indexPName){
              this.cityTitle='市'  //城市name为空
              this.indexCName=-1 //被选中城市下标
          }
          this.indexPName=index  //被选中省份下标
          this.AddStyleY=1   //添加省份头部选中样式
          this.provinceTitle=provinceName;  //页面省份赋值
          this.provinceId=provinceId;  //保存省份id
          this.getCityData(provinceId) //获取城市数据
      },
        // 点击城市列表
      cityBox(cityName,index){
          this.AddStyleY=2   //添加城市头部选中样式
          this.cityTitle=cityName   //
          this.indexCName=index   //被选中城市下标
      },
      ...mapMutations(['detailIds','ids','pindexs','cindexs','saveComNames','saveProvinceTitles','saveCityNames'])
  }
}

</script>
<style scoped lang="stylus">
.home{
    width:100%;
    height:100%;
    background :rgba(246, 246, 252, 1);
}
 .home_header{
     width:100%;
     height:5.56rem;
     background :url('/static/mock/img/bg.png') no-repeat;
     background-size:100%;
     display :flex;
     flex-direction :column;
     align-items :center;
     position :relative;
 }
 .home_loge{
     padding-top:1.51rem;
     margin-bottom:0.253rem;
     text-align :center;
     img{
         width:0.76rem;
        height:0.733rem;
     }
 }
 .city_name{
     font-size:0.48rem;
     color:rgba(0, 0, 0, 1);
     letter-spacing :0.02rem;
     >img{
         width:0.4rem;
         height:0.24rem;
         margin-left:0.2rem;
     }
 }
 .Home_search{
     width:9.2rem;
     height:1.33rem;
     background :#fff;
     display :flex;
     align-items :center;
     border-radius:0.08rem;
     padding:0 0.27rem;
     position :absolute;
     left:50%;
     margin-left:-4.6rem;
     bottom:0;
     >img{
         width:0.47rem;
         height:0.48rem;
         margin-right:0.27rem;
     }
     >input{
         font-size:0.427rem;
         color:rgba(0, 0, 0, 0.38);
         border:0;
         outline :none;
     }
 }

 .home_Con{
      width:9.2rem;
     background :#fff;
     padding:0.27rem;
     padding-right:0;
     margin:0 0.4rem;
     margin-top:0.67rem;
     
     
     >.authorize_title{
         padding-left:0.27rem;
         >span{
             font-size:0.43rem;
             font-weight:bold;
             color:rgba(0, 0, 0, 0.9);
             position :relative;
             &:before{
                 content:"";
                 width:0.08rem;
                 height:0.53rem;
                 background :rgba(63, 121, 254, 1);
                 border-radius:0.5rem;
                 position :absolute;
                 top:50%;
                 margin-top:-0.27rem;
                 left:-0.27rem;
             }
         }
     }
 }
  .authorize_desWrapper{
    width:8.93rem; 
    overflow :hidden;
    overflow-x:scroll;
 }
 .authorize_desPadding{
     width:15.51rem;
     padding-right:0.27rem;
 }
 .authorize_des{
     width:15.24rem;
     margin-top:0.27rem;
     border-top:0.03rem solid rgba(0, 0, 0, 0.14) ;
     border-left:0.03rem solid rgba(0, 0, 0, 0.14) ;
     .authorize_desName{
         font-size:0.373rem;
         background :rgba(246, 246, 252, 1);
         display :flex;
         >span{
             height:1.173rem;
             text-align :center;
             line-height :1.173rem;
             border-right:0.03rem solid rgba(0, 0, 0, 0.14) ;
             border-bottom:0.03rem solid rgba(0, 0, 0, 0.14) ;
         }
         
     }
     >.authorize_desList{
            >li{
                    font-size:0.32rem;
                    color:rgba(0, 0, 0, 1);
                    display :flex;
                    
                >span{
                    height:1.173rem;
                    text-align :center;
                    line-height :1.173rem;
                    border-right:0.03rem solid rgba(0, 0, 0, 0.14) ;
                    border-bottom:0.03rem solid rgba(0, 0, 0, 0.14) ;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;

                    >img{
                        width:1.49rem;
                        height:0.973rem;
                    }
                }
            }
        }
 }
 
        .Authorization_date{
             width:2.03rem;
         }
         .company_name{
             width:4.17rem;
         }
         .business_license{
             width:1.8rem;
         }
         .Contact_person{
             width:1.27rem;
         }
         .Contact_phone{
             width:2.33rem;
         }
         .look_over{
             width:1.59rem;
         
         }
.whereArea{
    width:100%;
    height:100%;
    position :absolute;
    top:0;
    left:0;
    background :rgba(0,0,0,0.5)
}
.whereAreaBox{
    width:100%;
    height:12.09rem;
    position :absolute;
    bottom:0;
    left:0;
    background :#fff;
    >.swiperWrapper{
        display:flex;
        justify-content :space-between;
        >.swiperWrapp{
            width:50%;
            height:10rem;
            overflow :hidden;
            >.swiperList{
                width:100%;
                height:10rem;
                overflow :hidden;
                padding:0 0.4rem;
                .swiperListStyle{
                    color:rgba(63, 121, 254, 1);
                }
            }
        }
    }
    >.whereAreaTitle{
        font-size:0.4rem;
        width:100%;
        height:1.03rem;
        text-align :center;
        line-height :0.8rem;
        display:flex;
        justify-content :space-between;
        align-items :center;
        padding:0 0.4rem;
        border-bottom:0.03rem solid rgba(0, 0, 0, 0.1);
        >.whereAreaBtn{
            font-size:0.4rem;
            color:rgba(153, 153, 153, 1);
        }
        >span{
            font-size:0.48rem;
            color:rgba(0, 0, 0, 0.7);
            font-weight:600;
        }
        >.whereAreaSure{
            font-size:0.4rem;
            color:rgba(63, 121, 254, 1);
        }
    }
    >.whereSelCity{
        height:1.05rem;
        display:flex;
        padding:0 0.4rem;
        border-bottom:0.03rem solid rgba(0, 0, 0, 0.1);
        >li{
            margin-right:1.25rem;
            >span{
                font-size:0.373rem;
                 display :block;
                height:1.04rem;
                line-height :1.04rem;
            }
            >.AddStyle{
               
                color:rgba(63, 121, 254, 1);
                border-bottom:0.03rem solid rgba(63, 121, 254, 1);
            }
        }
        
    }
    
}
.provinceList,.cityList{
    width:100%;
    font-size:0.32rem;
    height:1.07rem;
    line-height :1.07rem;
    text-align :center;
    border-bottom:0.03rem solid rgba(0, 0, 0, 0.1);
    &:last-child{
        border-bottom:0;
    }
}
.province{
    background :rgba(246, 246, 252, 1);
}



// 提示盒子
.promptFather{
    width:100%;
    position :absolute;
    bottom:50%;
    left:0;
    z-index:10;
    display :flex;
    justify-content :center;
    align-items :center;
    
    >.prompt{
        padding:0.15rem 0.3rem;;
        background :#999;
        color:#fff;
        border-radius:0.5rem;
        font-size:0.37rem;
    }
}
.fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
    transition: all .3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   transform: translateY(0.32rem);
  opacity: 0;
}
</style>