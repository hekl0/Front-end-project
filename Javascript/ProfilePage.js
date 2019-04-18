YUI().use('calendar', function (Y) {
    var calendar = new Y.Calendar({
            contentBox: "#mycalendar",
            height: '300px',
            width: '400px',
            showPrevMonth: true,
            showNextMonth: true,
            date: new Date(),
            selectionMode: "single",
    });
    calendar.render();
    $(".yui3-widget").addClass("mx-auto");

    calendar.selectDates(new Date());

    let lastSelectedDate = new Date();
    calendar.on("dateClick", function (e) {
            let temp = e.date;
            calendar.selectDates(getDates(lastSelectedDate, e.date));
            lastSelectedDate = temp;
    });
});

function getDates(startDate, stopDate) {
    if (startDate > stopDate) {
            let temp = startDate;
            startDate = stopDate;
            stopDate = temp;
    }
    var dateArray = new Array();
    var currentDate = new Date(startDate);
    while (currentDate <= stopDate) {
            dateArray.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
}


function fillInProfilePage(user) {
        var avatar = document.getElementById("profileAvatar");
        avatar.setAttribute("src",user.img);
        var name = document.getElementById("profileName");
        name.appendChild(document.createTextNode(user.name));
        var title = document.getElementById("profileTitle");
        title.appendChild(document.createTextNode(user.title));
        var location = document.getElementById("profileLocation");
        location.appendChild(document.createTextNode(user.location));  
        var messageButton = document.getElementById("messageButton");
        messageButton.appendChild(document.createTextNode("Message " +  user.name ));
        var requestButton = document.getElementById("requestButton");
        requestButton.appendChild(document.createTextNode("Request a booking" ));
}

fillInProfilePage({
        img: "Image/me.jpg",
        name: "Kevin",
        star: 5,
        title: "Software Engineer",
        location: "Galesburg, IL 61401",
        desciprtion: "Your most trusted local house sitter",
        price: "100"
});
