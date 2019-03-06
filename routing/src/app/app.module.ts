import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentService } from './department.service';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule
  ],
  providers: [DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
