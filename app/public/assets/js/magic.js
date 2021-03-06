$("#resubmit").hide();
$("#after").hide();

let questions = [
"1. I see myself as critical, quarrelsome",
"2. I do only the minimum amount of work needed to get by",
"3. I have used deceit or lied to get my way",
"4. When working, I often set ambitious goals for myself",
"5. I tend to face my fears, and challenge them head on",
"6. I see myself as sympathetic and warm to others' troubles",
"7. I often check my work over repeatedly to find any mistakes",
"8. I will do things even though they might seem dangerous",
"9. I tend to exploit others towards my own end",
"10. I don't want people to treat me as though I'm superior to them"
]

for (let i = 0; i < 10; i++){
    $("#questions").append(`<div class="row justify-content-center mt-3">
                            <div class="col-12 col-md-8 text-center">
                                <p class="question">${questions[i]}</p>
                                <input id="q${+ i+1}" type="text"
                                data-provide="slider"
                                data-slider-ticks="[1,2,3,4,5]"
                                data-slider-ticks-labels='["&#x1F624;", "", "", "", "&#x1F601;"]'
                                data-slider-min="1"
                                data-slider-max="5"
                                data-slider-step="1"
                                data-slider-value="3"
                                data-slider-tooltip="hide"/>
                            </div>
                        </div>
                        `)
}

$("#submit").one("click", () => {
    let userScores = {
        name: "user",
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

    $.post("/api/students", userScores, response => {
        console.log(response);
        //WILL UPDATE WITH REAL DESCRIPTIONS --------
        $("#house-modal").html(`
                <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <img class="centerimg img-fluid" src="${response.crest}">
            </div>
            <div class="col-12 col-md-6">
                <h1 class="text-center ${response.class}">${response.name}</h1>
                <p class="txtcolor house-info">${response.info}</p>
            </div>
        </div>
        `);
    });
    $.post("/api/match", userScores, response => {
        console.log(response);
        //WORK-IN-PROGRESS will add more students and match a roomate -------
        // $("#house-modal").append(`
        //  <div class="row justify-content-center">
        //              <div class="col-12 col-md-12 col-lg-6">
        //         <h1 class="text-center txtcolor">It seems you're rooming with ${response.name}</h1>
        //     </div>
        //     <div class="col-12 col-md-12 col-lg-6">
        //         <img class="centerimg img-fluid" src="https://media.giphy.com/media/lCqSKje3aPUuQ/giphy.gif">
        //     </div>

        // </div>
        // `);
    })

    $("#before").hide();
    $("#resubmit").show();
    $("#after").show();

});

$("#resubmit").on("click",() => {
    console.log("hello");
    window.scrollTo(0, 0);
    location.reload();

});
