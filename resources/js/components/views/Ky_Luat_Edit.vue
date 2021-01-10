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
                    Thêm Mới Kỷ Luật :
                </h5>
                <!--begin::Group-->
                <form>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Tên kỷ luật :</label
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
                </form>

                <div class="row">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button
                            v-on:click="InsertRecord"
                            type="button"
                            class="btn btn-primary font-weight-bolder px-9 py-4"
                        >
                            Sửa
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
            data: {},
            alert: {
                className: "",
                isSuccess: false,
                text: "",
                icon_class_name: ""
            }
        };
    },
    created() {
        const kyLuatModel = new CrudModel('kyluat');
        kyLuatModel.getOne(this.$route.params.id).then(res => {
            if (res.success) {
                this.data = res.data;
            }
        });
    },
    methods: {
        InsertRecord() {
            this.alert.isSuccess = false;
            if (this.data.name == "") {
                this.handleError("Tên kỷ luật không được bỏ trống.");
                return;
            }

            const kyluatModel = new CrudModel("kyluat");

            kyluatModel
                .update({
                    id: this.data.id,
                    name: this.data.name
                })
                .then(res => {
                    this.alert.className =
                        "alert alert-custom alert-light-success fade show mb-5";
                    this.alert.isSuccess = true;
                    this.alert.icon_class_name = "fas fa-check";
                    this.alert.text = `Cập nhật kỷ luật thành công.`;
                    setTimeout(() => {
                        this.$router.push("/ky-luat");
                    }, 500);
                })
                .catch(err => {
                    console.log(err);
                    this.handleError("Cập nhật kỷ luật thất bại");
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
