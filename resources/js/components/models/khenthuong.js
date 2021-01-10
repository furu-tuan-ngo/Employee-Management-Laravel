import CrudModel from "./crud-model";

class KhenThuong extends CrudModel {
    constructor() {
        super("khenthuong");
    }

    insertRecord(param) {
        return this.api
            .post("khenthuong/add", param)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }

    deleteCtKt(id) {
        return this.api
            .delete(`nhanvien/khenthuong/${id}`)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }
}

export default KhenThuong;
