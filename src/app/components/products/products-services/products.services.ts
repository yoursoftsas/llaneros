import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private odataService: OdataService ) { }

  createProducts(body) {
  return this.odataService.post('Products', {body});
}

  getProductsList() {
    return this.odataService.get('Products');
  }

  getProducts(id) {
    return this.odataService.get('Products(' + id + ')');
  }

  delProducts(id) {
    return this.odataService.delete('Products/delete/' + id);
  }

  updateProducts(body) {
    return this.odataService.get('Products/ChangeSizes' + body);
  }

}
