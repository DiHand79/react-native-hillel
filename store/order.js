import {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';

class OrderStore {
  @observable orders;
  constructor() {
    this.orders = [];
    makeObservable(this);
  }

  @action setOrders(data) {
    this.orders = data;
  }
}

export default new OrderStore();
