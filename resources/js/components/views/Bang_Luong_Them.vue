<template>
    <div class="container mt-10">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <div
                    v-if="this.alert.isError"
                    v-bind:class="this.alert.className"
                    role="alert"
                >
                    <div class="alert-icon">
                        <i v-bind:class="alert.icon_class_name"></i>
                    </div>
                    <div class="alert-text">
                        {{ this.alert.message }}
                    </div>
                </div>
                <h5 class="text-dark font-weight-bold mb-10">
                    Thêm Mới Bảng Lương :
                </h5>
                <!--begin::Group-->
                <form>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Nhân Viên :</label
                        >

                        <div class="col-lg-9 col-xl-9">
                            <select
                                v-model="data.ma_nhan_vien"
                                class="form-control form-control-solid form-control-lg"
                            >
                                <option
                                    v-for="nhanvien in nhan_vien"
                                    :key="nhanvien.id"
                                    :value="nhanvien.id"
                                    >{{ nhanvien.ho_ten }}</option
                                >
                            </select>
                        </div>
                    </div>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Phòng Ban :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <select
                                v-model="data.ma_phong_ban"
                                class="form-control form-control-solid form-control-lg"
                            >
                                <option
                                    v-for="phongban in phong_ban"
                                    :key="phongban.id"
                                    :value="phongban.id"
                                    >{{ phongban.name }}</option
                                >
                            </select>
                            <div class="fv-plugins-message-container"></div>
                        </div>
                    </div>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Tháng :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <select
                                placeholder="Chọn Tháng"
                                v-model="data.thang"
                                class="form-control form-control-solid form-control-lg"
                            >
                                <option
                                    v-for="month in months"
                                    :key="month"
                                    :value="month"
                                    >{{ month }}</option
                                >
                            </select>
                            <div class="fv-plugins-message-container"></div>
                        </div>
                    </div>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Năm :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <select
                                v-model="data.nam"
                                class="form-control form-control-solid form-control-lg"
                            >
                                <option
                                    v-for="year in years"
                                    :key="year"
                                    :value="year"
                                    >{{ year }}</option
                                >
                            </select>
                            <div class="fv-plugins-message-container"></div>
                        </div>
                    </div>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Lương cơ bản :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.luong_cb"
                                class="form-control form-control-solid form-control-lg"
                                type="text"
                                name="name"
                                autocomplete="off"
                            />
                            <div class="fv-plugins-message-container"></div>
                        </div>
                    </div>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Số ngày tăng ca :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.so_ngay_tang_ca"
                                class="form-control form-control-solid form-control-lg"
                                type="text"
                                name="name"
                                autocomplete="off"
                            />
                            <div class="fv-plugins-message-container"></div>
                        </div>
                    </div>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Lương tăng ca :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.luong_tang_ca"
                                class="form-control form-control-solid form-control-lg"
                                type="text"
                                name="name"
                                autocomplete="off"
                            />
                            <div class="fv-plugins-message-container"></div>
                        </div>
                    </div>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Tiền bảo hiểm :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.tien_bao_hiem"
                                class="form-control form-control-solid form-control-lg"
                                type="text"
                                name="name"
                                autocomplete="off"
                            />
                            <div class="fv-plugins-message-container"></div>
                        </div>
                    </div>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Thực Lãnh :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.thuc_lanh"
                                class="form-control form-control-solid form-control-lg"
                                type="text"
                                name="name"
                                autocomplete="off"
                            />
                            <div class="fv-plugins-message-container"></div>
                        </div>
                    </div>
                </form>

                <div class="row">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button
                            v-on:click="InsertRecord"
                            type="button"
                            class="btn btn-primary font-weight-bolder px-9 py-4"
                        >
                            Thêm
                        </button>
                    </div>
                </div>

                <!--end::Group-->
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
import CrudModel from "../models/crud-model";
import BangLuong from "../models/bangluong";
const defaultRecord = {
    ma_phong_ban: "",
    ma_nhan_vien: "",
    thang: "",
    nam: "",
    luong_cb: "",
    so_ngay_tang_ca: "",
    luong_tang_ca: "",
    tien_bao_hiem: "",
    thuc_lanh: ""
};
export default {
    data: function() {
        return {
            data: { ...defaultRecord },
            alert: {
                className: "",
                isError: false,
                message: "",
                icon_class_name: ""
            },
            phong_ban: [],
            nhan_vien: [],
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            years: []
        };
    },
    created() {
        let defaultYear = Number.parseInt(new Date().getFullYear());
        let startYear = 2015;
        let endYear = defaultYear + 5;
        this.years = Array(endYear - startYear)
            .fill()
            .map((_, idx) => startYear + idx);

        const bangLuongModel = new BangLuong();

        bangLuongModel
            .getLookupValues()
            .then(res => {
                if (res.success) {
                    this.nhan_vien = res.data.nhan_vien;
                    this.phong_ban = res.data.phong_ban;
                }
            })
            .catch(error => console.error(error));
    },
    methods: {
        InsertRecord() {
            this.resetAlert();
            for (let item in this.data) {
                if (this.data[item] == "") {
                    this.handleError("Bắt buộc phải hoàn thành tất cả các ô");
                    return;
                }
            }

            const bangLuongModel = new BangLuong();

            bangLuongModel
                .insertRecord(this.data)
                .then(res => {
                    this.handleSuccess();
                    setTimeout(() => {
                        this.$router.push("/bang-luong");
                    }, 500);
                })
                .catch(err => console.log(err));
        },
        handleError(message) {
            this.alert.isError = true;
            this.alert.className =
                "alert alert-custom alert-light-primary fade show mb-5";
            this.alert.message = message;
            this.alert.icon_class_name = "flaticon2-cross";
        },
        resetAlert() {
            this.alert.isError = false;
        },
        handleSuccess() {
            this.alert.icon_class_name = "fas fa-check";
            this.data = { ...defaultRecord };
            this.alert.isError = true;
            this.alert.className =
                "alert alert-custom alert-light-success fade show mb-5";
            this.alert.message = "Thêm bảng lương thành công .";
        }
    }
};
</script>

<style></style>
