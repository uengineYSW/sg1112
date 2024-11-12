<template>
    <v-card outlined>
        <v-card-title>
            Vehicle # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <String label="CarrierNo" v-model="item.carrierNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="WorksCode" v-model="item.worksCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="CompanyCode" v-model="item.companyCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="CarType" v-model="item.carType" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="CarModel" v-model="item.carModel" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Usage" v-model="item.usage" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="FuelFlag" v-model="item.fuelFlag" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="PartCompanyCd" v-model="item.partCompanyCd" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="OwnerTypeCode" v-model="item.ownerTypeCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="AssetNumber" v-model="item.assetNumber" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="OrganizationName" v-model="item.organizationName" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="AcquisitionAmt" v-model="item.acquisitionAmt" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="DriverEmpNo" v-model="item.driverEmpNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="UserName" v-model="item.userName" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="RegistDate" v-model="item.registDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="ReversalDate" v-model="item.reversalDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="ManagementNumber" v-model="item.managementNumber" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Type" v-model="item.type" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="YearTp" v-model="item.yearTp" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="MdOutputValue" v-model="item.mdOutputValue" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="LcaHeight" v-model="item.lcaHeight" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Quantity" v-model="item.quantity" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="PersonCount" v-model="item.personCount" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="StandardValue" v-model="item.standardValue" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="MaxCapacity" v-model="item.maxCapacity" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="ShortDistance" v-model="item.shortDistance" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="LaneDistance" v-model="item.laneDistance" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="LoadedTravelDistance" v-model="item.loadedTravelDistance" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="InspectionDate" v-model="item.inspectionDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Description" v-model="item.description" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Weight40Max" v-model="item.weight40Max" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="Width40Max" v-model="item.width40Max" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="LengthConstraintKan" v-model="item.lengthConstraintKan" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="UsedWeight" v-model="item.usedWeight" :editMode="editMode" @change="change" />
            </div>
            <DriverId offline label="DriverId" v-model="item.driverId" :editMode="false" :key="false" @change="change" />
        </v-card-text>

        <v-card-actions>
            <v-btn text color="deep-purple lighten-2" large @click="goList">List</v-btn>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="edit"
                    v-if="!editMode"
            >
                Edit
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="save"
                    v-else
            >
                Save
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="remove"
                    v-if="!editMode"
            >
                Delete
            </v-btn>
            <v-btn
                    color="primary"
                    text
                    @click="editMode = false"
                    v-if="editMode"
            >
                Cancel
            </v-btn>
        </v-card-actions>
    </v-card>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'CarmngVehicleDetail',
        components:{},
        props: {
        },
        data: () => ({
            item: null,
            editMode: false,
        }),
        async created() {
            var me = this;
            var params = this.$route.params;
            var temp = await axios.get(axios.fixUrl('/vehicles/' + params.id))
            if(temp.data) {
                me.item = temp.data
            }
        },
        methods: {
            goList() {
                var path = window.location.href.slice(window.location.href.indexOf("/#/"), window.location.href.lastIndexOf("/#"));
                path = path.replace("/#/", "/");
                this.$router.push(path);
            },
            edit() {
                this.editMode = true;
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.item._links.self.href))
                    }

                    this.editMode = false;

                    this.$emit('input', this.item);
                    this.$emit('delete', this.item);

                } catch(e) {
                    console.log(e)
                }
            },
        },
    };
</script>
