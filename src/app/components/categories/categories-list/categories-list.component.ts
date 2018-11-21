import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MenuItem } from '../../../../../node_modules/primeng/primeng';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { User } from '../../../shared/models/user.model';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Categories } from 'src/app/shared/models/categories.model';
import { CategoriesService } from '../categories-services/categories.service';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, AfterViewInit {

  currentCategories: Categories;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  categoriesList: Categories[] = [
  ];
  constructor(private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Lista de Categorias' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getCategoriesList();

    });
  }

  goToDetail(id) {
    this.router.navigate(['/categories/categories-detail', id ], {relativeTo: this.route});
  }

  goToCreateCategories() {
    this.router.navigate(['/categories/create-categories' ], {relativeTo: this.route});
  }

  setCurrentCategories(categories) {
    this.currentCategories = categories;
    this.deleteSwal.show();
  }

  delCategories() {
    this.categoriesService.delCategories(this.currentCategories.Name)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getCategoriesList();
    },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateCategories(id) {
    this.router.navigate(['/categories/update-categories', id ], {relativeTo: this.route});
  }

  getCategoriesList() {
    this.loadingSwal.show();
    this.categoriesService.getCategoriesList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.categoriesList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
