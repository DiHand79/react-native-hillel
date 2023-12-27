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

  // todo add several similar pizza
  @action addOrder(data) {
    // console.log('ADD ORDER: ', data);
    this.orders = [...this.orders, data];
    console.log(this.orders.length, ' ADD: ', this.orders);
  }

  //  todo remove several similar pizza
  @action removeOrder(data) {
    const filtered = this.orders.filter((order) => order.id === data.id);
    console.log(filtered.length, ' REMOVE: ', filtered);
    this.orders = filtered;
  }
}

export default new OrderStore();
