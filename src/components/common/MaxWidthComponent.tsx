import { ReactNode } from "react";
import styled from "styled-components";

interface IMaxWidthComponent {
  children: ReactNode;
  label: string;
}

const MaxWidthStyle = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const MaxWidthComponent = ({ children, label }: IMaxWidthComponent) => {
  return (
    <MaxWidthStyle className={`${label}-max-width`}>{children}</MaxWidthStyle>
  );
};
