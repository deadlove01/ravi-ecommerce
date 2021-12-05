import {createSelector} from "reselect";

import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopSections = createSelector(
    [selectShop],
    shop => shop.sections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopSections],
    sections => Object.keys(sections).map(key => sections[key])
);

export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectShopSections],
        sections => sections[collectionUrlParam]
    ));


