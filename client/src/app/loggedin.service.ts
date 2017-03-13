import { Injectable } from '@angular/core';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Injectable()
export class LoggedinService {
  user: any;
  userLogged = new EventEmitter();
  constructor() { }

  getEmitter() {
    return this.userLogged;
  }

  isLoggedIn(): boolean {
    return this.user != undefined ? true : false;
  }

  getUser() {
    console.log(this.user)
    return this.user;
  }

  checkLogged(user) {
    console.log('USERUSER: ',user);
    this.user = user;
    this.userLogged.emit(user);
  }
}
