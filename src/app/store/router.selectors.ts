import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface RouterState {
    router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
    RouterState,
    fromRouter.RouterReducerState<any>
    >('router');

export const getRouterState = createSelector(
    selectRouter,
    router => router && router.state
);

export const getRouterUrl = createSelector(
    getRouterState,
    (state) => state && state.url
);

export const getRouterParams = createSelector(
    getRouterState,
    (state) => state && state.params
);

export const getRouterData = createSelector(
    getRouterState,
    (state) => state && state.data
);

export const getRouterParamsbyKey = createSelector(
    getRouterParams,
    (routerParams, key) => routerParams && routerParams[key]
);

export const getRouterDatabyKey = createSelector(
    getRouterData,
    (routerData, key) => routerData && routerData[key]
);
