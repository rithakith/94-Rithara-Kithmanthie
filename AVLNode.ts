export default class AVLNode {
    public marks:number;
    public left:null|AVLNode;
    public right:null|AVLNode;
    public height:number;
    constructor(marks:number) {
        this.left=null;
        this.right=null;
        this.marks= marks;
        this.height=0;
    }
}