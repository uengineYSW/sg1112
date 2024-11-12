<template>
    <div>
        <v-list two-line v-if="list.length > 0">
            <v-list-item-group 
                    v-model="selected" 
                    color="primary"
                    @change="select"
            >
                <v-list-item v-for="(item, idx) in list" :key="idx">
                    <template v-slot:default="{ active }">
                        <v-list-item-avatar color="primary-darker-1">
                        </v-list-item-avatar>
                        
                        <v-list-item-content>
                            <v-list-item-title>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                CarrierNo :  {{item.carrierNo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                WorksCode :  {{item.worksCode }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CompanyCode :  {{item.companyCode }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CarType :  {{item.carType }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                CarModel :  {{item.carModel }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Usage :  {{item.usage }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                FuelFlag :  {{item.fuelFlag }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                PartCompanyCd :  {{item.partCompanyCd }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OwnerTypeCode :  {{item.ownerTypeCode }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                AssetNumber :  {{item.assetNumber }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                OrganizationName :  {{item.organizationName }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                AcquisitionAmt :  {{item.acquisitionAmt }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                DriverEmpNo :  {{item.driverEmpNo }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                UserName :  {{item.userName }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                RegistDate :  {{item.registDate }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ReversalDate :  {{item.reversalDate }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ManagementNumber :  {{item.managementNumber }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Type :  {{item.type }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                YearTp :  {{item.yearTp }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MdOutputValue :  {{item.mdOutputValue }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                LcaHeight :  {{item.lcaHeight }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Quantity :  {{item.quantity }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                PersonCount :  {{item.personCount }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                StandardValue :  {{item.standardValue }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                MaxCapacity :  {{item.maxCapacity }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                ShortDistance :  {{item.shortDistance }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                LaneDistance :  {{item.laneDistance }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                LoadedTravelDistance :  {{item.loadedTravelDistance }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                InspectionDate :  {{item.inspectionDate }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Description :  {{item.description }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Weight40Max :  {{item.weight40Max }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Width40Max :  {{item.width40Max }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                LengthConstraintKan :  {{item.lengthConstraintKan }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                UsedWeight :  {{item.usedWeight }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                DriverId :  {{item.driverId }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-checkbox :input-value="active" color="primary-darker-1"></v-checkbox>
                        </v-list-item-action>
                    </template>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'CarmngVehiclePicker',
        props: {
            value: [String, Object, Array, Number, Boolean],
        },
        data: () => ({
            list: [],
            selected: null,
        }),
        async created() {
            var me = this;
            var temp = await axios.get(axios.fixUrl('/vehicles'))
            if(temp.data) {
                me.list = temp.data._embedded.vehicles;
            }

            if(me.value && typeof me.value == "object" && Object.values(me.value)[0]) {
                var id = Object.values(me.value)[0];
                var tmpValue = await axios.get(axios.fixUrl('/vehicles/' + id))
                if(tmpValue.data) {
                    var val = tmpValue.data
                    me.list.forEach(function(item, idx) {
                        if(item.name == val.name) {
                            me.selected = idx
                        }
                    })
                }
            }
        },
        methods: {
            select(val) {
                var obj = {}
                if(val != undefined) {
                    var arr = this.list[val]._links.self.href.split('/');
                    obj['carrierNo'] = arr[4]; 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    this.$emit('selected', obj);
                }
            },
        },
    };
</script>

