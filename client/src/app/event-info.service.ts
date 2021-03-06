import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { EventService } from './event.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment'



@Injectable()
export class EventInfoService {
  BASE_URL: string = 'environment';
  emitter: EventEmitter<Object> = new EventEmitter<Object>();
  options: Object = { withCredentials: true };

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }



}
