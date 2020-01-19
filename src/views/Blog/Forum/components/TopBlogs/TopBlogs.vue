<template>
    <div class="container">
                <div class="title">置顶</div>
                <ul class="list_container">
                    <invitation-item v-for="item in invitationArray" :invitation="item"></invitation-item>
                </ul>
    </div>
</template>

<script src="./TopBlogs.js"></script>
<style lang="scss" src="./TopBlogs.scss" scoped></style>