/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];

  // let mutantList = [];


  function findMutantByPower(mutants, power) {
    for (let i = 0; i < mutants.length; i++) {
        if (mutants[i].power === power) {
            return "That power is held by " + mutants[i].name + ".";
        }
    } return "No mutant holds that power";

        // Había desarrollado esta otra función para tener en cuenta a los múltiples mutantes, pero me devuelve varios mensajes y como no me gusta, la dejo y entrego la de arriba. Sé que la de arriba solo devolvería el primero que encuentre con ese poder, pero no sé como resolver eso.

        /* if (mutants[i].power === power) {
            mutantList.push(mutants[i].name);
        }

        if (mutantList.length > 0) {
            let message = "The power " + power + " is held by: ";
            for (let j = 0; j < mutantList.length; j++) {
                if (j === mutantList.length - 1 && mutantList.length > 1) {
                    message += "and ";
                }
                message += mutantList[j];
                if (j < mutantList.length - 2) {
                    message += ", ";
                } else if (j === mutantList.length - 2) {
                    message += " ";
                }
            }
            console.log(message + ".");
        } else {
            console.log("No mutant with the power '" + power + "' was found.");
        }
    } */      
  }

  console.log(findMutantByPower(mutants, 'telepathy'));
  console.log(findMutantByPower(mutants, 'invisibility'));
  