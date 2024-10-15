let tab = [];

for(let i = 1; i < 6; i++){
    tab.push(prompt("Podaj zainteresowanie numer " + i));
}

lista = document.querySelector("#lista");

for(x of tab){
    li = document.createElement("li");
    li.innerText = x;
    lista.appendChild(li);
}

document.getElementById("button").addEventListener("click", function(){
    document.getElementById("opinia").innerText = `Twoja opinia: ${document.getElementById("input").value}`;
});

let el = $("h1");
el.fadeOut(2000, function(){
    el.css("color", "red");
});
el.fadeIn(2000);
