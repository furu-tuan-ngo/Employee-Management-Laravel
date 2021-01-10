import CrudModel from "./crud-model";
import Crud from "./crud-model";

class ChiTiet extends CrudModel {
    constructor(modelName) {
        super(modelName);
    }

    insertChiTiet(param) {
        return this.api
            .post(`${this.modelName}`, param)
            .then(res => res.data)
            .catch(error => ({ success: false, message: error }));
    }
}


export default ChiTiet;
