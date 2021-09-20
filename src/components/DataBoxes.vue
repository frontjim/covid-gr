<template>
	<div class="grid md:grid-cols-2 gap-4 dark:text-white dark:text-opacity-60 dark:bg-pri">
		<!-- Box 1-->
		<div class="shadow-md bg-blue-100 p-10 text-center rounded-xl dark:bg-sec ">
			<h3 class="text-3xl text-blue-900 font-bold mb-4 dark:text-white dark:text-opacity-60">Κρούσματα</h3>
			<div class="text-2xl mb-4">
				<span class="font-bold">Νέα:</span>
				{{numberWithCommas(stats.slice(-1)[0].confirmed - stats.slice(-2)[0].confirmed)}}
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold">Σύνολo:</span>
				{{numberWithCommas(stats.slice(-1)[0].confirmed)}}
			</div>
		</div>
		<!-- Box 2-->
		<div class="shadow-md bg-blue-100 p-10 text-center rounded-xl dark:bg-sec">
			<h3 class="text-3xl text-blue-900 font-bold mb-4 dark:text-white dark:text-opacity-60">Απώλειες</h3>
			<div class="text-2xl mb-4">
				<span class="font-bold">Νέες:</span>
				{{numberWithCommas(stats.slice(-1)[0].deaths - stats.slice(-2)[0].deaths)}}
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold">Σύνολο:</span>
				{{numberWithCommas(stats.slice(-1)[0].deaths)}}
			</div>
		</div>
		<!-- Box 3 -->
		<div class="shadow-md bg-blue-200 p-10 text-center rounded-xl dark:bg-sec">
			<h3 class="text-3xl text-blue-900 font-bold mb-4 dark:text-white dark:text-opacity-60">Κρίσιμα Περιστατικά</h3>
			<div class="text-2xl mb-4">
				<span class="font-bold">Νέα:</span>
				{{numberWithCommas(crusial.slice(-2)[0].intensive_care - crusial.slice(-1)[0].intensive_care)}}
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold">Σύνολο:</span>
				{{numberWithCommas(crusial.slice(-1)[0].intensive_care)}}
			</div>
		</div>
		<!-- Box 4 -->
		<div class="shadow-md bg-blue-200 p-10 text-center rounded-xl dark:bg-sec">
			<h3 class="text-3xl text-blue-900 font-bold mb-4 dark:text-white dark:text-opacity-60">Εμβολιασμοί</h3>
			<div class="text-2xl mb-4">
				<span class="font-bold">Πλήρως Εμβολιασμένοι:</span>
				{{numberWithCommas(emvolia["totaldistinctpersons"])}}
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold">Συνολο Δόσεων:</span>
				{{numberWithCommas(emvolia["totalvaccinations"])}}
			</div>
		</div>
		<!-- Box 5 -->
		<div class="shadow-md bg-blue-200 p-10 text-center rounded-xl dark:bg-sec">
			<h3 class="text-3xl text-blue-900 font-bold mb-4 dark:text-white dark:text-opacity-60">Ποσοστά Ανα Φύλλο</h3>
			<div class="text-2xl mb-4">
				<span class="font-bold">Άνδρες:</span>
				{{gender.total_males_percentage}} %
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold">Γυναίκες:</span>
				{{gender.total_females_percentage}} %
			</div>
		</div>
		<!-- Box 6 -->
		<div class="shadow-md bg-blue-200 p-10 text-center rounded-xl dark:bg-sec">
			<h3 class="text-3xl text-blue-900 font-bold mb-4 dark:text-white dark:text-opacity-60">Tests</h3>
			<div class="text-2xl mb-4">
				<span class="font-bold">Rapid Tests:</span>
				{{numberWithCommas(tests["rapid-tests"])}}
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold">PCR Τests:</span>
				{{numberWithCommas(tests.tests)}}
			</div>
		</div>
	</div>
			<!--Box-7 -->
		<div class="shadow-md  bg-blue-200 p-10 text-center rounded-xl mt-5 dark:bg-sec ">
				<h3 class="text-3xl text-blue-900 dark:text-white dark:text-opacity-60 font-bold mb-4 dark:text-white dark:text-opacity-60">Στατιστικά Ανα Ηλικία</h3>
				<div class="text-xl mb-10 ">
					<span class="font-bold">Mέσος Όρος Ηλικίας Απωλειών:</span>
					{{numberWithCommas(ages.average_death_age)}} Ετών
				</div>
				<div class="grid sm:divide-y md:grid-cols-3 md:divide-x divide-black dark:divide-white dark:divide-opacity-60 ">
				<div class="text-2xl mb-4 text-center flex-col justify-center self-center">
					<span class="font-bold underline">Κρούσματα</span>
						<span class="font-bold block mt-3">0-17: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.cases["0-17"])}}</span></span>
						<span class="font-bold block mt-3">18-39: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.cases["18-39"])}}</span></span>
						<span class="font-bold block mt-3">40-64: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.cases["40-64"])}}</span></span>
						<span class="font-bold block mt-3">65+: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.cases["65+"])}}</span></span>
				</div>			
				<div class="text-2xl mb-4 pt-4">
					<span class="font-bold underline">Απώλειες</span>
						<span class="font-bold block mt-3">0-17: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.critical["0-17"])}}</span></span>
						<span class="font-bold block mt-3">18-39: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.critical["18-39"])}}</span></span>
						<span class="font-bold block mt-3">40-64: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.critical["40-64"])}}</span></span>
						<span class="font-bold block mt-3">65+: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.critical["65+"])}}</span></span>
				</div>
				<div class="text-2xl pt-4">
					<span class="font-bold underline">Κρίσιμα</span>
					<span class="font-bold block mt-3">0-17: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.deaths["0-17"])}}</span></span>
						<span class="font-bold block mt-3">18-39: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.deaths["18-39"])}}</span></span>
						<span class="font-bold block mt-3">40-64: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.deaths["40-64"])}}</span></span>
						<span class="font-bold block mt-3">65+: <span class="font-normal">{{numberWithCommas(ages.total_age_groups.deaths["65+"])}}</span></span>
				</div>
			</div>
		</div>
			<!-- Box 8 -->
		<div class="shadow-md bg-blue-200 p-10 text-center rounded-xl mt-5 dark:bg-sec">
			<h3 class="text-3xl text-blue-900 font-bold mb-4 dark:text-white dark:text-opacity-60">Κρούσματα ανά Noμό</h3>
			<h2 class="text-2xl mt-4 mb-8 font-bold underline">{{time}}</h2>
			<div class="text-2xl mb-4">
				<span class="font-bold">Νομός:</span>
				{{title}}
			</div>			
			<div class="text-2xl mb-4">
				<span class="font-bold">Νέα: </span>
				<span v-if="adata.cases ">{{numberWithCommas(adata.cases - bdata.cases)}}</span>
				<span v-else></span>
			</div>
			<div class="text-2xl mb-4">
				<span class="font-bold">Σύνολο: </span>
				<span v-if="adata.cases ">{{numberWithCommas(adata.cases)}}</span>
				<span v-else> Δεν υπάρχουν ακόμη πληροφορίες.</span>
			</div>
			<div class="text-2xl mb-4 ">
			<select @change="onChange" v-model="selected" class="form-select  mt-10 block w-full border p-3 rounded-xl  appearance-none bg-white  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline dark:text-white dark:text-opacity-60 dark:bg-pri">
				<option value="0">Διάλεξε Περιοχή</option>
				<option v-for="area, in areas" :key="area.ID" :value="area.area_gr" class="text-black">
					{{area.area_gr}}
				</option>
	</select>
			</div>
		</div>
				
</template>

<script>
import moment from 'moment'
export default {
	name: 'DataBoxes',
	props :['stats','crusial','emvolia','areas','title','adata','bdata','date','ages','gender', 'tests'],
	data(){
		return{
			selected:0,
		}
	},

	methods: {
		numberWithCommas(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
			
		},
		onChange() {
			const area = this.areas.find((item) => item.area_gr === this.selected)
			this.$emit('get-area', area)
			}
},
computed: {
		time: function() {
			return moment(this.date).locale("el").format('LL') 
		}
	},
emits:['get-area'],

}
</script>