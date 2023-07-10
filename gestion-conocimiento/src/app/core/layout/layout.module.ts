import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { GeneralService } from 'src/app/shared/services/general.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    GeneralService
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
