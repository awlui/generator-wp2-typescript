import { dude } from './foo';
import * as bar from './bar';
export class App {
    constructor(public name: string) {}
    public met() {
        dude(0);
    }
    public arrange() {
        dude(8);
    }
    public package(a: number) {
        if (a > 10) {
            console.log('five');
        } else {
            console.log('bad');
        }
    }
    public untested() {
        const a = 10;
        this.package(20);
    }
}
