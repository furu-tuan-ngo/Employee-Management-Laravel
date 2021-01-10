<template>
    <div class="container">
        <div class="card card-custom gutter-b">
            <div class="card-header border-0 pt-5">
                <div>
                    <h3 class="card-title align-items-start flex-column">
                        <span class="card-label font-weight-bolder text-dark">{{
                            data.ho_ten
                        }}</span>
                    </h3>

                    <!--begin::Contacts-->
                    <div class="d-flex flex-wrap my-2">
                        <a
                            class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                        >
                            <span
                                class="svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                            >
                                <!--begin::Svg Icon | path:/assets/media/svg/icons/Communication/Mail-notification.svg-->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                >
                                    <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <rect
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        ></rect>
                                        <path
                                            d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                            fill="#000000"
                                        ></path>
                                        <circle
                                            fill="#000000"
                                            opacity="0.3"
                                            cx="19.5"
                                            cy="17.5"
                                            r="2.5"
                                        ></circle>
                                    </g>
                                </svg>
                                <!--end::Svg Icon--> </span
                            >{{ this.data.chuc_vu.name }}</a
                        >
                        <a
                            class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                        >
                            <span
                                class="svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                            >
                                <!--begin::Svg Icon | path:/assets/media/svg/icons/General/Lock.svg-->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                >
                                    <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <mask fill="white">
                                            <use xlink:href="#path-1"></use>
                                        </mask>
                                        <g></g>
                                        <path
                                            d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z"
                                            fill="#000000"
                                        ></path>
                                    </g>
                                </svg>
                                <!--end::Svg Icon--> </span
                            >{{ this.data.phong_ban.name }}</a
                        >
                        <a
                            class="text-muted text-hover-primary font-weight-bold"
                        >
                            <span
                                class="svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                            >
                                <!--begin::Svg Icon | path:/assets/media/svg/icons/Map/Marker2.svg-->
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                >
                                    <g
                                        stroke="none"
                                        stroke-width="1"
                                        fill="none"
                                        fill-rule="evenodd"
                                    >
                                        <rect
                                            x="0"
                                            y="0"
                                            width="24"
                                            height="24"
                                        ></rect>
                                        <path
                                            d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z"
                                            fill="#000000"
                                        ></path>
                                    </g>
                                </svg>
                                <!--end::Svg Icon--> </span
                            >{{ this.data.dien_thoai }}</a
                        >
                    </div>
                    <!--end::Contacts-->
                </div>

                <div class="card-toolbar">
                    <ul class="nav nav-pills nav-pills-sm nav-dark-75">
                        <li class="nav-item">
                            <router-link
                                :to="{
                                    name: 'sua_nhanvien',
                                    params: { id: this.$route.params.id }
                                }"
                                class="btn btn-light-danger font-weight-bold"
                            >
                                <i class="flaticon-add"></i> Cập nhật
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <!--begin::Top-->
                <div class="d-flex ml-5">
                    <!--begin: Info-->
                    <div class="flex-grow-1">
                        <!--begin::Title-->
                        <div
                            class="d-flex align-items-center justify-content-between flex-wrap mt-2"
                        >
                            <!--begin::User-->
                            <div class="mr-3">
                                <!--end::Name-->
                            </div>
                            <!--begin::User-->
                            <!--begin::Actions-->
                            <!--end::Actions-->
                        </div>
                        <!--end::Title-->
                        <!--begin::Content-->
                        <div
                            class="d-flex align-items-center flex-wrap justify-content-between w-50"
                        >
                            <!--begin::Description-->
                            <div
                                class="flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5"
                            >
                                <table
                                    class="table table-borderless table-vertical-center"
                                >
                                    <tr
                                        v-for="field in this.displayData"
                                        :key="field.label"
                                    >
                                        <td class="pl-0">
                                            <a
                                                class="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                                >{{ field.label }}</a
                                            >
                                        </td>
                                        <td>
                                            {{ field.value }}
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!--end::Description-->
                        </div>
                        <!--end::Content-->
                    </div>
                    <!--end::Info-->
                </div>
                <!--end::Top-->
                <!--begin::Separator-->
                <div class="separator separator-solid my-7"></div>
                <!--end::Separator-->
                <!--begin::Bottom-->
                <div class="d-flex align-items-center flex-wrap">
                    <!--begin: Item-->
                    <div
                        class="d-flex align-items-center flex-lg-fill mr-5 my-1"
                    >
                        <span class="mr-4">
                            <i
                                class="flaticon-piggy-bank icon-2x text-muted font-weight-bold"
                            ></i>
                        </span>
                        <div class="d-flex flex-column text-dark-75">
                            <span class="font-weight-bolder font-size-sm"
                                >Khen Thưởng</span
                            >
                            <span class="font-weight-bolder font-size-h5">
                                <span
                                    class="text-dark-50 font-weight-bold"
                                ></span
                                >{{ this.data.ct_khen_thuong.length }}</span
                            >
                        </div>
                    </div>
                    <!--end: Item-->
                    <!--begin: Item-->
                    <div
                        class="d-flex align-items-center flex-lg-fill mr-5 my-1"
                    >
                        <span class="mr-4">
                            <i
                                class="flaticon-confetti icon-2x text-muted font-weight-bold"
                            ></i>
                        </span>
                        <div class="d-flex flex-column text-dark-75">
                            <span class="font-weight-bolder font-size-sm"
                                >Kỷ Luật</span
                            >
                            <span class="font-weight-bolder font-size-h5">
                                <span
                                    class="text-dark-50 font-weight-bold"
                                ></span
                                >{{ this.data.ct_ky_luat.length }}</span
                            >
                        </div>
                    </div>
                    <!--end: Item-->
                    <!--begin: Item-->
                    <div
                        class="d-flex align-items-center flex-lg-fill mr-5 my-1"
                    >
                        <span class="mr-4">
                            <i
                                class="flaticon-pie-chart icon-2x text-muted font-weight-bold"
                            ></i>
                        </span>
                        <div class="d-flex flex-column text-dark-75">
                            <span class="font-weight-bolder font-size-sm"
                                >Lương</span
                            >
                            <span class="font-weight-bolder font-size-h5">
                                <span class="text-dark-50 font-weight-bold"
                                    >$</span
                                >782,300</span
                            >
                        </div>
                    </div>
                    <!--end: Item-->
                </div>
                <!--end::Bottom-->
            </div>
        </div>
        <div class="card card-custom gutter-b">
            <div class="card-header border-0 pt-5">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label font-weight-bolder text-dark"
                        >Danh sách khen thưởng</span
                    >
                </h3>
                <div class="card-toolbar">
                    <ul class="nav nav-pills nav-pills-sm nav-dark-75">
                        <li class="nav-item">
                            <button
                                v-on:click="handleShowModal(false)"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                class="btn btn-light-danger font-weight-bold"
                            >
                                <i class="flaticon-add"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <div
                    v-if="this.data.ct_khen_thuong.length == 0"
                    class="font-weight-mormal font-size-lg timeline-content text-muted pl-3"
                >
                    Chưa có khen thưởng nào
                </div>
                <div
                    v-if="this.data.ct_khen_thuong.length > 0"
                    class="timeline timeline-justified timeline-4"
                >
                    <div class="timeline-bar"></div>
                    <div
                        v-for="kt in this.data.ct_khen_thuong"
                        :key="kt.id"
                        class="timeline-items"
                    >
                        <div class="timeline-item">
                            <div class="timeline-badge">
                                <div class="bg-success"></div>
                            </div>
                            <div class="timeline-label">
                                <span class="text-success font-weight-bold">{{
                                    kt.ngay_qd
                                }}</span>
                            </div>
                            <div class="timeline-content">
                                <div
                                    class="d-flex align-items-center justify-content-between"
                                >
                                    <div class="mr-2">
                                        <a
                                            class="text-dark-75 text-hover-success font-weight-bold"
                                            >{{ kt.khen_thuong.name }}</a
                                        >
                                    </div>
                                    <div
                                        class="dropdown ml-2"
                                        data-toggle="tooltip"
                                        title=""
                                        data-placement="left"
                                        data-original-title="Quick actions"
                                    >
                                        <a
                                            href="#"
                                            class="btn btn-hover-light-primary btn-sm btn-icon"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i
                                                class="ki ki-more-hor text-primary"
                                            ></i>
                                        </a>
                                        <div
                                            class="dropdown-menu p-0 m-0 dropdown-menu-right"
                                        >
                                            <!--begin::Navigation-->
                                            <ul class="navi navi-hover">
                                                <li class="navi-item">
                                                    <a
                                                        href="javascript:;"
                                                        class="navi-link"
                                                        title="Delete"
                                                        v-on:click="
                                                            handleRemoveKhenThuong(
                                                                kt
                                                            )
                                                        "
                                                    >
                                                        <span class="navi-text">
                                                            <span
                                                                class="label label-xl label-inline label-light-success"
                                                                >Xóa</span
                                                            >
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <!--end::Navigation-->
                                        </div>
                                    </div>
                                </div>
                                <div class="mx-5">
                                    <div class="">
                                        <span
                                            class="font-weight-bolder text-dark-75 mr-3"
                                            >Nội Dung :
                                        </span>
                                        {{ kt.noi_dung }}
                                    </div>
                                    <div class="mt-3">
                                        <span
                                            class="font-weight-bolder text-dark-75 mr-2"
                                            >Hình Thức :
                                        </span>
                                        {{ kt.hinh_thuc }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-custom gutter-b">
            <div class="card-header border-0 pt-5">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label font-weight-bolder text-dark"
                        >Danh sách kỷ luật</span
                    >
                </h3>
                <div class="card-toolbar">
                    <ul class="nav nav-pills nav-pills-sm nav-dark-75">
                        <li class="nav-item">
                            <button
                                v-on:click="handleShowModal(true)"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                class="btn btn-light-danger font-weight-bold"
                            >
                                <i class="flaticon-add"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <div
                    v-if="this.data.ct_ky_luat.length == 0"
                    class="font-weight-mormal font-size-lg timeline-content text-muted pl-3"
                >
                    Chưa có kỷ luật nào
                </div>
                <div
                    v-if="this.data.ct_ky_luat.length > 0"
                    class="timeline timeline-justified timeline-4"
                >
                    <div class="timeline-bar"></div>
                    <div
                        v-for="kl in this.data.ct_ky_luat"
                        :key="kl.id"
                        class="timeline-items"
                    >
                        <div class="timeline-item">
                            <div class="timeline-badge">
                                <div class="bg-danger"></div>
                            </div>
                            <div class="timeline-label">
                                <span class="text-primary font-weight-bold">{{
                                    kl.ngay_kl
                                }}</span>
                            </div>
                            <div class="timeline-content">
                                <div
                                    class="d-flex align-items-center justify-content-between"
                                >
                                    <div class="mr-2">
                                        <a
                                            class="text-dark-75 text-hover-primary font-weight-bold"
                                            >{{ kl.ky_luat.name }}</a
                                        >
                                    </div>
                                    <div
                                        class="dropdown ml-2"
                                        data-toggle="tooltip"
                                        title=""
                                        data-placement="left"
                                        data-original-title="Quick actions"
                                    >
                                        <a
                                            href="#"
                                            class="btn btn-hover-light-primary btn-sm btn-icon"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i
                                                class="ki ki-more-hor text-primary"
                                            ></i>
                                        </a>
                                        <div
                                            class="dropdown-menu p-0 m-0 dropdown-menu-right"
                                        >
                                            <!--begin::Navigation-->
                                            <ul class="navi navi-hover">
                                                <li class="navi-item">
                                                    <a
                                                        href="javascript:;"
                                                        class="navi-link"
                                                        title="Delete"
                                                        v-on:click="
                                                            handleRemoveKyLuat(
                                                                kl
                                                            )
                                                        "
                                                    >
                                                        <span class="navi-text">
                                                            <span
                                                                class="label label-xl label-inline label-light-success"
                                                                >Xóa</span
                                                            >
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <!--end::Navigation-->
                                        </div>
                                    </div>
                                </div>
                                <div class="mx-5">
                                    <div class="">
                                        <span
                                            class="font-weight-bolder text-dark-75 mr-3"
                                            >Nguyên Nhân :
                                        </span>
                                        {{ kl.nguyen_nhan }}
                                    </div>
                                    <div class="mt-3">
                                        <span
                                            class="font-weight-bolder text-dark-75 mr-2"
                                            >Hình Thức :
                                        </span>
                                        {{ kl.hinh_thuc }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="modal fade"
            id="exampleModalCenter"
            data-backdrop="static"
            tabindex="-1"
            role="dialog"
            aria-labelledby="staticBackdrop"
            aria-hidden="true"
        >
            <div
                class="modal-dialog modal-dialog-centered modal-lg"
                role="document"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            {{ modalTitle }}
                        </h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <i aria-hidden="true" class="ki ki-close"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div
                            v-if="alert.isShowAlert"
                            v-bind:class="alert.className"
                            role="alert"
                        >
                            <div class="alert-icon">
                                <i v-bind:class="alert.iconClassname"></i>
                            </div>
                            <div class="alert-text">
                                {{ alert.message }}
                            </div>
                        </div>
                        <div data-scroll="true" data-height="300">
                            <div
                                class="form-group row fv-plugins-icon-container"
                                v-if="isKT"
                            >
                                <label
                                    class="col-xl-3 col-lg-3 col-form-label text-right"
                                    >Chọn loại khen thưởng:</label
                                >
                                <div class="col-lg-9 col-xl-9">
                                    <div
                                        class="input-group input-group-solid input-group-lg"
                                    >
                                        <select
                                            v-model="KTKLRecord.ma_khen_thuong"
                                            class="form-control"
                                        >
                                            <option
                                                v-for="item in khen_thuong"
                                                :key="item.id"
                                                :value="item.id"
                                                >{{ item.name }}</option
                                            >
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="form-group row fv-plugins-icon-container"
                                v-if="!isKT"
                            >
                                <label
                                    class="col-xl-3 col-lg-3 col-form-label text-right"
                                    >Chọn loại kỷ luật:</label
                                >
                                <div class="col-lg-9 col-xl-9">
                                    <div
                                        class="input-group input-group-solid input-group-lg"
                                    >
                                        <select
                                            v-model="KTKLRecord.ma_ky_luat"
                                            class="form-control"
                                        >
                                            <option
                                                v-for="item in ky_luat"
                                                :key="item.id"
                                                :value="item.id"
                                                >{{ item.name }}</option
                                            >
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="form-group row fv-plugins-icon-container"
                                v-if="isKT"
                            >
                                <label
                                    class="col-xl-3 col-lg-3 col-form-label text-right"
                                    >Ngày quyết định :</label
                                >
                                <div class="col-lg-9 col-xl-9">
                                    <div
                                        class="input-group input-group-solid input-group-lg"
                                    >
                                        <input
                                            v-model="KTKLRecord.ngay_qd"
                                            placeholder="ngày/tháng/năm"
                                            type="text"
                                            class="form-control form-control-solid form-control-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="form-group row fv-plugins-icon-container"
                                v-if="!isKT"
                            >
                                <label
                                    class="col-xl-3 col-lg-3 col-form-label text-right"
                                    >Ngày kỷ luật :</label
                                >
                                <div class="col-lg-9 col-xl-9">
                                    <div
                                        class="input-group input-group-solid input-group-lg"
                                    >
                                        <input
                                            v-model="KTKLRecord.ngay_kl"
                                            placeholder="ngày/tháng/năm"
                                            type="text"
                                            class="form-control form-control-solid form-control-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="form-group row fv-plugins-icon-container"
                                v-if="isKT"
                            >
                                <label
                                    class="col-xl-3 col-lg-3 col-form-label text-right"
                                    >Nội dung :</label
                                >
                                <div class="col-lg-9 col-xl-9">
                                    <div
                                        class="input-group input-group-solid input-group-lg"
                                    >
                                        <input
                                            v-model="KTKLRecord.noi_dung"
                                            type="text"
                                            class="form-control form-control-solid form-control-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="form-group row fv-plugins-icon-container"
                                v-if="!isKT"
                            >
                                <label
                                    class="col-xl-3 col-lg-3 col-form-label text-right"
                                    >Nguyên nhân :</label
                                >
                                <div class="col-lg-9 col-xl-9">
                                    <div
                                        class="input-group input-group-solid input-group-lg"
                                    >
                                        <input
                                            v-model="KTKLRecord.nguyen_nhan"
                                            type="text"
                                            class="form-control form-control-solid form-control-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                class="form-group row fv-plugins-icon-container"
                            >
                                <label
                                    class="col-xl-3 col-lg-3 col-form-label text-right"
                                    >Hình thức :</label
                                >
                                <div class="col-lg-9 col-xl-9">
                                    <div
                                        class="input-group input-group-solid input-group-lg"
                                    >
                                        <input
                                            v-model="KTKLRecord.hinh_thuc"
                                            type="text"
                                            class="form-control form-control-solid form-control-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-light-primary font-weight-bold"
                            data-dismiss="modal"
                            v-on:click="handleCloseModal"
                        >
                            Đóng
                        </button>
                        <button
                            v-on:click="handleSaveKTKL"
                            type="button"
                            class="btn btn-primary font-weight-bold"
                        >
                            Thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CrudModel from "../models/crud-model";
import ChiTiet from "../models/chi_tiet";
import KhenThuong from "../models/khenthuong";
import KyLuat from "../models/kyluat";
export default {
    data: function() {
        return {
            alert: {
                message: "",
                className: "",
                iconClassname: "",
                isShowAlert: false
            },
            data: {
                ct_khen_thuong: [],
                ct_ky_luat: [],
                chuc_vu: { name: "" },
                phong_ban: { name: "" },
                ky_luat: []
            },
            displayData: [],
            KTKLRecord: {},

            //////

            record: {
                ma_khen_thuong: ""
            },
            khen_thuong: [],
            ky_luat: [],
            modalTitle: "Khen Thưởng",
            isKT: true
        };
    },
    created() {
        let list_label = [
            {
                key: "ho_ten",
                value: "Họ Tên"
            },
            {
                key: "gioi_tinh",
                value: "Giới Tính"
            },
            {
                key: "so_cmnd",
                value: "số CMND"
            },
            {
                key: "noi_sinh",
                value: "Nơi Sinh"
            },
            {
                key: "ngay_sinh",
                value: "Ngày Sinh"
            },
            {
                key: "dien_thoai",
                value: "Điện Thoại"
            },
            {
                key: "ho_khau",
                value: "Hộ Khẩu"
            },
            {
                key: "so_the_atm",
                value: "Số Thẻ ATM"
            },
            {
                key: "cho_o_hien_nay",
                value: "Chỗ Ở Hiện Nay"
            },
            {
                key: "so_bhyt",
                value: "SỐ Bảo Hiểm Y Tế"
            },
            {
                key: "ngay_vao_lam",
                value: "Ngày Vào Làm"
            }
        ];

        const nhanvienModel = new CrudModel("nhanvien");

        nhanvienModel.get(this.$route.params.id).then(res => {
            if (res.success) {
                res.data.ngay_sinh = res.data.ngay_sinh.split(" ")[0];
                res.data.ngay_vao_lam = res.data.ngay_vao_lam.split("T")[0];
                this.data = res.data;
                for (let item in res.data) {
                    if (
                        !item.includes("ma_") &&
                        typeof res.data[item] == "string"
                    ) {
                        for (let label of list_label) {
                            if (item == label.key) {
                                this.displayData.push({
                                    label: label.value,
                                    value: res.data[item]
                                });
                            }
                        }
                    }
                }
            } else {
                console.log(res);
            }
        });
        const khenThuongModel = new CrudModel("khenthuong");
        khenThuongModel.getAll().then(res => {
            this.khen_thuong = res.data;
        });
        const kyLuatModel = new CrudModel("kyluat");
        kyLuatModel.getAll().then(res => {
            this.ky_luat = res.data;
        });
    },
    methods: {
        handleShowModal(isKL) {
            if (isKL) {
                this.modalTitle = "Kỷ Luật";
                this.isKT = false;
            } else {
                this.modalTitle = "Khen Thưởng";
                this.isKT = true;
            }
        },
        handleSaveKTKL() {
            if (this.getSizeObjectNotNull(this.KTKLRecord) < 4) {
                this.handleThrowError();
                console.log(this.KTKLRecord);
                return;
            }

            this.KTKLRecord.ma_nhan_vien = this.$route.params.id;

            if (this.isKT) {
                let ktModel = new ChiTiet("ct-khen-thuong");
                ktModel
                    .insertChiTiet({
                        ...this.KTKLRecord,
                        ngay_qd: this.handleDateTime(this.KTKLRecord.ngay_qd)
                    })
                    .then(res => {
                        if (res.success) {
                            this.handleSuccess();
                            this.data.ct_khen_thuong.push(res.data);
                        } else {
                            this.handleThrowError();
                        }
                    });
            } else {
                let ktModel = new ChiTiet("ct-ky-luat");
                ktModel
                    .insertChiTiet({
                        ...this.KTKLRecord,
                        ngay_kl: this.handleDateTime(this.KTKLRecord.ngay_kl)
                    })
                    .then(res => {
                        if (res.success) {
                            this.handleSuccess();
                            this.data.ct_ky_luat.push(res.data);
                        } else {
                            this.handleThrowError();
                        }
                    });
            }
        },
        handleCloseModal() {
            this.KTKLRecord = {};
        },
        handleThrowError() {
            this.alert.message = "Thêm Thất Bại.";
            this.alert.className =
                "alert alert-custom alert-light-danger fade show mb-5";
            this.alert.iconClassname = "flaticon2-cross";
            this.alert.isShowAlert = true;
        },
        getSizeObjectNotNull(obj) {
            let len = 0;
            for (let i in obj) {
                if (i != null && obj[i] != "") {
                    len++;
                }
            }
            return len;
        },
        handleDateTime(str) {
            let strArr = str.split("/");
            return new Date(
                strArr[2],
                Number.parseInt(strArr[1]) - 1,
                Number.parseInt(strArr[0]) + 1
            );
        },
        handleSuccess() {
            this.alert.message = "Thêm Thành Công.";
            this.alert.className =
                "alert alert-custom alert-light-success fade show mb-5";
            this.alert.iconClassname = "fas fa-check";
            this.alert.isShowAlert = true;
        },
        handleRemoveKhenThuong(kt) {
            Swal.fire({
                title: `Xác nhận xóa : \n ${kt.khen_thuong.name}`,
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Xóa",
                cancelButtonText: "Hủy",
                showLoaderOnConfirm: true,
                allowOutsideClick: false,
                preConfirm: () => {
                    const khenthuongModel = new KhenThuong();
                    return khenthuongModel.deleteCtKt(kt.id).then(res => res);
                }
            }).then(result => {
                if (result.value) {
                    if (result.value.success) {
                        this.data = this.data.filter(rec => rec.id != kt.id);
                        Swal.fire(
                            "XÓA THÀNH CÔNG",
                            `${kt.khen_thuong.name} đã được xóa.`,
                            "success"
                        );
                    } else {
                        Swal.fire("Đã có lỗi khi gửi", "", "error");
                    }
                }
            });
        },
        handleRemoveKyLuat(kl) {
            Swal.fire({
                title: `Xác nhận xóa : \n ${kl.name}`,
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Xóa",
                cancelButtonText: "Hủy",
                showLoaderOnConfirm: true,
                allowOutsideClick: false,
                preConfirm: () => {
                    const kyluatModel = new KyLuat();
                    return kyluatModel.deleteCtKl(kl.id).then(res => res);
                }
            }).then(result => {
                if (result.value) {
                    if (result.value.success) {
                        this.data = this.data.filter(rec => rec.id != kl.id);
                        Swal.fire(
                            "XÓA THÀNH CÔNG",
                            `${kl.name} đã được xóa.`,
                            "success"
                        );
                    } else {
                        Swal.fire("Đã có lỗi khi gửi", "", "error");
                    }
                }
            });
        }
    }
};
</script>

<style></style>
