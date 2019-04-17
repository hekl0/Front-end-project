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

//create list item