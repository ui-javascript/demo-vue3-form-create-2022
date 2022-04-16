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
    type: "DatePicker",
    field: "section_day",
    title: "活动日期",
    value: ['2018-02-20', '2021-02-15'],
    props: {
        type: "datetimerange",
        format: "yyyy-MM-dd HH:mm:ss",
        placeholder:"请选择活动日期",
    }
}
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
