import {
  defineStore
} from "pinia";
import axios from "axios";
// import {
//   Device
// } from '@capacitor/device';

const fakeSerial = "IgnitionSoftware930";

export const useAuth = defineStore("auth", {
  state: () => {
    return {
      user: null,
      token: null,
      initialized: false,
    };
  },

  actions: {
    async init() {
      // const serial = (await Device.getId()).uuid;
      return new Promise((resolve, reject) => {
        if (localStorage.getItem("phone")) {
          const phone = localStorage.getItem("phone");
          const password = localStorage.getItem("password");
          const serial = localStorage.getItem("serial");

          axios
            .get(
              "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/student/login?", {
                crossdomain: true,
                params: {
                  phone,
                  password,
                  serial: serial ? serial : fakeSerial,
                },
              }
            )
            .then((res) => {
              // console.log(res);
              if (res.data.code == 200) {
                this.user = res.data.data[0];
                this.token = res.data.data[0].api_token;
                localStorage.setItem("phone", phone);
                localStorage.setItem("password", password);
                localStorage.setItem("user_id", res.data.data[0].id);
                localStorage.setItem("serial", res.data.data[0].serial);
                axios.defaults.headers.common[
                  "Authorization"
                ] = `Bearer ${res.data.data[0].api_token}`;
                resolve();
              } else {
                this.logout();
                reject();
              }
            })
            .catch((err) => {
              if (err.response) {
                this.logout();
                console.log(err);
                reject({
                  network: false
                });
              } else {
                console.log(err);
                reject({
                  network: true
                });
              }
            });
        } else reject({
          network: false
        });

        axios.interceptors.response.use(
          (response) => {
            if ((response.data.code == 403) && !!this.token) {
              window.location.reload();
            } else {
              return response;
            }
          },
          (error) => {
            if ((error.response.status == 403) && !!this.token) {
              window.location.reload();
            } else {
              return Promise.reject(error);
            }
          }
        );

        this.initialized = true;

      });
    },
    async login({
      phone,
      password,
      serial,
    }) {
      // const serial = (await Device.getId()).uuid;
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        axios
          .get(
            "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/login?", {
              crossdomain: true,
              params: {
                phone,
                password,
                serial: serial ? serial : fakeSerial,
              },
            }
          )
          .then((res) => {
            // console.log(res);
            if (res.data.code == 200) {
              this.user = res.data.data[0];
              this.token = res.data.data[0].api_token;
              localStorage.setItem("phone", phone);
              localStorage.setItem("password", password);
              localStorage.setItem("user_id", res.data.data[0].id);
              localStorage.setItem("serial", res.data.data[0].serial);
              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${res.data.data[0].api_token}`;
              resolve({
                code: res.code,
                message: "تم تسجيل الدخول بنجاح",
              });
            } else if (res.data.code == 401)
              reject({
                code: res.data.code,
                message: "رقم التليفون أو كلمة السر غلط",
              });
            else
              reject({
                code: res.code,
                message: "موقع الصيفي مش متاح حاليا",
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
      localStorage.removeItem("user_id");
      this.$reset();
      this.initialized = true;
    },
  },
});