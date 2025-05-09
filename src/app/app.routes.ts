import { Routes } from '@angular/router';
import { IndexComponent } from "./pages/index/index.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { TemplateDetailsComponent } from "./pages/template-details/template-details.component";
import { TemplateGalleryComponent } from "./pages/template-gallery/template-gallery.component";
import { TemplatePlannerComponent } from "./pages/template-planner/template-planner.component";

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'product/:id', component: ProductDetailsComponent },

  { path: ':category', component: TemplateGalleryComponent},
  { path: ':category/planner', component: TemplatePlannerComponent },
  { path: ':category/:id', component: TemplateDetailsComponent }

];
