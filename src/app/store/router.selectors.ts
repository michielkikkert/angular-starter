import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface RouterState {
    router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
    RouterState,
    fromRouter.RouterReducerState<any>
    >('router');

const {
    selectQueryParams,    // select the current route query params
    selectQueryParam,     // factory function to select a query param
    selectRouteParams,    // select the current route params
    selectRouteParam,     // factory function to select a route param
    selectRouteData,      // select the current route data
    selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

export const getRouterParams = createSelector(
    selectQueryParam,
    params => params && params
);

export const getRouterParamsbyKey = createSelector(
    getRouterParams,
    (routerParams, key) => routerParams && routerParams[key]
);

export const getRouterUrl = createSelector(
    selectUrl,
    url => url && url
);

export const getRouterData = createSelector(
    selectRouteData,
    data => data && data
);

export const getRouterDatabyKey = createSelector(
    getRouterData,
    (routerData, key) => routerData && routerData[key]
);
