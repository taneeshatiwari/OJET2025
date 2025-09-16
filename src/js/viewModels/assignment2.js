
define(['../accUtils',"knockout"],
 function(accUtils,ko) {
    function Assignment2ViewModel() {
      var self=this;
      self.message=ko.observable("");
      self.clickHandler=()=>{
        if(self.message()==null || self.message()=="")
        {
          self.message("Button clicked");
        }
        else{
          self.message("");
        }
      }
    } return Assignment2ViewModel;
  }
);