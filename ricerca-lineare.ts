import { cin } from "node-cin";

function ricLineare(seq: number[], chiave: number) {
    var i: number;
    let ind_elem = -1;

    for (i = 0; ind_elem == -1 && i < seq.length; i++) {
        if (seq[i] == chiave)
            ind_elem = i;
    }

    return ind_elem;
}

async function main() {
    var number: any = await cin("Inserisci i numeri di elementi della sequenza", false)
    let seq: number[] = [];

    for (let q = 0; q < parseInt(number); q++) {
        let nmb: any = await cin(`Inserisci il ${q+1}° numero (indice ${q})`, false);
        seq.push(parseInt(nmb));
    }

    let chiave: any = await cin("Inserisci la chiave", false);

    let risultato = ricLineare(seq, chiave);
    if (risultato == -1) console.log("Non ho trovato niente");
    else console.log(`Ho trovato l'elemento di numero ${risultato}`);
}

main();