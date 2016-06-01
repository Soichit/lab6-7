$(function(){
    $.get("/ping", function(data){
        if(data.error == "true"){
            $("#results").prepend("<div class='alert alert-danger'><strong>Error!</strong> "+ data.message +"</div>");
        }
    }, "json")

    $.get("getFoodStack", function(data){
        console.log(data);

        var name = data.result[0][2];
        var url = data.result[0][1];
        console.log(name);


        document.getElementById("foodName").innerHTML = name;
        document.getElementById("foodImage").src = url;


    }, "json")

})
