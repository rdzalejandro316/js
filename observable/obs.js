import {Observable} from 'rxjs'
import {hello} from '../utils/utils.js'


const doSomethingPromise = () =>
{
    return new Promise((resolve) => {
        resolve('OK 1')        
    });
}

doSomethingPromise()
    .then( res => console.log(res))

const doSomethingObservable = () =>
{
    return new Observable((observer) => {
        observer.next('valor 1');
        observer.next('valor 2');
        observer.next('valor 3');
    });
}

doSomethingObservable()
    .subscribe(obs => console.log(obs));

console.log(hello());

