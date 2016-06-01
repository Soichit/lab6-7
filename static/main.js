$(function(){
    $.get("/ping", function(data){
        if(data.error == "true"){
            $("#results").prepend("<div class='alert alert-danger'><strong>Error!</strong> "+ data.message +"</div>");
        }
    }, "json")

    $.get("/query1", function(data){
        //console.log(data);
        //$("#firstQuery").append(data);
    }, "html")

    $.get("/query2", function(data){
        console.log(data);

        var name = data.result[0][2];
        var url = data.result[0][1];
        console.log(name);


        document.getElementById("foodName").innerHTML = name;
        document.getElementById("foodImage").src = url;


    }, "json")

    $.get("/query3", function(data){
        $("#thirdQuery").append(data);
    }, "html")

})
