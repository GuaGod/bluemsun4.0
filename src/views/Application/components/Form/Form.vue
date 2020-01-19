<template>
  <div class="container">
    <Row>
      <Col span="10" class="left_layerout">
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
      </Col>
      <Col span="12" class="right_layerout"></Col>
    </Row>
  </div>
</template>

<script src="./Form.js"></script>
<style lang="scss" src="./Form.scss" scoped></style>