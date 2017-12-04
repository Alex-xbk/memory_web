<template>
<div>
  这里要做日历📅吗
  <vue-event-calendar :events="demoEvents" @monthChanged="" @dayChanged="">
  </vue-event-calendar>
</div>
</template>
<script>
export default {
  data() {
    return {
      demoEvents: [{
          date: '2017/11/11',
          title: 'eat',
          desc: 'new description!'
        },
        {
          date: '2017/11/12',
          title: 'eat meat',
          desc: 'new description!'
        },
        {
          date: '2017/11/13',
          title: 'eat meat',
          desc: 'new description!'
        },
        {
          date: '2017/11/14',
          title: 'eat meat',
          desc: 'new description!'
        },
        {
          date: '2017/11/15',
          title: 'eat meat',
          desc: 'new description!'
        },
        {
          date: '2017/11/16',
          title: 'eat meat',
          desc: 'new description!'
        },
        {
          date: '2017/11/17',
          title: 'eat meat',
          desc: 'new description!'
        },
        {
          date: '2017/11/18',
          title: 'eat meat',
          desc: 'new description!'
        },
        {
          date: '2017/11/19',
          title: 'eat meat',
          desc: 'new description!'
        },
      ],
    }
  }
}
</script>
