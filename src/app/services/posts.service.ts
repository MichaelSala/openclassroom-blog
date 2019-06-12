import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();
  init = true;

  constructor() {
    this.getPosts();
  }

  emitAndSave() {
    this.emitPosts();
    this.savePosts();
  }

  emitPosts() {
    this.posts = this.posts.sort(
      (postA, postB) => {
        if (postA.createdAt > postB.createdAt) {
          return 1;
        } else if (postA.createdAt == postB.createdAt) {
          return 0;
        } else {
          return -1;
        }
      }
    );
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value',
      (data) => {
        this.posts = data.val() ? data.val() : [];
        // Si pas de données, on en crée 3 à la volée afin si c'est la première fois après le raffraichissement
        if (this.posts.length === 0
          && this.init) {
          this.posts.push(new Post(
            'Mon premier post',
            // tslint:disable-next-line: max-line-length
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            1, (new Date(2017, 10, 10, 11, 50)).valueOf()));
          this.posts.push(new Post(
            'Mon deuxième post',
            // tslint:disable-next-line: max-line-length
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
            -1,
            (new Date(2017, 10, 10, 11, 30)).valueOf()));
          this.posts.push(new Post(
            'Encore un post',
            // tslint:disable-next-line: max-line-length
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
            0,
            (new Date(2017, 10, 10, 11, 38).valueOf())));
        }
        this.init = false;
        this.emitAndSave();
      }
    );
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitAndSave();
  }

  removePost(postIndex: number) {
    this.posts.splice(postIndex, 1);
    this.emitAndSave();
  }

  getSinglePost(postIndex: number): Post {
    return this.posts[postIndex];
  }

  getTitle(postIndex: number): string {
    return this.getSinglePost(postIndex).title;
  }

  getContent(postIndex: number): string {
    return this.getSinglePost(postIndex).content;
  }

  getCreatedAt(postIndex: number): Date {
    return new Date(this.getSinglePost(postIndex).createdAt);
  }

  getLoveIts(postIndex: number): number {
    return this.getSinglePost(postIndex).loveIts;
  }

  addLove(postIndex: number) {
    this.getSinglePost(postIndex).loveIts++;
    this.emitAndSave();
  }

  addDislike(postIndex: number) {
    this.getSinglePost(postIndex).loveIts--;
    this.emitAndSave();
  }

}
