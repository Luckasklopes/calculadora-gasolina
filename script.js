function calcular(event) {
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinalInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("conteudo-resultado");
    let textResult = document.getElementById("texto-resultado");
    let GasolinaSpan = document.getElementById("gasolina-resultado");
    let AlcoolSpan = document.getElementById("alcool-resultado");

    /* calculo = alcool / gasolina - se o resultado for menor que 0.7, compensa usar alcool */

    let calculo = (alcoolInput / gasolinalInput);

    if(calculo < 0.7) {
        textResult.innerHTML = "Compensa usar Álcool";
    } else {
        textResult.innerHTML = "Compensa usar Gasolina";
    }
    
    GasolinaSpan.innerHTML = "Gasolina R$" + gasolinalInput;
    AlcoolSpan.innerHTML = "Álcool R$" + alcoolInput;

    contentResult.classList.remove("hide")

}