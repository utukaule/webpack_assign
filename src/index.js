import {square, sum} from "./calc";
import "./index.css";
import "../index.html"
import '../file_img.jpg';

console.log(sum(4,5));
console.log(square(5))

let img =  document.createElement('img');
img.setAttribute('src','../file_img.jpg');
img.setAttribute('class','img');
// document.getElementById('image').append(img)

const root = document.getElementById('root');
const h1 = document.createElement("h1");
h1.textContent = "this is me with color change";
h1.setAttribute('class',"redtext");
root.append(h1,img);

document.querySelector('form').addEventListener('submit',todo);

function todo(event){
    event.preventDefault();
    
    let text = document.getElementById("todo").value;
    console.log(text);
    let todo_list = document.createElement('p');
    todo_list.textContent = "";
    todo_list.textContent = text;

    document.getElementById("todo_list_items").append(todo_list);

}