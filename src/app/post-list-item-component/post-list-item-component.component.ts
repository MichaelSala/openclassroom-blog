import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() {

  }

  ngOnInit() {
  }

  onLoveClick() {
    this.post.loveIts++;
    console.log('LOVE : Title : ', this.post.title, ' loveIts : ', this.post.loveIts);
  }

  onDislikeClick() {
    this.post.loveIts--;
    console.log('DON\'T LOVE : Title : ', this.post.title, ' loveIts : ', this.post.loveIts);
  }

}
