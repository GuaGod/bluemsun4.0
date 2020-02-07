<template>
    <div class="container">
        <ul class="button_container">
            <li class="tab_container">
                <Tabs :value="value" type="line" @on-click="onClickTab">
                    <TabPane label="前端" name="前端"></TabPane>
                    <TabPane label="后端" name="后端"></TabPane>
                    <TabPane label="热度" name="热度"></TabPane>
                </Tabs>
            </li>
            <li>
                <Input v-model="searchContent"
                       placeholder="输入关键字查找"
                       search
                       enter-button
                       @on-search="onClickSearch"/>
            </li>
        </ul>
        <ul class="inviation_container" v-if="invitationArray.length !== 0">
            <invitation-item v-for="item in invitationArray" :invitation="item" :key="item.blogId"></invitation-item>
        </ul>
        <div class="invitation_none_tip" v-if="invitationArray.length === 0">无相关博客</div>
        <div class="naviagte_container" v-if="invitationArray.length !== 0">
            <Page :total="total" 
                  show-elevator 
                  :current="currentPage"
                  @on-change="onChangePage"/>
        </div>
    </div>
</template>

<script src="./Invitation.js"></script>
<style lang="scss" src="./Invitation.scss" scoped></style>