import { NuxtAxiosInstance } from '@nuxtjs/axios'

export interface Team {
  id: number
  name: string
}

export default ($axios: NuxtAxiosInstance) => ({
  async index(params: any): Promise<Team[]> {
    return await $axios.$get(`/api/v1/teams`, {
      params,
    });
  },
});
