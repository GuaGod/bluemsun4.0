<template>
    <div class="container">
        <my-header></my-header>
        <Row>
            <Col :lg="{span: 10, offset: 7}" :md="{span: 24}">
                <my-form></my-form>
            </Col>
        </Row>
        <my-footer></my-footer>
    </div>
</template>

<script src="./Application.js"></script>
<style lang="scss" src="./Application.scss" scoped></style>