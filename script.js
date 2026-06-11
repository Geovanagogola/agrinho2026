const heroBtn = document.getElementById("heroBtn");

heroBtn.addEventListener("click", () => {

    document
    .getElementById("beneficios")
    .scrollIntoView({
        behavior:"smooth"
    });

});

function calcular(){

    let conta =
    Number(document.getElementById("conta").value);

    let economia = conta * 0.8;

    document.getElementById("resultado")
    .innerHTML =
    `
    Economia estimada:
    R$ ${economia.toFixed(2)}
    por mês.
    `;
}

window.addEventListener("scroll",()=>{

    const cards =
    document.querySelectorAll(".card");

    cards.forEach(card=>{

        const pos =
        card.getBoundingClientRect().top;

        if(pos < window.innerHeight - 100){

            card.style.opacity="1";
            card.style.transform="translateY(0)";
        }

    });

});
