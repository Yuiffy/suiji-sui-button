<template>
    <div id="app">
        <Modal></Modal>
        <nav class="navbar navbar-default navbar-fixed-top navbar-inner">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">{{ $t("action.toggleNavbar") }}</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/">{{ $t("info.title") }}</router-link>
                </div>

                <div class="collapse navbar-collapse" id="bs-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="https://space.bilibili.com/1954091502" target="_blank"><img src="resources/bilibili_social_icon.png" height="18" style="vertical-align:middle"/>&nbsp;&nbsp;{{$t("info.yt_channel")}}</a></li>
                        <li><a href="https://weibo.com/u/7785772638" target="_blank"><img src="resources/sina-weibo.png" height="18" style="vertical-align:middle"/>&nbsp;&nbsp;{{$t("info.twitter")}}</a></li>
<!--                        <li><a href="https://discord.gg/bXJ5fgm" target="_blank"><img src="resources/discord_pink.png" height="18" style="vertical-align:middle"/>&nbsp;&nbsp;{{$t("info.discord")}}</a></li>-->
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t("info.lang")}} <country-flag :country=changeFlag size='small'/> {{$t("lang." + currentLang)}} <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="javascript:;" @click="chlang('en-US')"><country-flag country="us" size='small'/> {{$t("lang.en-US")}}</a></li>
                                <li><a href="javascript:;" @click="chlang('zh-CN')"><country-flag country="cn" size='small'/> {{$t("lang.zh-CN")}}</a></li>
<!--                                <li><a href="javascript:;" @click="chlang('zh-TW')"><country-flag country="tw" size='small'/> {{$t("lang.zh-TW")}}</a></li>-->
                                <li><a href="javascript:;" @click="chlang('ja-JP')"><country-flag country="jp" size='small'/> {{$t("lang.ja-JP")}}</a></li>
<!--                                <li><a href="javascript:;" @click="chlang('ms-MY')"><country-flag country="my" size='small'/> {{$t("lang.ms-MY")}}</a></li>-->
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
        <div class="container-fluid main-content">
            <router-view></router-view>
        </div>
        <footer class="footer">
            <div class="container-fluid footer-content">
                <div class="pull-right">
                    <div class="text-right"><a href="https://github.com/Yuiffy/suiji-sui-button" target="_blank">{{$t("info.toGithub")}} <img src="https://img.shields.io/github/stars/Yuiffy/suiji-sui-button.svg?style=social"/></a></div>
                    <div class="text-right">{{$t("info.notOfficial")}}</div>
                </div>
<!--                <div>{{$t("info.tlHelpers")}}</div>-->
                <!--<div><p>Me testing out something</p></div>-->
                <div>
                  <a href="https://space.bilibili.com/14279" target="_blank" @click="linkClick">带鱼</a>
                  2024.
                  <span style="color: rgba(0, 0, 0, 0.5)">Credits to monoAI_ for his <a href="https://github.com/monoai/luna-button" target="_blank">Luna Button.</a></span>
                  <span style="color: rgba(0, 0, 0, 0.5)">Credits to zyzsdy for his <a href="https://aquaminato.moe/" target="_blank">Aqua Button.</a></span></div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
@import url('https://fonts.googleapis.com/css2?family=Mina&family=Open+Sans:wght@600&family=PT+Sans&family=Source+Sans+Pro&family=M+PLUS+Rounded+1c:wght@700&display=swap');
body{
    padding-top: 70px;
    //background-image: url('/resources/body_bg.png');
    font-family: 'Open Sans', sans-serif;
}
.navbar-brand {
    //font-family: 'M PLUS Rounded 1c', sans-serif;
}
.nav.navbar-nav li a, .navbar-default .navbar-brand{
    color: white;
    text-shadow: -1px 1px 0 #000,
                  1px 1px 0 #000,
                  1px -1px 0 #000,
                  -1px -1px 0 #000;
}
.navbar-default .navbar-brand:hover{
    color: #f2a8cd;
}
.navbar-default .navbar-brand:focus{
    color: #c8b1e5;
}
.nav.navbar-nav li a:hover{
    color: #f2a8cd;
}
.nav.navbar-nav li a:active,
.nav.navbar-nav li a:focus,
.nav.navbar-nav.navbar-right li a:focus{
    color: #c8b1e5;
}
.nav a:hover{
    border-bottom: 2px solid #d84d4c;
}
.navbar {
    min-height: 55px;
}
.navbar-inner{
    background-size: contain;
    //background-image: url('/resources/navbar_bg.png');
    background-repeat: repeat-x;
    border-bottom: 3px solid #fcd6d1;
}
.main-content{
    min-height: 100vh;
}
.footer {
    width: 100%;
    height: auto;
    background-color: #fdf3ee;
    border-top: 3px solid #fcd6d1;
}
.footer-content {
    padding-top: 10px;
    color: #666;
}
.text-right{
    text-align: right;
}
</style>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Modal from './components/modal.vue'
import CountryFlag from 'vue-country-flag'
//import fetchpost from './util/fetchpost'

@Component({
    components:{
        Modal,
        CountryFlag
    }
})
class App extends Vue {
    get currentLang(){
        return this.$i18n.locale;
    }
    get changeFlag(){
        if(this.currentLang == 'en-US') {
            return 'us';
        } else if (this.currentLang == 'ja-JP'){
            return 'jp';
        } else if (this.currentLang == 'zh-TW'){
            return 'tw';
        } else if (this.currentLang == 'ms-MY'){
            return 'my';
        } else if (this.currentLang == 'zh-CN'){
            return 'cn';
        } else {
            return 'ph';
        }
    }
    created(){
        //eslint-disable-next-line
        console.log("Nanora!");
        this.$i18n.locale = localStorage.getItem("lang") || this.$i18n.locale;
    }
    chlang(v){
        this.$i18n.locale = v;
        localStorage.setItem("lang", v);
    }
    linkClick(){
        // NOTE: Consider using Vuex instead of an event bus.
        this.$gConst.globalbus.$emit('play', {
            src: "voices/thank_daiyu_ship.MP3",
        })

        //eslint-disable-next-line
        // console.log("Thank you too ルーナ姫 for being an inspiration. I would've not done this without your smile and joy inspiring me every stream!");
        //eslint-disable-next-line
        // console.log("ルーナちゃんありがちゅ！");
    }
}

export default App;
</script>
