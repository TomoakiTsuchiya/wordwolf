<template>
  <div class="form-group">
    <div v-if="!lastchance">
      <label class="control-label">今回の人狼は...</label>
      <p>{{joker.name}}さんでした。<br>お題は...</p>
      <h1>{{joker.theme}}</h1>
      <p>でした。</p>
      <p>ラストチャンス！<br>市民のお題を当てたら人狼の逆転勝利！</p>
      <button class="btn btn-primary mx-2" @click="lastChallenge">ラストチャレンジ</button>
    </div>
    <div v-if="lastchance">
      <label class="control-label">市民のお題は...</label>
      <h1>{{other}}</h1>
      <p>でした。</p>
      <button class="btn btn-primary mx-2" @click="$emit('set')">トップに戻る</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page4',
  props: {
    peopleNames: Array,
  },
  data() {
    return {
      lastchance: false
    }
  },
  computed: {
    joker: function(){
      let joker=this.peopleNames.find(item=>item.joker==true)
      return joker
    },
    other: function(){
      let other=this.peopleNames.find(item=>item.joker!=true)
      return other.theme
    }
  },
  methods:{
    lastChallenge: function(){
      this.lastchance=true
    }
  }
}
</script>
