// Write your code here!
const goodbyeMain = document.getElementById('main');
goodbyeMain.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Jack is the champion";
document.body.append(newHeader);



