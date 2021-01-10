<template>
    <div class="container">
        <div
            class="container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap p-0 mb-5"
        >
            <!--begin::Info-->
            <div class="d-flex align-items-center p-0">
                <!--begin::Page Heading-->
                <div class="d-flex align-items-baseline flex-wrap mr-5">
                    <!--begin::Page Title-->
                    <h2
                        class="d-flex align-items-center text-dark font-weight-bold my-1"
                    >
                        Thêm Mới Nhân Viên
                    </h2>
                    <!--end::Page Title-->
                </div>
                <!--end::Page Heading-->
            </div>
            <!--end::Info-->
            <!--begin::Toolbar-->
            <div class="d-flex align-items-center flex-wrap"></div>
            <!--end::Toolbar-->
        </div>

        <div v-if="this.alert.isError" v-bind:class="this.alert.className" role="alert">
            <div class="alert-icon"><i class="flaticon-warning"></i></div>
            <div class="alert-text">{{ this.alert.message }}</div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Họ Tên</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <input
                                    v-model="record.ho_ten"
                                    class="form-control form-control-solid form-control-lg"
                                    type="text"
                                />
                                <div class="fv-plugins-message-container"></div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Giới Tính</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <select
                                    v-model="record.gioi_tinh"
                                    class="form-control form-control-solid form-control-lg"
                                >
                                    <option value="">Chọn giới tính</option>
                                    <option value="nam">Nam</option>
                                    <option value="nữ">Nữ</option>
                                </select>
                                <div class="fv-plugins-message-container"></div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Điện Thoại</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <input
                                    v-model="record.dien_thoai"
                                    class="form-control form-control-solid form-control-lg"
                                    type="text"
                                />
                                <div class="fv-plugins-message-container"></div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Ngày Sinh</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <input
                                        v-model="record.ngay_sinh"
                                        placeholder="ngày/tháng/năm"
                                        type="text"
                                        class="form-control form-control-solid form-control-lg"
                                    />
                                </div>

                                <div class="fv-plugins-message-container"></div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Nơi Sinh</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <input
                                        v-model="record.noi_sinh"
                                        type="text"
                                        class="form-control form-control-solid form-control-lg"
                                    />
                                </div>
                                <div class="fv-plugins-message-container"></div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Số CMND</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <input
                                        v-model="record.so_cmnd"
                                        type="text"
                                        value=" "
                                        class="form-control form-control-solid form-control-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Hộ Khẩu</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <input
                                        v-model="record.ho_khau"
                                        type="text"
                                        class="form-control form-control-solid form-control-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Chỗ Ở Hiện Nay</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <input
                                        v-model="record.cho_o_hien_nay"
                                        value=""
                                        type="text"
                                        class="form-control form-control-solid form-control-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Số BHYT</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <input
                                        v-model="record.so_bhyt"
                                        type="text"
                                        class="form-control form-control-solid form-control-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Ngày Vào Làm</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <input
                                        v-model="record.ngay_vao_lam"
                                        placeholder="ngày/tháng/năm"
                                        type="text"
                                        class="form-control form-control-solid form-control-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Số Thẻ ATM</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <input
                                        v-model="record.so_the_atm"
                                        type="text"
                                        class="form-control form-control-solid form-control-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Tôn Giáo</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <select
                                        v-model="record.ma_ton_giao"
                                        class="form-control"
                                    >
                                        <option
                                            v-for="item in data.ton_giao"
                                            :key="item.id"
                                            :value="item.id"
                                            >{{ item.name }}</option
                                        >
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Dân Tộc</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <select
                                        v-model="record.ma_dan_toc"
                                        class="form-control"
                                    >
                                        <option
                                            v-for="item in data.dan_toc"
                                            :key="item.id"
                                            :value="item.id"
                                            >{{ item.name }}</option
                                        >
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Phòng Ban</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <select
                                        v-model="record.ma_phong_ban"
                                        class="form-control"
                                    >
                                        <option
                                            v-for="item in data.phong_ban"
                                            :key="item.id"
                                            :value="item.id"
                                            >{{ item.name }}</option
                                        >
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Chức Vụ</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <div
                                    class="input-group input-group-solid input-group-lg"
                                >
                                    <select
                                        v-model="record.ma_chuc_vu"
                                        class="form-control"
                                    >
                                        <option
                                            v-for="item in data.chuc_vu"
                                            :key="item.id"
                                            :value="item.id"
                                            >{{ item.name }}</option
                                        >
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                    <div class="col-6"></div>
                </div>

                <div class="row">
                    <div class="col-6">
                        <div
                            class="d-flex align-items-center flex-wrap"
                            style="margin-left:80px"
                        >
                            <!--begin::Button-->
                            <button
                                v-on:click="insertRecord"
                                type="button"
                                v-bind:class="submitClass"
                            >
                                Thêm
                            </button>
                            <!--end::Button-->
                        </div>
                    </div>
                    <div class="col-6"></div>
                </div>
            </div>
        </div>
        <!--end::Group-->
    </div>
