import axios from "axios";

class CrudModel {
    constructor(modelName) {
        this.modelName = modelName;
        this.baseUrl = "http://localhost:8000/api/";
        this.accessToken = localStorage.getItem("access-token");
    }

    get api() {
        return axios.create({
            baseURL: this.baseUrl,
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            }
        });
    }

    getAll() {
        return this.api
            .get(this.modelName + "s")
            .then(res => res.data)
            .catch(error => ({ success: false, message: error }));
    }

    insert(param) {
        return this.api
            .post(`${this.modelName}s`, param)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }
}
export default CrudModel;
