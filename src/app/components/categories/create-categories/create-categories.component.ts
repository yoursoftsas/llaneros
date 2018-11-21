import { Component, OnInit, ViewChild } from '@angular/core';

import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Categories } from 'src/app/shared/models/categories.model';
import { CategoriesService } from '../categories-services/categories.service';


@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent implements OnInit {

  categoriesList: Categories[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Creado Exitosamente';
  constructor(private categoriesService: CategoriesService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Almacenes', routerLink: ['/categories/categories-list'] },
      { label: 'Crear Almacen' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxCategories = new Categories(
      form.value.name
    );

    this.categoriesService.createCategories(auxCategories)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/categories','categories-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );
  }
}
