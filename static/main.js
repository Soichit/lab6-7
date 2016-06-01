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
        obj = JSON.parse(data);
        console.log(obj);
        $("#foodName").innerHTML = obj.result[0];
        console.log(obj.result[0]);

        var txt = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';
        console.log(txt);


        $("#secondQuery").append(data);
    }, "html")

    $.get("/query3", function(data){
        $("#thirdQuery").append(data);
    }, "html")

})
