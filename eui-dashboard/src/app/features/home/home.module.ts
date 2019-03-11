import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeProutingModule } from './home-prouting.module';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        HomeProutingModule,
    ],
    declarations: [
        HomeComponent,
    ],
})
export class Module {}
