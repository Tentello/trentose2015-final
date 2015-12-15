/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */
var SantaView = {
    init : function(request){
        $(".question").append(request.question);
        for(var i=0; i<request.options.length; i++){
            $(".question-items").append("<li id='"+request.options[i]+"'>"+request.options[i]+"</li>");
        }
        
    }
};

var SantaModel = {
    
    requests : [],
    
    currentQuestion : 0,
    
    currentAnswer : "",
    
    punti : 0,
  
  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
   init : function(list){
       $(".question-items").click(function(){
           alert($(this).children().attr("id"));
            if(SantaModel.pack($(this).children().text())==1){
                alert("right");
                punti+=1;
            }
       });
       this.requests = list;
   },
  
   /* It moves "current" to the next request */
   next : function (){
   },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function () {
       SantaModel.currentAnswer = (this.requests[this.currentQuestion]).answer;
       return this.requests[this.currentQuestion];
   },  
    
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
   pack : function(item) {
       if(item == SantaModel.currentAnswer){
            return 1;
       } else {
            return 0;   
       }
   }      
  
};

var SantaController = {
    init : function(){
        SantaModel.init(requests);
        SantaView.init(SantaModel.getCurrentRequest());
    }
};

$(document).ready(function(){
    SantaController.init();
});
