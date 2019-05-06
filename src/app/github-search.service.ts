import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class GithubService {
    private userName: string;
    // private clientId: string = '<Client Id>';
    // private clientSecret: string = '<Client Secret Key>';
    private clientId: string = '60b9f23dedffbdfc476c';
    private clientSecret: string = '74f1322aa40990c842dcf750e380cf9a5023fbf1'                                                                                                                           

    constructor(private _http: Http) {
        // console.log('Github Service Ready.');
        this.userName = '';
    }

    getUser() {
        if (this.userName) {
            return this._http.get('http://api.github.com/users/' + this.userName
                + '?client_id=' + this.clientId
                + '&client_secret=' + this.clientSecret)
                .map(res => res.json())
                .catch(this.handleError);
        }
        // Bu şekilde de dönen değer üzerinden hatalar yakalanabilir. Ya da catch te....
        // .map(res => {
        //     console.log(res);
        //     if (res.status != 200) {
        //         throw new Error('This request has failed ' + res.status);
        //     }
        //     else {
        //         return res.json();
        //     }
        // })
    }

    getRepos() {
        if (this.userName) {
            return this._http.get('http://api.github.com/users/' + this.userName
                + '/repos?client_id=' + this.clientId
                + '&client_secret=' + this.clientSecret)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }

    updateUser(userName: string) {
        this.userName = userName;
    }

    private handleError(error: any) {

        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}


