<template>
    <div class="banner" @mouseenter="pauseBanner" @mouseleave="reloadBanner">
        <div class="b1-con b-con" :class="current === 0 ? 'b-active' : ''">
                <div class="img img1"></div>
                <p class="b1-title">蓝旭工作室招聘web前后端</br>2019</p>
                <a class="b1-href">征不平凡的你</a>
        </div>
        <div class="b2-con b-con" :class="current === 1 ? 'b-active' : ''">
            <div class="img img2"></div>
            <p class="b2-title">Bluem 2020</p>
            <a class="b2-href">&lt; 注册成为蓝旭成员 /&gt;</a>
            <p class="b2-content">2020 东北师范大学</p>
        </div>
        <div class="b3-con b-con" :class="current === 2 ? 'b-active' : ''">
            <div class="img img3"></div>
            <p class="b3-title">加入技术论坛</p>
            <a class="b3-href">快速提升专业技术</a>
        </div>
        <div class="b4-con b-con" :class="current === 3 ? 'b-active' : ''">
            <div class="img img4"></div>
            <p class="b4-title">作品展区</p>
            <a class="b4-href">欣赏优秀作品</a>
        </div>
        <nav class="banner-nav">
            <ul id="banner-nav">
                <li data-id="0" :class="current === 0 ? 'active' : ''" @click="switchBanner"></li>
                <li data-id="1" :class="current === 1 ? 'active' : ''" @click="switchBanner"></li>
                <li data-id="2" :class="current === 2 ? 'active' : ''" @click="switchBanner"></li>
                <li data-id="3" :class="current === 3 ? 'active' : ''" @click="switchBanner"></li>
            </ul>
        </nav>
    </div>
</template>

<script src="./Banner.js"></script>
<style lang="scss" scoped src="./Banner.scss"></style>