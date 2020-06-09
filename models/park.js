const Park  = function (name, ticket_price){
  this.name = name;
  this.ticket_price = ticket_price;
  this.collection_of_dinosaurs = [];
};

// returns number of dinosaurs in the array
Park.prototype.numberOfDinosaurs = function (){
  return this.collection_of_dinosaurs.length;
}
// adds dinosaur to collection, passed as a parameter
Park.prototype.addDinosaur = function(dinosaur){
  this.collection_of_dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurByName = function (dinosaur){
  const indexOfDinosaur = this.collection_of_dinosaurs.indexOf(dinosaur);
  this.collection_of_dinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.mostPopularDinosaur = function (){
    let most_popular = 0;
    for(let i = 0; i < this.dinosaurs.length; i++){
    if (this.dinosaurs[i].guestsAttractedPerDay >             this.dinosaurs[most_popular].guestsAttractedPerDay){
      most_popular = i
    }
  }
  return this.dinosaurs[most_popular];
};

};

module.exports = Park;
