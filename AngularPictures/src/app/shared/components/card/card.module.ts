import { NgModule } from '../../../../../node_modules/@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '../../../../../node_modules/@angular/common';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [CommonModule]
})
export class CardModule{}