import * as yup from "yup";

const emailRegExp: RegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ContactFormSchema = yup.object().shape({
  full_name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Please provide your Full name."),
  email: yup
    .string()
    .email("Email format not valid.")
    .matches(emailRegExp, { message: "Email format not valid" })
    .required("Please provide an email address."),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters.")
    .required("Please provide an message."),
});
