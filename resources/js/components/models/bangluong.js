import CrudModel from "./crud-model";

class BangLuong extends CrudModel {
    constructor() {
        super("bangluong");
    }

    getLookupValues() {
        return this.api
            .get("bang-luong-lookup-values")
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }

    insertRecord(param) {
        return this.api
            .post("bangluong/add", param)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }
}

export default BangLuong;
