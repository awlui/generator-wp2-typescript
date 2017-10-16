import { dude } from './foo';
import * as bar from './bar';
export class App {
    constructor(public name: string) {}
    met() {
        dude(0);
    }
    arrange() {
        dude(8);
    }
    package(a: number) {
        if (a > 10) {
            console.log('five')
        } else {
            console.log('bad')
        }

    }
    untested() {
        let a = 10;
        this.package(20);

    }
}