</template>

<script>
import NhanVien from "../models/nhanvien";
const defaultRecord = {
    ho_ten: "",
    gioi_tinh: "",
    so_cmnd: "",
    ngay_sinh: "",
    noi_sinh: "",
    dien_thoai: "",
    ho_khau: "",
    cho_o_hien_nay: "",
    so_bhyt: "",
    ngay_vao_lam: "",
    so_the_atm: "",
    ma_ton_giao: "",
    ma_phong_ban: "",
    ma_chuc_vu: "",
    ma_dan_toc: ""
};
export default {
    data: function() {
        return {
            submitClass : "btn btn-success",
            record: {},
            data: {
                phong_ban: [],
                chuc_vu: [],
                dan_toc: [],
                ton_giao: []
            },
            alert: {
                isError: false,
                className:
                    "alert alert-custom alert-light-primary fade show mb-5",
                message: "Fail to insert new record ."
            }
        };
    },
    created() {
        this.record = { ...defaultRecord };
        const nhanVien = new NhanVien();
        nhanVien
            .getLookupValue()
            .then(res => {
                if (res.success) {
                    this.data = res.data;
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        insertRecord() {
            this.submitClass += "  spinner spinner-white spinner-right";
            this.resetAlert();
            if (!this.validateNull()) {
                this.handleError("All fields must be completed.");
                return;
            }

            let fields = { ...this.record };

            fields.ngay_sinh = this.handleDateTime(this.record.ngay_sinh);
            fields.ngay_vao_lam = this.handleDateTime(this.record.ngay_vao_lam);

            console.log(typeof fields.ngay_sinh);

            const nhanvienModel = new NhanVien();
            nhanvienModel
                .insertRecord(fields)
                .then(res => {
                    this.submitClass = "btn btn-success";
                    if (res.success) {
                        this.record = { ...defaultRecord };

                        this.alert.isError = true;
                        this.alert.message = "Insert new record successfully.";
                        this.alert.className =
                            "alert alert-custom alert-light-success fade show mb-5";
                    } else {
                        this.alert.isError = true;
                        this.alert.message = "Fail to insert new Record.";
                        this.alert.className =
                            "alert alert-custom alert-light-danger fade show mb-5";
                    }
                })
                .catch(err => console.log(err));
        },

        validateNull() {
            let isvalid = true;

            for (let item in this.record) {
                if (this.record[item] == "") {
                    isvalid = false;
                }
            }
            return isvalid;
        },
        handleError(message) {
            this.alert.isError = true;
            this.alert.className =
                "alert alert-custom alert-light-primary fade show mb-5";
            this.alert.message = message;
        },
        handleSuccess() {
            this.alert.className =
                "alert alert-custom alert-light-success fade show mb-5";
            this.alert.message = "Insert record successfully .";
        },
        resetAlert() {
            this.alert.isError = false;
        },
        handleDateTime(str) {
            let strArr = str.split("/");
            return new Date(
                strArr[2],
                Number.parseInt(strArr[1]) - 1,
                Number.parseInt(strArr[0]) + 1
            );
        }
    }
};
</script>

<style></style>
