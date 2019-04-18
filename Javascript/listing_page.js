//create range slider
$("#distance-slider").slider({});
$("#price-slider").slider({});

//create calendar
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
        let lastSelectedDateArr = [];
        calendar.on("dateClick", function (e) {
                console.log(e.date);
                let temp = e.date;
                calendar.deselectDates(lastSelectedDateArr);
                calendar.selectDates(getDates(lastSelectedDate, e.date));
                lastSelectedDateArr = getDates(lastSelectedDate, e.date);
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

//create list item
let numItems = 0;
function createListingItem(user) {
        numItems++;
        $("#list").append(
            '<div class="card px-3 mb-3 hoverable" id="item' + numItems +'">' +
                '<div class="row p-3">' +
                    '<img class="rounded-circle m-3" id="profilePic" src="' + user.img + '" height="180px" width="180px"></img>' +
                    '<div class="ml-5 col">' +
                        '<div class="row">' +
                            '<h1 id="profileName" class="mt-3" font-size ="150%">' + user.name + '</h1>' +
                            '<div class="mt-2 ml-3 mt-4">' +
                                '<span class="fa fa-star ' + ((user.star >= 1)?"checked":"") + '"></span>' +
                                '<span class="fa fa-star ' + ((user.star >= 2)?"checked":"") + '"></span>' +
                                '<span class="fa fa-star ' + ((user.star >= 3)?"checked":"") + '"></span>' +
                                '<span class="fa fa-star ' + ((user.star >= 4)?"checked":"") + '"></span>' +
                                '<span class="fa fa-star ' + ((user.star >= 5)?"checked":"") + '"></span>' +
                            '</div>' +
                        '</div>' +
                        '<span class="row my-1" id="title">' + user.title + '</span>' +
                        '<span class="row my-1" id="location">' + user.location + '</span>' +
                        '<span class="row mt-3 font-italic" id="description">"' + user.desciprtion + '"</span>' +
                    '</div>' +   
                    '<span class="my-auto mr-3 font-weight-bold price-tag">$' + user.price + '/day</span>' +
                '</div>' + 
            '</div>');
}

createListingItem({
        img: "Image/me.jpg",
        name: "Kevin",
        star: 5,
        title: "Software Engineer",
        location: "Galesburg, IL 61401",
        desciprtion: "Your most trusted local house sitter",
        price: "100"
});

createListingItem({
        img: "Image/me.jpg",
        name: "niveK",
        star: 1,
        title: "Jobless",
        location: "Somewhere",
        desciprtion: "Testing",
        price: "25"
});