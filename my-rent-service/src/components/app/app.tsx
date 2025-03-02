import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import ErrorPage from "../../pages/error-page/error-page";
import OfferPage from "../../pages/offer-page/offer-page";
import { BrowserRouter as  BrowserRouter , Routes, Route,} from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const.ts";
import { PrivateRoute } from "../private-route/private-route.tsx";
import { FullOffer, OffersList } from "../../types/offer.ts";

type AppMainPageProps={
    rentalOffersCount: number;
    offersList : OffersList[];
    offers: FullOffer[];
}


function App({rentalOffersCount, offers,offersList}: AppMainPageProps): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList} />} />
        <Route path={AppRoute.Login} element={<LoginPage/>} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers}/>} />
        <Route
            path={ AppRoute.Favorites }
            element={<PrivateRoute authorizationStatus={ AuthorizationStatus.Auth }>
              <FavoritesPage />
              </PrivateRoute>
            }/>

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;