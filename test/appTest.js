const assert = require('chai').assert;
const { expect } = require('chai');
const moveZeroes = require('../app');


describe('the app', ()=>{
  it('should move all zeroes to the end of the array', function(){
    const results = moveZeroes([0,1,0,0,3,12]);
    expect(results).eql([1,3,12,0,0,0]);
  })
  it('should not alter the array when all elements are non-zero', function(){
    const result = moveZeroes([1,2,3,4,5]);
    expect(result).eql([1,2,3,4,5]);
  })
  it('should not alter the array when all elements are zeroes', function(){
    const result = moveZeroes([0,0,0,0,0]);
    expect(result).eql([0,0,0,0,0]);
  })
})
