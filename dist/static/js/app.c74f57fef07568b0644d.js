webpackJsonp([1],{"09yM":function(t,e){},"6Lo6":function(t,e){},"8ZQx":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("kV13"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("C7Lr")({name:"App"},a,!1,function(t){s("8ZQx")},null,null).exports,o=s("5inH"),c=s("4YfN"),r=s.n(c),l=s("a3Yh"),d=s.n(l),v=s("b8UZ"),p=s("CtzY"),m=s.n(p),_={data:function(){var t;return t={showWhere:!1,provinceTitle:"",cityTitle:"",provinceList:""},d()(t,"provinceList",[]),d()(t,"cityList",[]),d()(t,"swiperOption",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".province"}}),d()(t,"swiperOption",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".city"}}),d()(t,"AListData",""),d()(t,"cityName",""),d()(t,"comName",""),d()(t,"AddStyleY",-1),d()(t,"indexPName",-1),d()(t,"indexCName",-1),d()(t,"promptContent",""),d()(t,"showPrompt",!1),t},computed:r()({},Object(v.c)(["imgSrc","detailId","id","pindex","cindex","saveComName","saveProvinceTitle","saveCityName"])),mounted:function(){this.saveComName&&(this.comName=this.saveComName),this.saveProvinceTitle&&(this.provinceTitle=this.saveProvinceTitle),this.saveCityName&&(this.cityName=this.saveCityName,this.cityTitle=this.saveCityName+"市"),this.getList(this.comName,this.provinceTitle,this.cityName)},methods:r()({getList:function(t,e,s){var i=this,a=m.a.stringify({user_name:t,province:e,city:s});this.$http.post("/pinpai/empower/index",a).then(function(t){200==t.data.code?i.AListData=t.data.data.data:i.alterText(t.data.msg)})},alterText:function(t){var e=this;return clearInterval(e.timer2),this.promptContent=t,this.showPrompt=!0,e.timer2=setTimeout(function(){e.showPrompt=!1,clearInterval(e.timer2)},2e3),!1},search:function(){""!=this.comName&&(this.saveComNames(this.comName),this.saveProvinceTitles(""),this.saveCityNames(""),this.getList(this.comName,"",""))},sureCity:function(){if("市"!=this.cityTitle){for(var t=0;t<this.cityTitle.length;t++)"市"==this.cityTitle[t]&&(this.cityName=this.cityTitle.slice(0,t));this.getList("",this.provinceTitle,this.cityName),this.showWhere=!1,this.provinceId&&this.ids(this.provinceId),this.pindexs(this.indexPName),this.cindexs(this.indexCName),this.saveComNames(""),this.saveProvinceTitles(this.provinceTitle),this.saveCityNames(this.cityName)}else this.showWhere=!1},Area:function(){var t=this;this.showWhere=!0;var e=m.a.stringify({id:0});this.$http.post("/pinpai/empower/region",e).then(function(e){200==e.data.code?(t.provinceList=e.data.data,""==t.id&&t.ids(t.provinceList[0].id),t.getCityData(t.id),t.indexPName=t.pindex,t.indexCName=t.cindex,t.provinceTitle=t.provinceList[t.pindex].name):t.alterText(e.data.msg)})},toDetail:function(t){this.detailIds(t),this.$router.push("/ADetails")},hideWhere:function(){this.showWhere=!1},whereAreaBtn:function(){this.cityTitle=this.cityName+"市",this.showWhere=!1},getCityData:function(t){var e=this,s=m.a.stringify({id:t});this.$http.post("/pinpai/empower/region",s).then(function(t){if(200==t.data.code){var s=t.data.data;e.cityList=s}else e.alterText(t.data.msg)})},provinceBox:function(t,e,s){s!==this.indexPName&&(this.cityTitle="市",this.indexCName=-1),this.indexPName=s,this.AddStyleY=1,this.provinceTitle=e,this.provinceId=t,this.getCityData(t)},cityBox:function(t,e){this.AddStyleY=2,this.cityTitle=t,this.indexCName=e}},Object(v.b)(["detailIds","ids","pindexs","cindexs","saveComNames","saveProvinceTitles","saveCityNames"]))},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"home_header"},[s("div",{staticClass:"home_loge"},[s("img",{attrs:{src:t.imgSrc+"loge.png",alt:""}})]),t._v(" "),s("div",{staticClass:"city_name"},[s("span",[t._v("所在城市（或地区）·"+t._s(t.cityName))]),s("img",{attrs:{src:t.imgSrc+"jiantou.png",alt:""},on:{click:t.Area}})]),t._v(" "),s("div",{staticClass:"Home_search"},[s("img",{attrs:{src:t.imgSrc+"search.png",alt:""}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.comName,expression:"comName"}],attrs:{type:"text",placeholder:"请输入公司名称"},domProps:{value:t.comName},on:{input:[function(e){e.target.composing||(t.comName=e.target.value)},t.search]}})])]),t._v(" "),s("div",{staticClass:"home_Con"},[t._m(0),t._v(" "),s("div",{staticClass:"authorize_desWrapper"},[s("div",{staticClass:"authorize_desPadding"},[s("div",{staticClass:"authorize_des"},[t._m(1),t._v(" "),s("ul",{staticClass:"authorize_desList"},t._l(t.AListData,function(e,i){return s("li",{key:i},[s("span",{staticClass:"Authorization_date"},[t._v(t._s(e.add_time))]),t._v(" "),s("span",{staticClass:"Authorization_date"},[t._v(t._s(e.end_time))]),t._v(" "),s("span",{staticClass:"company_name"},[t._v(t._s(e.user_name))]),t._v(" "),s("span",{staticClass:"business_license"},[s("img",{attrs:{src:e.logo,alt:""}})]),t._v(" "),s("span",{staticClass:"Contact_person"},[t._v(t._s(e.nickname))]),t._v(" "),s("span",{staticClass:"Contact_phone"},[t._v(t._s(e.tel))]),t._v(" "),s("span",{staticClass:"look_over",on:{click:function(s){return t.toDetail(e.id)}}},[t._v("查看详情")])])}),0)])])])]),t._v(" "),t.showWhere?s("div",{staticClass:"whereArea",on:{click:t.hideWhere}},[s("div",{staticClass:"whereAreaBox",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"whereAreaTitle"},[s("div",{staticClass:"whereAreaBtn",on:{click:t.whereAreaBtn}},[t._v("取消")]),t._v(" "),s("span",[t._v("选择所在城市")]),t._v(" "),s("div",{staticClass:"whereAreaSure",on:{click:t.sureCity}},[t._v("确定")])]),t._v(" "),s("ul",{staticClass:"whereSelCity"},[s("li",[s("span",{class:["provinceTitle",{AddStyle:1==t.AddStyleY}]},[t._v(t._s(t.provinceTitle))])]),t._v(" "),s("li",[s("span",{class:["cityTitle",{AddStyle:2==t.AddStyleY}]},[t._v(t._s(t.cityTitle))])])]),t._v(" "),s("div",{staticClass:"swiperWrapper"},[s("div",{staticClass:"swiperWrapp provinceWrapper"},[s("swiper",{staticClass:"swiperList province",attrs:{options:t.swiperOption}},t._l(t.provinceList,function(e,i){return s("swiper-slide",{key:i,class:["provinceList",{swiperListStyle:t.indexPName==i}]},[s("span",{on:{click:function(s){return t.provinceBox(e.id,e.name,i)}}},[t._v(t._s(e.name))])])}),1)],1),t._v(" "),s("div",{staticClass:"swiperWrapp cityWrapper"},[s("swiper",{staticClass:"swiperList city",attrs:{options:t.swiperOption}},t._l(t.cityList,function(e,i){return s("swiper-slide",{key:i,class:["cityList",{swiperListStyle:t.indexCName==i}]},[s("span",{on:{click:function(s){return t.cityBox(e.name,i)}}},[t._v(t._s(e.name))])])}),1)],1)])])]):t._e(),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.showPrompt?s("div",{staticClass:"promptFather"},[s("div",{staticClass:"prompt"},[t._v("\n                  "+t._s(t.promptContent)+"\n              ")])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"authorize_title"},[e("span",[this._v("品牌信息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"authorize_desName"},[s("span",{staticClass:"Authorization_date"},[t._v("授权日期")]),t._v(" "),s("span",{staticClass:"Authorization_date"},[t._v("截止日期")]),t._v(" "),s("span",{staticClass:"company_name"},[t._v("公司名称")]),t._v(" "),s("span",{staticClass:"business_license"},[t._v("品牌loge")]),t._v(" "),s("span",{staticClass:"Contact_person"},[t._v("联系人")]),t._v(" "),s("span",{staticClass:"Contact_phone"},[t._v("联系电话")]),t._v(" "),s("span",{staticClass:"look_over"},[t._v("查看")])])}]};var u=s("C7Lr")(_,h,!1,function(t){s("ycZ+")},"data-v-15f809b5",null).exports,C={data:function(){return{detailData:""}},components:{},computed:r()({},Object(v.c)(["imgSrc","detailId"])),mounted:function(){var t=this,e=m.a.stringify({id:this.detailId});this.$http.post("/pinpai/empower/comment_List",e).then(function(e){t.detailData=e.data.data[0]})},methods:{toHome:function(){this.$router.push("/")}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ADetails"},[s("div",{staticClass:"ADetails_header"},[s("img",{attrs:{src:t.imgSrc+"zuojiantou.png",alt:""},on:{click:t.toHome}}),t._v(" "),s("span",[t._v("品牌详情")])]),t._v(" "),s("div",{staticClass:"ADetails_des"},[s("ul",{staticClass:"ADetails_list"},[s("li",[s("span",{staticClass:"list_left"},[t._v("公司名称：")]),t._v(" "),s("span",{staticClass:"list_right"},[t._v(t._s(t.detailData.user_name))])]),t._v(" "),s("li",[s("span",{staticClass:"list_left"},[t._v("联 系 人 ：")]),t._v(" "),s("span",{staticClass:"list_right"},[t._v(t._s(t.detailData.nickname))])]),t._v(" "),s("li",[s("span",{staticClass:"list_left"},[t._v("联系电话：")]),t._v(" "),s("span",{staticClass:"list_right"},[t._v(t._s(t.detailData.tel))])]),t._v(" "),s("li",[s("span",{staticClass:"list_left"},[t._v("所在城市（或地区）：")]),t._v(" "),s("span",{staticClass:"list_right"},[t._v(t._s(t.detailData.city))])]),t._v(" "),s("li",[s("span",{staticClass:"list_left"},[t._v("授权时间：")]),t._v(" "),s("span",{staticClass:"list_right"},[t._v(t._s(t.detailData.add_time))])]),t._v(" "),s("li",[s("span",{staticClass:"list_left"},[t._v("截止时间：")]),t._v(" "),s("span",{staticClass:"list_right"},[t._v(t._s(t.detailData.end_time))])]),t._v(" "),s("li",[s("span",{staticClass:"list_left"},[t._v("编号：")]),t._v(" "),s("span",{staticClass:"list_right"},[t._v(t._s(t.detailData.empower_sn))])]),t._v(" "),s("li",{staticClass:"business_license"},[s("span",{staticClass:"list_left"},[t._v("授权证明：")]),t._v(" "),s("img",{attrs:{src:t.detailData.empower,alt:""}}),t._v(" "),s("div",{staticClass:"business_HIde"})]),t._v(" "),s("li",{staticClass:"business_license"},[s("span",{staticClass:"list_left"},[t._v("营业执照：")]),t._v(" "),s("img",{attrs:{src:t.detailData.img,alt:""}}),t._v(" "),s("div",{staticClass:"business_HIde"})]),t._v(" "),s("li",{staticClass:"business_license"},[s("span",{staticClass:"list_left"},[t._v("商标注册证：")]),t._v(" "),s("img",{attrs:{src:t.detailData.logo_card,alt:""}}),t._v(" "),s("div",{staticClass:"business_HIde"})])])])])},staticRenderFns:[]};var g=s("C7Lr")(C,f,!1,function(t){s("6Lo6")},"data-v-44821265",null).exports;i.default.use(o.a);var y=new o.a({routes:[{path:"/",name:"Home",component:u},{path:"/ADetails",name:"ADetails",component:g}]}),N=s("I29D"),w=s.n(N),x=s("Iufj"),T=s.n(x);i.default.use(v.a);var S={imgSrc:"/static/mock/img/",detailId:sessionStorage.getItem("detailId"),id:sessionStorage.getItem("id")||"",pindex:sessionStorage.getItem("pindex")||"-1",cindex:sessionStorage.getItem("cindex")||"-1",saveComName:sessionStorage.getItem("saveComName"),saveProvinceTitle:sessionStorage.getItem("saveProvinceTitle")||"",saveCityName:sessionStorage.getItem("saveCityName")||""},I={saveComNames:function(t,e){sessionStorage.setItem("saveComName",e),t.saveComName=e},saveProvinceTitles:function(t,e){sessionStorage.setItem("saveProvinceTitle",e),t.saveProvinceTitle=e},saveCityNames:function(t,e){sessionStorage.setItem("saveCityName",e),t.saveCityName=e},detailIds:function(t,e){sessionStorage.setItem("detailId",e),t.detailId=e},ids:function(t,e){sessionStorage.setItem("id",e),t.id=e},pindexs:function(t,e){sessionStorage.setItem("pindex",e),t.pindex=e},cindexs:function(t,e){sessionStorage.setItem("cindex",e),t.cindex=e}},L=new v.a.Store({state:S,mutations:I}),A=s("TcQY"),D=s.n(A),P=(s("09yM"),s("zlU6"),s("x6JQ"),s("DMPO")),b=s.n(P);s("t7ww");i.default.config.productionTip=!1,i.default.use(T.a,w.a),i.default.prototype.$ajax=w.a,i.default.use(v.a),i.default.use(D.a),i.default.config.productionTip=!1,i.default.use(b.a),new i.default({el:"#app",router:y,store:L,components:{App:n},template:"<App/>"})},t7ww:function(t,e){},x6JQ:function(t,e){},"ycZ+":function(t,e){},zlU6:function(t,e){!function(t,e){function s(){var t=i.clientWidth/10;i.style.fontSize=t+"px"}var i=e.documentElement,a=t.devicePixelRatio||1;if(function t(){e.body?e.body.style.fontSize=12*a+"px":e.addEventListener("DOMContentLoaded",t)}(),s(),t.addEventListener("resize",s),t.addEventListener("pageshow",function(t){t.persisted&&s()}),a>=2){var n=e.createElement("body"),o=e.createElement("div");o.style.border=".5px solid transparent",n.appendChild(o),i.appendChild(n),1===o.offsetHeight&&i.classList.add("hairlines"),i.removeChild(n)}}(window,document)}},["NHnr"]);
//# sourceMappingURL=app.c74f57fef07568b0644d.js.map