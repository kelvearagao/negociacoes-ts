import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {

    private _elemento: JQuery; 
    private _scapar: boolean;
    
    constructor(seletor: string, scapar: boolean = false) {
        this._elemento = $(seletor);
        this._scapar = scapar;
    }

    //@logarTempoDeExecucao(true)
    update(model: T): void {
        let template = this.template(model);
        if(this._scapar)
            template = template.replace(/<script>[\s\S]*?<\/scritp>/g, '');

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}