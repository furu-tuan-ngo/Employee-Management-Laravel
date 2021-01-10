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
                            <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                                ><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo3\dist/../src/media/svg/icons\Home\Commode1.svg--><svg
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
                                        />
                                        <path
                                            d="M5.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L5.5,11 C4.67157288,11 4,10.3284271 4,9.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M11,6 C10.4477153,6 10,6.44771525 10,7 C10,7.55228475 10.4477153,8 11,8 L13,8 C13.5522847,8 14,7.55228475 14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 Z"
                                            fill="#000000"
                                            opacity="0.3"
                                        />
                                        <path
                                            d="M5.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M11,15 C10.4477153,15 10,15.4477153 10,16 C10,16.5522847 10.4477153,17 11,17 L13,17 C13.5522847,17 14,16.5522847 14,16 C14,15.4477153 13.5522847,15 13,15 L11,15 Z"
                                            fill="#000000"
                                        />
                                    </g></svg
                                ><!--end::Svg Icon--></span
                            >{{ this.data.chuc_vu.name }}</a
                        >
                        <a
                            class="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
                        >
                            <span
                                class="svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                                ><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo3\dist/../src/media/svg/icons\Communication\Adress-book2.svg--><svg
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
                                        />
                                        <path
                                            d="M18,2 L20,2 C21.6568542,2 23,3.34314575 23,5 L23,19 C23,20.6568542 21.6568542,22 20,22 L18,22 L18,2 Z"
                                            fill="#000000"
                                            opacity="0.3"
                                        />
                                        <path
                                            d="M5,2 L17,2 C18.6568542,2 20,3.34314575 20,5 L20,19 C20,20.6568542 18.6568542,22 17,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,3 C4,2.44771525 4.44771525,2 5,2 Z M12,11 C13.1045695,11 14,10.1045695 14,9 C14,7.8954305 13.1045695,7 12,7 C10.8954305,7 10,7.8954305 10,9 C10,10.1045695 10.8954305,11 12,11 Z M7.00036205,16.4995035 C6.98863236,16.6619875 7.26484009,17 7.4041679,17 C11.463736,17 14.5228466,17 16.5815,17 C16.9988413,17 17.0053266,16.6221713 16.9988413,16.5 C16.8360465,13.4332455 14.6506758,12 11.9907452,12 C9.36772908,12 7.21569918,13.5165724 7.00036205,16.4995035 Z"
                                            fill="#000000"
                                        />
                                    </g></svg
                                ><!--end::Svg Icon--></span
                            >{{ this.data.phong_ban.name }}</a
                        >
                        <a
                            class="text-muted text-hover-primary font-weight-bold"
                        >
                            <span
                                class="svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                                ><!--begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo3\dist/../src/media/svg/icons\Devices\iPhone-X.svg--><svg
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
                                        />
                                        <path
                                            d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z"
                                            fill="#000000"
                                            opacity="0.3"
                                        />
                                        <path
                                            d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z M8,1 L16,1 C17.5187831,1 18.75,2.23121694 18.75,3.75 L18.75,20.25 C18.75,21.7687831 17.5187831,23 16,23 L8,23 C6.48121694,23 5.25,21.7687831 5.25,20.25 L5.25,3.75 C5.25,2.23121694 6.48121694,1 8,1 Z M9.5,1.75 L14.5,1.75 C14.7761424,1.75 15,1.97385763 15,2.25 L15,3.25 C15,3.52614237 14.7761424,3.75 14.5,3.75 L9.5,3.75 C9.22385763,3.75 9,3.52614237 9,3.25 L9,2.25 C9,1.97385763 9.22385763,1.75 9.5,1.75 Z"
                                            fill="#000000"
                                            fill-rule="nonzero"
                                        />
                                    </g></svg
                                ><!--end::Svg Icon--></span
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
                                    kt.ngay_qd.split(" ")[0]
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
                                                <!-- <li class="navi-item">
                                                    <a
                                                        href="#"
                                                        class="navi-link"
                                                    >
                                                        <span class="navi-text">
                                                            <span
                                                                class="label label-xl label-inline label-light-success"
                                                                >Xóa</span
                                                            >
                                                        </span>
                                                    </a>
                                                </li> -->
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
                                    kl.ngay_kl.split(" ")[0]
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
                                                        href="#"
                                                        class="navi-link"
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
        }
    }
};
</script>

<style></style>
