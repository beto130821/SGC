import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowledgeManagementComponent } from './knowledge-management.component';

const routes: Routes = [
  {
    path: 'type',
    component: KnowledgeManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KnowledgeManagementRoutingModule {}
