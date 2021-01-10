<template>
    <div class="card card-custom container mt-10">
        <div class="card-header py-3">
            <div class="card-title">
                <span class="card-icon">
                    <span class="svg-icon svg-icon-md svg-icon-primary">
                        <!--begin::Svg Icon | path:/metronic/theme/html/demo5/dist/assets/media/svg/icons/Shopping/Chart-bar1.svg-->
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
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    x="12"
                                    y="4"
                                    width="3"
                                    height="13"
                                    rx="1.5"
                                ></rect>
                                <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    x="7"
                                    y="9"
                                    width="3"
                                    height="8"
                                    rx="1.5"
                                ></rect>
                                <path
                                    d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                ></path>
                                <rect
                                    fill="#000000"
                                    opacity="0.3"
                                    x="17"
                                    y="11"
                                    width="3"
                                    height="6"
                                    rx="1.5"
                                ></rect>
                            </g>
                        </svg>
                        <!--end::Svg Icon-->
                    </span>
                </span>
                <h3 class="card-label">Danh Sách Bảng Lương</h3>
            </div>
            <div class="card-toolbar">
                <!--begin::Button-->
                <router-link
                    :to="{ name: 'bangluong-them' }"
                    class="btn btn-primary font-weight-bolder"
                >
                    <i class="la la-plus"></i>Thêm bảng lương</router-link
                >
                <!--end::Button-->
            </div>
        </div>
        <div class="card-body">
            <!--begin: Search Form-->
            <!--begin::Search Form-->
            <div class="mt-2 mb-7">
                <div class="row align-items-center">
                    <div class="col-lg-9 col-xl-8">
                        <div class="row align-items-center">
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0 d-none d-md-block"
                                        >Tháng:</label
                                    >
                                    <select
                                        v-model="defauldTime.month"
                                        class="form-control"
                                    >
                                        <option
                                            v-for="item in months"
                                            :key="item"
                                            :value="item"
                                            >{{ item }}</option
                                        >
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4 my-2 my-md-0">
                                <div class="d-flex align-items-center">
                                    <label class="mr-3 mb-0">Năm:</label>
                                    <select
                                        v-model="defauldTime.year"
                                        class="form-control"
                                    >
                                        <option
                                            v-for="y in years"
                                            :key="y"
                                            :value="y"
                                            >{{ y }}</option
                                        >
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                                <a
                                    v-on:click="handleSearch"
                                    class="btn btn-light-primary px-6 font-weight-bold"
                                    >Lọc</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Search Form-->
            <!--end: Search Form-->
            <!--begin: Datatable-->
            <div
                class="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
                id="kt_datatable"
                style=""
            >
                <table class="datatable-table" style="display: block;">
                    <thead class="datatable-head">
                        <tr class="datatable-row" style="left: 0px;">
                            <th
                                data-field="OrderID"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span class="text-center" style="width: 110px;"
                                    >Nhân Viên</span
                                >
                            </th>
                            <th
                                data-field="Country"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span class="text-center" style="width: 110px;"
                                    >Phòng Ban</span
                                >
                            </th>
                            <th
                                data-field="CompanyEmail"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span class="text-center" style="width: 136px;"
                                    >Lương Cơ Bản</span
                                >
                            </th>
                            <th
                                data-field="ShipDate"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span class="text-center" style="width: 130px;"
                                    >Số Ngày Tăng Ca</span
                                >
                            </th>
                            <th
                                data-field="CompanyName"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span class="text-center" style="width: 136px;"
                                    >Lương Tăng Ca</span
                                >
                            </th>
                            <th
                                data-field="ShipAddress"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span class="text-center" style="width: 110px;"
                                    >Tiền Bảo Hiểm</span
                                >
                            </th>
                            <th
                                data-field="Website"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span class="text-center" style="width: 110px;"
                                    >Thực Lãnh</span
                                >
                            </th>
                            <th
                                data-field="Actions"
                                data-autohide-disabled="false"
                                class="datatable-cell datatable-cell-sort"
                            >
                                <span
                                    class="text-center"
                                    style="width: 125px;"
                                ></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="datatable-body" style="">
                        <tr
                            v-for="item in this.data"
                            :key="item.id"
                            data-row="0"
                            class="datatable-row"
                            style="left: 0px;"
                        >
                            <td
                                data-field="OrderID"
                                aria-label="64616-103"
                                class="datatable-cell"
                            >
                                <div class="text-center" style="width: 110px;">
                                    <router-link
                                        :to="{
                                            name: 'nhanvien_chitiet',
                                            params: { id: item.nhan_vien.id }
                                        }"
                                        class="text-dark text-hover-primary font-weight-bold"
                                        style="width: 110px;"
                                        >{{
                                            item.nhan_vien.ho_ten
                                        }}</router-link
                                    >
                                </div>
                            </td>
                            <td
                                data-field="Country"
                                aria-label="Brazil"
                                class="datatable-cell"
                            >
                                <span
                                    class="text-center"
                                    style="width: 110px;"
                                    >{{ item.phong_ban.name }}</span
                                >
                            </td>
                            <td
                                data-field="CompanyEmail"
                                aria-label="hboule0@hp.com"
                                class="datatable-cell"
                            >
                                <span
                                    class="text-center"
                                    style="width: 136px;"
                                    >{{ item.luong_cb }}</span
                                >
                            </td>
                            <td
                                data-field="ShipDate"
                                aria-label="10/15/2017"
                                class="datatable-cell"
                            >
                                <span
                                    class="text-center"
                                    style="width: 130px;"
                                    >{{ item.so_ngay_tang_ca }}</span
                                >
                            </td>
                            <td
                                data-field="CompanyName"
                                aria-label="Casper-Kerluke"
                                class="datatable-cell"
                            >
                                <span
                                    class="text-center"
                                    style="width: 136px;"
                                    >{{ item.luong_tang_ca }}</span
                                >
                            </td>
                            <td
                                data-field="ShipAddress"
                                aria-label="698 Oriole Pass"
                                class="datatable-cell"
                            >
                                <span
                                    class="text-center"
                                    style="width: 110px;"
                                    >{{ item.tien_bao_hiem }}</span
                                >
                            </td>
                            <td
                                data-field="Website"
                                aria-label="thetimes.co.uk"
                                class="datatable-cell"
                            >
                                <span
                                    class="text-center"
                                    style="width: 110px;"
                                    >{{ item.thuc_lanh }}</span
                                >
                            </td>

                            <td
                                data-field="Actions"
                                data-autohide-disabled="false"
                                aria-label="null"
                                class="datatable-cell"
                            >
                                <span
                                    style="overflow: visible; position: relative; width: 125px;"
                                >
                                    <div class="dropdown dropdown-inline"></div>
                                    <router-link
                                        :to="{
                                            name: 'bangluong-sua',
                                            params: { id: item.id }
                                        }"
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
                                    </router-link>
                                    <a
                                        v-on:click="handleRemove(item)"
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
            </div>
            <!--end: Datatable-->
        </div>
    </div>
