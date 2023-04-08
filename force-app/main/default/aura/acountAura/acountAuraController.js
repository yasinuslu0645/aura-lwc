({
    getAccHandler : function(component, event, helper) {

        let action = component.get("c.getAccount"); //get'in icine class'taki methodun ismi yazilir.

        action.setCallback(this,function(response){
            let state = response.getState(); // gelen cevabi yerel bir degiskene atadik
            if(state==='SUCCESS'){ //SUCCESS gelen cevabin icinde vardir.
                component.set("v.acc",response.getReturnValue());
            }else{
                console.log("Islem basarisiz");
            }
        });
        $A.enqueueAction(action);
    },


    onchangeHandler : function(component, event, helper) {

        let action = component.get("c.getAccountParams"); //get'in icine class'taki methodun ismi yazilir.

        action.setParams({accName:event.getParam("value")}); //yeni bilgi: input'a girilen value'yu accName'e yani class'a gonderdik

        action.setCallback(this,function(response){
            let state = response.getState(); // gelen cevabi yerel bir degiskene atadik
            if(state==='SUCCESS'){ //SUCCESS gelen cevabin icinde vardir.
                component.set("v.acc",response.getReturnValue());
            }else{
                console.log("Islem basarisiz");
            }
        });
        $A.enqueueAction(action);
    }
})