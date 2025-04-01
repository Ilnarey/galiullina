import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { AppRoute, AutorizationStatus } from "../../const";

type AuthorizationStatusEnum = typeof AutorizationStatus[keyof typeof AutorizationStatus];

type PrivateRputeProps = {
    authorizationStatus:AuthorizationStatusEnum;
}

function PrivateRoute(props: PropsWithChildren<PrivateRputeProps>) {
    const {authorizationStatus, children } = props;

    return (
        authorizationStatus === AutorizationStatus.Auth
        ? children
        : <Navigate to={AppRoute.Login}/>
    );
}

export {PrivateRoute};