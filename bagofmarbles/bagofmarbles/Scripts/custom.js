
let addToList = (data) => {
    $("#marbleList")
        .append($("<li>").html(data.color));
}

let talkToServer = () => {

    let newMarble = {
        color: $("#newMarbleColor").val()
    };

    $.ajax({
        url: '/api/marbles',
        dataType: "json",
        contentType: "application/jason",
        data: JSON.stringify(newMarble),
        type: "POST",
        success: (data) => {
            addToList(data);

        },
        error: (data) => {
            console.log("oops", data)
        },
        complete: (data) => {
            console.log("done", data);
        }
    });
}

let loadMarbles = () => {
    //pull marbles from api
    //add to the list
    $.ajax({
        url: "/api/marbles",
        dataType: "json",
        success: (data) => {
            data.map((item) => { addToList(item);})

        }
    })
}

loadMarbles();