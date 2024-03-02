"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AVLNode_1 = __importDefault(require("./AVLNode"));
class Marks {
    constructor() {
        this.height = 0;
        this.count = 0;
        this.root = null;
    }
    getHeight(node) {
        return node ? node.height : 0;
    }
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.left));
    }
    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    rightRotate(node) {
        let x = node.left;
        let T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    leftRotate(node) {
        let x = node.right;
        let T2 = x.left;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }
    insertNode(node, marks) {
        if (!node) {
            return new AVLNode_1.default(marks);
        }
        else if (marks < node.marks) {
            node.left = this.insertNode(node.left, marks);
        }
        else if (marks > node.marks) {
            node.right = this.insertNode(node.right, marks);
        }
        this.updateHeight(node);
        let balance = this.getBalanceFactor(node);
        if (balance > 1) {
            let select = node.left;
            if (marks < select.marks) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            let select = node.left;
            if (marks > select.marks) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    Search(marks, node) {
        var found = 0;
        if (node) {
            if (node.marks == marks) {
                found = 1;
                return true;
            }
            this.Search(marks, node.left);
            this.Search(marks, node.right);
        }
        if (found == 0) {
            return false;
        }
        return true;
    }
    Height(node) {
        if (!node) {
            return 0;
        }
        if (node) {
            if (this.height < this.getHeight(node)) {
                this.height = this.getHeight(node);
            }
            this.Height(node.left);
            this.Height(node.right);
        }
        return this.height;
    }
    Count(node) {
        if (node) {
            this.Count(node.left);
            this.count += 1;
            this.Count(node.right);
        }
        return this.count;
    }
    // public deleteNode(node:AVLNode|null):void{
    //     if(node?.left){
    //     }
    // }
    insert(marks) {
        this.root = this.insertNode(this.root, marks);
    }
}
exports.default = Marks;
