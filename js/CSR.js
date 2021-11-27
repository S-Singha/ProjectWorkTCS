
var obj={};
var objArr=[];
document.cookie = [];

$("#candidate-selection").change(function () {
  var end = this.value;
  console.log("end:"+end);
  if(end !="Select Candidates"){
    $( ".card-body" ).removeClass( "hide" );
  }else{
    $( ".card-body" ).addClass( "hide" );
  }
});

$( "#profession-form" ).submit(function( event ) {
  if($('#email').value != "" || $('work').value != ""){
      console.log("passed");
      if(!duplicateSelectionCheck()){
        $('.modal-body').html("<p>Candidate already selected</p>");
        $('#myModal').modal('show');
      }else{  
        buildObj();
        paintTable();
      }
      $("#candidate-selection").val("select");
      $("#email").val("");
      $("#work").val("");
      $( ".card-body" ).addClass( "hide" );
  }
  event. preventDefault();
});

function buildObj(){
  obj={};
  obj["name"] = $("#candidate-selection").val();
  obj["email"] = $('#email').val();
  obj["work"] = $('#work').val();
  objArr.push(obj);
  console.log('objArr:'+ JSON.stringify(objArr));
}
function duplicateSelectionCheck(){
  if( objArr.length > 0){
    for(var i = 0; i < objArr.length; i++) {
      if(objArr[i].name === $("#candidate-selection").val()){
          return false;
      }
    } 
  }
  return true;
}
function deleteEvent(data){
    console.log(data);
    for(var i = 0; i < objArr.length; i++) {
        if(objArr[i].name === data){
            objArr.splice(i, 1);
        }
    }
    console.log('objArr:'+ JSON.stringify(objArr));
    paintTable();
}
function paintTable(){
  var html="";
  $('#table-body').html("");
  for(var i=0;i<objArr.length;i++){
    html = html + "<tr><th scope='row'>"+(i+1)+"</th><td>"+objArr[i].name+"</td><td>"+objArr[i].email+"</td><td>"+objArr[i].work+"</td><td><button type='button' id='deletebtn' class='btn btn-danger btn-sm' onclick='deleteEvent(`"+objArr[i].name+"`)' data-button='"+objArr[i].name+"'>Delete</button></td></tr>";
  }
  $('#table-body').append(html);
}
$("#continue").click(function() {
  if( objArr.length == 0){
    $('.modal-body').html("<p>Please select some candidates.</p>");
    $('#myModal').modal('show');
  }else{
    $(location).attr('href','show.html?data='+ JSON.stringify(objArr));
  }
});


