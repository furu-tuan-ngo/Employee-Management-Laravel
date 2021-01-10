<template>
    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <div
                    v-if="this.alert.isSuccess"
                    v-bind:class="this.alert.className"
                    role="alert"
                >
                    <div class="alert-icon">
                        <i class="flaticon-warning"></i>
                    </div>
                    <div class="alert-text">
                        {{ this.alert.text }}
                    </div>
                </div>
                <h5 class="text-dark font-weight-bold mb-10">
                    Cập nhật Phòng Ban :
                </h5>
                <!--begin::Group-->
                <form>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Tên Phòng Ban
                        </label>
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
                            >Điện Thoại
                        </label>
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.dien_thoai"
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
                            >Fax
                        </label>
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
            data: {
                name: ""
            },
            alert: {
                className: "",
                isSuccess: false,
                text: ""
            }
        };
    },
    created() {
        const phongbanModel = new CrudModel("phongban");
        phongbanModel.getOne(this.$route.params.id).then(res => {
            if (res.success) {
                this.data = res.data;
            } else {
                console.error(res.message);
            }
        });
    },
    methods: {
        InsertRecord() {
            const phongbanModel = new CrudModel("phongban");

            phongbanModel
                .update({
                    id: this.$route.params.id,
                    name: this.data.name,
                    dien_thoai: this.data.dien_thoai,
                    fax: this.data.fax
                })
                .then(res => {
                    this.alert.className =
                        "alert alert-custom alert-light-success fade show mb-5";
                    this.alert.isSuccess = true;
                    this.alert.text = `Cập nhật thành công.`;
                    setTimeout(() => {
                        this.$router.push("/phong-ban");
                    }, 500);
                })
                .catch(err => {
                    console.log(err);
                    this.alert.className =
                        "alert alert-custom alert-light-danger fade show mb-5";
                    this.alert.isSuccess = true;
                    this.alert.text = `Cập nhật Thất bại `;
                });
        }
    }
};
</script>

<style></style>
