import CrudModel from "./crud-model";

class NhanVien extends CrudModel {
    constructor() {
        super("nhanvien");
    }

    getLookupValue() {
        return this.api
            .get("lookup-value-nhan-vien")
            .then((res) => res.data)
            .catch((err) => ({ success: false, message: err }));
    }

    insertRecord(param) {
        return this.api
            .post("nhanvien/add", param)
            .then((res) => res.data)
            .catch((err) => ({ success: false, message: err }));
    }

    setKhenThuong(param) {
        return this.api
            .post("nhanvien/khenthuong", param)
            .then((res) => res.data)
            .catch((err) => ({ success: false, message: err }));
    }

    setKyLuat(param) {
        return this.api
            .post("nhanvien/kyluat", param)
            .then((res) => res.data)
            .catch((err) => ({ success: false, message: err }));
    }

    setNgoaiNgu(param) {
        return this.api
            .post("nhanvien/ngoaingu", param)
            .then((res) => res.data)
            .catch((err) => ({ success: false, message: err }));
    }

    setTrinhDo(param) {
        return this.api
            .post("nhanvien/trinhdo", param)
            .then((res) => res.data)
            .catch((err) => ({ success: false, message: err }));
    }
}

export default NhanVien;
