<template>
    <v-card style="width:450px; height:100%;" outlined>
        <template slot="progress">
            <v-progress-linear
                    color="primary-darker-1"
                    height="10"
                    indeterminate
            ></v-progress-linear>
        </template>

        <v-card-title v-if="value._links">
            차량 # {{decode(value._links.self.href.split("/")[value._links.self.href.split("/").length - 1])}}
        </v-card-title >
        <v-card-title v-else>
            차량
        </v-card-title >        

        <v-card-text style="background-color: white;">
            <String v-if="editMode" label="차량번호" v-model="value.carrierNo" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="업무코드" v-model="value.worksCode" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="회사코드" v-model="value.companyCode" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="차종" v-model="value.carType" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="차량모델" v-model="value.carModel" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="사용용도" v-model="value.usage" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="연료구분" v-model="value.fuelFlag" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="차부품회사코드" v-model="value.partCompanyCd" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="차량소유자유형코드" v-model="value.ownerTypeCode" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="자산번호" v-model="value.assetNumber" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="소속회사명" v-model="value.organizationName" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="취득금액" v-model="value.acquisitionAmt" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="운전자사번" v-model="value.driverEmpNo" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="운전자명" v-model="value.userName" :editMode="editMode" :inputUI="'TEXT'"/>
            <Date label="등록일자" v-model="value.registDate" :editMode="editMode" :inputUI="'TEXT'"/>
            <Date label="취소일자" v-model="value.reversalDate" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="관리번호" v-model="value.managementNumber" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="유형" v-model="value.type" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="연도" v-model="value.yearTp" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="MD출력값" v-model="value.mdOutputValue" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="LCA높이" v-model="value.lcaHeight" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="수량" v-model="value.quantity" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="승객수" v-model="value.personCount" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="기준값" v-model="value.standardValue" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="최대적재량" v-model="value.maxCapacity" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="단거리운행거리" v-model="value.shortDistance" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="고속급행거리" v-model="value.laneDistance" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="적재운행거리" v-model="value.loadedTravelDistance" :editMode="editMode" :inputUI="'TEXT'"/>
            <Date label="검사일자" v-model="value.inspectionDate" :editMode="editMode" :inputUI="'TEXT'"/>
            <String label="설명" v-model="value.description" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="최대중량_40Feet" v-model="value.weight40Max" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="최대폭_40Feet" v-model="value.width40Max" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="길이제한(관)" v-model="value.lengthConstraintKan" :editMode="editMode" :inputUI="'TEXT'"/>
            <Number label="사용중량" v-model="value.usedWeight" :editMode="editMode" :inputUI="'TEXT'"/>
            <DriverId offline label="DriverId" v-model="value.driverId" :editMode="editMode" @change="change"/>
        </v-card-text>

        <v-card-actions style="background-color: white;">
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="edit"
                v-if="!editMode"
            >
                수정
            </v-btn>
            <div v-else>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    차량 생성
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    차량 수정
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="save"
                >
                    차량 삭제
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
                >
                    삭제
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode && !isNew"
                >
                    취소
                </v-btn>
            </div>
        </v-card-actions>
        <v-card-actions>
            <v-spacer></v-spacer>
        </v-card-actions>

        <v-snackbar
            v-model="snackbar.status"
            :top="true"
            :timeout="snackbar.timeout"
            color="error"
        >
            {{ snackbar.text }}
            <v-btn dark text @click="snackbar.status = false">
                Close
            </v-btn>
        </v-snackbar>
    </v-card>

</template>

<script>
    const axios = require('axios').default;


    export default {
        name: 'CarmngVehicle',
        components:{
        },
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean,
        },
        data: () => ({
            snackbar: {
                status: false,
                timeout: 5000,
                text: '',
            },
        }),
	async created() {
        },
        methods: {
            decode(value) {
                return decodeURIComponent(value);
            },
            selectFile(){
                if(this.editMode == false) {
                    return false;
                }
                var me = this
                var input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.id = "uploadInput";
                
                input.click();
                input.onchange = function (event) {
                    var file = event.target.files[0]
                    var reader = new FileReader();

                    reader.onload = function () {
                        var result = reader.result;
                        me.imageUrl = result;
                        me.value.photo = result;
                        
                    };
                    reader.readAsDataURL( file );
                };
            },
            edit() {
                this.editMode = true;
            },
            async save(){
                try {
                    var temp = null;

                    if(!this.offline) {
                        if(this.isNew) {
                            temp = await axios.post(axios.fixUrl('/vehicles'), this.value)
                        } else {
                            temp = await axios.put(axios.fixUrl(this.value._links.self.href), this.value)
                        }
                    }

                    if(this.value!=null) {
                        for(var k in temp.data) this.value[k]=temp.data[k];
                    } else {
                        this.value = temp.data;
                    }

                    this.editMode = false;
                    this.$emit('input', this.value);

                    if (this.isNew) {
                        this.$emit('add', this.value);
                    } else {
                        this.$emit('edit', this.value);
                    }

                    location.reload()

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
                
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.value._links.self.href))
                    }

                    this.editMode = false;
                    this.isDeleted = true;

                    this.$emit('input', this.value);
                    this.$emit('delete', this.value);

                } catch(e) {
                    this.snackbar.status = true
                    if(e.response && e.response.data.message) {
                        this.snackbar.text = e.response.data.message
                    } else {
                        this.snackbar.text = e
                    }
                }
            },
            change(){
                this.$emit('input', this.value);
            },
        },
    }
</script>

