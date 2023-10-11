function validateContactForm() {

   let fullName = document.forms["Contact-form"]["fullName"].value;

    if(isNaN(fullName)){
      return true;
    }else{
    
    return false;
}}

