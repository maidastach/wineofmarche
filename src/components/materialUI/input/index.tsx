import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useField, FieldInputProps } from "formik";
import { winetitle } from "../../common/colors";

interface IConfigTextField extends FieldInputProps<any> {
  label: string;
  name: string;
  fullWidth: boolean;
  error: boolean;
  variant: "standard" | "outlined" | undefined;
  helperText: string;
  multiline: boolean;
  rows?: number;
}

const CustomInputStyle = styled(TextField)`
  &.MuiFormControl-root > * {
    font-family: Cinzel;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
  }

  .MuiFormLabel-root.Mui-focused {
    color: black;
  }

  .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${winetitle};
  }
`;

export const CustomInput = ({
  label,
  name,
  multiline = false,
  rows,
}: {
  label: string;
  name: string;
  multiline?: boolean;
  rows?: number;
}) => {
  const [field, meta] = useField(name);

  const configTextField: IConfigTextField = {
    ...field,
    label,
    name,
    variant: "outlined",
    fullWidth: true,
    error: false,
    helperText: "",
    multiline,
    rows,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <CustomInputStyle {...configTextField} />;
};
