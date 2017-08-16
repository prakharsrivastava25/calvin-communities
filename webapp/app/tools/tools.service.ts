import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolService {
    constructor(private http: Http) { }

    getTools() {
        return this.http
            .get('/api/v1/tools')
            .map(response => response.json());
    }
}