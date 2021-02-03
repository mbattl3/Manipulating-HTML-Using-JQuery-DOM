document.addEventListener("DOMContentLoaded", function () {
    let para = document.querySelectorAll("p");
 
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Here");
    button.appendChild(buttonText);
    para[0].appendChild(button);
    button.addEventListener("click", function () {
      alert("Hola, Amigo!");
    });
  

    let text = document.querySelector("#text");
    let button2 = document.querySelector("#message");
    button2.addEventListener("click", function () {
      alert(text.value);
    });
 
    let div = document.getElementById("newDiv");
  
    div.addEventListener("mouseenter", function () {
      div.style.backgroundColor = "rgb(82, 180, 82";
      div.addEventListener("mouseleave", function () {
        div.style.backgroundColor = "initial";
      });
    });
  

    let paragraph = document.createElement("p");
    let paraText = document.createTextNode("If you use your imagination, then this text will be more than what you see.");
    paragraph.appendChild(paraText);
    para[4].appendChild(paragraph);
  
    function randColor() {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      this.style.color = `rgb(${r},${g},${b})`;
    }
  
    paragraph.addEventListener("click", randColor);
  

    let emptyDiv = document.createElement("div");
    emptyDiv.classList.add("emptyDiv");
    para[5].appendChild(emptyDiv);
  
    let button3 = document.createElement("button");
    let button3Text = document.createTextNode("My Name");
    button3.appendChild(button3Text);
    emptyDiv.appendChild(button3);
  
    button3.addEventListener("click", function () {
      let span = document.createElement("span");
      emptyDiv.appendChild(span);
      span.textContent = "Mia ";
    });
  

   let friends = [
        "Tim",
        "Tammy",
        "Tom",
        "Tommy",
        "Tommie",
        "Tomy",
        "Thomie",
        "Timmy",
        "Tam",
        "Joe",
    ];
    let i = 0;
    let btn = document.getElementById("btn");
    btn.addEventListener("click", addListItem);
  
    function addListItem() {
      if (i < friends.length) {
        let list = document.getElementById("list");
        let friend = friends[i];
        let listItem = document.createElement('li');
        listItem.textContent = friend;
        list.appendChild(listItem);
        i++;
      }
    }
  
  });