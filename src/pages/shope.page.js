import React, {useState} from 'react'
import {Outlet, Route, Routes, useLocation} from "react-router-dom";
import CollectionOverview from "../components/shop/collection-overview.component";
import CollectionPage from "./collection.page";

const ShopPage = () =>{
    const location  = useLocation();
    return (
        <div className={"shop-page"}>
            <Outlet />
            {/*<Routes>*/}
            {/*    <Route path={""} element={<CollectionOverview />} />*/}
            {/*    <Route path={`:collectionId`} element={<CollectionPage />} />*/}
            {/*    /!*<Route exact path={`${location.pathname}`} element={<CollectionOverview />} />*!/*/}
            {/*    /!*<Route path={`${location.pathname}/:collectionId`} component={<CollectionPage />} />*!/*/}
            {/*</Routes>*/}

        </div>
    );
}

export default ShopPage;