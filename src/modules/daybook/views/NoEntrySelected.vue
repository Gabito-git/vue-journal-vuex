<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <Fab />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default{
  components:{
    Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
  }
}
</script>


<style scoped>
  div{
    height: 100%;
  }
</style>