import CrudModel from "./crud-model";

class KyLuat extends CrudModel {
    constructor() {
        super("kyluat");
    }

    insertRecord(param) {
        return this.api
            .post("kyluat/add", param)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }
}

export default KyLuat;
