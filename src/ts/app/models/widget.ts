export class Widget {
    constructor(
        public name: string,
        public description: string,
        public color: string,
        public size: string,
        public quantity: number,
        public active: boolean,
        public id?: number,
        public created?: Date,
        public modified?: Date
    ) { }
}
