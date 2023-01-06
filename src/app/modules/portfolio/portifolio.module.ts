import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortifolioContainerComponent } from './components/container/portifolio.container.component';
import { PortifolioViewComponent } from './components/view/portifolio.view.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PortifolioContainerComponent,
    PortifolioViewComponent
  ],
  exports: [PortifolioContainerComponent]
})
export class PortifolioModule { }
