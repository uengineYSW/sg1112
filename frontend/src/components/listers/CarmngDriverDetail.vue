<template>
    <v-card outlined>
        <v-card-title>
            Driver # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <String label="DriverEmpNo" v-model="item.driverEmpNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Name" v-model="item.name" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="CompanyCode" v-model="item.companyCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="WorksCode" v-model="item.worksCode" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="HrAccessLevel" v-model="item.hrAccessLevel" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="SupervisorType" v-model="item.supervisorType" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="CurrentJob" v-model="item.currentJob" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="HandPhone" v-model="item.handPhone" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="LicenseNumber" v-model="item.licenseNumber" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="NationalIdentifier" v-model="item.nationalIdentifier" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Number label="ResourceId" v-model="item.resourceId" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="CarType" v-model="item.carType" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="RetirementFlag" v-model="item.retirementFlag" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Date label="RetiredDate" v-model="item.retiredDate" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Description" v-model="item.description" :editMode="editMode" @change="change" />
            </div>
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
        name: 'CarmngDriverDetail',
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
            var temp = await axios.get(axios.fixUrl('/drivers/' + params.id))
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
