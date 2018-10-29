import { Component, OnInit, OnDestroy, Output, EventEmitter } from '../../../../../node_modules/@angular/core';
import { Subject } from '../../../../../node_modules/rxjs';
import { debounceTime, filter } from 'rxjs/operators';



@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{
   
    @Output() onTyping = new EventEmitter<string>();
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce.pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter));
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}