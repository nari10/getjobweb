$().ready(function () {
    offer = [];

    /* 공고 목록 받아오기 */
    $.ajax({
        url: 'http://localhost:8787/getoffer.job',
        type: "GET",
        dataType: "json",
        async: false,
        success: function (data) {
            for (var i in data) {
                begin = new Date(data[i].begin_date);
                end = new Date(data[i].end_date);
                var offer_txt = data[i].title + "." + begin.getFullYear() + "." + (begin.getMonth() + 1) + "." + begin.getDate()
                    + "." + end.getFullYear() + "." + (end.getMonth() + 1) + "." + end.getDate() + "." + data[i].no;
                offer.push(offer_txt);
            }
        },
        error: function (request, status, error) {
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
    });

    drawCalendar();
    initDate();
    drawDays();
    drawnewDays(offer);
    $("#movePrevMonth").on("click", function () {
        movePrevMonth();
    });
    $("#moveNextMonth").on("click", function () {
        moveNextMonth();
    });

});

/* 공고 일정 그리는 함수 */
function drawnewDays(offer) {
    for (var i in offer) {
        var newoffer = offer[i].split('.');
        for (var i = firstDay.getDay(); i < firstDay.getDay() + lastDay.getDate(); i++) {
            //하루짜리 공고
            if (newoffer[2] == newoffer[5] && newoffer[3] == newoffer[6]) {
                $tdDay.eq(i + (firstDay.getDay() - 1)).append("<br>" + newoffer[0]);
            }
            //하루가 넘어가는 공고
            else {
                if (year == newoffer[1] && month == newoffer[2] && i - (firstDay.getDay() - 1) == newoffer[3]) {
                    $tdDay.eq(i).append("<br><span id=\"" + newoffer[7] + "\" onclick=\"add_offer(this.id);\" style=\"font-size:0.9em;\">[시]" + newoffer[0] + "</pan>");
                } if (year == newoffer[4] && month == newoffer[5] && i - (firstDay.getDay() - 1) == newoffer[6]) {
                    $tdDay.eq(i).append("<br><span id=\"" + newoffer[7] + "\" onclick=\"add_offer(this.id);\" style=\"font-size:0.9em;\">[마]" + newoffer[0]);
                }
            }
        }
    }
}

/* 클릭된 공고 마이 공고에 담기 */
function add_offer(offerno) {
    var id = "choi@naver.com"
    $.ajax({
        url: 'http://localhost:8787/addoffer.job?offerno='+offerno+"&id="+id,
        type: "GET",
        contentType: 'application/json',
        success: function (data) {
            if (data > 0) {
                alert("해당 공고를 마이 공고에 추가하였습니다.");
            } else {
                alert("해당 공고는 이미 마이 일정에 담겨있는 공고입니다.");
            }
        },
        error: function (request, status, error) {
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
    });
}


//달력 띄우기
//calendar 그리기
function drawCalendar() {
    var setTableHTML = "";
    setTableHTML += '<table class="calendar" style="width:1000px;">';
    setTableHTML += '<tr height="60" style="background-color:lightblue"><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>';
    for (var i = 0; i < 6; i++) {
        setTableHTML += '<tr height="100">';
        for (var j = 0; j < 7; j++) {
            setTableHTML += '<td style="width:120px; vertical-align:top">';
            setTableHTML += '    <div class="cal-day"></div>';
            setTableHTML += '    <div class="cal-schedule"></div>';
            setTableHTML += '</td>';
        }
        setTableHTML += '</tr>';
    }
    setTableHTML += '</table>';
    $("#cal_tab").html(setTableHTML);
}

//날짜 초기화
function initDate() {
    $tdDay = $("td div.cal-day")
    $tdSche = $("td div.cal-schedule")
    dayCount = 0;
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth() + 1;
    firstDay = new Date(year, month - 1, 1);
    lastDay = new Date(year, month, 0);
}

//calendar 날짜표시
function drawDays() {
    $("#cal_top_year").text(year);
    $("#cal_top_month").text(month);
    for (var i = firstDay.getDay(); i < firstDay.getDay() + lastDay.getDate(); i++) {
        $tdDay.eq(i).append(++dayCount + "<br>");
    }
    for (var i = 0; i < 42; i += 7) {
        $tdDay.eq(i).css("color", "red");
    }
    for (var i = 6; i < 42; i += 7) {
        $tdDay.eq(i).css("color", "blue");
    }
}

//calendar 월 이동
function movePrevMonth() {
    month--;
    if (month <= 0) {
        month = 12;
        year--;
    }
    if (month < 10) {
        month = String("0" + month);
    }
    getNewInfo();
}

function moveNextMonth() {
    month++;
    if (month > 12) {
        month = 1;
        year++;
    }
    if (month < 10) {
        month = String("0" + month);
    }
    getNewInfo();
}

//달력에 데이터 채우기
function getNewInfo() {
    for (var i = 0; i < 42; i++) {
        $tdDay.eq(i).text("");
    }
    dayCount = 0;
    firstDay = new Date(year, month - 1, 1);
    lastDay = new Date(year, month, 0);
    drawDays();
    drawnewDays(offer)
}