<template>
    <div class="container mt-10">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <div
                    v-if="this.alert.isSuccess"
                    v-bind:class="this.alert.className"
                    role="alert"
                >
                    <div class="alert-icon">
                        <i v-bind:class="alert.icon_class_name"></i>
                    </div>
                    <div class="alert-text">
                        {{ this.alert.text }}
                    </div>
                </div>
                <h5 class="text-dark font-weight-bold mb-10">
                    Thêm Mới Phòng Ban :
                </h5>
                <!--begin::Group-->
                <form>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Tên phòng ban :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.name"
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
                            >Điện Thoại :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.dien_thoai"
                                placeholder=""
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
                            >Fax :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.fax"
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
export default {
    data: function() {
        return {
            data: {
                name: "",
                dien_thoai: "",
                fax: ""
            },
            alert: {
                className: "",
                isSuccess: false,
                text: "",
                icon_class_name: ""
            }
        };
    },
    methods: {
        InsertRecord() {
            this.alert.isSuccess = false;
            if (this.data.name == "") {
                this.handleError("Tên phòng ban không được bỏ trống.");
                return;
            }

            const phongbanModel = new CrudModel("phongban");

            phongbanModel
                .insert({
                    name: this.data.name,
                    dien_thoai: this.data.dien_thoai,
                    fax: this.data.fax
                })
                .then(res => {
                    this.icon_class_name = "fas fa-check";
                    this.alert.className =
                        "alert alert-custom alert-light-success fade show mb-5";
                    this.alert.isSuccess = true;
                    this.alert.text = `${res.data.name} đã được thêm thành công.`;
                    setTimeout(() => {
                        this.$router.push("/phong-ban");
                    }, 500);
                })
                .catch(err => {
                    console.log(err);
                    this.handleError("Thêm phòng ban thất bại.");
                });
        },
        handleError(message) {
            this.alert.className =
                "alert alert-custom alert-light-danger fade show mb-5";
            this.alert.isSuccess = true;
            this.alert.text = message;
            this.alert.icon_class_name = "flaticon2-cross";
        }
    }
};
</script>

<style></style>
