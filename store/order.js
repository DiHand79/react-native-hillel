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
    let key = data.key;
    const inStoreNames = this.orders
      .reduce((res, curr) => [...res, curr.key], [])
      .join('_');

    if (inStoreNames.includes(data.key)) {
      key = key + '_' + Math.random();
      data = {
        ...data,
        key: key,
      };
    }
    this.orders = [...this.orders, data];
  }

  @action removeOrder(data) {
    const filtered = this.orders.filter((order) => order.key !== data.key);
    this.orders = filtered;
  }
}

export default new OrderStore();
