$(document).ready(function(){
   //scrolling smoothly
   $("#myNavbar a,#home a").on('click',function(event){
      if(this.hash!==""){
         event.preventDefault();
         var hash=this.hash;
         $('html,body').animate({
             scrollTop:$(hash).offset().top
         },800,function(){
            window.location.hash=hash;
         });
      }
  });

  //parallax
  $(document).scroll(function(){
      var scrollPos = $(document).scrollTop()+100;
     if(window.screen.height>736){
          if(scrollPos>=250){
              $('nav').addClass('bg');
              $('nav a').addClass('small');
              $('nav p').removeClass('movetext');
          }else{
              $('nav').removeClass('bg');
              $('nav a').removeClass('small');
              $('nav p').addClass('movetext');
          }
     }else{
              $('nav').addClass('bg');
              $('nav a').addClass('small');
              $('nav p').removeClass('movetext');
     }
  })

   wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});
   wow.init();
   $(function () {
      $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });
});
