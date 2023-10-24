import { cin } from "node-cin";

function compareNumbers(a: number, b: number) {
    return a - b;
}

function conta(seq: number[], chiave: number) {
    var indice = -1;
    let inizio = 0,
        fine = seq.length--,
        centro: number;

    while (indice == -1 && inizio <= fine) {
        centro = Math.round((inizio + fine) / 2);
        if (seq[centro] == chiave)
            indice = centro;
        else
            if (chiave > seq[centro])
                inizio = centro + 1;
            else
                fine = centro - 1; 
    }

    return indice;
}

async function main() {
    var number: any = await cin("Inserisci i numeri di elementi della sequenza", false)
    let seq: number[] = [];

    for (let q = 0; q < parseInt(number) - 1; q++) {
        let nmb: any = await cin(`Inserisci il ${q + 1}° numero (indice ${q})`, false);
        seq.push(parseInt(nmb));
    }

    let chiave: any = await cin("Inserisci la chiave", false);

    seq = seq.sort(compareNumbers);
    console.log("Ho ordinato la sequenza di numeri");
    let risultato = conta(seq, chiave);
    console.log(`Ho trovato l'elemento, è all'indice: ${risultato}\nQuesta era la sequenza finale: ${seq}`);
}

main();