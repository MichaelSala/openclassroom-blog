
export class Post {
    title: string;
    content: string;
    loveIts: number;
    createdAt: Date;
    constructor(title, content, loveIts = 0, createAt = new Date(2017, 10, 10, 11, 0)) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.createdAt = new Date();
    }
}
