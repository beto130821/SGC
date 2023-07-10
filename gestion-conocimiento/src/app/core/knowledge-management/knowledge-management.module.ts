import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { KnowledgeManagementComponent } from './knowledge-management.component';
import { KnowledgeManagementRoutingModule } from './knowledge-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    KnowledgeManagementRoutingModule,
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [KnowledgeManagementComponent],
})
export class KnowledgeManagementModule {}
