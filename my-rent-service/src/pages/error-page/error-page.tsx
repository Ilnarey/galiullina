import { JSX } from "react";



function ErrorPage(): JSX.Element {
    return(
        <div className="container-error">
        <h1>404</h1>
        <p>Ой... Мы не нашли такую страницу.</p>
        <p>
          Вернитесь на <a href="/">главную страницу</a> или воспользуйтесь поиском.
        </p>
      </div>    );
    }

export default ErrorPage;
    