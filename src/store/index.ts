import Vue from 'vue'
import Vuex from 'vuex'
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules"
import axios from 'axios'

Vue.use(Vuex)


const store = new Vuex.Store ({
  state () {
    return {
      data: []
    }
  },
})

const url = 'https://jsonplaceholder.typicode.com/users'

  @Module
  class UserModule extends VuexModule {
  data : string[] = []

  @Mutation
  SAVE_DATA(data: string[]){
    this.data = data
  }

  @Action
  async loadUser({ commit }: { commit: any }): Promise<void> {
    axios.get(url).then(res => {
      commit('SAVE_DATA', res.data)
      console.log(res.data)
    }).catch(error => {
      throw new Error(`API ${error}`)
    })
  }
}

export const userModule = new UserModule({store, name: 'data'})

