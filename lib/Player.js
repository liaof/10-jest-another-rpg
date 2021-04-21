const Potion = require('../lib/Potion');

function Player(name='') {

    // the this. keyword in a constructor function refers to the instance created from the class
    // think mmmo dungeon instances, this. = the active dungeon instance
    this.name = name;

    this.health = Math.floor(Math.random()*10+95);
    this.strength = Math.floor(Math.random()*5+7);
    this.agility = Math.floor(Math.random()*5+7);
    this.inventory = [new Potion('health'), new Potion()];

    // When using prototype, instead of creating a new (getStats for ex) method for each Player instance, new instances of Player
    // simply inherit the following methods from the constructor, instead of it's own instances


    // returns an object with various player properties
    Player.prototype.getStats = function() {
        return {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          agility: this.agility
        };
    };

    // returns the inventory array or false if empty
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
          return this.inventory;
        }
        return false;
    };
}

module.exports = Player;