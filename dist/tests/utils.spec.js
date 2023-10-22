"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_assert_1 = __importDefault(require("node:assert"));
const node_test_1 = require("node:test");
const format_1 = require("../utils/format");
(0, node_test_1.describe)('Testing the utils', () => {
    (0, node_test_1.it)('upperName()', () => {
        const text = (0, format_1.upperName)('testandu');
        node_assert_1.default.equal(text, 'TESTANDU');
    });
});
//# sourceMappingURL=utils.spec.js.map