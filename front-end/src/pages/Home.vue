<template>
    <q-page-container >
        <div class="q-pa-md justify-center">
            <div class="q-gutter-y-md column text-container" >
                <form @submit.prevent="simulateSubmit" class="q-pa-md">
                    <q-editor v-model="qeditor" ref="qeditor" :dense="$q.screen.lt.md"
                    :toolbar="[
                    ['token'],
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
                    ['hr', 'link', 'custom_btn'],
                    ['print', 'fullscreen'],
                    [
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
                      }">
                      <template v-slot:token>
                        <q-btn-dropdown
                        dense no-caps
                        ref="token"
                        no-wrap
                        unelevated
                        color="white"
                        text-color="primary"
                        label="Columns"
                        size="sm">
                          <q-list dense>
                            <q-item tag="label" clickable @click="add('email')">
                              <q-item-section side>
                                <q-icon name="mail" />
                              </q-item-section>
                              <q-item-section>Email</q-item-section>
                            </q-item>
                            <q-item tag="label" clickable @click="add('title')">
                              <q-item-section side>
                                <q-icon name="title" />
                              </q-item-section>
                              <q-item-section>Title</q-item-section>
                            </q-item>
                          </q-list>
                        </q-btn-dropdown>
                      </template>
                    </q-editor>
                    <div class="row justify-end">
                      <q-btn
                        type="submit"
                        :loading="submitting"
                        label="Send"
                        class="q-mt-md bg-lgs1 text-white">
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
      qeditor: 'Check out the two different types of dropdowns' +
        ' in each of the "Align" buttons.'
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
    },
    add (name) {
      const edit = this.$refs.qeditor
      this.$refs.token.hide()
      edit.caret.restore()
      edit.runCmd('insertHTML', `&nbsp;<div class="qeditor_token row inline items-center" contenteditable="true">&nbsp;<span>${name}</span>&nbsp;<i class="q-icon material-icons cursor-pointer" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">close</i></div>&nbsp;`)
      edit.focus()
    }
  },
}
</script>
<style lang="scss" >
body {
  background-image: url("../assets/patternpad.svg");
}
.text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30em;
}
.q-editor {
    max-width: 70vw;
    min-width: 70vw;

}
.q-editor__content {
    overflow-y: auto;
    max-height: 35vh;
}
.absolute-full, .fullscreen, .fixed-full {
  max-width: 100vw
}
.pre {
    word-break: break-all;
    max-width: inherit;
}
.robo {
  width: 10%;
  float: right
}
.qeditor_token {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 2px;
  border-radius: 3px;
  .q-icon {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
}
pre {
  display: inline;
}
</style>