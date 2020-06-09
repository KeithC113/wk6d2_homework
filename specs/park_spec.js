const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
      park = new Park('Leisure Land' ,35); //arrange
  });

  it('should have a name', function(){
    const actual = park.name; //act
    assert.strictEqual(actual, 'Leisure Land'); //assert
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 35);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection_of_dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('t-rex');//add dino to collection
    const actual = park.numberOfDinosaurs(); //count no. of dinos in collection
    assert.strictEqual(actual,1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur('t-rex');
    park.addDinosaur('raptor');
    park.removeDinosaurByName('raptor');
    const expected = ['t-rex']
    const actual = park.collection_of_dinosaurs;
    assert.deepStrictEqual(actual, expected);

  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
