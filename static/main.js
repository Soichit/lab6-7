$(function(){

    var jsonData={'result':[
        [1, 'http://www.johnscaffe.com/wp-content/uploads/2016/03/slider-Johns-Caffe-Pizza.jpg', 'pizza'],
        [2, 'http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg', 'burger'],
        [3, 'http://www.shopbelmontmarket.com/wp-content/uploads/page_img_sushi_01.jpg', 'sushi'],
        [4, 'http://www.venicecafechicago.com/wp-content/uploads/2014/07/venicea01.jpg', 'spaghetti'],
        [5, 'http://www.nutritious-food.com/wp-content/uploads/2015/12/breakfast-08.jpg', 'breakfast'],
        [6, 'http://www.drodd.com/images12/crepe-recipe11.jpg', 'crepe'],
        [7, 'http://previews.123rf.com/images/tratong/tratong1111/tratong111100284/11198621-Thai-food-Pad-thai-Stir-fry-noodles-with-shrimp-Stock-Photo.jpg', 'pad thai'],
        [8, 'http://twistcatering.com/wp-content/uploads/2013/09/steak-bbq.jpg', 'steak'],
        [9, 'https://media.timeout.com/images/100530501/image.jpg', 'bar food'],
        [10, 'https://images3.alphacoders.com/248/248457.jpg', 'tacos']
    ]};



    var jsonName;
    var jsonUrl;
    var index = 0;

    window.onload = function() {
        document.getElementById("dislike").onclick = disliked;
        document.getElementById("like").onclick = liked;
        getData();
    };

    $.get("/ping", function(data){
        if(data.error == "true"){
            $("#results").prepend("<div class='alert alert-danger'><strong>Error!</strong> "+ data.message +"</div>");
        }
    }, "json")

    /*
    $.get("getFoodStack", function(data){
        console.log(data);
        jsonData = data;
        jsonName = data.result[0][2];
        jsonUrl = data.result[0][1];
        console.log(name);
        document.getElementById("foodName").innerHTML = jsonName;
        document.getElementById("foodImage").src = jsonUrl;
    }, "json")
    */

    function getData() {
        jsonName = jsonData.result[index][2];
        jsonUrl = jsonData.result[index][1];
        document.getElementById("foodImage").src = jsonUrl;
    }




    function disliked() {
        document.getElementById("youMatched").innerHTML = "";
        index++;
        getData()
    }

    function liked() {
        document.getElementById("youMatched").innerHTML = "It's a Match! ...with " + jsonName;
    }


})





