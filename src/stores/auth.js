import {
    defineStore
} from "pinia";
import axios from "axios";

const fakeSerial = "No More Bans <3";

export const useAuth = defineStore("auth", {
    state: () => {
        return {
            user: null,
            token: null,
        };
    },

    actions: {
        async init() {
            // axios.defaults.headers.common["Allow-Control-Allow-Origin"] = '*';
            return new Promise((resolve, reject) => {
                if (localStorage.getItem("phone")) {
                    const phone = localStorage.getItem("phone");
                    const password = localStorage.getItem("password");

                    axios
                        .get("https://elsaify.elameed.education/elsefy/api/desktop/login", {
                            crossdomain: true,
                            params: {
                                phone,
                                password,
                                serial: fakeSerial
                            },
                        })
                        .then((res) => {
                            console.log(res);
                            if (res.data.code == 200) {
                                this.user = res.data.data[0];
                                this.token = res.data.data[0].api_token;
                                localStorage.setItem("phone", phone);
                                localStorage.setItem("password", password);
                                axios.defaults.headers.common[
                                    "Authorization"
                                ] = `Bearer ${res.data.data[0].api_token}`;
                                resolve();
                            } else {
                                localStorage.removeItem("phone");
                                localStorage.removeItem("password");
                                reject();
                            }
                        })
                        .catch((err) => {
                            localStorage.removeItem("phone");
                            localStorage.removeItem("password");
                            console.log(err);
                            reject();
                        });
                } else reject();
            });
        },
        async login({
            phone,
            password
        }) {
            // eslint-disable-next-line no-unused-vars
            return new Promise((resolve, reject) => {
                axios
                    .get("https://elsaify.elameed.education/elsefy/api/desktop/login", {
                        crossdomain: true,
                        params: {
                            phone,
                            password,
                            serial: fakeSerial
                        },
                    })
                    .then((res) => {
                        console.log(res);
                        if (res.data.code == 200) {
                            this.user = res.data.data[0];
                            this.token = res.data.data[0].api_token;
                            localStorage.setItem("phone", phone);
                            localStorage.setItem("password", password);
                            axios.defaults.headers.common[
                                "Authorization"
                            ] = `Bearer ${res.data.data[0].api_token}`;
                            resolve({
                                code: res.code,
                                message: "تم تسجيل الدخول بنجاح"
                            });
                        } else if (res.data.code == 401)
                            reject({
                                code: res.data.code,
                                message: "رقم التليفون أو كلمة السر غلط",
                            });
                        else
                            reject({
                                code: res.code,
                                message: "موقع الصيفي مش متاح حاليا"
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                        reject({
                            code: err.code,
                            message: "ممكن تكون فاصل نت أو موقع الصيفي مش متاح حاليا",
                        });
                    });
            });
        },
        logout() {
            // Any necessary cleanup
            localStorage.removeItem("phone");
            localStorage.removeItem("password");
            localStorage.removeItem("token");
            this.$reset();
        },
    },
});