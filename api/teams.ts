import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default ($axios: NuxtAxiosInstance) => ({
  async index(params: any) {
    return await $axios.$get(`/api/v1/teams`, {
      params,
    });
  },
});
