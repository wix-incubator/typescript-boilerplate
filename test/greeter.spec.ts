import test = require('tape');
import {hello, helloObj} from "../src/greeter";
import * as sinon from 'sinon';

const NAME = 'Joe';
const PLACEHOLDER = 'placeholder';

test('greets', t => {
    t.plan(1);
    t.equal(hello(NAME).toLowerCase(), `hello ${NAME.toLowerCase()}`);
});

test('produces object', t => {
    t.plan(3);
    const mySpy = sinon.spy(() => PLACEHOLDER);
    const result = helloObj(NAME, mySpy);

    t.deepEqual(result, {name: NAME, greet: PLACEHOLDER});
    t.equal(mySpy.callCount, 1);
    t.assert(mySpy.calledWith(NAME));
});

test('object works with provided greeter', t => {
    t.plan(1);
    t.deepEqual(helloObj(NAME, hello), {name: NAME, greet: 'Hello Joe'});
});
