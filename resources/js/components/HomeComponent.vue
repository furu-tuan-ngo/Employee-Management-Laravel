<template>
    <div>
        <div id="kt_header_mobile" class="header-mobile header-mobile-fixed">
            <!--begin::Logo-->
            <a href="#">
                <img
                    alt="Logo"
                    src="/assets/media/logos/logo-letter-1.png"
                    class="logo-default max-h-30px"
                />
            </a>
            <!--end::Logo-->
            <!--begin::Toolbar-->
            <div class="d-flex align-items-center">
                <button
                    class="btn p-0 burger-icon rounded-0 burger-icon-left"
                    id="kt_aside_tablet_and_mobile_toggle"
                >
                    <span></span>
                </button>
                <button
                    class="btn btn-hover-text-primary p-0 ml-3"
                    id="kt_header_mobile_topbar_toggle"
                >
                    <span class="svg-icon svg-icon-xl">
                        <!--begin::Svg Icon | path:/metronic/theme/html/demo5/dist/assets/media/svg/icons/General/User.svg-->
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
                                <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                <path
                                    d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                    opacity="0.3"
                                ></path>
                                <path
                                    d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                    fill="#000000"
                                    fill-rule="nonzero"
                                ></path>
                            </g>
                        </svg>
                        <!--end::Svg Icon-->
                    </span>
                </button>
            </div>
            <!--end::Toolbar-->
        </div>
        <div class="d-flex flex-column flex-root">
            <!--begin::Page-->
            <div class="d-flex flex-row flex-column-fluid page">
                <!--begin::Aside-->
                <div
                    class="aside aside-left d-flex flex-column flex-row-auto"
                    id="kt_aside"
                >
                    <!--begin::Aside Menu-->
                    <div
                        class="aside-menu-wrapper flex-column-fluid scroll ps ps--active-y"
                        id="kt_aside_menu_wrapper"
                        style="height: 226px; overflow: hidden;"
                    >
                        <!--begin::Menu Container-->
                        <div
                            id="kt_aside_menu"
                            class="aside-menu min-h-lg-800px"
                            data-menu-vertical="1"
                            data-menu-scroll="1"
                            data-menu-dropdown-timeout="500"
                        >
                            <!--begin::Menu Nav-->
                            <ul class="menu-nav">
                                <li class="menu-item">
                                    <a class="menu-link">
                                        <span class="svg-icon menu-icon">
                                            <dash-board-icon />
                                        </span>
                                        <span class="menu-text">Trang Chủ</span>
                                    </a>
                                </li>

                                <!-- FOR EACH PAGE -->
                                <li
                                    v-for="item in pages"
                                    :key="item.href"
                                    class="menu-item"
                                >
                                    <a
                                        v-on:click="changeView(item)"
                                        class="menu-link"
                                    >
                                        <span class="svg-icon menu-icon">
                                            <page-icon />
                                        </span>
                                        <span class="menu-text">{{
                                            item.title
                                        }}</span>
                                    </a>
                                </li>
                            </ul>
                            <!--end::Menu Nav-->
                        </div>
                    </div>
                    <!--end::Aside Menu-->
                </div>
                <!--end::Aside-->
                <!--begin::Wrapper-->
                <div
                    class="d-flex flex-column flex-row-fluid wrapper"
                    id="kt_wrapper"
                >
                    <!--begin::Header-->
                    <div id="kt_header" class="header header-fixed">
                        <!--begin::Container-->
                        <div
                            class="container d-flex align-items-stretch justify-content-between"
                        >
                            <!--begin::Left-->
                            <div
                                class="d-none d-lg-flex align-items-center mr-3"
                            >
                                <!--begin::Aside Toggle-->
                                <button
                                    class="btn btn-icon aside-toggle ml-n3 mr-10"
                                    id="kt_aside_desktop_toggle"
                                >
                                    <span
                                        class="svg-icon svg-icon-xxl svg-icon-dark-75"
                                    >
                                        <!--begin::Svg Icon | path:/assets/media/svg/icons/Text/Align-left.svg-->
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
                                                <rect
                                                    fill="#000000"
                                                    opacity="0.3"
                                                    x="4"
                                                    y="5"
                                                    width="16"
                                                    height="2"
                                                    rx="1"
                                                ></rect>
                                                <rect
                                                    fill="#000000"
                                                    opacity="0.3"
                                                    x="4"
                                                    y="13"
                                                    width="16"
                                                    height="2"
                                                    rx="1"
                                                ></rect>
                                                <path
                                                    d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z"
                                                    fill="#000000"
                                                ></path>
                                            </g>
                                        </svg>
                                        <!--end::Svg Icon-->
                                    </span>
                                </button>
                                <!--end::Aside Toggle-->
                                <!--begin::Logo-->
                                <a href="#">
                                    <img
                                        alt="Logo"
                                        src="/assets/media/logos/logo-letter-1.png"
                                        class="logo-sticky max-h-35px"
                                    />
                                </a>
                                <!--end::Logo-->
                            </div>
                            <div class="topbar">
                                <div
                                    class="topbar-item"
                                    data-toggle="dropdown"
                                    data-offset="10px,0px"
                                >
                                    <button
                                        v-on:click="handleLogout"
                                        class="btn btn-light-danger font-weight-bold"
                                    >
                                        <i class="fas fa-sign-out-alt"></i>
                                        Đăng Xuất
                                    </button>
                                </div>
                            </div>
                            <!--end::Left-->
                        </div>
                        <!--end::Container-->
                    </div>
                    <!--end::Header-->
                    <div
                        class="content d-flex flex-column flex-column-fluid"
                        id="kt_content"
                    >
                        <router-view></router-view>
                    </div>
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Page-->
        </div>
    </div>
</template>

<script>
import DashBoardIcon from "./icons/DashBoardIcon.vue";
import PageIcon from "./icons/PageIcon.vue";
import LoadingComponent from "./LoadingComponent.vue";

import router from "../routers"; //or whatever your router.js path is
export default {
    components: { PageIcon, DashBoardIcon, LoadingComponent },
    data: function() {
        return {
            pages: [
                {
                    name: "nhanvien",
                    title: "Quản Lý Nhân Viên",
                    icon: PageIcon
                },
                {
                    name: "tongiao",
                    title: "Quản Lý Tôn Giáo",
                    icon: PageIcon
                },
                {
                    name: "dantoc",
                    title: "Quản Lý Dân Tộc",
                    icon: PageIcon
                },
                {
                    name: "phongban",
                    title: "Quản Lý Phòng Ban",
                    icon: PageIcon
                },
                {
                    name: "chucvu",
                    title: "Quản Lý Chức Vụ",
                    icon: PageIcon
                }
            ]
        };
    },
    mounted() {},
    methods: {
        changeView(item) {
            document.getElementById("kt_aside").classList.remove("aside-on");
            document.getElementsByClassName("aside-overlay")[0].remove();
            document
                .getElementsByTagName("BODY")[0]
                .removeAttribute("data-offcanvas-aside");
            router.push({ name: item.name });
        },
        handleLogout() {
            localStorage.removeItem("access-token");
            router.push("/");
            location.reload();
        }
    }
};
</script>

<style></style>
