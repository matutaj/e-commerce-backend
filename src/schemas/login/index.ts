import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().trim().required(),
  password: Yup.string().trim().min(8).max(16).required(),
  userId: Yup.string().trim().uuid(),
});

const sessionSchema = Yup.object().shape({
  email: Yup.string().email().trim().required(),
  password: Yup.string().trim().min(8).max(16).required(),
});

const setPasswordSchema = Yup.object().shape({
  email: Yup.string().email().trim().required(),
  password: Yup.string().trim().min(8).max(16).required(),
  passwordTokenSet: Yup.string().trim().required(),
});

const emailSchema = Yup.object().shape({
  email: Yup.string().trim().email().required(),
});

export { loginSchema, sessionSchema, emailSchema, setPasswordSchema };
