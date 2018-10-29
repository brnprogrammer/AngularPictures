import { NgModule } from '../../../../node_modules/@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtomComponent } from './load-buttom/load-buttom.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtomComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule ,
        DarkOnHoverModule
    ]
})
export class PhotoListModule{}