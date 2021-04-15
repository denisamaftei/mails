<template>
    <q-page-container>
        <div class="q-pa-md justify-center">
            <div class="q-gutter-y-md column text-container" >
                <q-input filled v-model="text" autogrow />
            </div>
        </div>
    </q-page-container>
</template>
<script>
export default {
  data () {
    return {
      text: '',
    }
  }
}
</script>
<style lang="scss" scoped>
.text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30em;
}
.q-input {
    background-color: $purple-4;
    border-radius: 5px;
    min-width: 60vw;
    height: 25vh;
}
.q-field__inner .relative-position .col .self-stretch {
    height: 25vh;
    width: 65vw;
}
// .q-input :first-child :first-child {
//     height: 25em;
// }
// .q-input :first-child :first-child :first-child{
//     height: 2em;
// }

</style>