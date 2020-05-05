<template>
  <div class="container">
    <Row>
        <Upload
          ref="upload"
          :show-upload-list="false"
          :default-file-list="defaultList"
          :on-success="handleSuccess"
          :format="['jpg','jpeg','png']"
          :max-size="2048"
          :on-format-error="handleFormatError"
          :on-exceeded-size="handleMaxSize"
          :before-upload="handleBeforeUpload"
          action="//jsonplaceholder.typicode.com/posts/"
          style="width:120px;height:120px;"
        >
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">姓名</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">专业</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">性别</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">年级</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">面试职位</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">年龄</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">学号</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">手机</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">QQ</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">邮箱</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">寝室</span>
      </i-input>
    </Row>
    <Row>
      <i-input>
        <span slot="prepend">年级</span>
      </i-input>
    </Row>
  </div>
</template>

<script src="./Form.js"></script>
<style lang="scss" src="./Form.scss" scoped></style>