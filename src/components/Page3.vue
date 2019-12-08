<template>
  <div class="form-group">
    <label class="control-label">このメンバーでゲームを開始します</label>
    <ul>
      <li v-for="(value, key) in peopleNames" :key="key">
        {{ value.name }}さん
      </li>
    </ul>
    <countdown :left-time="sessionTime" :auto-start="false" ref="cnt">
      <button slot="before" class="btn btn-primary mx-2" @click="doRestart">ゲーム開始</button>
      <div
        slot="process"
        slot-scope="letswordwolf">
        <h1 class="mb-3">{{ `${letswordwolf.timeObj.m}分 ${letswordwolf.timeObj.s}秒` }}</h1>
        <button class="btn btn-secondary mx-2" @click="doFinish">強制終了</button>
      </div>
      <div slot="finish">
        <h1 class="mb-3">終了！</h1>
        <p>誰がワードウルフか当ててください</p>
        <button class="btn btn-primary mx-2" @click="nextPage">結果発表</button>
      </div>
    </countdown>
  </div>
</template>

<script>
export default {
  name: 'Page3',
  props: {
    peopleNames: Array,
    sessionTime: Number,
    pageNumber: Number,
  },
  methods: {
    doRestart: function(){
      this.$refs.cnt.startCountdown()
    },
    doFinish: function(){
      this.$refs.cnt.finishCountdown()
    },
    nextPage: function(){
      this.$emit("input", 'lastPage')
    }
  }
}
</script>

<style scoped>
  li{
    text-align: left;
  }
</style>