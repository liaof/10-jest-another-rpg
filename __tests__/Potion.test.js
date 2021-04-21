const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
  });


test('creates a random potion object', () => {
    const potion = new Potion();
    //we expect the Potion object created to have a name of any string
    expect(potion.name).toEqual(expect.any(String));
    //a length>0, that is to say a length at all
    expect(potion.name.length).toBeGreaterThan(0);
    //a property called 'value' that is a number
    expect(potion.value).toEqual(expect.any(Number));
  });
