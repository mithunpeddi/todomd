function add(){
 let t=document.getElementById("task"),l=document.getElementById("list");
 if(t.value){let x=document.createElement("li");x.innerHTML=`${t.value} <button onclick="this.parentElement.remove()">❌</button>`;l.append(x);t.value=""}
}
