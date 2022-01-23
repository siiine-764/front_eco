$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});



// Get the modal 1
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}


// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
 }


// Get the modal 2
var modal1 = document.getElementById('myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var modalImg1 = document.getElementById("img02");
var captionText1 = document.getElementById("caption");
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    modalImg1.alt = this.alt;
    captionText1.innerHTML = this.alt;
}


// When the user clicks on <span> (x), close the modal
modal1.onclick = function() {
    img02.className += " out";
    setTimeout(function() {
       modal1.style.display = "none";
       img02.className = "modal-content1";
     }, 400);
 }



// Get the modal 1
var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');

var img4 = document.getElementById('myImg4');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption");
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    modalImg3.alt = this.alt;
    captionText3.innerHTML = this.alt;
}

img4.onclick = function(){
    modal3.style.display = "block";

    modalImg3.src = this.src;
    modalImg3.alt = this.alt;
    captionText3.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
modal3.onclick = function() {
    img03.className += " out";
    setTimeout(function() {
       modal3.style.display = "none";
       img03.className = "modal-content";
     }, 400);
 }


 /******** */
 const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});



$('.buy').click(function(){
  $('.bottom').addClass("clicked");
});

$('.remove').click(function(){
  $('.bottom').removeClass("clicked");
});


/* animation */
$(window).scroll(function() {
    $(".slide").each(function(){
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 800) {
        $(this).addClass("slide");
      }
    });
  });
