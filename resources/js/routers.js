import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/nhan-vien",
        name: "nhanvien",
        component: () => import("./components/views/NhanVien.vue")
    },
    {
        path: "/chuc-vu",
        name: "chucvu",
        component: () => import("./components/views/ChucVu.vue")
    },
    {
        path: "/phong-ban",
        name: "phongban",
        component: () => import("./components/views/PhongBan.vue")
    },
    {
        path: "/dan-toc",
        name: "dantoc",
        component: () => import("./components/views/DanToc.vue")
    },
    {
        path: "/ton-giao",
        name: "tongiao",
        component: () => import("./components/views/TonGiao.vue")
    },
    {
        path: "/dan-toc/them",
        name: "them_dantoc",
        component: () => import("./components/views/DanToc_Add_Form.vue")
    },
    {
        path: "/nhan-vien/them",
        name: "them_dantoc",
        component: () => import("./components/views/NhanVien_Add_Form.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
