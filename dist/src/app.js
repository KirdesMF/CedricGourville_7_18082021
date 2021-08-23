"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(`docker env: ${process.env.NODE_ENV}`);
const setHeaders = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
};
const prisma = new client_1.PrismaClient();
const app = express_1.default();
app.use(express_1.default.json());
app.use(setHeaders);
app.get('/', (req, res) => res.send('home'));
app.get('/users', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: 'ced@prisma.io',
            name: 'ced Prisma',
        },
    });
    res.json(user);
    console.log(user);
});
app.get('/all', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});
app.listen(process.env.API_PORT, () => {
    console.log(`server is listenning here : http://${process.env.API_HOST}:${process.env.API_PORT}`);
});
//# sourceMappingURL=app.js.map