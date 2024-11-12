<template>
    <v-card outlined>
        <v-card-title>
            DeleteDriver
        </v-card-title>

        <v-card-text>
            <String label="DriverEmpNo" v-model="value.driverEmpNo" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="deleteDriver"
            >
                DeleteDriver
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
        name: 'DeleteDriverCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.driverEmpNo = '';
        },
        watch: {
        },
        methods: {
            deleteDriver() {
                this.$emit('deleteDriver', this.value);
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

