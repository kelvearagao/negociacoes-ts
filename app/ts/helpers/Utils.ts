import { Negociacao, Imprimivel } from '../model/index';

export function imprime(...obj: Imprimivel[]) {

    obj.forEach(obj => obj.paraTexto());
}