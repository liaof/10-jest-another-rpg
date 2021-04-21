// import the Potion() constructor as a usable variable
const Potion = require('../lib/Potion.js');
// jest.mock() replaces the constructor's implmentation with our faked data
// from this point on when new Potion() is called, our fake data is returned

jest.mock('../lib/Potion');
console.log(new Potion());

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
