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
        //objString = JSON.parse(data);
        //console.log(objString);
        console.log(data.result[0]);
        var name = data.result[0][2];
        console.log(name);
        /*
        var json = JSON.stringify(eval("(" + objString.result[0] + ")"));
        console.log(json);
        console.log(json.Id);
        console.log(json.Name);
        */

        document.getElementById("foodName").innerHTML = name;
        

        var txt = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';
        obj2 = JSON.parse(txt);
        console.log(obj2);


        //$("#secondQuery").append(data);
    }, "json")

    $.get("/query3", function(data){
        $("#thirdQuery").append(data);
    }, "html")

})
