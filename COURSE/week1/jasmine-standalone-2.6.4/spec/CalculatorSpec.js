describe("calculator", function() {
  var calc;


  beforeEach(function() {
    calc = new Calculator;
    
  });
  function getRandomDiff0(){
    return Math.ceil(Math.random() * 10);

  }
  getRandomDiff0()

  it("It sums ok", function() {
    var n1 = getRandomDiff0();
    var n2 = getRandomDiff0();
    var result = n1 + n2;
    expect(calc.sum(n1, n2)).toBe(result);




    

    //demonstrates use of custom matcher
   // expect(player).toBePlaying(song);
  });
  it("It multiplies ok", function() {
    var n1 = getRandomDiff0();
    var n2 = getRandomDiff0();
    var result = n1 * n2;
    expect(calc.mul(n1, n2)).toBe(result);

});
it("It divides ok", function() {
    var n1 = getRandomDiff0();
    var n2 = getRandomDiff0();
    var result = n1 / n2;
    expect(div.mul(n1, n2)).toBe(result);

});

it("It substract ok", function() {
    var n1 = getRandomDiff0();
    var n2 = getRandomDiff0();
    var result = n1 - n2;
    expect(div.mul(n1, n2)).toBe(result);

});

 

});
