<template>

<div>
  <!-- <img src="../image/3.gif"/> -->
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
  <el-tab-pane label="消息" name="first"><message></message></el-tab-pane>
  <el-tab-pane label="经历" name="second"><experience></experience></el-tab-pane>
  <el-tab-pane label="照片" name="third"><photo></photo></el-tab-pane>
  <el-tab-pane label="名人" name="fourth"><celebrity></celebrity></el-tab-pane>
</el-tabs>

<!--
  <md-tabs class="md-primary" md-centered>
    <md-tab id="tab-message" md-label="Message">
      <message></message>
    </md-tab>


    <md-tab id="tab-experience" md-label="Experience">
      <experience></experience>
    </md-tab>



    <md-tab id="tab-photo" md-label="Photo">
      <photo></photo>
    </md-tab>


    <md-tab id="tab-celebrity" md-label="Celebrity">
      <celebrity></celebrity>
    </md-tab>
  </md-tabs> -->
</div>
</div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
       activeName2: 'first',
    }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
};
</script>
<style>
.el-tabs__item {
    padding: 0 20px;
    height: 40px;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 20px;
    font-weight: 500;
    color: #2d2f33;
    position: relative;
}
</style>
