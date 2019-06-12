export class Post {

    loveIts = 0;
    createdAt: number = Date.now();

    constructor(public title: string, public content: string, loveIts?: number, createdAt?: number) {
        if (loveIts) {
            this.loveIts = loveIts;
        }
        if (createdAt) {
            this.createdAt = createdAt;
        }
    }
}
