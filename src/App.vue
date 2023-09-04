<template>
  <div @mousemove="mouseMove">
    <img alt="Vue logo" src="./assets/img_1.png" width="100">
    <div style="display: flex;align-items: center;justify-content: center;margin-top: 20px">
      <button v-if="flag===false" @click="flag = true">开启语音指读</button>
      <button v-else @click="flag = false">关闭语音指读</button>
    </div>
    <HelloWorld msg="语音播报demo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {handleSpeak, handleStop} from "@/until/tts";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      text: "",
      flag: false
    }
  },
  methods: {
    mouseMove (event) {
      // console.log(event.target.innerText)
      if (this.text !== event.target.innerText && this.flag) {
        handleStop("")
        this.text = event.target.innerText
        handleSpeak(this.text)
      }

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
