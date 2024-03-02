import AVLNode from "./AVLNode";

export default class Marks {

    public root:AVLNode|null;

    constructor() {
        this.root = null;

    }

    private getHeight(node: AVLNode | null): number 
    {
        return node ? node.height : 0;
    }

    private updateHeight(node: AVLNode): void 
    {
        node.height = 1 + Math.max(this.getHeight(node.left),
        this.getHeight(node.left));
    }

    private getBalanceFactor(node: AVLNode): number 
    {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    
    private rightRotate(node: AVLNode): AVLNode 
    {
        let x: AVLNode = node.left as AVLNode;
        let T2 = x.right as AVLNode;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    private leftRotate(node: AVLNode): AVLNode 
    {
        let x: AVLNode = node.right as AVLNode;
        let T2 = x.left as AVLNode;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    private insertNode(node:AVLNode|null,marks:number):AVLNode
    {
        if(!node)
        {
            return new AVLNode(marks);
        }

        else if (marks < node.marks) 
        {
            node.left = this.insertNode(node.left, marks);
        }

        else if (marks > node.marks) 
        {
            node.right = this.insertNode(node.right, marks);
        } 
        
        this.updateHeight(node);

        let balance: number = this.getBalanceFactor(node);
        if (balance > 1) 
        {
            let select = node.left as AVLNode;
            if (marks < select.marks) 
            {
                return this.rightRotate(node);
            } 
            else 
            {
                node.left = this.leftRotate(node.left as AVLNode);
                return this.rightRotate(node);
            }
        } 
        else if (balance < -1) 
        {
            let select = node.left as AVLNode;
            if (marks > select.marks) 
            {
                return this.leftRotate(node);
            } 
            else 
            {
                node.right = this.rightRotate(node.left as AVLNode);
                return this.leftRotate(node);
            }
        }
        return node;
    }
    
    public Search(marks:number,node:AVLNode|null):boolean{
        var found = 0;
            if(node){
                if(node.marks==marks){
                    found=1;
                    return true;
                    
                }
                this.Search(marks,node.left);
                

        
                this.Search(marks,node.right);
            }
        if(found==0){
            return false;
        }
        return true;
        
    }
    height:number = 0;
    public Height(node:AVLNode|null):number{
        if(!node){
            return 0;
        }
        if(node){
            if(this.height<this.getHeight(node)){
                this.height = this.getHeight(node);
            }
            this.Height(node.left);

            this.Height(node.right);
        }
    
    return this.height;
}
count:number =0
public Count(node:AVLNode|null):number{

    if(node){
        this.Count(node.left);
        this.count+=1;
        
        

        this.Count(node.right);
    }

return this.count;
}




    
        
        
    

    public insert(marks:number):void{
        this.root= this.insertNode(this.root,marks);
    }
}

