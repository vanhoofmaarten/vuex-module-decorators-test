import { Module, VuexModule, MutationAction } from "vuex-module-decorators";

@Module({ name: "post", namespaced: true, stateFactory: true })
export default class PostModule extends VuexModule {
  list = [];

  @MutationAction({ mutate: ["list"] })
  async list$fetch() {
    const response: Response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.json();
    return { list: data };
  }
  get list$getter() {
    return this.list;
  }
}
