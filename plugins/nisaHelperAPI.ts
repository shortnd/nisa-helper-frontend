import { Plugin } from '@nuxt/types'
import TeamAPI, { Team } from '@/api/teams'

declare module '@nuxt/types' {
  interface Context {
    $api: {
      teams: {
        index(): Promise<Team[]>
      }
    }
  }
}

const nisaHelperAPI: Plugin = (context, inject) => {
  const api = {
    teams: TeamAPI(context.$axios)
  }
  inject('api', api)
}

export default nisaHelperAPI
// import { Plugin } from '@nuxt/types'
// import TeamsAPI from '@/api/teams'

// export default (): Plugin => ({ $axios }, inject) => {
//   const api = {
//     teams: TeamsAPI($axios)
//   }
//   inject('api', api)
// }
// // const nisaHelperAPI: Plugin = ({ $axios }, inject) => {
// //   const api = {
// //     teams: TeamsAPI($axios)
// //   }
// //   inject('api', api)
// // }

// // export default nisaHelperAPI
