let selectAll = document.getElementsByTagName("li");
let level = document.getElementById("level");
let newLevel = document.getElementById('level').textContent;

let count = 0;
for (let i = 0; i < selectAll.length; i++) {
    
    if (selectAll[i].textContent === newLevel) {
    
        break;
    }
    	count++;
}

console.log(count);
