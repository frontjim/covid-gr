<template>
	<div class="text-center dark:text-white dark:text-opacity-60 dark:bg-pri">
		<h2 class="text-3xl font-bold">Eλλάδα</h2>
		<div class="text-4xl mt-4 mb-10">
			{{timestamp}}
		</div>
	</div>
</template>

<script>
import moment from 'moment'
export default {
	name: 'DataTitle',
	props:['dataDate'],
	computed: {
		timestamp: function() {
			return moment(this.dataDate).locale("el").format('LL') 
		}
	},
}
</script>