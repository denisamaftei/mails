import Axios from "axios";

const APITemplate = "http://localhost:3000/api/template/";

export default {
    state: {
        template: null
    },
    actions: {
        editTemplate(state, template) {
            return new Promise((resolve, reject) => {
                // Axios.put(APITemplat + 'update'+)
            })
        }
    }
}