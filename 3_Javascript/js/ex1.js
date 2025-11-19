const textArea = document.querySelector(".text-area");
const btn2 = document.querySelector("#btn2");
const btn1 = document.querySelector("#btn1");

console.log(textArea);
btn1.addEventListener("click", () => {
    const input1 = document.querySelector(".input-number");
    const input2 = document.querySelector(".input-text");

    textArea.style.fontSize = Number(input1.value)+"px";
    textArea.style.color = input2.value;

    
  });
btn2.addEventListener("click", () => {
  const result = document.querySelector("#result")
   const p = document.createElement("p");
   p.innerText = textArea.value;
   p.setAttribute("style", textArea.getAttribute("style"));

  result.append(p);
});