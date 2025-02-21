import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import LoginPage from "../../pages/login-page/login-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import ErrorPage from "../../pages/error-page/error-page";
import OfferPage from "../../pages/offer-page/offer-page";
import { BrowserRouter as  BrowserRouter , Routes, Route,} from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const.ts";
import { PrivateRoute } from "../private-route/private-route.tsx";
type AppMainPageProps={
    rentalOffersCount: number;
}


function App({rentalOffersCount}: AppMainPageProps): JSX.Element{
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={rentalOffersCount} />} />
        <Route path={AppRoute.Login} element={<LoginPage/>} />
        <Route path={AppRoute.Offer} element={<OfferPage/>} />
        <Route
            path={ AppRoute.Favorites }
            element={<PrivateRoute authorizationStatus={ AuthorizationStatus.NoAuth }>
              <FavoritesPage />
              </PrivateRoute>
            }/>

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;