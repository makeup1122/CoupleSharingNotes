<!--
 @Author: libing/makeup1122
 @Email: makeup1123@163.com
 @Date: "2020-10-22 16:19:40"
-->
<template>
  <v-container>
    <v-row>
      <v-col v-for="item in auto" :key="item.title">
        <v-card>
          <v-card-title>{{item.title}}</v-card-title>
          <v-card-text>
            <audio controls :src="item.src"></audio>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-for="item in qiaohu" :key="item.title">
        <v-card>
          <v-card-title>{{item.title}}</v-card-title>
          <v-card-text>
            <audio controls :src="item.src"></audio>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Audio',
  components: {},
  data: function () {
    return {
      auto: [
        { title: '水泥搅拌车', src: 'https://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/ljM4-BsQvpPyKdMtu63poC56_OGo', text: '' },
        { title: '消防车', src: 'http://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/lmlJmOSEf5YjkJD_9YDwY6r3Dtir', text: '' },
        { title: '垃圾车', src: 'http://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/lghmtdOx3i_pAo8CB4yH2xltNzzB', text: '' },
        { title: '出租车', src: 'http://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/luOYCmJTyWspQ_PANcdlmBS7lbH1', text: '' },
        { title: '卡车', src: 'http://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/liM_CNk_kbJZpCBdRsUEPkBJuJ8D', text: '' },
        { title: '警车', src: 'http://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/ltMv5vPlKAvwsCa7spssvqitmzoZ', text: '' },
        { title: '公交车', src: 'http://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/li0KfB6vD-mfMoKoK4PdhRVz_8_Z', text: '' },
        { title: '救护车', src: 'http://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/lqpfV-9JP6HuFxEb4TBl-94ubdlc', text: '' }
      ],
      qiaohu: [
        { title: '西红柿', src: 'https://tcv.clewm.net/f0ZhdfBuStBT1zwU3OUQUMDT9tQ=/ljM4-BsQvpPyKdMtu63poC56_OGo', text: '' }
      ]
    }
  },
  computed: {},
  created: function () {
  },
  methods: {}
}
</script>
<style scoped>
</style>
