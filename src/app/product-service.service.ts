import {Injectable} from '@angular/core';
import {Product} from './product/product.component';

const productData = [
  {
    id: 1,
    title: '第一个商品',
    price: 15,
    rating: 4,
    desc: '哈哈哈哈哈',
    categories: ['aaa1', 'bbbb1']
  },
  {
    id: 2,
    title: '第2个商品',
    price: 15,
    rating: 3.5,
    desc: '哈哈哈哈哈',
    categories: ['aaa1', 'bbbb1']
  },
  {
    id: 3,
    title: '第3个商品',
    price: 15,
    rating: 4,
    desc: '哈哈哈哈哈',
    categories: ['aaa1', 'bbbb1']
  },
  {
    id: 4,
    title: '第4个商品',
    price: 15,
    rating: 5,
    desc: '哈哈哈哈哈',
    categories: ['aaa1', 'bbbb1']
  },
  {
    id: 5,
    title: '第5个商品',
    price: 15,
    rating: 2,
    desc: '哈哈哈哈哈',
    categories: ['aaa1', 'bbbb1']
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() {

  }

  getProduct(id: number): Product {
    return productData.find(item => {
      return item.id === id;
    });
  }
}
