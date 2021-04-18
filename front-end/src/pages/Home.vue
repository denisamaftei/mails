<template>
    <q-page-container >
        <div class="q-pa-md justify-center">
            <div class="q-gutter-y-md column text-container" >
                <form @submit.prevent="simulateSubmit" class="q-pa-md">
                    <q-editor v-model="qeditor" :dense="$q.screen.lt.md"
                    :toolbar="[
                    [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
                        <div class="row justify-end">
                            <q-btn
                                type="submit"
                                :loading="submitting"
                                label="Send"
                                class="q-mt-md bg-lgs1 text-white"
                                
                            >
                            <template v-slot:loading>
                                <q-spinner-facebook />
                            </template>
                        </q-btn>
    </div>
                </form>
            </div>
        </div>
        <img class="robo" src="../assets/happy_robot.svg"/>
    </q-page-container>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      test: '',
      submitting: false,
      qeditor: '<pre>Check out the two different types of dropdowns' +
        ' in each of the "Align" buttons.</pre> '
    }
  },
  methods: {
    simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false
      }, 3000)
    }
  }
}
</script>
<style lang="scss" >
.text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30em;
}
.q-editor {
    max-width: 70vw
}
.pre {
    word-break: break-all;
    max-width: inherit;
}
body {
  background-image: url("patternpad.svg");
}
.robo {
  width: 10%;
  float: right
}
</style>