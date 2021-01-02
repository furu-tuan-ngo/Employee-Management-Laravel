<template>
    <div>
        <LoginForm v-if="!this.authentication" @loginSuccess="loginSuccess" />

        <HomeComponent
            v-if="this.authentication"
            @reAuthentication="reAuthen"
        />
    </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import axios from "axios";
import LoadingComponent from "./LoadingComponent.vue";
import HomeComponent from "./HomeComponent.vue";
export default {
    components: { LoginForm, LoadingComponent, HomeComponent },
    data: function() {
        return {
            authentication: false
        };
    },
    created() {
        let accessToken = localStorage.getItem("access-token");
        if (!accessToken) {
            this.authentication = false;
        } else {
            this.authentication = true;
        }
    },
    methods: {
        loginSuccess() {
            location.reload();

            this.authentication = true;
        },
        reAuthen() {
            localStorage.removeItem("access-token");
            this.authentication = false;
        }
    }
};
</script>

<style></style>
