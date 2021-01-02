<template>
    <div class="d-flex flex-column flex-root">
        <!--begin::Login-->
        <div
            class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
            id="kt_login"
        >
            <!--begin::Aside-->
            <div
                class="login-aside d-flex flex-column flex-row-auto"
                style="background-color: #f2c98a"
            >
                <!--begin::Aside Top-->
                <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
                    <!--begin::Aside header-->
                    <a href="#" class="text-center mb-10">
                        <img
                            src="assets/media/logos/logo-letter-1.png"
                            class="max-h-70px"
                            alt=""
                        />
                    </a>
                    <!--end::Aside header-->

                    <!--begin::Aside title-->
                    <h3
                        class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
                        style="color: #986923"
                    >
                        Discover Amazing Metronic<br />
                        with great build tools
                    </h3>
                    <!--end::Aside title-->
                </div>
                <!--end::Aside Top-->

                <!--begin::Aside Bottom-->
                <div
                    class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
                    style="
              background-image: url(assets/media/svg/illustrations/login-visual-1.svg);
            "
                ></div>
                <!--end::Aside Bottom-->
            </div>
            <!--begin::Aside-->

            <!--begin::Content-->
            <div
                class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
            >
                <!--begin::Content body-->
                <div class="d-flex flex-column-fluid flex-center">
                    <!--begin::Signin-->

                    <div class="login-form login-signin p-5">
                        <!--begin::Form-->

                        <form
                            class="form"
                            novalidate="novalidate"
                            id="kt_login_signin_form"
                        >
                            <!--begin::Title-->
                            <div class="pb-13 pt-lg-0 pt-5">
                                <h3
                                    class="text-center font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                                >
                                    WELCOME
                                </h3>
                            </div>
                            <!--begin::Title-->
                            <div
                                v-if="this.error.isExists"
                                class="alert alert-custom alert-outline-2x alert-outline-danger fade show mb-5"
                                role="alert"
                            >
                                <div class="alert-icon">
                                    <i class="flaticon-warning"></i>
                                </div>
                                <div class="alert-text">
                                    {{ this.error.message }}
                                </div>
                            </div>

                            <!--begin::Form group-->
                            <div class="form-group">
                                <label
                                    class="font-size-h6 font-weight-bolder text-dark"
                                    >Email</label
                                >
                                <input
                                    v-model="fields.email"
                                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                                    type="text"
                                    name="username"
                                    autocomplete="off"
                                />
                            </div>
                            <!--end::Form group-->

                            <!--begin::Form group-->
                            <div class="form-group">
                                <div
                                    class="d-flex justify-content-between mt-n5"
                                >
                                    <label
                                        class="font-size-h6 font-weight-bolder text-dark pt-5"
                                        >Password</label
                                    >
                                </div>

                                <input
                                    v-model="fields.password"
                                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                                    type="password"
                                    name="password"
                                    autocomplete="off"
                                />
                            </div>
                            <!--end::Form group-->

                            <!--begin::Action-->
                            <div class="pb-lg-0 pb-5">
                                <button
                                    type="button"
                                    v-bind:class="submitBtnClassName"
                                    v-on:click="postLogin"
                                    :disabled="isSending"
                                >
                                    Sign In
                                </button>
                            </div>
                            <!--end::Action-->
                        </form>
                        <!--end::Form-->
                    </div>
                    <!--end::Signin-->
                </div>
                <!--end::Content body-->
            </div>
            <!--end::Content-->
        </div>
        <!--end::Login-->
    </div>
</template>

<script>
import LoadingComponent from "./LoadingComponent.vue";
import axios from "axios";
export default {
    components: { LoadingComponent },
    data() {
        return {
            submitBtnClassName:
                "btn btn-primary font-weight-bolder font-size-h6",
            isSending: false,
            fields: {
                email: "",
                password: ""
            },
            error: {
                isExists: false,
                message: ""
            }
        };
    },
    created() {},
    mounted() {},
    methods: {
        postLogin() {
            if (this.fields.email.trim() == "") {
                this.error = {
                    isExists: true,
                    message: "Email must be completed."
                };
                return;
            }

            if (this.fields.password.trim() == "") {
                this.error = {
                    isExists: true,
                    message: "Password must be completed."
                };
                return;
            }

            this.error = {
                isExists: false,
                message: ""
            };
            this.submitBtnClassName += " spinner spinner-white spinner-right";
            this.isSending = true;
            var data = {
                email: this.fields.email,
                password: this.fields.password
            };

            axios
                .post("api/login", data)
                .then(res => {
                    this.isSending = false;
                    this.submitBtnClassName =
                        "btn btn-primary font-weight-bolder font-size-h6";
                    console.log(res);
                    if (res.data.success) {
                        localStorage.setItem(
                            "access-token",
                            res.data.data.access_token
                        );
                        this.$emit("loginSuccess");
                    } else {
                        this.error = {
                            isExists: true,
                            message: "Username or password incorrect."
                        };
                    }
                })
                .catch(error => {
                    this.isSending = false;
                    this.submitBtnClassName =
                        "btn btn-primary font-weight-bolder font-size-h6";
                    console.log(error);
                    this.error = {
                        isExists: true,
                        message: "Something went wrong."
                    };
                });
        }
    }
};
</script>

<style></style>
