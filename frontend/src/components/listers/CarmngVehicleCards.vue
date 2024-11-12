<template>
    <div>
        <v-card
            class="mx-auto"
            outlined
            color="primary"
            style="padding:10px 0px 10px 0px; margin-bottom:40px;"
        >
            <v-row>
                <v-list-item class="d-flex" style="background-color: white;">
                    <h1 class="align-self-center ml-3">차량</h1>
                    <div class="secondary-text-color" style="margin-left:30px;">





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
- 삭제</div>
                </v-list-item>
            </v-row>
        </v-card>
        <v-col style="margin-bottom:40px;">
            <div class="text-center">
                <v-dialog
                        v-model="openDialog"
                        width="332.5"
                        fullscreen
                        hide-overlay
                        transition="dialog-bottom-transition"
                >
                    <CarmngVehicle :offline="offline" class="video-card" :isNew="true" :editMode="true" v-model="newValue" 
                            @add="append" v-if="tick"/>

                    <v-btn
                            style="postition:absolute; top:2%; right:2%"
                            @click="closeDialog()"
                            depressed
                            icon 
                            absolute
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-dialog>

                <v-row>
                    <v-card
                        class="mx-auto"
                        style="height:300px; width:300px; margin-bottom:20px; text-align: center;"
                        outlined
                    >
                        <v-list-item>
                            <v-list-item-avatar 
                                class="mx-auto"
                                size="80"
                                style="margin-top:80px;"
                            ><v-icon color="primary" x-large>mdi-plus</v-icon>
                            </v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                            <v-btn 
                                v-on="on"
                                class="mx-auto"
                                outlined
                                rounded
                                @click="openDialog=true;"
                                color="primary"
                                style="font-weight:500; font-size:20px; padding:15px; border:solid 2px; max-width:250px; overflow:hidden"
                            >
                                차량 등록
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-row>
            </div>
        </v-col>
        <v-row>
            <CarmngVehicle :offline="offline" class="video-card" v-for="(value, index) in values" v-model="values[index]" v-bind:key="index" @delete="remove"/>
        </v-row>
    </div>
</template>

<script>

    const axios = require('axios').default;
    import CarmngVehicle from './../CarmngVehicle.vue';

    export default {
        name: 'CarmngVehicleManager',
        components: {
            CarmngVehicle,
        },
        props: {
            offline: Boolean
        },
        data: () => ({
            values: [],
            newValue: {},
            tick : true,
            openDialog : false,
        }),
        async created() {
            var me = this;
            if(me.offline){
                if(!me.values) me.values = [];
                return;
            } 

            var temp = await axios.get(axios.fixUrl('/vehicles'))
            me.values = temp.data._embedded.vehicles;
            
            me.newValue = {
                'carrierNo': '',
                'worksCode': '',
                'companyCode': '',
                'carType': '',
                'carModel': '',
                'usage': '',
                'fuelFlag': '',
                'partCompanyCd': '',
                'ownerTypeCode': '',
                'assetNumber': '',
                'organizationName': '',
                'acquisitionAmt': 0,
                'driverEmpNo': '',
                'userName': '',
                'registDate': '2024-11-12',
                'reversalDate': '2024-11-12',
                'managementNumber': '',
                'type': '',
                'yearTp': '',
                'mdOutputValue': '',
                'lcaHeight': 0,
                'quantity': 0,
                'personCount': 0,
                'standardValue': 0,
                'maxCapacity': 0,
                'shortDistance': 0,
                'laneDistance': 0,
                'loadedTravelDistance': 0,
                'inspectionDate': '2024-11-12',
                'description': '',
                'weight40Max': 0,
                'width40Max': 0,
                'lengthConstraintKan': 0,
                'usedWeight': 0,
                'driverId': {},
            }
        },
        methods:{
            closeDialog(){
                this.openDialog = false
            },
            append(value){
                this.tick = false
                this.newValue = {}
                this.values.push(value)
                
                this.$emit('input', this.values);

                this.$nextTick(function(){
                    this.tick=true
                })
            },
            remove(value){
                var where = -1;
                for(var i=0; i<this.values.length; i++){
                    if(this.values[i]._links.self.href == value._links.self.href){
                        where = i;
                        break;
                    }
                }

                if(where > -1){
                    this.values.splice(i, 1);
                    this.$emit('input', this.values);
                }
            },
        }
    };
</script>


<style>
    .video-card {
        width:300px; 
        margin-left:4.5%; 
        margin-top:50px; 
        margin-bottom:50px;
    }
</style>

