import axios from "axios";
import qs from "qs";

class CrudModel {
    constructor(modelName) {
        this.modelName = modelName;
        this.baseUrl = "http://employee-management-v4.herokuapp.com/api/";
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

    getAll(params = {}) {
        return this.api
            .get(this.modelName + "s", {
                params: params,
                paramsSerializer: params => {
                    return qs.stringify(params);
                }
            })
            .then(res => res.data)
            .catch(error => ({ success: false, message: error }));
    }

    insert(param) {
        return this.api
            .post(`${this.modelName}s`, param)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }

    delete(id) {
        return this.api
            .delete(`${this.modelName}/remove/${id}`)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }
    get(id) {
        return this.api
            .get(`${this.modelName}/${id}`)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }

    update(record) {
        return this.api
            .post(`${this.modelName}/update`, record)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }

    getOne(id) {
        return this.api
            .get(`${this.modelName}/${id}`)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }
}
export default CrudModel;
