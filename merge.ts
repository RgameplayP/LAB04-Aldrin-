//Lo que paso haciendo el merge de la rama main y la rama feature/LAB04-01 
//Definiendo primeramente que es merge: combinar los cambios de ambas ramas en este caso se combino los cambios de la rama main y la rama feature/LAB04-01
//y se añadio el archivo Q-4.txt que no existia en la rama main, pero si estaba en la rama feature/LAB04-01

const mergeComments = (mainBranch: string, featureBranch: string, addedFile: string): string => {
 return `
          Lo que pasó haciendo el merge de la rama ${mainBranch} y la rama ${featureBranch}, 
          Definiendo primeramente que es merge: combinar los cambios de ambas ramas en este caso se combinaron los cambios de la rama ${mainBranch} y la rama ${featureBranch}, 
          y se añadió el archivo ${addedFile} que no existía en la rama ${mainBranch}, pero sí estaba en la rama ${featureBranch}.
 `;
};
                          
// Uso de la función
const comentarioMerge = mergeComments("main", "feature/LAB04-01", "Q-4.txt");
console.log(comentarioMerge);
                          