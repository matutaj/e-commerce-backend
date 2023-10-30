"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByNameProdutController = void 0;
const GetByNameProdutUseCase_1 = require("./GetByNameProdutUseCase");
const produt_1 = require("../../../../schemas/produt");
const AppError_1 = require("../../../../errors/AppError");
class GetByNameProdutController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const getProdutUseCase = new GetByNameProdutUseCase_1.GetByNameProdutUseCase();
            const { nameProdut } = req.params;
            if (!(produt_1.getByNameSchema.isValid(nameProdut)))
                throw new AppError_1.AppError("field Validation Error", 400);
            const result = yield getProdutUseCase.execute(nameProdut);
            return res.status(200).json(result);
        });
    }
}
exports.GetByNameProdutController = GetByNameProdutController;
