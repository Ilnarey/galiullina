import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { AppRoute, AuthorizationStatus } from "../../const";

type AuthorizationStatusEnum = typeof AuthorizationStatus[keyof typeof AuthorizationStatus];

type PrivateRputeProps = {
    authorizationStatus:AuthorizationStatusEnum;
}

function PrivateRoute(props: PropsWithChildren<PrivateRputeProps>) {
    const {authorizationStatus, children } = props;

    return (
        authorizationStatus === AuthorizationStatus.Auth
        ? children
        : <Navigate to={AppRoute.Login}/>
    );
}

export {PrivateRoute};