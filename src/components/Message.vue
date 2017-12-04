<template>
<div>
  <div>
    <div style="float:left;width:33%;height:200px;border:1px black solid;">
      <div class="block">
        <!-- <span class="demonstration">带快捷选项</span> -->
        <el-date-picker v-model="value" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1"></el-date-picker>
      </div>
      这里做一个日历📅 这个东西用作添加挺好的
    </div>
    <div style="float:right;width:33%;height:200px;border:1px black solid;">
      <textarea placeholder="当日消息" style="width:100%;height:200px;"></textarea>
    </div>
  </div>
  <div>
    <div style="float:left;width:33%;height:200px;border:1px black solid; clear:both;margin-top:5px;">
      这里位于日历的下方，可以显示选择选择日历日期里当天的消息
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value: '',
    }
  }
}
</script>
