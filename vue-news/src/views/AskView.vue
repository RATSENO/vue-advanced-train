<template>
  <div>
    <div v-for="ask in asks">{{ask}}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js';

export default {
  data(){
    return {
      asks : []
    }
  },
  created(){
    var vm = this;
    fetchAskList()
      .then(function(response){
        console.log(response);
        vm.asks = response.data;
      })
      .catch(function(error){
        console.log(error);
      })
  }
}
</script>

<style>

</style>
