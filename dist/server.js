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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
// const PORT = 5000;
let server;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // await mongoose.connect(process.env.DATABASE_URL!);
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL is not defined');
        }
        yield mongoose_1.default.connect(process.env.DATABASE_URL);
    });
}
app_1.default.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});
// async function bootstrap() {
//     server= app.listen(PORT, () => {
//         console.log(`Example app listening on port ${PORT}`)
//       });
// }
// bootstrap();
