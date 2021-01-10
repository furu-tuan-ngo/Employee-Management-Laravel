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
                        <i v-bind:class="alert.icon_class_name"></i>
                    </div>
                    <div class="alert-text">
                        {{ this.alert.text }}
                    </div>
                </div>
                <h5 class="text-dark font-weight-bold mb-10">
                    Cập nhật Tôn Giáo :
                </h5>
                <!--begin::Group-->
                <form>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Tên Tôn Giáo :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.name"
                                placeholder="nhập tên tôn giáo"
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
                text: "",
                icon_class_name: ""
            }
        };
    },
    created() {
        const tongiaoModel = new CrudModel("tongiao");
        tongiaoModel.getOne(this.$route.params.id).then(res => {
            if (res.success) {
                this.data = res.data;
            } else {
                console.error(res.message);
            }
        });
    },
    methods: {
        InsertRecord() {
            const tongiaoModel = new CrudModel("tongiao");

            tongiaoModel
                .update({
                    id: this.$route.params.id,
                    name: this.data.name
                })
                .then(res => {
                    if (res.success) {
                        this.alert.className =
                            "alert alert-custom alert-light-success fade show mb-5";
                        this.alert.isSuccess = true;
                        this.alert.text = `Cập nhật thành công.`;
                        this.alert.icon_class_name = "fas fa-check";
                        setTimeout(() => {
                            this.$router.push("/ton-giao");
                        }, 500);
                    } else {
                        console.error(res.message);
                        this.handleError("Cập nhật tôn giáo thất bại.");
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.alert.className =
                        "alert alert-custom alert-light-danger fade show mb-5";
                    this.alert.isSuccess = true;
                    this.alert.text = `Cập nhật Thất bại `;
                    icon_class_name = "flaticon2-cross";
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
