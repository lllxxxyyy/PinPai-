<!--  -->
<template>
  <div class="ADetails">
      <div class="ADetails_header">
          <img @click="toHome" :src="imgSrc+'zuojiantou.png'" alt="">
          <span>品牌详情</span>
      </div>
      <div class="ADetails_des">
          <ul class="ADetails_list">
              <li>
                  <span class="list_left">公司名称：</span>
                  <span class="list_right">{{detailData.user_name}}</span>
              </li>
              <li>
                  <span class="list_left">联 系 人 ：</span>
                  <span class="list_right">{{detailData.nickname}}</span>
              </li>
              <li>
                  <span class="list_left">联系电话：</span>
                  <span class="list_right">{{detailData.tel}}</span>
              </li>
              <li>
                  <span class="list_left">所在城市（或地区）：</span>
                  <span class="list_right">{{detailData.city}}</span>
              </li>
              <li>
                  <span class="list_left">授权时间：</span>
                  <span class="list_right">{{detailData.add_time}}</span>
              </li>
              <li>
                  <span class="list_left">截止时间：</span>
                  <span class="list_right">{{detailData.end_time}}</span>
              </li>
              <li>
                  <span class="list_left">编号：</span>
                  <span class="list_right">{{detailData.empower_sn}}</span>
              </li>
              <li class="business_license">
                  <span class="list_left">授权证明：</span>
                  <img :src="detailData.empower" alt="">
                  <div class="business_HIde"></div>
              </li>
              <li class="business_license">
                  <span class="list_left">营业执照：</span>
                  <img :src="detailData.img" alt="">
                  <div class="business_HIde"></div>
              </li>
              <li class="business_license">
                  <span class="list_left">商标注册证：</span>
                  <img :src="detailData.logo_card" alt="">
                  <div class="business_HIde"></div>
              </li>
              
          </ul>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import qs from 'qs'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
        detailData:'',
    };
  },

  components: {},

   computed:{
        ...mapState(['imgSrc','detailId'])
    },
  mounted(){
      var obj=qs.stringify({
          id:this.detailId
      })
      this.$http.post('/pinpai/empower/comment_List',obj).then((res)=>{
          this.detailData =res.data.data[0]
      })
  },

  methods: {
      toHome(){
          this.$router.push('/')
      }
  }
}

</script>
<style scoped lang="stylus">
.ADetails{
    width:100%;
    background :rgba(246, 246, 252, 1);
}
.ADetails_header{
    width:100%;
    height:1.173rem;
    display :flex;
    align-items :center;
    justify-content :center;
    position :relative;
    font-size:0.48rem;
    color:rgba(0, 0, 0, 1);
    background :#fff;
    >img{
        width:0.3rem;
        height:0.604rem;
        position :absolute;
        top:50%;
        margin-top:-0.302rem;
        left:0.4rem;
    }
}
.ADetails_des{
    padding:0.4rem;
}
.ADetails_list{
    width:9.2rem;
    padding:0.27rem;
    background :#fff;
    border-radius:0.08rem;
    font-size:0.373rem;
    >li{
        padding:0.4rem 0;
        border-bottom:0.03rem solid rgba(0, 0, 0, 0.14);
        &:last-child{
            border:0;
        }
    }
    >.business_license{
        display :flex;
        flex-direction :column;
        position :relative;
        >img{
            width:5.33rem;
            margin-top:0.27rem;
        }
        >.business_HIde{
            width:100%;
            height:100%;
            position :absolute;
            top:0;
            left:0;
        }

    }
}
</style>