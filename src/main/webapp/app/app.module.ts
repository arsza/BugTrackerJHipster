import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { VacappSharedModule } from 'app/shared/shared.module';
import { VacappCoreModule } from 'app/core/core.module';
import { VacappAppRoutingModule } from './app-routing.module';
import { VacappHomeModule } from './home/home.module';
import { VacappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    VacappSharedModule,
    VacappCoreModule,
    VacappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    VacappEntityModule,
    VacappAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class VacappAppModule {}
