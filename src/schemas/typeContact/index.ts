import * as Yup from "yup";

const createTypeContactSchema = Yup.object().shape({
  description: Yup.string().required(),
});

const updateTypeContactSchema = Yup.object().shape({
  id: Yup.string().uuid().required(),
  description: Yup.string().required(),
});

const TypeContactByIdSchema = Yup.object().shape({
  id: Yup.string().uuid().required(),
});

const TypeContactByDescriptionSchema = Yup.object().shape({
  description: Yup.string().trim().required(),
});

export {
  createTypeContactSchema,
  updateTypeContactSchema,
  TypeContactByIdSchema,
  TypeContactByDescriptionSchema,
};
