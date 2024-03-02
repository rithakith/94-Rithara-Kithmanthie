"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Marks_1 = __importDefault(require("./Marks"));
var newTree = new Marks_1.default();
var arrOfNumbers = [1, 4, 2, 8, 6, 9];
for (let num of arrOfNumbers) {
    newTree.insert(num);
}
var search = newTree.Search(10, newTree.root);
console.log(search);
var height = newTree.Height(newTree.root);
console.log(height);
var count = newTree.Count(newTree.root);
console.log(count);
// var deletedNode = deleteNode(newTree.root);
// console.log(deletedNode);
