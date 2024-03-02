import Marks from "./Marks";

var newTree = new Marks();

var arrOfNumbers:number[] = [1,4,2,8,6,9];

for(let num of arrOfNumbers){
    newTree.insert(num);
}

var search = newTree.Search(10,newTree.root);
console.log(search);

var height = newTree.Height(newTree.root);
console.log(height);

var count = newTree.Count(newTree.root);
console.log(count);