</template>

<script>
import CrudModel from "../models/crud-model";

export default {
    data: function() {
        return {
            data: [],
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            years: [],
            defauldTime: {
                month: Number.parseInt(new Date().getMonth()) + 1,
                year: Number.parseInt(new Date().getFullYear())
            },
            defaultMonth: Number.parseInt(new Date().getMonth()) + 1,
            defaultYear: Number.parseInt(new Date().getFullYear())
        };
    },
    created() {
        // Handle Years
        let startYear = 2015;
        let endYear = this.defauldTime.year + 5;
        this.years = Array(endYear - startYear)
            .fill()
            .map((_, idx) => startYear + idx);
        // End handle years

        const bangluongModel = new CrudModel("bangluong");

        bangluongModel
            .getAll({
                year: this.defauldTime.year.toString(),
                month: this.defauldTime.month.toString()
            })
            .then(res => {
                if (res.success) {
                    this.data = res.data;
                }
            })
            .catch(err => console.log(err));
    },
    methods: {
        handleSearch() {
            const bangluongModel = new CrudModel("bangluong");

            bangluongModel
                .getAll({
                    year: this.defauldTime.year.toString(),
                    month: this.defauldTime.month.toString()
                })
                .then(res => {
                    if (res.success) {
                        this.data = res.data;
                    }
                })
                .catch(err => console.log(err));
        },

        handleRemove(item) {
            console.log(item);
            Swal.fire({
                title: `Xác nhận xóa bảng lương của : \n ${item.nhan_vien.ho_ten} \n trong tháng ${item.thang} năm ${item.nam}`,
                text: "",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Xóa",
                cancelButtonText: "Hủy",
                showLoaderOnConfirm: true,
                allowOutsideClick: false,
                preConfirm: () => {
                    const bangLuongModel = new CrudModel("bangluong");
                    return bangLuongModel.delete(item.id).then(res => res);
                }
            }).then(result => {
                if (result.value) {
                    if (result.value.success) {
                        this.data = this.data.filter(rec => rec.id != item.id);
                        Swal.fire(
                            "XÓA THÀNH CÔNG",
                            ``,
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
