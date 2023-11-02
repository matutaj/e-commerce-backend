import * as Yup from "yup"


const createCarrySchema = Yup.object().shape({
    produtId: Yup.string().required(),
    userId: Yup.string().required()
})

const getAllCarryForUserId = Yup.object().shape({
    userId: Yup.string().required()
})

export { createCarrySchema, getAllCarryForUserId }