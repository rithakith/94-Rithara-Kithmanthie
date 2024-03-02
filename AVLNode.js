"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AVLNode {
    constructor(marks) {
        this.left = null;
        this.right = null;
        this.marks = marks;
        this.height = 0;
    }
}
exports.default = AVLNode;
