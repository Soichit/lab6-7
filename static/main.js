$(function(){

    var jsonData;
    var jsonName;
    var jsonUrl;
    var index;

    window.onload = function() {
        document.getElementById("dislike").onclick = disliked;
        document.getElementById("like").onclick = liked;
    };

    $.get("/ping", function(data){
        if(data.error == "true"){
            $("#results").prepend("<div class='alert alert-danger'><strong>Error!</strong> "+ data.message +"</div>");
        }
    }, "json")

    $.get("getFoodStack", function(data){
        console.log(data);
        jsonData = data;
        jsonName = data.result[0][2];
        jsonUrl = data.result[0][1];
        console.log(name);
        document.getElementById("foodName").innerHTML = jsonName;
        document.getElementById("foodImage").src = jsonUrl;
    }, "json")

    function getData(i) {
        jsonName = data.result[i][2];
        jsonUrl = data.result[i][1];
    }




    function disliked() {
        console.log("DISLIKE");
    }

    function liked() {
        console.log("LIKE");
        document.getElementById("youMatched").innerHTML = "It's a Match! ...with ";
    }


})





