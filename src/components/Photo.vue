<template>
<div>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in item" :key="item">
      <h3><img :src="item"/></h3>
    </el-carousel-item>
  </el-carousel>
  <el-date-picker v-model="phototime" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1" value-format="yyyy-MM-dd"></el-date-picker>
  <button @click="findByDate(phototime)">查找</button>
  <h1>{{this.phototime}}</h1>
  <div v-for="photo in findPhoto">
    <img :src="photo.src" />
  </div>
  <div v-for="photo1 in photo2" style="width:100%;">
    <h1 style="float:left">{{photo1.createtime}}</h1>
    <img :src="photo1.src" />
  </div>

  <div>
    <button>添加图片</button>
  </div>
  <div>
    在这里展示图片 需要做换页的处理
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      createtime:'',
      phototime: '',
      item: ['../../static/image/2.jpeg', '../../static/image/1.jpg'],
      findPhoto: [],
      photo2: [],
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
      photo:[{
        time:'2017-11-24',
        src:'../../static/image/2.jpeg',
      },
      {
          time:'2017-11-23',
          src:'../../static/image/1.jpg',
      }],
    }
  },
  methods: {
    findByDate(createtime) {
      this.$http.post(
        'http://localhost:8010/findPhotoByDate', {
          createtime: this.phototime
        }).then(function(resp) {
        console.log(resp);
        if (resp.body == null) {
          this.findPhoto = '无';
        } else {
          this.findPhoto = resp.body;
        }
        // 成功回调
      }, function(resp) {
        // 失败回调
        console.log(resp);
        alert('error');
      });
    },
  },

  beforeCreate: function() {
    this.$http.post(
      'http://localhost:8010/showPhoto',
      // 请求账号密码发送数据给服务端
      {

      }).then(function(resp) {
      console.log(resp);
      this.photo2 = resp.body;
      // 成功回调
    }, function(resp) {
      // 失败回调
      console.log(resp);
      alert('error');
    });


  }
}
</script>
