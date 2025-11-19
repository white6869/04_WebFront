const boxWidth = document.querySelector(".width");
const boxHeight = document.querySelector(".height");
const boxclass = document.querySelector(".box-class");
const textArea =  document.querySelector(".text-area");
const pcolor = document.querySelector(".fontColor");
const x = document.querySelector(".x");
const y = document.querySelector(".y");

document.querySelector(".btn1").addEventListener("click", () => {
  const box = document.createElement("div");
  box.style.backgroundColor="red";
  box.style.width = Number(boxWidth.value) +"px" ;
  box.style.height = Number(boxHeight.value)+"px"; 

  const p = document.createElement("p");
  p.innerText = textArea.value;
  p.style.color = pcolor.value;
  p.style.marginLeft = Number(x.value)+"px";
  p.style.marginTop = Number(y.value)+"px";

  boxclass.append(box);
  boxclass.append(p);
});