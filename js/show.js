let objArr = [];
$(document).ready(function(){
    let searchParams = new URLSearchParams(window.location.search);
    objArr = JSON.parse(searchParams.get('data'));
    console.log(objArr);

    var html="";
    var cardHtml= "";
    $('#table-body').html("");
    for(var i=0;i<objArr.length;i++){
        html = html + "<tr><th scope='row'>"+(i+1)+"</th><td>"+objArr[i].name+"</td><td>"+objArr[i].email+"</td><td>"+objArr[i].work+"</td></tr>";
        cardHtml = cardHtml + "<div class='card' style='width: 28rem;'><div class='card-body'><h5 class='card-title'>Candidate File Upload</h5><h6 class='card-subtitle mb-2 text-muted'>To be filled by candidate</h6><p class='card-text'><label for='basic-url' class='form-label'>Name: </label> "+objArr[i].name+"</p><p class='card-text'><label for='basic-url' class='form-label'>Email: </label> "+objArr[i].email+"</p><p class='card-text'> <label for='basic-url' class='form-label'>Work: </label> "+objArr[i].work+"</p><label for='basic-url' class='form-label'>File: </label><input type='file' id='fileUpload"+i+"' class='form-control' aria-label='file example' required></div></div>";
    }
    $('#table-body').append(html);
    $('.space').append(cardHtml);
});

$('#finalSubmit').click(function(){
    for(var i=0;i<objArr.length;i++){
        if($("#fileUpload"+i).get(0).files.length == 0) {
            alert("Please upload all files");
        }else{
            alert("Submitted Successfully");
        }

    }
});
