<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">Bluemsun</div>
                    <div class="layout-nav">
                        <MenuItem name="blog">
                            <Icon type="ios-navigate"></Icon>
                            博客区
                        </MenuItem>
                        <MenuItem name="production">
                            <Icon type="ios-keypad"></Icon>
                            作品区
                        </MenuItem>
                        <MenuItem name="application">
                            <Icon type="ios-analytics"></Icon>
                            报名
                        </MenuItem>
                        <MenuItem name="register">
                            <Icon type="ios-paper"></Icon>
                            注册
                        </MenuItem>
                        <MenuItem name="quit">
                        <Icon type="ios-paper"></Icon>
                            安全退出
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1', '2'] ">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                审核
                            </template>
                            <MenuItem name="1-1">报名审核</MenuItem>
                            <MenuItem name="1-2">注册审核</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                管理
                            </template>
                            <MenuItem name="2-1">新闻管理</MenuItem>
                            <MenuItem name="2-2">通知管理</MenuItem>
                            <MenuItem name="2-2">作品管理</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                性能监控
                            </template>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                数据分析
                            </template>
                        </Submenu>
                        <Submenu name="5">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                错误管理
                            </template>
                            <MenuItem name="5-1">前端</MenuItem>
                            <MenuItem name="5-2">中间层</MenuItem>
                            <MenuItem name="5-2">后端</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script src="./Manage.js"></script>
<style lang="scss" src="./Manage.scss" scoped></style>