import * as Yup from "yup"

const createUserSchema = Yup.object().shape({
    name: Yup.string().required(),
})

export { createUserSchema }