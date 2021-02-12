import { IProductSortOptions } from '../models/productSort';

export default class Utils {
  static groupBy(xs: any[], key: string): any[] {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }


  //https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array
  static sortOnString(arr: any[], prop: string, isDescending: boolean) {
    arr.sort(function (a, b) {
      if (!isDescending) {
        if (a[prop] < b[prop]) {
          return -1;
        } else if (a[prop] > b[prop]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a[prop] < b[prop]) {
          return 1;
        } else if (a[prop] > b[prop]) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  }

  //https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array
  static sortOnNumber(arr: any[], isDescending: boolean) {
    arr.sort(function (a, b) {
      if (!isDescending) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  }
}
