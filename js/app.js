require.register("config.jsenv",function(e,t,n){n.exports={BUILD:"git-a9b08b8"}});var deferSrcSetters,show;deferSrcSetters=[],angular.element(document).ready(function(){var e,t,n,r,o=[];for(e=0,n=(t=deferSrcSetters).length;n>e;++e)r=t[e],o.push(r());return o}),angular.module("g0v.tw",["firebase","btford.markdown","pascalprecht.translate"]).config(["$httpProvider","$translateProvider"].concat(function(e,t){var n;return e.defaults.useXDomain=!0,delete e.defaults.headers.common["X-Requested-With"],t.useStaticFilesLoader({prefix:"/translations/",suffix:".json"}),n=window.location.pathname.split("/")[1],(n.match("html")||document.title.match("找不到"))&&(n=window.navigator.userLanguage||window.navigator.language),"zh-TW"===n||"en-US"===n?t.preferredLanguage(n):void 0})).factory({fireRoot:["angularFireCollection"].concat(function(){var e;return e="https://g0vsite.firebaseio.com",new Firebase(e)})}).factory({eventsPromise:["$http"].concat(function(e){var t,n;return t="http://www.kimonolabs.com/api/dzdrrgx6",n={params:{apikey:"c626b7443a0cbcb5525f492411d10567",callback:"JSON_CALLBACK"}},e.jsonp(t,n).then(function(e){var t,n,r,o;return t=e.data.results,n=function(e){return{link:e.event.href,title:e.event.text}},r=t.recent.map(n),o=t.past.map(n),{recent:r,past:o}})})}).directive("deferSrc",function(){return{restrict:"A",link:function(e,t){var n;return n=t.attr("defer-src"),deferSrcSetters.push(function(){return t.attr("src",n)})}}}).controller({EventCtrl:["$scope","eventsPromise"].concat(function(e,t){return t.then(function(t){var n,r;return n=t.recent.map(function(e){return e.finished=!1,e}),r=t.past.map(function(e){return e.finished=!0,e}),e.events=n.concat(r)})})}).controller({BlogCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,n){return e.articles=t(n.child("feed/blog/articles").limit(4))})}).controller({FeaturedCtrl:["$scope","angularFireCollection"].concat(function(e,t){var n;return n=new Firebase("https://g0vhub.firebaseio.com/projects"),e.projects=t(n),e.nextProject=function(){return void 0!==e.idx?($("#prj-img").css("opacity",0),++e.idx,e.idx%=e.featured.length):void 0},e.$watch("projects.length",function(){var t,n,r,o,i;for(t=[],n=0,o=(r=e.projects).length;o>n;++n)i=r[n],i.thumbnail&&t.push(i);return e.featured=t,e.idx=Math.floor(Math.random()*e.featured.length)}),e.$watch("idx",function(t,n){return void 0!==n?e.project=e.featured[n]:void 0})})}).controller({CommuniqueCtrl:["$scope","$http","$element"].concat(function(e,t,n){return t.get("http://g0v-communique-api.herokuapp.com/api/1.0/entry/all?limit=50").success(function(t){return e.idx=0,e.nextCommunique=function(){return void 0!==e.idx?(++e.idx,e.idx%=t.length):void 0},e.$watch("idx",function(r,o){var i,a,c,u;for(void 0!==o&&(e.communique=t[o]),i=0,c=(a=e.communique.urls).length;c>i;++i)u=a[i],e.communique.content=e.communique.content.replace(u.name,'<a target="_blank" href="'+u.url+'">'+u.name+"</a>");return n.find(".description").html(e.communique.content)})}).error(function(t,n){return e.message=n})})}).controller({BuildIdCtrl:["$scope"].concat(function(e){var t;return t=require("config.jsenv"),e.buildId=t.BUILD})}).controller({langCtrl:["$scope","$window"].concat(function(e,t){return e.changeLang=function(e){var n;return n=t.location.pathname.split("/")[2],t.location.href="/"+e+"/"+n}})}),show=function(){var e,t;return e=$("#prj-img"),e.animate({opacity:1},500),t=[40+e.height()][0],$("#prj-img-div").animate({height:t+"px"},500)},$(function(){return $(".ui.dropdown").dropdown({on:"hover",transition:"fade"})});