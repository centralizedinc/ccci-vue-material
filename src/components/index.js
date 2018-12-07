'use strict'

import Vue from 'vue'
import CcciBanner from './Banner'

const Components = {
    CcciBanner
}

Object.keys(Components).forEach(name=>{
    Vue.component(name, Components[name]);
})

export default Components;