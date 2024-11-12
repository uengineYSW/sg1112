

<template>
    <v-app id="inspire">
        <div>
            <v-app-bar color="primary" app clipped-left flat>
                <v-toolbar-title>
                    <span class="second-word font uppercase"
                        style="font-weight:700;"
                    >
                        <v-app-bar-nav-icon
                            @click="openSideBar()"
                            style="z-index:1;
                            height:56px;
                            width:30px;
                            margin-right:10px;
                            font-weight:300;
                            font-size:55px;"
                        >
                            <div style="line-height:100%;">≡</div>
                        </v-app-bar-nav-icon>
                    </span>
                </v-toolbar-title>
                <span v-if="urlPath!=null" 
                    class="mdi mdi-home" 
                    key="" 
                    to="/" 
                    @click="goHome()"
                    style="margin-left:10px; font-size:20px; cursor:pointer;"
		        ></span> 
                <v-spacer></v-spacer>

            </v-app-bar>

            <v-navigation-drawer app clipped flat v-model="sideBar">
                <v-list>
                    <v-list-item
                        class="px-2"
                        key="vehicles"
                        to="/carmngs/vehicles"
                        @click="changeUrl()"
                        color="primary"
                        style="font-weight:700;"
                    >
                        차량
                    </v-list-item>

                    <v-list-item
                        class="px-2"
                        key="drivers"
                        to="/carmngs/drivers"
                        @click="changeUrl()"
                        color="primary"
                        style="font-weight:700;"
                    >
                        운전자
                    </v-list-item>


                </v-list>
            </v-navigation-drawer>
        </div>

        <v-main>
            <v-container style="padding:0px;" v-if="urlPath" fluid>
                <router-view></router-view>
            </v-container>
            <v-container style="padding:0px;" v-else fluid>
                <div style="width:100%; margin:0px 0px 20px 0px; position: relative;">
                    <v-img style="width:100%; height:300px;"
                        src=""
                    ></v-img>
                    <div class="App-main-text-overlap"></div>
                    <div class="App-sub-text-overlap"></div>
                </div>
                <v-row>
                    <v-col cols="4" class="d-flex justify-center" v-for="(aggregate, index) in aggregate" :key="index">
                        <div 
                            class="flip-card"
                            @mouseover="flipCard(index)"
                            @mouseleave="unflipCard(index)"
                            :class="{ 'is-flipped': flipped[index] }"
                        >
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <v-card
                                        class="mx-auto"
                                        style="width:300px; min-height: 310px; margin-bottom:20px; text-align: center; border-radius: 10px;"
                                        outlined
                                    >
                                        <v-list-item style="padding:15px; margin:0px;">
                                            <v-img style="width:100%; height:120px; border-radius: 10px;" :src="aggregate.ImageUrl"></v-img>
                                        </v-list-item>
                                        <div style="text-align: left; padding:10px 15px 15px 15px; margin-top:-10px;">
                                            <h2>{{ aggregate.title }}</h2>
                                            <div>{{ aggregate.description }}</div>
                                        </div>
                                    </v-card>
                                </div>
                                <div class="flip-card-back">
                                    <v-card
                                        color="primary"
                                        class="mx-auto"
                                        style="width:300px; min-height: 310px; margin-bottom:20px; text-align: center; border-radius: 10px;"
                                        outlined
                                        :key="aggregate.key"
                                        :to="aggregate.route"
                                        @click="changeUrl()"
                                    >
                                        <v-list-item style="padding:15px; margin:0px;">
                                            <v-img style="width:100%; height:120px; border-radius: 10px;" :src="aggregate.ImageUrl"></v-img>
                                        </v-list-item>
                                        <h2 style="color:white;">{{ aggregate.title }} 관리</h2>
                                    </v-card>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: "App",
    data: () => ({
        useComponent: "",
        drawer: true,
        components: [],
        sideBar: true,
        urlPath: null,
        flipped: [],
        ImageUrl: '',
        aggregate: [
            { 
                title: '차량', 
                description: '





차량관리
CREATE TABLE POSCAR.TB_S20_CAR020
(
    RESOURCE_ID                 NUMBER(22) NOT NULL,
    CARRIER_NO                  VARCHAR2(15) NOT NULL,
    WORKS_CODE                  VARCHAR2(1) NOT NULL,
    COMPANY_CODE                VARCHAR2(7) NOT NULL,
    CAR_TYPE                    VARCHAR2(15) NOT NULL,
    CAR_MODEL                   VARCHAR2(15) NOT NULL,
    USAGE                       VARCHAR2(4) NOT NULL,
    FUEL_FLAG                   VARCHAR2(1) NOT NULL,
    PART_COMPANY_CD             VARCHAR2(4) NOT NULL,
    OWNER_TYPE_CODE             VARCHAR2(30) NOT NULL,
    ASSET_NUMBER                VARCHAR2(15),
    ORGANIZATION_NAME           VARCHAR2(60),
    ACQUISITION_AMT             NUMBER(22),
    DRIVER_EMP_NO               VARCHAR2(20),
    USER_NAME                   VARCHAR2(100),
    REGIST_DATE                 DATE,
    REVERSAL_DATE               DATE,
    MANAGEMENT_NUMBER           VARCHAR2(40),
    TYPE                        VARCHAR2(30),
    YEAR_TP                     VARCHAR2(4),
    MD_OUTPUT_VALUE             VARCHAR2(500),
    LCA_HEIGHT                  NUMBER(4),
    QUANTITY                    NUMBER(22),
    PERSON_COUNT                NUMBER(5),
    STANDARD_VALUE              NUMBER(22),
    MAX_CAPACITY                NUMBER(9),
    SHORT_DISTANCE              NUMBER(7),
    LANE_DISTANCE               NUMBER(7),
    LOADED_TRAVEL_DISTANCE      NUMBER(7),
    INSPECTION_DATE             DATE,
    DESCRIPTION                 VARCHAR2(4000)
    WEIGHT_40_MAX               NUMBER(6),
    WIDTH_40_MAX                NUMBER(6),
    LENGTH_CONSTRAINT_KAN       NUMBER(6),
    USED_WEIGHT                 NUMBER(13)
)

추가요청사항
- 생성
- 수정
- 삭제', 
                key: 'vehicles', 
                route: '/carmngs/vehicles',
                ImageUrl: '',
            },
            { 
                title: '운전자', 
                description: '직원 은퇴 처리 커맨드 추가', 
                key: 'drivers', 
                route: '/carmngs/drivers',
                ImageUrl: '',
            },
            
        ],
    }),
    
    async created() {
      var path = document.location.href.split("#/")
      this.urlPath = path[1];

    },
    watch: {
        cards(newCards) {
            this.flipped = new Array(newCards.length).fill(false);
        },
    },

    mounted() {
        var me = this;
        me.components = this.$ManagerLists;
    },

    methods: {
        openSideBar(){
            this.sideBar = !this.sideBar
        },
        changeUrl() {
            var path = document.location.href.split("#/")
            this.urlPath = path[1];
            this.flipped.fill(false);
        },
        goHome() {
            this.urlPath = null;
        },
        flipCard(index) {
            this.$set(this.flipped, index, true);
        },
        unflipCard(index) {
            this.$set(this.flipped, index, false);
        },
    }
};
</script>
<style>
</style>
