<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"><router-link to="/" class="home-link">Bluemsun</router-link></div>
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
                    <Menu active-name="examine" theme="light" width="auto" :open-names="['examine', 'manage'] " @on-select="onSelectMenu">
                        <Submenu name="examine">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                审核
                            </template>
                            <MenuItem name="application">报名审核</MenuItem>
                            <MenuItem name="register">注册审核</MenuItem>
                        </Submenu>
                        <Submenu name="manage">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                管理
                            </template>
                            <MenuItem name="news">新闻管理</MenuItem>
                            <MenuItem name="notice">通知管理</MenuItem>
                            <MenuItem name="production">作品管理</MenuItem>
                        </Submenu>
                        <Submenu name="monitor">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                监控
                            </template>
                            <MenuItem name="performance">性能监控</MenuItem>
                        </Submenu>
                        <Submenu name="analyse" @on-select="onSelectMenu">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                分析
                            </template>
                            <MenuItem name="data">数据分析</MenuItem>
                        </Submenu>
                        <Submenu name="error">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                错误管理
                            </template>
                            <MenuItem name="front">前端</MenuItem>
                            <MenuItem name="middle">中间层</MenuItem>
                            <MenuItem name="back">后端</MenuItem>
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