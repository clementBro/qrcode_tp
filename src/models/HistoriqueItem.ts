export class HistoriqueItem {

    private data: string;
    private createdAt: string;

    constructor(text : string){
        this.data = text;
        let date = new Date();
        this.createdAt = date.toLocaleDateString('France');
    }
}