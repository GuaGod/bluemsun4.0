<template>
    <div>
        <Row>
          <Col :lg="{span: 24}" :md="{span: 24}">
            <div class="container">
                <div class="base_info">
                    <div class="title">{{blog.title}}</div>
                    <div class="blogClass">{{blog.blogClass}}</div>
                    <div class="author">{{blog.author}}</div>
                    <div class="date">{{blog.date}}</div>
                </div>
                <div class="content" v-html='blog.content'></div>
            </div>
          </Col>
        </Row>
    </div>
</template>

<script src="./BlogReader.js"></script>
<style lang="scss" src="./BlogReader.scss" scoped></style>