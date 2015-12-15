/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the SantaModel object */

describe("Santa", function() {

  it("should init properly", function() {  
        var request = [{
  question : "Carlo wants a TOY. Shall I pack a banana?",
  options : ["yes", "no"],
  answer : "no"
},
{
  question : "Julia wants a doll. Shall I pack a barbie?",  
  options : ["yes", "no"],
  answer : "yes"
},
{
  question : "Fabio wants a smartphone. Shall I pack a potatoe?",  
  options : ["yes", "no"],
  answer : "no"
}];
        SantaModel.init(request);
        expect(SantaModel.getCurrentRequest().question).toBe("Carlo wants a TOY. Shall I pack a banana?");
  }); 
    
      it("should pack properly", function() {  
        var request = [{
  question : "Carlo wants a TOY. Shall I pack a banana?",
  options : ["yes", "no"],
  answer : "no"
},
{
  question : "Julia wants a doll. Shall I pack a barbie?",  
  options : ["yes", "no"],
  answer : "yes"
},
{
  question : "Fabio wants a smartphone. Shall I pack a potatoe?",  
  options : ["yes", "no"],
  answer : "no"
}];
        SantaModel.init(request);
        expect(SantaModel.pack("no")).toBe(1);
  });    
    
          it("should not pack properly", function() {  
        var request = [{
  question : "Carlo wants a TOY. Shall I pack a banana?",
  options : ["yes", "no"],
  answer : "no"
},
{
  question : "Julia wants a doll. Shall I pack a barbie?",  
  options : ["yes", "no"],
  answer : "yes"
},
{
  question : "Fabio wants a smartphone. Shall I pack a potatoe?",  
  options : ["yes", "no"],
  answer : "no"
}];
        SantaModel.init(request);
        expect(SantaModel.pack("yes")).toBe(0);
  }); 
 
 

});
