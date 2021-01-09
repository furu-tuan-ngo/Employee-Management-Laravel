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
                    Thêm Mới Hạn Mục :
                </h5>
                <!--begin::Group-->
                <form>
                    <div class="form-group row fv-plugins-icon-container">
                        <label class="col-xl-3 col-lg-3 col-form-label"
                            >Tên Hạn Mục :</label
                        >
                        <div class="col-lg-9 col-xl-9">
                            <input
                                v-model="data.name"
                                placeholder="nhập tên hạn mục"
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
                name: ""
            },
            alert: {
                className: "",
                isSuccess: false,
                text: ""
            }
        };
    },
    methods: {
        InsertRecord() {
            const kyluatModel = new CrudModel("kyluat");

            kyluatModel
                .InsertRecord({
                    name: this.data.name
                })
                .then(res => {
                    this.alert.className =
                        "alert alert-custom alert-light-success fade show mb-5";
                    this.alert.isSuccess = true;
                    this.alert.text = `${res.data.name} đã được thêm thành công vào bảng kỹ luật.`;
                    this.data.name = "";
                })
                .catch(err => {
                    console.log(err);
                    this.alert.className =
                        "alert alert-custom alert-light-danger fade show mb-5";
                    this.alert.isSuccess = true;
                    this.alert.text = `Thêm ${this.data.name} Thất bại `;
                });
        }
    }
};
</script>

<style></style>
