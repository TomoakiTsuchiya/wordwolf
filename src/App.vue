<template>
  <div id="app">
    <div class="container py-5">
      <div class="row">
        <div class="mw-25 mx-auto">
          <h1 class="appTitle">Let's Wordwolf</h1>
          <Page1
            v-if="pageNumber==1"
            v-model="peopleNumber"
            :peopleCount="peopleCount"
            :schemas="schemas.people"
            @nextPage="nextPage"
          />
          <Page2
            v-if="pageNumber>1&&peopleCount<=peopleNumber"
            v-model="peopleName"
            :pageNumber="pageNumber"
            :peopleNumber="peopleNumber"
            :peopleCount="peopleCount"
            :peopleName="peopleName"
            :peopleTheme="peopleTheme"
            :viewTheme="viewTheme"
            @toTop="toTop"
            @nextPage="nextPage"
          />
          <Page3
            v-if="peopleCount>peopleNumber&&pageNumber!='lastPage'"
            v-model="pageNumber"
            :pageNumber="pageNumber"
            :peopleNames="peopleNames"
            :sessionTime="sessionTime"
          />
          <Page4
            v-if="pageNumber=='lastPage'"
            :peopleNames="peopleNames"
            @set="toTop"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'

export default {
  name:'app',
  components: {
    Page1,                //人数入力画面
    Page2,                //名前入力画面
    Page3,                //ゲームスタート画面
    Page4,                //結果画面
  },
  data() {
    return {
      pageNumber:1,       //画面遷移
      peopleCount:0,      //人数カウント
      peopleNumber:3,     //設定人数（初期値は3人）
      peopleName:'',      //名前設定
      peopleNames:[],     //人数分の名前とお題格納
      peopleTheme:'',     //お題を子コンポーネントに渡す
      viewTheme: true,    //お題表示非表示フラグ
      theme:'',           //市民のお題設定
      joker:'',           //ワードウルフのお題設定
      sessionTime:'',     //話し合い時間（1人3分自動セット）
      schemas: {
        people: [         //選択できる人数設定
          { label: "3人", value: 3 },
          { label: "4人", value: 4 },
          { label: "5人", value: 5 },
          { label: "6人", value: 6 },
          { label: "7人", value: 7 },
          { label: "8人", value: 8 },
          { label: "9人", value: 9 },
          { label: "10人", value: 10 }
        ],
        theme: [          //お題設定
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
    toTop: function(){
      this.pageNumber=1
      this.peopleCount=0
      this.peopleNames=[]
    },
    nextPage: function(){
      this.pageNumber++
      if(this.viewTheme||this.pageNumber==2){
        this.peopleName=""
        this.peopleTheme=""
        this.peopleCount++
        this.viewTheme=false
      }else{
        this.viewTheme=true
      }
      if(this.pageNumber==2){
        let setTheme=Math.floor(Math.random()*this.schemas.theme.length)
        this.theme=this.schemas.theme[setTheme]
        let setJoker=Math.floor(Math.random()*this.peopleNumber)+1
        this.joker=setJoker
        this.sessionTime=120000*this.peopleNumber
      }
      if(this.peopleCount<=this.peopleNumber&&this.viewTheme){
        let theme=(this.peopleCount==this.joker)?this.theme.joker:this.theme.other
        this.peopleTheme=theme
        if(this.peopleCount!=this.joker){
          this.peopleNames.push({name:this.peopleName,theme:theme})
        }else{
          this.peopleNames.push({name:this.peopleName,theme:theme,joker:true})
        }
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
  font-family: "M PLUS Rounded 1c";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

.appTitle{
  font-family: 'Courgette', Helvetica, Arial, sans-serif;  
}
</style>
