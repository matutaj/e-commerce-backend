import * as Yup from "yup"

const createProdutSchema = Yup.object().shape({
    name: Yup.string().required(),
    categoryId: Yup.string().required(),
    cost: Yup.number().required(),
    quant: Yup.number().required(),
    imageUrl: Yup.string()
})

export { createProdutSchema }