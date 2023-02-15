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
const axios_1 = __importDefault(require("axios"));
const typeDataAny = ["aku", 12, true];
const typeDataString = "Papa";
const typeDataNumber = 19;
const typeDataBoolean = true;
const typeDataArray = ["mama", "adek", "kakak"];
const typeDataObject = {
    name: 'coba dulu ahh'
};
console.log(typeDataAny);
console.log(typeDataString);
console.log(typeDataNumber);
console.log(typeDataBoolean);
console.log(typeDataArray);
const dataAdmin = {
    name: "Syahrian",
    age: 18,
    merriage: false
};
console.log(dataAdmin);
const getAdmin = (value) => {
    return value;
};
const dataFunction = getAdmin("Rama");
console.log(dataFunction);
function voidTest() {
    console.log('tes');
}
voidTest();
function tes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            axios_1.default.get('http://localhost:3030/mongodb/')
                .then(res => {
                console.log(res.data);
            })
                .catch(err => console.log(err));
            // console.log(data) 
        }
        catch (_a) {
            console.error();
        }
    });
}
tes();
