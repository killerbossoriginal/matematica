function ricLineare(seq: number[], chiave: number) {
    var i: number; // indice per la scansione di seq
    let ind_elem = -1; // indice di un elemento uguale alla chiave
    for (i = 0; ind_elem == -1 && i < seq.length; i++) {
        if (seq[i] == chiave)
            ind_elem = i;
    }
    return ind_elem;
} 

console.log(ricLineare([1, 5, 4, 2], 2));