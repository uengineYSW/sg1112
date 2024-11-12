
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import CarmngVehicleManager from "./components/listers/CarmngVehicleCards"
import CarmngVehicleDetail from "./components/listers/CarmngVehicleDetail"
import CarmngDriverManager from "./components/listers/CarmngDriverCards"
import CarmngDriverDetail from "./components/listers/CarmngDriverDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/carmngs/vehicles',
                name: 'CarmngVehicleManager',
                component: CarmngVehicleManager
            },
            {
                path: '/carmngs/vehicles/:id',
                name: 'CarmngVehicleDetail',
                component: CarmngVehicleDetail
            },
            {
                path: '/carmngs/drivers',
                name: 'CarmngDriverManager',
                component: CarmngDriverManager
            },
            {
                path: '/carmngs/drivers/:id',
                name: 'CarmngDriverDetail',
                component: CarmngDriverDetail
            },



    ]
})
