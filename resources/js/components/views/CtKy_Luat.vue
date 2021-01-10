<template>
    <div class="container">
        <!--begin::Advance Table Widget 1-->
        <div class="card card-custom card-stretch gutter-b card-shadowless p-0">
            <!--begin::Header-->
            <div class="card-header border-0 py-5 px-0">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label font-weight-bolder text-dark"
                        >Chi tiết kỹ luật</span
                    >
                </h3>
            </div>
            <!--end::Header-->
            <!--begin::Body-->
            <div class="card-body py-0 p-0">
                <!--begin::Table-->
                <div class="table-responsive">
                    <table
                        class="table table-head-custom table-vertical-center"
                        id="kt_advance_table_widget_1"
                    >
                        <thead>
                            <tr class="text-left">
                                <th style="min-width: 200px">Tên Nhân Viên</th>

                                <th style="min-width: 200px">Nguyên nhân</th>
                                <th style="min-width: 200px">Hình thức</th>
                                <th style="min-width: 200px">
                                    Ngày kỹ luật
                                </th>
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
                            <tr v-for="item in data.ct_ky_luat" :key="item.id">
                                <td class="pr-0">
                                    <a
                                        href="#"
                                        class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                        >{{ item.nhanvien.ho_ten }}</a
                                    >
                                </td>

                                <td>
                                    {{ item.nguyen_nhan }}
                                </td>
                                <td>
                                    {{ item.hinh_thuc }}
                                </td>
                                <td>
                                    {{ item.ngay_kl }}
                                </td>
                                <td class="pl-0 text-right"></td>
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
import LoadingComponent from "../LoadingComponent.vue";
import CrudModel from "../models/crud-model";
export default {
    components: { LoadingComponent },
    data: function() {
        return {
            loading: true,
            data: {
                ct_ky_luat: []
            }
        };
    },
    created() {
        const kyLuatModel = new CrudModel("kyluat");

        kyLuatModel
            .get(this.$router.currentRoute.params.id)
            .then(res => {
                if (res.success) {
                    this.data = res.data;
                    this.loading = false;
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
};
</script>

<style></style>
