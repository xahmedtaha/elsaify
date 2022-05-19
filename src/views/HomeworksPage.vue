<template>
    <ion-page>
        <!-- <ion-header>
      <ion-toolbar color="primary">
        <ion-title>التواصل مع المستر</ion-title>
      </ion-toolbar>
        </ion-header>-->
        <ion-content>
            <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">التواصل مع المستر</ion-title>
        </ion-toolbar>
            </ion-header>-->
            <main>
                <div>
                    <div>
                        <lottie :options="animationOptions" :height="180" />
                    </div>
                    <transition name="fade" mode="out-in">
                        <div class="wrapper" v-if="loading">
                            <ion-spinner color="primary" name="crescent"></ion-spinner>
                        </div>
                        <div v-else-if="!error" class="courses-wrapper">
                            <transition name="fade" mode="out-in">
                                <div class="error-wrapper" v-if="error">
                                    <ion-text color="danger">ممكن تكون فاصل نت أو موقع الصيفي مش متاح</ion-text>
                                    <ion-button size="small" style="margin-top: 15px; --box-shadow: none"
                                        @click="getCourses">حاول تاني</ion-button>
                                </div>
                                <div v-else>
                                    <course-tile dense class="course" v-for="course in homeworks.sort(sortCourses)"
                                        :course="course" :key="course.id"></course-tile>
                                </div>
                            </transition>
                        </div>
                    </transition>
                </div>
            </main>
        </ion-content>
    </ion-page>
</template>

<script>
import lottie from "../components/LottiePlayer.vue";
import * as homeworksAnimation from "../../public/assets/animations/homeworks.json";
import {
    IonPage,
    IonSpinner,
    IonText,
    IonButton,
    IonContent,
    alertController,
    loadingController,
actionSheetController,
} from "@ionic/vue";
import { chevronBack, lockClosed, qrCode, wallet } from "ionicons/icons";
import axios from "axios";
import CourseTile from "../components/CourseTile.vue";
import { useAuth } from "../stores/auth";

const groupBy = require('lodash.groupby');

