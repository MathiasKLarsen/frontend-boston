import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("Invalid email format").required("A valid email is required"),
  phone: yup
    .string()
    .matches(/^[0-9+\-()\s]+$/, "Enter a valid phone number")
    .required("Phone number is required"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters long"),
});

export const useYupForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  return { register, handleSubmit, reset, errors };
};
