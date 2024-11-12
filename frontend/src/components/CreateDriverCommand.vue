<template>
    <v-card outlined>
        <v-card-title>
            CreateDriver
        </v-card-title>

        <v-card-text>
            <String label="DriverEmpNo" v-model="value.driverEmpNo" :editMode="editMode"/>
            <String label="Name" v-model="value.name" :editMode="editMode"/>
            <String label="CompanyCode" v-model="value.companyCode" :editMode="editMode"/>
            <String label="WorksCode" v-model="value.worksCode" :editMode="editMode"/>
            <String label="HrAccessLevel" v-model="value.hrAccessLevel" :editMode="editMode"/>
            <String label="SupervisorType" v-model="value.supervisorType" :editMode="editMode"/>
            <String label="CurrentJob" v-model="value.currentJob" :editMode="editMode"/>
            <String label="HandPhone" v-model="value.handPhone" :editMode="editMode"/>
            <String label="LicenseNumber" v-model="value.licenseNumber" :editMode="editMode"/>
            <String label="NationalIdentifier" v-model="value.nationalIdentifier" :editMode="editMode"/>
            <Number label="ResourceId" v-model="value.resourceId" :editMode="editMode"/>
            <String label="CarType" v-model="value.carType" :editMode="editMode"/>
            <String label="RetirementFlag" v-model="value.retirementFlag" :editMode="editMode"/>
            <Date label="RetiredDate" v-model="value.retiredDate" :editMode="editMode"/>
            <String label="Description" v-model="value.description" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="createDriver"
            >
                CreateDriver
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
        name: 'CreateDriverCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.driverEmpNo = '';
            this.value.name = '';
            this.value.companyCode = '';
            this.value.worksCode = '';
            this.value.hrAccessLevel = '';
            this.value.supervisorType = '';
            this.value.currentJob = '';
            this.value.handPhone = '';
            this.value.licenseNumber = '';
            this.value.nationalIdentifier = '';
            this.value.resourceId = 0;
            this.value.carType = '';
            this.value.retirementFlag = '';
            this.value.retiredDate = '2024-11-12';
            this.value.description = '';
        },
        watch: {
        },
        methods: {
            createDriver() {
                this.$emit('createDriver', this.value);
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

