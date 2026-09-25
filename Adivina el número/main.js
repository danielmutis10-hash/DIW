function iniciarJuego()
{
    let tryAgain = true;

    while(tryAgain)
    {
        //Constante del número secreto generado por math.random y redondeado por floor entre 1 y 100
        const secretNum = Math.floor(Math.random()*100)+1;
        let tries = 0; //número de intentos que se realizarán
        let trying = false;//Variable

        while(!trying)
        {
            let input = prompt("Introduce un número del 1 al 100");

            if(input === null)
            {
                alert("Se ha cancelado el juego");
                return;
            }

            input = input.trim();

            let userNum = parseInt(input);
            tries++;

            if(userNum === secretNum)
            {
                alert('Felicidades!\nHaz acertado con el número secreto en el ',tries,' intento');
                trying = true;
            } else if (userNum < secretNum)
            {
                alert("El número secreto es mayor.");
            }
            else
            {
                alert("El número secreto es menor.");
            }
        }

        tryAgain = confirm("Quieres jugar denuevo?");
    }
}