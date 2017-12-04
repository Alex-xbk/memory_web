<template>
<el-table :data="tableData" style="width: 100%">
  <el-table-column label="姓名" width="90">
    <template slot-scope="scope">
    <div slot="reference" class="name-wrapper">
      <el-tag size="medium">{{ scope.row.name }}</el-tag>
    </div>
  </template>
  </el-table-column>
  <el-table-column label="年龄" EditType="TextBox" width="90">
    <template slot-scope="scope">
      <p>{{ scope.row.age }}</p>
  </template>
  </el-table-column>
  <el-table-column label="性别" width="90">
    <template slot-scope="scope">
      <p>{{ scope.row.gender }}</p>
  </template>
  </el-table-column>
  <el-table-column label="用户名" width="90">
    <template slot-scope="scope">
      <p>{{ scope.row.username }}</p>
  </template>
  </el-table-column>
  <el-table-column label="密码" width="90">
    <template slot-scope="scope">
      <p>{{ scope.row.password }}</p>
  </template>
  </el-table-column>
  <el-table-column label="兴趣" width="90">
    <template slot-scope="scope">
      <p>{{ scope.row.hobby }}</p>
  </template>
  </el-table-column>
  <el-table-column label="操作">
    <template slot-scope="scope">
    <el-button
      size="mini"
      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
    <el-button
      size="mini"
      type="danger"
      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
  </template>
  </el-table-column>
</el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  beforeCreate: function() {
    this.$http.post(
      'http://localhost:8010/girl',
      // 请求账号密码发送数据给服务端
      {

      }).then(function(resp) {
      console.log(resp);
      this.tableData = resp.body;
      // 成功回调
    }, function(resp) {
      // 失败回调
      console.log(resp);
      alert('error');
    });



    this.$http.post(
      'http://localhost:8010/girlage',
      // 请求账号密码发送数据给服务端
      {

      }).then(function(resp) {
      console.log(resp);
      // 成功回调
    }, function(resp) {
      // 失败回调
      console.log(resp);
      alert('error');
    });
  }


}
</script>
