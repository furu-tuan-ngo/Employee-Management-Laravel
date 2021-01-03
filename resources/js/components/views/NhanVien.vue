<template>
    <div class="card card-custom container p-0">
        <div class="card-header flex-wrap border-0 pt-6 pb-0">
            <div class="card-title">
                <h3 class="card-label">
                    Danh Sách Nhân Viên
                    <span class="d-block text-muted pt-2 font-size-sm"></span>
                </h3>
            </div>
            <div class="card-toolbar">
                <!--begin::Button-->
                <router-link
                    to="/nhan-vien/them"
                    class="btn btn-primary font-weight-bolder"
                >
                    Thêm Nhân Viên</router-link
                >
                <!--end::Button-->
            </div>
        </div>

        <div class="card-body">
            <!--end: Selected Rows Group Action Form-->
            <!--begin: Datatable-->

            <div
                class="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
                id="kt_datatable_2"
                style=""
            >
                <table class="datatable-table" style="display: block;">
                    <thead class="datatable-head">
                        <tr class="datatable-row" style="left: 0px;">
                            <!-- <th
                                data-field="RecordID"
                                class="datatable-cell-center datatable-cell datatable-cell-check"
                            >
                                <span style="width: 20px;"
                                    ><label
                                        class="checkbox checkbox-single checkbox-all"
                                        ><input type="checkbox"/>&nbsp;<span
                                        ></span></label
                                ></span>
                            </th> -->
                            <th
                                data-field="OrderID"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span style="width: 137px;">Họ Tên</span>
                            </th>
                            <th
                                data-field="Country"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span style="width: 137px;">Ngày Sinh</span>
                            </th>
                            <th
                                data-field="ShipAddress"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span style="width: 137px;">Nơi Sinh</span>
                            </th>
                            <th
                                data-field="ShipDate"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span style="width: 137px;">Số Điện Thoại</span>
                            </th>
                            <th
                                data-field="Status"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span style="width: 137px;">Phòng Ban</span>
                            </th>
                            <th
                                data-field="Type"
                                data-autohide-disabled="false"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span style="width: 137px;">Chức Vụ</span>
                            </th>
                            <th
                                data-field="Actions"
                                data-autohide-disabled="false"
                                class="datatable-cell-left datatable-cell datatable-cell-sort"
                            >
                                <span style="width: 125px;">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="datatable-body" style="">
                        <div class="loading-container" v-if="this.loading">
                            <loading-component />
                        </div>

                        <tr
                            v-for="item in this.data"
                            :key="item.id"
                            data-row="9"
                            class="datatable-row datatable-row-even"
                            style="left: 0px;"
                        >
                            <!-- <td
                                class="datatable-cell-center datatable-cell datatable-cell-check"
                                data-field="RecordID"
                                aria-label="10"
                            >
                                <span style="width: 20px;"
                                    ><label class="checkbox checkbox-single"
                                        ><input
                                            type="checkbox"
                                            value="10"/>&nbsp;<span
                                        ></span></label
                                ></span>
                            </td> -->
                            <td
                                data-field="OrderID"
                                aria-label="68788-9890"
                                class="datatable-cell"
                            >
                                <span style="width: 137px;">{{
                                    item.ho_ten
                                }}</span>
                            </td>
                            <td
                                data-field="Country"
                                aria-label="Dominican Republic"
                                class="datatable-cell"
                            >
                                <span style="width: 137px;">{{
                                    item.ngay_sinh.split(" ")[0]
                                }}</span>
                            </td>
                            <td
                                data-field="ShipAddress"
                                aria-label="854 Dapin Terrace"
                                class="datatable-cell"
                            >
                                <span style="width: 137px;">{{
                                    item.noi_sinh
                                }}</span>
                            </td>
                            <td
                                data-field="ShipDate"
                                aria-label="8/10/2016"
                                class="datatable-cell"
                            >
                                <span style="width: 137px;">{{
                                    item.dien_thoai
                                }}</span>
                            </td>
                            <td
                                data-field="Status"
                                aria-label="1"
                                class="datatable-cell"
                            >
                                <span style="width: 137px;">{{
                                    item.phong_ban.name
                                }}</span>
                            </td>
                            <td
                                data-field="Type"
                                data-autohide-disabled="false"
                                aria-label="2"
                                class="datatable-cell"
                            >
                                <span style="width: 137px;">{{
                                    item.chuc_vu.name
                                }}</span>
                            </td>
                            <td
                                class="datatable-cell-left datatable-cell"
                                data-field="Actions"
                                data-autohide-disabled="false"
                                aria-label="null"
                            >
                                <span
                                    style="overflow: visible; position: relative; width: 125px;"
                                >
                                    <a
                                        href="javascript:;"
                                        class="btn btn-sm btn-clean btn-icon mr-2"
                                        title="Edit details"
                                    >
                                        <span class="svg-icon svg-icon-md">
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
                                                        d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                                        fill="#000000"
                                                        fill-rule="nonzero"
                                                        transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                                    ></path>
                                                    <rect
                                                        fill="#000000"
                                                        opacity="0.3"
                                                        x="5"
                                                        y="20"
                                                        width="15"
                                                        height="2"
                                                        rx="1"
                                                    ></rect>
                                                </g>
                                            </svg>
                                        </span>
                                    </a>
                                    <a
                                        href="javascript:;"
                                        class="btn btn-sm btn-clean btn-icon"
                                        title="Delete"
                                    >
                                        <span class="svg-icon svg-icon-md">
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
                                        </span>
                                    </a>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="datatable-pager datatable-paging-loaded">
                    <ul class="datatable-pager-nav my-2 mb-sm-0">
                        <li>
                            <a
                                title="First"
                                class="datatable-pager-link datatable-pager-link-first datatable-pager-link-disabled"
                                data-page="1"
                                disabled="disabled"
                                ><i class="flaticon2-fast-back"></i
                            ></a>
                        </li>
                        <li style="display: none;">
                            <input
                                type="text"
                                class="datatable-pager-input form-control"
                                title="Page number"
                            />
                        </li>

                        <li>
                            <a
                                class="datatable-pager-link datatable-pager-link-number"
                                data-page="5"
                                title="5"
                                >5</a
                            >
                        </li>
                        <li>
                            <a
                                title="Last"
                                class="datatable-pager-link datatable-pager-link-last"
                                data-page="35"
                                ><i class="flaticon2-fast-next"></i
                            ></a>
                        </li>
                    </ul>
                    <div class="datatable-pager-info my-2 mb-sm-0">
                        <span class="datatable-pager-detail"
                            >Showing 1 - 10 of 350</span
                        >
                    </div>
                </div>
            </div>
            <!--end: Datatable-->
        </div>
    </div>
</template>

<script>
import LoadingComponent from "../LoadingComponent.vue";
import CrudModel from "../models/crud-model";

export default {
    components: { LoadingComponent },
    data: function() {
        return {
            data: [],
            loading: true
        };
    },
    created() {
        console.log("created");
        const nhanvienModel = new CrudModel("nhanvien");

        nhanvienModel
            .getAll()
            .then(res => {
                if (res.success) {
                    this.data = res.data;
                    this.loading = false;
                } else {
                    console.log(res);
                }
            })
            .catch(err => {
                console.log(err);
            });
    },
    mounted() {}
};
</script>

<style></style>
