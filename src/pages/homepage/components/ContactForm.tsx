import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
import { CustomButton } from "../../../components/materialUI/button";
import { CustomInput } from "../../../components/materialUI/input";
import { ContactFormSchema } from "../../../components/schemas";
import { useRef, useState } from "react";
import { CustomSnackbar } from "../../../components/materialUI/snackbar";

interface IContactForm {
  full_name: string;
  email: string;
  message: string;
}

const INITIAL_VALUES: IContactForm = {
  full_name: "",
  email: "",
  message: "",
};

export const ContactForm = () => {
  const formRef = useRef<null | HTMLFormElement>(null);

  const [snackbarMessage, setSnackbarMessage] = useState<{
    message: string;
    severity: "success" | "error";
  }>({ message: "", severity: "success" });

  const handleSubmit = async (values: IContactForm, actions: any) => {
    try {
      if (
        process.env.REACT_APP_EMAILJS_SERVICE_ID &&
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
        process.env.REACT_APP_EMAILJS_USER_ID &&
        formRef.current
      ) {
        await emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAILJS_USER_ID
        );
        actions.resetForm();
        setSnackbarMessage({
          message: "Thanks for contacting us!",
          severity: "success",
        });
      }
    } catch (err) {
      console.error(err);
      setSnackbarMessage({
        message: "Error! Contact form not sent.",
        severity: "error",
      });
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={INITIAL_VALUES}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form-container" ref={formRef}>
          <CustomInput label="Full Name" name="full_name" />
          <CustomInput label="Email" name="email" />
          <CustomInput
            label="Message"
            name="message"
            multiline={true}
            rows={4}
          />
          <CustomButton
            disabled={isSubmitting}
            label={isSubmitting ? "Sending..." : "Contact Us"}
          />
          {snackbarMessage && (
            <CustomSnackbar
              message={snackbarMessage.message}
              severity={snackbarMessage.severity}
            />
          )}
        </Form>
      )}
    </Formik>
  );
};
