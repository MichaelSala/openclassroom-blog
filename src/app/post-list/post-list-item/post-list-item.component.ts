import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postIndex: number;

  constructor(public postsService: PostsService) {
  }

  ngOnInit() {
  }

  onLoveClick() {
    this.postsService.addLove(this.postIndex);
  }

  onDislikeClick() {
    this.postsService.addDislike(this.postIndex);
  }

  onDeleteClick() {
    this.postsService.removePost(this.postIndex);

  }

}
