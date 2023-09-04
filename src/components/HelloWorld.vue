<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      浙江启动海上防台风应急响应、部分列车停运，“三台共舞”将有哪些影响？
    </p>
    <img src="@/assets/img.png" alt="" width="600">
    <h3>“苏拉”台风动态</h3>
    <img src="@/assets/img_2.png" alt="" width="600">
    <ul>
      <li>今年第9号台风“苏拉”（超强台风级）的中心今天14时位于广东汕尾市东偏南方向约305公里。</li>
      <li>预计，“苏拉”将以每小时10-15公里的速度向西北方向移动，强度缓慢减弱，将于9月1日下午至夜间在广东惠来到香港一带沿海登陆（强台风级或超强台风级，45-52米/秒，14-16级），也不完全排除在广东东部近岸海面向西偏南方向移动的可能。</li>
    </ul>
    <h3>“海葵”台风动态</h3>
    <img src="@/assets/img_3.png" alt="" width="600">
    <ul>
      <li>今年第11号台风“海葵”（强热带风暴级），今天14时中心距离菲律宾马尼拉东偏北方向约1410公里洋面上。</li>
      <li>预计“海葵”将以每小时20-25公里的速度向西偏北方向移动，强度逐渐加强，并将于9月1日夜里进入东海东南部海域。</li>
    </ul>
    <h3>“鸿雁”生成消息</h3>
    <img src="@/assets/img_4.png" alt="" width="600">
    <ul>
      <li>今年第12号台风“鸿雁”（KIROGI；名字来源：朝鲜；名称意义：一种候鸟，大雁）于昨天（30日）晚上在西北太平洋洋面生成，其中心今天14时位于距离日本九州岛东南方向约2940公里，中心附近最大风力有10级（28米/秒），中心最低气压为982百帕。</li>
      <li>预计，“鸿雁”将以每小时25-30公里的速度向北偏西方向移动，强度继续增强。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
