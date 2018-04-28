/*
 * Add the contents of your index.js file from Assignment 3 here to see the
 * interactions you implemented.
 */

 var modal_backdrop = document.querySelector('#modal-backdrop');
  var create_twit_modal = document.querySelector('#create-twit-modal');
  var create_twit_button = document.querySelector('#create-twit-button');
  var twit_container = document.querySelector('.twit-container');
  var twit_text_input = document.querySelector('#twit-text-input');
  var twit_author_input = document.querySelector('#twit-attribution-input');

  create_twit_button.addEventListener('click',function(){
    create_twit_modal.classList.remove("hidden");
    modal_backdrop.classList.remove("hidden");
  });

  var modal_cancel_button = document.querySelector('.modal-cancel-button');
  modal_cancel_button.addEventListener('click',function(){
    create_twit_modal.classList.add("hidden");
    modal_backdrop.classList.add("hidden");
    twit_text_input.value = "";
    twit_author_input.value = "";
  });

  var modal_close_button = document.querySelector('.modal-close-button');
  modal_close_button.addEventListener('click',function(){
    create_twit_modal.classList.add("hidden");
    modal_backdrop.classList.add("hidden");
    twit_text_input.value = "";
    twit_author_input.value = "";
  });


 var add_twit = function() {
   var new_twit = document.createElement('article');
   var twit_text_input = document.querySelector('#twit-text-input');
   var twit_author_input = document.querySelector('#twit-attribution-input');
   if(twit_author_input.value == "" | twit_text_input.value == ""){
     alert("INVALID INPUT, author/text left blank!");
     return;
   }
   new_twit.classList.add('twit');
   new_twit.innerHTML =   '<div class="twit-icon"> \
         <i class="fa fa-bullhorn"></i> \
       </div> \
       <div class="twit-content"> \
         <p class="twit-text"> \
         </p> \
         <p class="twit-attribution"> \
           <a href="#"></a> \
         </p> \
       </div>';
   new_twit.querySelector('.twit-text').textContent = twit_text_input.value;
   new_twit.querySelector('a').textContent = twit_author_input.value;

   twit_container.appendChild(new_twit);

   create_twit_modal.classList.add("hidden");
   modal_backdrop.classList.add("hidden");
 }

 document.querySelector('.modal-accept-button').addEventListener('click',add_twit);


 var search = function(){
   var target = document.querySelector('#navbar-search-input').value;
   var authors = twit_container.getElementsByTagName('a');
   var text = twit_container.getElementsByClassName('twit-text');
   var continers = twit_container.getElementsByClassName('twit');

   for(var i = 0; i < authors.length; i++){
     if(!authors[i].textContent.toLowerCase().includes(target.toLowerCase())){
       continers[i].classList.add("hidden");
       var text_words = text[i].textContent.split("\\s+");
       for(var j = 0; j < text_words.length; j++){
         if(text_words[j].toLowerCase().includes(target.toLowerCase())){
           continers[i].classList.remove("hidden");
         }
       }
     }
   }

 }

 document.querySelector('#navbar-search-button').addEventListener('click', search);
