function previewBeforeUpload(id){
  document.querySelector("#"+id).addEventListener("change",function(e){
    if(e.target.files.length == 0){
      return;
    }
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    document.querySelector("#"+id+"-preview div").innerText = file.name;
    document.querySelector("#"+id+"-preview img").src = url;
  });
}

previewBeforeUpload("file-1");
previewBeforeUpload("file-2");
previewBeforeUpload("file-3");
previewBeforeUpload("file-4");

  /*********** login */


  $('.forgot').click(function(){
    $('#forgot').addClass('show-page');
    $('#login').removeClass('show-page');
    
  });
  
  $('.sign').click(function(){
    $('#login').addClass('show-page');
    $('#forgot').removeClass('show-page');
  });
  
    
   