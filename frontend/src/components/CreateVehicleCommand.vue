<template>
    <v-card outlined>
        <v-card-title>
            CreateVehicle
        </v-card-title>

        <v-card-text>
            <String label="CarrierNo" v-model="value.carrierNo" :editMode="editMode"/>
            <String label="WorksCode" v-model="value.worksCode" :editMode="editMode"/>
            <String label="CompanyCode" v-model="value.companyCode" :editMode="editMode"/>
            <String label="CarType" v-model="value.carType" :editMode="editMode"/>
            <String label="CarModel" v-model="value.carModel" :editMode="editMode"/>
            <String label="Usage" v-model="value.usage" :editMode="editMode"/>
            <String label="FuelFlag" v-model="value.fuelFlag" :editMode="editMode"/>
            <String label="PartCompanyCd" v-model="value.partCompanyCd" :editMode="editMode"/>
            <String label="OwnerTypeCode" v-model="value.ownerTypeCode" :editMode="editMode"/>
            <String label="AssetNumber" v-model="value.assetNumber" :editMode="editMode"/>
            <String label="OrganizationName" v-model="value.organizationName" :editMode="editMode"/>
            <Number label="AcquisitionAmt" v-model="value.acquisitionAmt" :editMode="editMode"/>
            <String label="DriverEmpNo" v-model="value.driverEmpNo" :editMode="editMode"/>
            <String label="UserName" v-model="value.userName" :editMode="editMode"/>
            <Date label="RegistDate" v-model="value.registDate" :editMode="editMode"/>
            <Date label="ReversalDate" v-model="value.reversalDate" :editMode="editMode"/>
            <String label="ManagementNumber" v-model="value.managementNumber" :editMode="editMode"/>
            <String label="Type" v-model="value.type" :editMode="editMode"/>
            <String label="YearTp" v-model="value.yearTp" :editMode="editMode"/>
            <String label="MdOutputValue" v-model="value.mdOutputValue" :editMode="editMode"/>
            <Number label="LcaHeight" v-model="value.lcaHeight" :editMode="editMode"/>
            <Number label="Quantity" v-model="value.quantity" :editMode="editMode"/>
            <Number label="PersonCount" v-model="value.personCount" :editMode="editMode"/>
            <Number label="StandardValue" v-model="value.standardValue" :editMode="editMode"/>
            <Number label="MaxCapacity" v-model="value.maxCapacity" :editMode="editMode"/>
            <Number label="ShortDistance" v-model="value.shortDistance" :editMode="editMode"/>
            <Number label="LaneDistance" v-model="value.laneDistance" :editMode="editMode"/>
            <Number label="LoadedTravelDistance" v-model="value.loadedTravelDistance" :editMode="editMode"/>
            <Date label="InspectionDate" v-model="value.inspectionDate" :editMode="editMode"/>
            <String label="Description" v-model="value.description" :editMode="editMode"/>
            <Number label="Weight40Max" v-model="value.weight40Max" :editMode="editMode"/>
            <Number label="Width40Max" v-model="value.width40Max" :editMode="editMode"/>
            <Number label="LengthConstraintKan" v-model="value.lengthConstraintKan" :editMode="editMode"/>
            <Number label="UsedWeight" v-model="value.usedWeight" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="createVehicle"
            >
                CreateVehicle
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'CreateVehicleCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.carrierNo = '';
            this.value.worksCode = '';
            this.value.companyCode = '';
            this.value.carType = '';
            this.value.carModel = '';
            this.value.usage = '';
            this.value.fuelFlag = '';
            this.value.partCompanyCd = '';
            this.value.ownerTypeCode = '';
            this.value.assetNumber = '';
            this.value.organizationName = '';
            this.value.acquisitionAmt = 0;
            this.value.driverEmpNo = '';
            this.value.userName = '';
            this.value.registDate = '2024-11-12';
            this.value.reversalDate = '2024-11-12';
            this.value.managementNumber = '';
            this.value.type = '';
            this.value.yearTp = '';
            this.value.mdOutputValue = '';
            this.value.lcaHeight = 0;
            this.value.quantity = 0;
            this.value.personCount = 0;
            this.value.standardValue = 0;
            this.value.maxCapacity = 0;
            this.value.shortDistance = 0;
            this.value.laneDistance = 0;
            this.value.loadedTravelDistance = 0;
            this.value.inspectionDate = '2024-11-12';
            this.value.description = '';
            this.value.weight40Max = 0;
            this.value.width40Max = 0;
            this.value.lengthConstraintKan = 0;
            this.value.usedWeight = 0;
        },
        watch: {
        },
        methods: {
            createVehicle() {
                this.$emit('createVehicle', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

