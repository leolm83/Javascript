const {  it, expect,beforeAll, beforeEach, afterAll, afterEach } = require('@jest/globals');
const sum = require('./sum');

describe('math functions',()=>{
    let x;
    beforeAll(() =>{
        x=2;
        console.log("before ALL");
    });
    beforeEach(()=>{
        x++;
        console.log("before EACH");
    });
    afterAll(()=>{
        console.log("after ALL");
    })
    afterEach(()=>{
        console.log("after EACH")
    })
    it('adds 3 + 2 to equal 5', () => {
        expect(sum(x, 2)).toBe(5);
    });
})