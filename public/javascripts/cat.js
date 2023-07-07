
function getdata(){
$("#cat").change(function () {
   var selectElement = document.querySelector('#cat');
   var output = selectElement.options[selectElement.selectedIndex].value;
   // document.querySelector('.output').textContent = output;


    $.ajax({
        url:'/process/cat/',
        method:'post',
        async:'false',
        dataType:'json',
        data:{output},
        success:function(response){
             if(response.pcat){
                var pc=response.pcat[0].scname
                $('#scat').append('<option >'+pc+'</option>');
                function name() {
            
      
                    pc.forEach(pca => {
                      
      
       $('#scat').append('<option value='+pca[0].scname+'>'+pca[0].scname+'</option>');
      
   });  }
                //$('#scat').append('<option >error</option>');
                
                 if(response.pcat==undefined || response.pcat==null || response.pcat==''){
                   
                   
                 }else{
                  
               
                     //var url = url+data._id;
                     //index+=1;
        function name() {
            
      
                     response.pcat[0].forEach(pca => {
            
       
        $('#scat').append('<option value='+pca.pcat+'>'+pca.pcat+'</option>');
       
    });  }
               
             }
           }
        },
        error:function(response){
           // alert('user not found!');
            $('.x').append("<div class='invalid-feedback' style='display: block;'>Option not found!</div>");
        }
    });

})}

