<template>
    <div class="hotBlog_container" span="12">
        <Row>
            <div class="title">热门博客</div>
        </Row>
        <Row>
            <ul class="list_container">
                <li v-for="item in blogs">{{item.title}}</li>
            </ul>
        </Row>
    </div>
</template>

<script src="./HotBlogs.js"></script>
<style lang="scss" src="./HotBlogs.scss" scoped></style>