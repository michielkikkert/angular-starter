import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRouter from './store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-starter';
    url: Observable<string> = this.store.pipe( select(fromRouter.getRouterUrl) );

    constructor(private store: Store<any>){

    }
}
