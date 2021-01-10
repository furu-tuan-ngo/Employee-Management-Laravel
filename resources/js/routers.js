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
        path: "/chuc-vu/them",
        name: "chucvu-them",
        component: () => import("./components/views/Chuc_Vu_Add.vue")
    },
    {
        path: "/chuc-vu/sua/:id",
        name: "chucvu-sua",
        component: () => import("./components/views/Chuc_Vu_Edit.vue")
    },
    {
        path: "/phong-ban",
        name: "phongban",
        component: () => import("./components/views/PhongBan.vue")
    },
    {
        path: "/phong-ban/them",
        name: "phongban-them",
        component: () => import("./components/views/Phong_Ban_Add.vue")
    },
    {
        path: "/phong-ban/sua/:id",
        name: "phongban-sua",
        component: () => import("./components/views/Phong_Ban_Edit.vue")
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
        path: "/ton-giao/them",
        name: "tongiao-them",
        component: () => import("./components/views/Ton_Giao_Add.vue")
    },
    {
        path: "/ton-giao/sua/:id",
        name: "tongiao-sua",
        component: () => import("./components/views/Ton_Giao_Edit.vue")
    },
    {
        path: "/dan-toc/them",
        name: "them_dantoc",
        component: () => import("./components/views/DanToc_Add_Form.vue")
    },
    {
        path: "/nhan-vien/them",
        name: "them_nhanvien",
        component: () => import("./components/views/NhanVien_Add_Form.vue")
    },
    {
        path: "/nhan-vien/:id",
        name: "nhanvien_chitiet",
        component: () => import("./components/views/Chi_Tiet_Nhan_Vien.vue")
    },
    {
        path: "/nhan-vien/sua/:id",
        name: "sua_nhanvien",
        component: () => import("./components/views/NhanVien_Edit_Form.vue")
    },
    {
        path: "/khen-thuong",
        name: "khenthuong",
        component: () => import("./components/views/Khen_Thuong.vue")
    },
    {
        path: "/ky-luat",
        name: "kyluat",
        component: () => import("./components/views/Ky_Luat.vue")
    },
    {
        path: "/bang-luong",
        name: "bangluong",
        component: () => import("./components/views/Bang_Luong.vue")
    },

    {
        path: "/bang-luong/them",
        name: "bangluong-them",
        component: () => import("./components/views/Bang_Luong_Them.vue")
    },
    {
        path: "/bang-luong/sua/:id",
        name: "bangluong-sua",
        component: () => import("./components/views/Bang_Luong_Edit.vue")
    },
    {
        path: "/dan-toc/sua/:id",
        name: "dantoc-sua",
        component: () => import("./components/views/Dan_Toc_Edit.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
