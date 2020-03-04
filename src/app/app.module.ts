import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

// NGRX
import { StoreRouterConnectingModule, RouterReducerState, routerReducer } from '@ngrx/router-store';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { CustomSerializer } from './store';

// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

interface ReducerState {
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<ReducerState> = {
    router: routerReducer
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        BrowserTransferStateModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true }
        }),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            serializer: CustomSerializer
        }),
        environment.production ? [] : StoreDevtoolsModule.instrument()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
