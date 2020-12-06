import { Plugin } from '@nuxt/types'
import TeamsAPI from '@/api/teams'

const nisaHelperAPI: Plugin = ({ $axios }, inject) => {
  const api = {
    teams: TeamsAPI($axios)
  }
  inject('api', api)
}

export default nisaHelperAPI
