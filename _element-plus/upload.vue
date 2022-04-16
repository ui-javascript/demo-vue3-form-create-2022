<template>
  <form-create
    v-model="value"
    v-model:api="fApi"
    :rule="rule"
    :option="option"
  ></form-create>
</template>

<script setup>
const fApi = {};
//表单数据
const value = {};
//表单生成规则
const rule = [
  {
    type: "upload",
    field: "pic",
    title: "轮播图",
    value: [
      "http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg",
      "http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg",
    ],
    props: {
      type: "select",
      uploadType: "image",
      action: "/upload.php",
      name: "pic",
      multiple: true,
      accept: "image/*",
      limit: 2,
      onSuccess: function (res, file) {
        file.url = res.data.filePath;
      },
    },
  },
];
//组件参数配置
const option = {
  onSubmit: (formData) => {
    alert(JSON.stringify(formData));
  },
  resetBtn: true,
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
