import Button from "@mui/material/Button";
import styled from "styled-components";
import { winetitle } from "../../common/colors";
const CustomButtonStyle = styled(Button)`
  &.MuiButtonBase-root {
    color: ${winetitle};
    border-color: ${winetitle};
    padding: 15px 25px;
    font-family: Cinzel;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    font-weight: 400;

    &:hover {
      border-color: ${winetitle};
    }
  }
`;

export const CustomButton = ({
  label,
  disabled,
}: {
  label: string;
  disabled: boolean;
}) => {
  return (
    <CustomButtonStyle type="submit" disabled={disabled} variant="outlined">
      {label}
    </CustomButtonStyle>
  );
};
