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

        let selectedDateArr = [new Date()];
        calendar.on("dateClick", function (e) {
                let lastSelectedDateArr = selectedDateArr.slice();
                let dateClicked = new Date(e.date);
                let index = findIndexOfDate(dateClicked, selectedDateArr);
                if (index >= 0) 
                        selectedDateArr.splice(index, 1);
                else
                        selectedDateArr.push(dateClicked);
                calendar.deselectDates(lastSelectedDateArr);
                calendar.selectDates(selectedDateArr);
        });
});

function findIndexOfDate(date, arr) {
        for (let i = 0; i < arr.length; i++)
                if (arr[i].getDate() == date.getDate() && arr[i].getMonth() == date.getMonth() && arr[i].getFullYear() == date.getFullYear())
                        return i;
        return -1;
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
