import { cin } from "node-cin";

function conta(seq: number[], chiave: number) {
    var i: number;
    let n = 0;

    for (i = 0; i < seq.length; i++) {
        if (seq[i] == chiave)
            n++;
    }

    return n;
}

async function main() {
    var number: any = await cin("Inserisci i numeri di elementi della sequenza", false)
    let seq: number[] = [];

    for (let q = 0; q < parseInt(number); q++) {
        let nmb: any = await cin(`Inserisci il ${q + 1}° numero (indice ${q})`, false);
        seq.push(parseInt(nmb));
    }

    let chiave: any = await cin("Inserisci la chiave", false);

    let risultato = conta(seq, chiave);
    console.log(`Ho trovato l'elemento compare ${risultato} volt${risultato == 1 ? "a" : "e"}`);
}

main();