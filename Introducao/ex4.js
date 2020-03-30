// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
// function experiencia(anos) {
//  // código aqui
// }
// var anosEstudo = 7;
// experiencia(anosEstudo);
// // De 0-1 ano: Iniciante
// // De 1-3 anos: Intermediário
// // De 3-6 anos: Avançado
// // De 7 acima: Jedi Master

function experiencia(anos) {
    switch(anos){
        case 0: case 1:
            console.log('Iniciante');
            break;
        case 2: case 3:
            console.log('Intermediário');
            break;
        case 4: case 5: case 6:
            console.log('Avançado');
            break;
        default:
            console.log('Jedi Master');
    }
}

var anosEstudo = 3;
experiencia(anosEstudo);