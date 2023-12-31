"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/users', (req, res) => {
    res.send([
        {
            name: "João",
            age: 21
        },
        {
            name: "Jose",
            age: 21
        },
        {
            name: "Adriano",
            age: 20
        }
    ]);
});
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
//# sourceMappingURL=index.js.map