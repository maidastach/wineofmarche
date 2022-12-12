import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPageStyle = styled.div.attrs({ className: "error-page" })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <ErrorPageStyle>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <p>
        Return to <a href="/">Home Page</a>
      </p>
    </ErrorPageStyle>
  );
};
