/*
  * Copyright 2018 Study Buddies
  *  Notes [Sachin-3/22/2018]
  *  @Node class is used to represent checklist node
  *  Code is divided into different namespaces.
  *  SBP.Enums - stores fixed enums.
  *  SBP.Consts - stores constants.
  *  SBP.Data - stores common data required for page.
  *  SBP.UI - code for top level UI related calls. <try-catch layer>
  *  SBP.UIHelper - helper code for UI layer. Only called from SBP.UI
  *  SBP.Events - code to bind events and handle callbacks. <try-catch layer>
  *  SBP.EventsHelper - helper code for Event layer.  Only called from SBP.Events
  *  SBP.Helper - Generic helper code which do not belong to UI and Events layer
  *  localStorage api's are used for client side storage.
 */
$(function(){
    $(".button").click(function(e){
        e.preventDefault();
        
       sessionStorage.setItem("username",$("#user-name").val());
       sessionStorage.setItem("email",$("#user-email").val()); 
         $("body").load('study-buddies-spa.html', function(responseText, textStatus, xhr) {
            console.log("the main page loads? "+textStatus); // see what the response status is
        }); 
    });
});


