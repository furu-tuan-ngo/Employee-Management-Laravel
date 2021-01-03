import CrudModel from "./crud-model";

class NhanVien extends CrudModel {
    constructor() {
        super("nhanvien");
    }

    getLookupValue() {
        return this.api
            .get("lookup-value-nhan-vien")
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }

    insertRecord(param) {
        return this.api
            .post("nhanvien/add", param)
            .then(res => res.data)
            .catch(err => ({ success: false, message: err }));
    }
}

export default NhanVien;
