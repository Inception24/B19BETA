import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' }),
      ],
  exports: [
        RouterModule
  ]
})

export class AppRoutingModule { }
