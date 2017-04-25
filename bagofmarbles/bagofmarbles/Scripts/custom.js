let doSomething = () => {
    let _fullName = $("name").val();
    $("#welcomeMessage").html(_fullName);
}

let talkToServer = () => {

    let newMarble = {
        name: $("#newMarble").val()
    };

    $.ajax({
        url: '/api/marbles',
        dataType: "json",
        contentType: "application/jason",
        data: JSON.stringify(newMarble),
        type: "POST",
        success: (data) => {
            $("#marbleList").append($("<li>").html(data.Name));
        },
        error: (data) => {
            console.log("oops", data)
        },
        complete: (data) => {
            console.log("done", data);
        }
    });
}