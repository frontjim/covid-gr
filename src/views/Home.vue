<template>
  <main v-if="!loading">
    <DataTitle :dataDate="dataDate" />
    <DataBoxes :tests="tests" :gender="gender" :ages="ages" :date="date" :bdata="bdata" :adata="adata" :title="title" :stats="stats" :crusial="crusial" :emvolia="emvolia" :areas="areas" @get-area="getAreaData"  />
  </main>


  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Ανάκτηση Δεδομένων...
    </div>
    <img :src="loadingImage" class="w-12 m-auto" alt="">
  </main>
</template>

<script>
import DataTitle from '@/components/DataTitle'
import DataBoxes from '@/components/DataBoxes'
export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes
  },
  data() {
    return{
      loading: true,
      title:'',
      dataDate:'',
      stats:{},
      loadingImage: require('../assets/bmc.gif'),
      crusial:{},
      emvolia:{},
      areas:[],
      xthareas:[],
      adata:{},
      bdata:{},
      date:'',
      ages:{},
      tetst:{},
      gender:{}
    }

  },
  methods: {
    getAreaData(area) {
      this.title = area["area_gr"]
      this.adata = area
      const barea = this.xthareas.find((item) => item["area_gr"] === area["area_gr"])
      this.bdata = barea
      
    },
    async fetchData() {
      const res = await fetch('https://covid-19-greece.herokuapp.com/all')
      const data = await res.json()
      return data
    },
    async fetchCrusial() {
      const res = await fetch('https://covid-19-greece.herokuapp.com/intensive-care')
      const data = await res.json()
      return data
    },
    async fetchEmvolia(){
      const res = await fetch('https://covid-19-greece.herokuapp.com/total-vaccinations')
      const data = await res.json()
      return data      
    },
    async fetchAreas(){
      const res = await fetch('https://covid-19-greece.herokuapp.com/regions-history')
      const data = await res.json()
      return data   
    },
    async fetchAges(){
      const res = await fetch('https://covid-19-greece.herokuapp.com/age-distribution')
      const data = await res.json()
      return data  
    },
    async fetchTests(){
      const res = await fetch('https://covid-19-greece.herokuapp.com/total-tests')
      const data = await res.json()
      return data  
    },
    async fetchFylla(){
      const res = await fetch('https://covid-19-greece.herokuapp.com/gender-distribution')
      const data = await res.json()
      return data  
    }
  },
  async created() {
    const data = await this.fetchData() //all
    const cdata = await this.fetchCrusial() //crusial
    const edata = await this.fetchEmvolia() //emvolia
    const perioxes = await this.fetchAreas() //areas
    const ilik = await this.fetchAges() //ages
    const test = await this.fetchTests() //tests
    const fylla = await this.fetchFylla()

    //all data
    this.stats = data.cases
    this.dataDate = data.cases.slice(-1)[0].date
    this.loading = false
    //crusial
    this.crusial = cdata.cases
    //emvolia
    this.emvolia = edata["total-vaccinations"]
    //areas
    this.areas = perioxes["regions-history"].slice(-1)[0].regions
    this.xthareas = perioxes["regions-history"].slice(-2)[0].regions
    this.date = perioxes["regions-history"].slice(-1)[0].regions[0].last_updated_at
    //ilikies
    this.ages = ilik.age_distribution
    //tests
    this.tests = test.total_tests.slice(-1)[0]
    //gender
    this.gender = fylla.gender_percentages
  },

}
</script>