export default {
    mounted() {
        this.getCourses();
    },
    data: () => ({
        loading: true,
        homeworks: [],
        lectures: [],
        homeworksError: false,
        lecturesError: false,
        error: false,
        sortWords: [
            "الاول",
            "الأول",
            "الثاني",
            "الثانى",
            "الثالث",
            "الرابع",
            "الخامس",
        ],
        lockClosed,
        chevronBack,
        segment: "lectures",
        animationOptions: { animationData: homeworksAnimation },
    }),
    methods: {
        groupBy,
        segmentChanged(ev) {
            ev.preventDefault();
            this.segment = ev.detail.value;

        },
        sortCourses(a, b) {
            return (
                this.sortWords.findIndex((v) => a.text.includes(v)) -
                this.sortWords.findIndex((v) => b.text.includes(v))
            );
        },
        isLectureAvailable(lecture) {
            return lecture.countC > 0 || lecture.money == "0.00";
        },




        async showPurchaseActions(lecture) {
            const actionSheet = await actionSheetController.create({
                subHeader: "اختار طريقة التفعيل",
                header: "تفعيل: " + lecture.title,
                buttons: [
                    {
                        text: "رصيد المحفظة",
                        icon: wallet,
                        handler: () => {
                            this.useWallet(lecture)
                        },
                    },
                    {
                        text: "الكيو ار",
                        icon: qrCode,
                        handler: () => {
                            this.useQR(lecture)
                        },
                    },
                ],
            });
            await actionSheet.present();
        },
        async useWallet(lecture) {
            const loading = await loadingController
                .create({
                    message: 'استنى نفعل من المحفظة',
                });
            await loading.present();
            const uninterceptedAxios = axios.create({
                headers: {
                    "Authentication": "Bearer " + useAuth().token,
                },
            });
            uninterceptedAxios
                .get(
                    "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/courseWallet?courseId=" +
                    lecture.id,
                    { crossdomain: true }
                )
                .then((res) => {
                    if (res.data.code == 200) this.goToLecture(lecture);
                    else alertController.create({ header: "مشكلة !", message: 'رصيد محفظتك مش كفاية', buttons: ["تمام"], mode: 'ios', }).then(alert => {
                        alert.present();
                    });
                    loading.dismiss()
                })
                .catch((err) => {
                    console.error(err);
                    alertController.create({ header: "مشكلة !", message: 'رصيد محفظتك مش كفاية', buttons: ["تمام"], mode: 'ios', }).then(alert => {
                        alert.present();
                    });
                    loading.dismiss()
                });
        },


        async useQR(lecture) {
            const alert = await alertController.create({
                header: lecture.title,
                message: 'اعمل اسكان للكيو ار بتليفونك و دخل الكود اللي طلع هنا',
                inputs: [
                    {
                        name: 'code',
                        placeholder: 'كود الكيو ار',
                        type: 'text',
                    },
                ],
                buttons: [
                    { text: "الغاء", role: "cancel", cssClass: 'secondary', },
                    {
                        text: "تأكيد",
                        handler: async (data) => {
                            const loading = await loadingController
                                .create({
                                    message: 'استنى نفعل الكود',
                                });
                            await loading.present();
                            const uninterceptedAxios = axios.create({
                                headers: {
                                    "Authentication": "Bearer " + useAuth().token,
                                },
                            });
                            uninterceptedAxios
                                .get(
                                    "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/courseCode?courseId=" +
                                    lecture.id +
                                    "&code=" + data.code,
                                    { crossdomain: true }
                                )
                                .then((res) => {
                                    if (res.data.code == 200) this.goToLecture(lecture);
                                    else alertController.create({ header: "مشكلة !", message: 'الكود مش مظبوط', buttons: ["تمام"], mode: 'ios', }).then(alert => {
                                        alert.present();
                                        alert.onDidDismiss().then(() => {
                                            this.useQR(lecture);
                                        })
                                    });
                                    loading.dismiss()
                                })
                                .catch((err) => {
                                    console.error(err);
                                    alertController.create({ header: "مشكلة !", message: 'الكود مش مظبوط', buttons: ["تمام"], mode: 'ios', }).then(alert => {
                                        alert.present();
                                        alert.onDidDismiss().then(() => {
                                            this.useQR(lecture);
                                        })
                                    });
                                    loading.dismiss()
                                });
                        },
                    }
                ],
                mode: "ios",
            });
            await alert.present();

            const { role } = await alert.onDidDismiss();
            console.log("onDidDismiss resolved with role", role);
        },
        getCourses() {
            this.error = false;
            this.loading = true;
            Promise.all([
                axios.get(
                    "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=0&sub=0&type=5",
                    { crossdomain: true }
                ),
                // axios.get(
                //     "https://elsaify-proxy.ignitionsoftware.workers.dev/?https://elsaify.elameed.education/elsefy/api/desktop/getSubCourses?package=0&sub=0&type=0",
                //     { crossdomain: true }
                // ),
            ])
                .then((res) => {
                    console.log(res);

                    // Homeworks
                    if (res[0].data.code == 200) this.homeworks = res[0].data.data;
                    else this.homeworksError = true;

                    // // Lectures
                    // if (res[1].data.code == 200) this.lectures = res[1].data.data;
                    // else this.lecturesError = true;

                    this.loading = false;
                })
                .catch((err) => {
                    console.error(err);
                    this.error = true;
                    this.loading = false;
                });
        },
        goToLecture(lecture) {
            this.$router.push({
                path: "/lecture",
                query: {
                    id: lecture.id,
                    title: lecture.title,
                    type: lecture.type,
                },
            });
        },
    },
    components: {
        // IonHeader,
        // IonToolbar,
        // IonTitle,
        IonContent,
        IonPage,
        CourseTile,
        IonSpinner,
        IonText,
        IonButton,
        lottie,
    },
};
</script>
<style scoped>
ion-card {
    box-shadow: none;
    background: transparent;
}

.courses-wrapper {
    padding: 15px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.error-wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

ion-img.logo {
    margin-right: auto;
    margin-left: auto;
    height: 135px;
    margin-bottom: 30px;
    margin-top: 40px;
}

.lecture {
    --background: transparent;
}

ion-accordion {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
        rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 8px;
    margin-bottom: 15px;
}
</style>