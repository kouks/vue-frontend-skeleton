import Chai from 'chai'

import Vue from 'vue'

import App from '../../src/components/Hello.vue'

describe('App.vue', () => {
  it('should print hello world.', () => {
    const Compoment = Vue.extend(App)

    const vm = new Compoment().$mount()

    Chai.expect(vm.$el.querySelector('p').textContent).to.equal('Hello World')
  })
})
