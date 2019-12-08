<template>
  <div class="form-group">
    <p v-if="pageNumber==2&&!viewTheme" class="info">{{peopleNumber}}人でゲームを開始します<br><span @click="$emit('toTop')">人数を変更する</span></p>
    <label v-if="!viewTheme" class="control-label">{{peopleCount}}番目の方、名前を入力してください</label>
    <input v-if="!viewTheme" class="form-control mb-3" type="text" placeholder="例）山田 太郎" :value="peopleName" @input="updateValue">
    <label v-if="viewTheme" class="control-label">{{peopleName}}さんのテーマは</label>
    <h1 v-if="viewTheme">{{peopleTheme}}</h1>
    <p v-if="viewTheme">[次へ]を押して次の人へ渡してください</p>
    <button v-if="peopleCount<=peopleNumber" class="btn btn-primary mx-2" @click="$emit('nextPage')">次へ</button>
  </div>
</template>

<script>
export default {
  name:'Page2',
  props: {
    pageNumber: Number,
    peopleNumber: Number,
    peopleCount: Number,
    peopleName: String,
    peopleTheme: String,
    viewTheme: Boolean,
  },
  methods: {
    updateValue: function(e) {
      this.$emit("input", e.target.value)
    }
  }
}
</script>

<style scoped>
.info span{
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
