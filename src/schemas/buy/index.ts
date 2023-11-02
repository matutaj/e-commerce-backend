import * as Yup from "yup"


const createBuySchema = Yup.object().shape({
    cellfoneNumber: Yup.number(),
    deliveryDate: Yup.date().required(),
    localdelivery: Yup.string().required(),
    produtId: Yup.string().required(),
    userId: Yup.string().required()
})
export { createBuySchema }