<template>
    <div class="container mt-10">
        <!--begin::Advance Table Widget 1-->
        <div class="card card-custom">
            <!--begin::Header-->
            <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label font-weight-bolder text-dark"
                        >Danh Sách Dân Tộc</span
                    >
                </h3>
                <div class="card-toolbar">
                    <router-link
                        to="/dan-toc/them"
                        class="btn btn-success font-weight-bolder font-size-sm"
                    >
                        Thêm Dân Tộc</router-link
                    >
                </div>
            </div>
            <!--end::Header-->
            <!--begin::Body-->
            <div class="card-body py-0">
                <!--begin::Table-->
                <div class="table-responsive">
                    <table
                        class="table table-head-custom table-vertical-center"
                        id="kt_advance_table_widget_1"
                    >
                        <thead>
                            <tr class="text-left">
                                <th style="min-width: 200px">Tên Dân Tộc</th>

                                <th style="min-width: 150px">Ngày Tạo</th>
                                <th style="min-width: 150px">Ngày Chỉnh Sửa</th>
                                <th
                                    class="pr-0 text-right"
                                    style="min-width: 150px"
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            <div class="loading-container" v-if="this.loading">
                                <loading-component />
                            </div>
                            <tr v-for="item in data" :key="item.id">
                                <td class="pr-0">
                                    <a
                                        class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                        >{{ item.name }}</a
                                    >
                                </td>

                                <td>
                                    {{ item.created_at }}
                                </td>
                                <td>
                                    {{ item.updated_at }}
                                </td>
                                <td class="pr-0 text-right">
                                    <router-link
                                        :to="{
                                            name: 'dantoc-sua',
                                            params: { id: item.id }
                                        }"
                                        class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                                    >
                                        <span
                                            class="svg-icon svg-icon-md svg-icon-primary"
                                        >
                                            <!--begin::Svg Icon | path:/metronic/theme/html/demo5/dist/assets/media/svg/icons/Communication/Write.svg-->
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
                                                        d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                                        fill="#000000"
                                                        fill-rule="nonzero"
                                                        transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                                    ></path>
                                                    <path
                                                        d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                                        fill="#000000"
                                                        fill-rule="nonzero"
                                                        opacity="0.3"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <!--end::Svg Icon-->
                                        </span>
                                    </router-link>
                                    <a
                                        v-on:click="handleRemove(item)"
                                        class="btn btn-icon btn-light btn-hover-primary btn-sm"
                                    >
                                        <span
                                            class="svg-icon svg-icon-md svg-icon-primary"
                                        >
                                            <!--begin::Svg Icon | path:/metronic/theme/html/demo5/dist/assets/media/svg/icons/General/Trash.svg-->
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
                                                        d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                                        fill="#000000"
                                                        fill-rule="nonzero"
                                                    ></path>
                                                    <path
                                                        d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                                        fill="#000000"
                                                        opacity="0.3"
                                                    ></path>
                                                </g>
                                            </svg>
                                            <!--end::Svg Icon-->
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!--end::Table-->
            </div>
            <!--end::Body-->
        </div>
        <!--end::Advance Table Widget 1-->
    </div>
</template>

<script>
import Swal from "sweetalert2";
import LoadingComponent from "../LoadingComponent.vue";
import CrudModel from "../models/crud-model";
export default {
    components: { LoadingComponent },
    data: function() {
        return {
            loading: true,
            data: []
        };
    },
    created() {
        const dantocModel = new CrudModel("dantoc");

        dantocModel
            .getAll()
            .then(res => {
                if (res.success) {
                    res.data.forEach(element => {
                        element.created_at = element.created_at
                            .split("T")[0]
                            .split("-")
                            .reverse()
                            .join("/");
                        element.updated_at = element.updated_at
                            .split("T")[0]
                            .split("-")
                            .reverse()
                            .join("/");
                    });
                    this.loading = false;
                    this.data = res.data;
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        handleRemove(item) {
            console.log(item);
            Swal.fire({
                title: `Xác nhận xóa dân tộc : ${item.name}`,
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Xóa",
                cancelButtonText: "Hủy",
                showLoaderOnConfirm: true,
                allowOutsideClick: false,
                preConfirm: () => {
                    const dantocModel = new CrudModel("dantoc");
                    return dantocModel.delete(item.id).then(res => res);
                }
            }).then(result => {
                if (result.value) {
                    if (result.value.success) {
                        this.data = this.data.filter(rec => rec.id != item.id);
                        Swal.fire(
                            "XÓA THÀNH CÔNG",
                            `Dân tộc: ${item.name} đã được xóa.`,
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
