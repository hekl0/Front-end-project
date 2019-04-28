//create range slider
let distance_slider = $("#distance-slider").slider({}).data('slider');
let price_slider = $("#price-slider").slider({}).data('slider');
//distance_slider.getValue()

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

//function for dropdown
$("#dropdownMenu .dropdown-menu a").click(function(){
        $("#dropdownMenu .btn").text($(this).text());
        $("#dropdownMenu .btn").val($(this).text());
});