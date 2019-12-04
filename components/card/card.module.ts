import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { CardComponent } from './card.component';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';


const MODULES = [MatCardModule];

const DECLARATIONS = [CardComponent];

@NgModule({
  imports: [...MODULES],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: [
    {provide: LazyLoadComponent, useValue: CardComponent}
  ],
  entryComponents: [
    CardComponent
  ]
})
export class CardModule {}
