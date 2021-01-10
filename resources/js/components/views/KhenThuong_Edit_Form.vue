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
                        Sửa Thông Tin Khen Thưởng
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

        <div v-if="alert.isError" v-bind:class="alert.className" role="alert">
            <div class="alert-icon"><i class="flaticon-warning"></i></div>
            <div class="alert-text">{{ alert.message }}</div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-6">
                        <!--begin::Group-->
                        <div class="form-group row fv-plugins-icon-container">
                            <label
                                class="col-xl-3 col-lg-3 col-form-label text-right"
                                >Tên Hạn Mục</label
                            >
                            <div class="col-lg-9 col-xl-9">
                                <input
                                    v-model="record.name"
                                    class="form-control form-control-solid form-control-lg"
                                    type="text"
                                />
                                <div class="fv-plugins-message-container"></div>
                            </div>
                        </div>
                        <!--end::Group-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <div
                            class="d-flex align-items-center flex-wrap"
                            style="margin-left:80px"
                        >
                            <!--begin::Button-->
                            <button
                                v-on:click="updateRecord"
                                type="button"
                                v-bind:class="submitClass"
                            >
                                sửa
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
import KhenThuong from "../models/khenthuong";
export default {
    data: function() {
        return {
            submitClass: "btn btn-success",
            record: {},
            alert: {
                isError: false,
                className:
                    "alert alert-custom alert-light-primary fade show mb-5",
                message: "Fail to update new record ."
            }
        };
    },
    created() {
        const khenThuong = new KhenThuong();
        khenThuong.get(this.$route.params.id).then(res => {
            if (res.success) {
                this.record = res.data;
            }
        });
    },
    methods: {
        updateRecord() {
            this.submitClass += "  spinner spinner-white spinner-right";
            this.resetAlert();
            if (!this.validateNull()) {
                this.handleError("All fields must be completed.");
                return;
            }

            let fields = { ...this.record };

            const khenthuongModel = new KhenThuong();
            khenthuongModel
                .update(fields)
                .then(res => {
                    this.submitClass = "btn btn-success";
                    if (res.success) {
                        this.alert.isError = true;
                        this.alert.message = "Update new record successfully.";
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
        }
    }
};
</script>

<style></style>
