function Potion(name) {
    // the this. keyword in a constructor function refers to the instance created from the class
    // think mmmo dungeon instances, this. = the active dungeon instance
    this.types = ['strength','agility','health'];
    this.name = name|| this.types[Math.floor(Math.random()*this.types.length)];
  
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
}
  
module.exports = Potion;