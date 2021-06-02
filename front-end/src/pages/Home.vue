<template>
  <q-page-container>
    <div class="q-pa-md justify-center">
      <div class="q-gutter-y-md column text-container">
        <form @submit.prevent="simulateSubmit" class="q-pa-md">
          <div class="q-mt-md q-mr-md row">
            <q-file
              class="q-mr-md"
              @input="handleFileUpload"
              v-model="file"
              label="Pick the Excel file"
              filled
              counter
              :counter-label="counterLabelFn"
              accept=".xlsx"
              style="max-width: 300px"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
            <q-file
              @input="handleAttach"
              v-model="attach"
              label="Pick the Attach file"
              filled
              counter
              :counter-label="counterLabelFn"
              accept=".pdf"
              style="max-width: 300px"
            >
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </div>
          <q-editor
            v-model="body"
            ref="qeditor"
            :dense="$q.screen.lt.md"
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
              [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript'
              ],
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
            }"
          >
            <template v-slot:token>
              <q-btn-dropdown
                dense
                no-caps
                ref="token"
                no-wrap
                unelevated
                color="white"
                text-color="primary"
                label="Columns"
                size="sm"
              >
                <q-list dense>
                  <q-item
                    v-for="column in columns"
                    v-if="column !== undefined"
                    tag="label"
                    clickable
                    @click="add(column)"
                  >
                    <q-item-section side>
                      <q-icon name="add_circle" color="white" />
                    </q-item-section>
                    <q-item-section>{{ column }}</q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </template>
          </q-editor>

          <div class="row justify-end">
            <q-btn
              @click="send()"
              type="submit"
              :loading="submitting"
              label="Send"
              class="q-mt-md bg-lgs3 text-white"
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </div>
        </form>
      </div>
    </div>
    <img class="robo" src="../assets/happy_robot.svg" />
  </q-page-container>
</template>
<script>
import readXlsxFile from "read-excel-file";
import axios from "app/node_modules/axios";
export default {
  data() {
    return {
      text: "",
      test: "",
      submitting: false,
      file: null,
      rows: null,
      columns: [],
      body: "Hello Logiscool!",
      arr: [],
      attach: null
    };
  },

  methods: {
    handleAttach(e) {
      this.attach = e;
      console.log(this.attach);
    },
    handleFileUpload(e) {
      this.file = e;

      const wor = new Worker("worker.js");

      wor.funn = readXlsxFile(this.file).then(rows => {
        let columns = rows[0];

        for (let i = 0; i < columns.length; i++) {
          if (columns[i] !== null) {
            this.columns[i] = columns[i];
          }
        }

        for (let i = 1; i < rows.length; i++) {
          this.arr.push(rows[i]);
        }

        this.arr.forEach(el => {
          console.log(JSON.stringify(el[0]));
        });
      });

      wor.onmessage = e => {
        console.log();
        this.rows = e.data.workbook;
      };

      wor.postMessage({
        file: this.file
      });
    },

    counterLabelFn({ totalSize }) {
      return `${totalSize}`;
    },
    simulateSubmit() {
      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
      }, 3000);
    },
    add(name) {
      const edit = this.$refs.qeditor;
      this.$refs.token.hide();

      edit.caret.restore();
      edit.runCmd(
        "insertHTML",
        `<div class="qeditor_token row inline items-center" contenteditable="false"><span contenteditable="true"> $${name}$ </span><i class="q-icon material-icons cursor-pointer" onclick="this.parentNode.remove(this.parentNode)">close</i></div>`
      );

      edit.focus();
      for (let i = 0; i < this.columns.length; i++) {
        for (let j = 0; j < this.arr.length; j++) {
          this.mailBody = this.body.replace(this.columns[i], this.arr[j][i]);
        }
      }
    },
    send() {
      let mailBody = [];
      console.log(this.arr.length);
      for (let i = 0; i < this.arr.length; i++) {
        mailBody[i] = this.body;
      }
      for (let i = 0; i < mailBody.length; i++) {
        for (let j = 0; j < this.columns.length; j++) {
          mailBody[i] = mailBody[i].replace(this.columns[j], this.arr[i][j]);
        }
      }

      for (let i = 0; i < mailBody.length; i++) {
        console.log("*********************");
        let formData = new FormData();
        formData.append("file", this.attach);
        formData.append("html", mailBody[i]);
        console.log(formData.getAll("file"));
        console.log(formData.getAll("html"));
        axios
          .post("http://localhost:3000/api/send", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(() => {
            console.log("SUCCESS!!");
          })
          .catch(() => {
            console.log("FAILURE!!");
          });
      }
    }
  }
};
</script>
<style lang="scss">
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
.q-editor__toolbar-group:first-of-type {
  border-radius: 100%;

  button {
    padding-left: 5%;
    background-color: #1c9cdc !important;
    color: #fff !important;
    font-size: 0.9em !important;
    border-radius: 10%;
  }
}
.q-editor__content {
  overflow-y: auto;
  max-height: 35vh;
  div {
    display: inline;
  }
}
.absolute-full,
.fullscreen,
.fixed-full {
  max-width: 100vw;
}
.robo {
  width: 10%;
  float: right;
}
.qeditor_token {
  background: #1c9cdc;
  color: white;
  padding: 2px;
  border-radius: 10%;
  .q-icon {
    background: #167bad;
    border-radius: 3px;
  }
}
.q-list {
  background-color: #1c9cdc !important;
  color: #fff;
}
.q-btn {
  font-size: 1.2em;
  border-radius: 10%;
  font-weight: bold;
}
.q-btn-dropdown--simple * + .q-btn-dropdown__arrow {
  margin-left: 0;
}
pre {
  display: inline;
}
</style>
