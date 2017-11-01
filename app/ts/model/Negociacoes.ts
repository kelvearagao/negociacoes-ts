import { Igualavel } from './Igualavel';
import { Negociacao } from './negociacao';
import { Imprimivel } from "./Imprimivel";

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }

    ehIgual(obj: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(obj.paraArray());
    }

}