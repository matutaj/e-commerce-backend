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
exports.GetByNameProdutUseCase = void 0;
const ProdutRepository_1 = require("../../repositories/implementations/ProdutRepository");
const AppError_1 = require("../../../../errors/AppError");
class GetByNameProdutUseCase {
    execute(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtRepository = new ProdutRepository_1.ProdutRepository();
            const nameExit = yield produtRepository.getByName(name);
            if (!nameExit)
                throw new AppError_1.AppError("Already Name Not Exit!", 400);
            return nameExit;
        });
    }
}
exports.GetByNameProdutUseCase = GetByNameProdutUseCase;
