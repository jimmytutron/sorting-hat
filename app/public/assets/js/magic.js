function random() {
    return Math.floor(Math.random() * 5) + 1;
};

var questions = [
"Harry Potter Lorem Ipsum Question 1",
"Lorem Ipsum Question 2",
"Lorem Ipsum Question 3",
"Lorem Ipsum Question 4",
"Lorem Ipsum Question 5",
"Lorem Ipsum Question 6",
"Lorem Ipsum Question 7",
"Lorem Ipsum Question 8",
"Lorem Ipsum Question 9",
"Lorem Ipsum Question 10"
]

for (var i = 0; i < 10; i++){
    $("#questions").append(`<div class="row justify-content-center mt-3">
                            <div class="col-12 col-md-8 text-center">
                                <p class="question">${questions[i]}</p>
                                <input id="q${+ i+1}" type="text"
                                data-provide="slider"
                                data-slider-ticks="[1,2,3,4,5]"
                                data-slider-ticks-labels='["", "", "", "", ""]'
                                data-slider-min="1"
                                data-slider-max="5"
                                data-slider-step="1"
                                data-slider-value="3"
                                data-slider-tooltip="hide"/>
                            </div>
                        </div>
                        `)
}

$("#submit").on("click", function() {
    let test1 = {
        name: "test2",
        scores: [
            parseInt($("#q1").val()),
            parseInt($("#q2").val()),
            parseInt($("#q3").val()),
            parseInt($("#q4").val()),
            parseInt($("#q5").val()),
            parseInt($("#q6").val()),
            parseInt($("#q7").val()),
            parseInt($("#q8").val()),
            parseInt($("#q9").val()),
            parseInt($("#q10").val())
        ]
    }

    $.post("/api/students", test1, function(response) {
        console.log(response);
        $("#testbox").append(`
        <h2 class="text-center">You belong in...</h2>
        <h1 class="text-center">${response.name}</h1>
        `);
    })
    $.post("/api/match", test1, function(response) {
        console.log(response);
        $("#testbox").append(`
        <h2 class="text-center">Your roomate is: ${response.name}</h2>
        `);
    })

});
$("#test").on("click", function() {
    let test2 = {
        name: "Test" + i,
        scores: [
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random()
        ]
    }
    i++;
    $.post("/api/students", test2, function(response) {
        console.log(response);
        $("#testbox").append(`
        <h2 class="text-center">You belong in...</h2>
        <h1 class="text-center">${response.name}</h1>
        `);
    })


    $.post("api/match", test2, function(response) {
        console.log(response);
        $("#testbox").append(`
        <h2 class="text-center">Your Roomate is...</h2>
        <h1 class="text-center">${response.name}</h1>
        `);
    })
});