let nacionalidade = prompt("Escreva aqui sua nacionalidade")
let nacionalidadeCorrigido = nacionalidade.toLowerCase().replace("o", "a")


if (nacionalidadeCorrigido === "brasileira"){
    console.log(`Sua nacionalidade é ${nacionalidadeCorrigido}.`)
}   else if(nacionalidadeCorrigido === "argentina"){
        console.log(`Sua nacionalidade é ${nacionalidade}.`)
}       else if (nacionalidadeCorrigido === "uruguaia"){
            console.log(`Sua nacionalidade é ${nacionalidade}.`)
}           else if (nacionalidadeCorrigido === "chilena"){
                console.log(`Sua nacionalidade é ${nacionalidade}.`)
}                   else if (nacionalidadeCorrigido === "colombiana"){
                        console.log(`Sua nacionalidade é ${nacionalidade}.`)
}                            else {
                                console.log(`Nacionalidade não encontrada!`)
}