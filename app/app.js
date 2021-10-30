import Vue from 'nativescript-vue'

import Home from './components/Home'
import { Trace } from '@nativescript/core'
Trace.setCategories(Trace.categories.Debug)
Trace.enable()

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
