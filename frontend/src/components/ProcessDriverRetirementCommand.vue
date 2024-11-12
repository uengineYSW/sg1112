<template>
    <v-card outlined>
        <v-card-title>
            ProcessDriverRetirement
        </v-card-title>

        <v-card-text>
            <String label="DriverEmpNo" v-model="value.driverEmpNo" :editMode="editMode"/>
            <String label="RetirementFlag" v-model="value.retirementFlag" :editMode="editMode"/>
            <Date label="RetiredDate" v-model="value.retiredDate" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="processDriverRetirement"
            >
                ProcessDriverRetirement
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
        name: 'ProcessDriverRetirementCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.driverEmpNo = '';
            this.value.retirementFlag = '';
            this.value.retiredDate = '2024-11-12';
        },
        watch: {
        },
        methods: {
            processDriverRetirement() {
                this.$emit('processDriverRetirement', this.value);
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

