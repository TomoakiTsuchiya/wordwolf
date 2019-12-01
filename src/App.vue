<template>
  <div id="app">
    <div class="container py-5">
      <div class="row">
        <div class="mw-25 mx-auto">
          <h1>Let's Wordwolf</h1>
          <p>Step:{{stepNumber}}</p>
          <Page1 v-if="stepNumber==1" v-model="form.people" :people="form.people" :schemas="schemas.people" />
          <Page2 v-if="stepNumber!==1&&stepNumber-2<form.people" v-model="form.peopleName" :peopleNum="stepNumber-1" type="text" placeholder="例）山田 太郎" />
          <pre><code>{{ form }}</code></pre>
          <button class="btn btn-primary mx-2" @click="backStep" v-if="stepNumber>1">戻る</button>
          <button class="btn btn-primary mx-2" @click="nextStep">次へ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

export default{
  name:'app',
  components:{
    Page1,
    Page2,
  },
  data(){
    return {
      stepNumber: 1,
      form: {
        people: 4,
        peopleName: '',
        peopleNames: [],
        theme : '',
        joker : ''
      },
      schemas: {
        people: [
          { label: "3人", value: "3" },
          { label: "4人", value: "4" },
          { label: "5人", value: "5" },
          { label: "6人", value: "6" },
          { label: "7人", value: "7" },
          { label: "8人", value: "8" },
          { label: "9人", value: "9" },
          { label: "10人", value: "10" }
        ],
        theme: [
          { joker: "リンゴ", other: "なし（果物）" },
          { joker: "ハサミ", other: "包丁" },
          { joker: "給食", other: "お弁当" },
          { joker: "唐辛子", other: "タバスコ" },
          { joker: "マクドナルド", other: "モスバーガー" }
        ]
      }
    }
  },
	methods:{
    backStep:function(){
      this.stepNumber--
      if(this.stepNumber==1){
        this.form.peopleNames=[]
      }
    },
    nextStep:function(){
      this.stepNumber++
      if(this.stepNumber==2){
        let setTheme=Math.floor(Math.random()*this.schemas.theme.length)
        this.form.theme=this.schemas.theme[setTheme]
        let setJoker=Math.floor(Math.random()*this.form.people)+1
        this.form.joker=setJoker
      }
      if(this.stepNumber-2<=this.form.people){
        if(this.form.peopleName=='')return
        let theme=(this.stepNumber-2==this.form.joker)?this.form.theme.joker:this.form.theme.other
        this.form.peopleNames.push({name:this.form.peopleName,theme:theme})
        this.form.peopleName=""
      }
    }
	},
}
</script>

<style>
body{
  background-color: #000;
}

#app {
  font-family: 'Courgette', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
