Date.prototype.format = function (f) {
    if (!this.valueOf()) return " ";

    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};


String.prototype.string = function (len) { var s = '', i = 0; while (i++ < len) { s += this; } return s; };
String.prototype.zf = function (len) { return "0".string(len - this.length) + this; };
Number.prototype.zf = function (len) { return this.toString().zf(len); };


$('#offers').ready(function () {
    var promise = $.ajax({
        url: 'http://127.0.0.1:8787/getOffers.job',
        type: "GET",
        dataType: "json",
        success: function (data) {
            for (var i in data) {
                var target = document.createElement("tr");
                target.setAttribute("id", data[i].no);
                var e = document.createElement("td");
                e.innerHTML = data[i].no;
                target.append(e);
                var e = document.createElement("td");
                e.innerHTML = new Date(data[i].begin_date).format("yyyy-MM-dd");
                target.append(e);
                var e = document.createElement("td");
                e.innerHTML = new Date(data[i].end_date).format("yyyy-MM-dd");;
                target.append(e);
                var e = document.createElement("td");
                e.innerHTML = data[i].title;
                target.append(e);
                var e = document.createElement("td");
                e.innerHTML = data[i].content;
                target.append(e);
                var e = document.createElement("td");
                e.innerHTML = data[i].corporate_id;
                target.addEventListener('click', handler);
                target.append(e);
                $('#offers').append(target);
            }
        },
        error: function (request, status, error) {
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
    });
});

function addLabelAndInput(parent, name, varname, hidden){
    var label = document.createElement("label");
    label.innerHTML = name;
    var input = document.createElement("input");
    var br = document.createElement("br");
    parent.append(label);
    if (hidden == "true"){
        label.setAttribute("hidden", "true");
        input.setAttribute("hidden", "true");
    } 
    if (varname == "corporate"){
        input.value = "SAMSUNG";
        var readonly = document.createAttribute("readonly");
        input.setAttribute("id", "read-only");
    }
    if (varname == "no"){
        input.value = 105;
    }
    if (varname == "begin_date"){
        input.value = new Date().format("yyyy-MM-dd");
    }
    if (varname == "end_date"){
        input.value = new Date().format("yyyy-MM-dd");
    }
    parent.append(input);
    parent.append(br);
}

$('#new-offer').ready(function () {
    $('#new-offer').on("click", function (e) {
        $('#offer-table').children().remove();
        addLabelAndInput($('#offer-table'), '번호', 'no');
        addLabelAndInput($('#offer-table'), '시작일', 'begin_date');
        addLabelAndInput($('#offer-table'), '마감일', 'end_date');
        addLabelAndInput($('#offer-table'), '제목', 'title');
        addLabelAndInput($('#offer-table'), '내용', 'content');
        addLabelAndInput($('#offer-table'), '기업', 'corporate');
        addLabelAndInput($('#offer-table'), '기업명', 'corporate_id', "true");
        var button = document.createElement("button");
        button.innerHTML = "확인";
        $('#offer-table').append(button);
    })
});

function handler(e) {
    var promise =  $.ajax({
        url: 'http://127.0.0.1:8787/offerDetail.job?offer_no=' + e.target.parentNode.id,
        type: "GET",
        dataType: "json",
        success: function (data) {
            var target = $('#offer-table');
            target.children().remove();
            var header = document.createElement("tr");
            for (var i = 0; i < 6; i++) {
                header.append(document.createElement("th"));
            }
            header.childNodes[0].innerHTML = "번호";
            header.childNodes[1].innerHTML = "시작일";
            header.childNodes[2].innerHTML = "마감일";
            header.childNodes[3].innerHTML = "제목";
            header.childNodes[4].innerHTML = "내용";
            header.childNodes[5].innerHTML = "기업명";
            target.append(header);

            var tr = document.createElement("tr");
            var e = document.createElement("td");
            e.innerHTML = data.offer.no;
            tr.append(e);
            var e = document.createElement("td");
            e.innerHTML = new Date(data.offer.begin_date).format("yyyy-MM-dd");
            tr.append(e);
            var e = document.createElement("td");
            e.innerHTML = new Date(data.offer.end_date).format("yyyy-MM-dd");;
            tr.append(e);
            var e = document.createElement("td");
            e.innerHTML = data.offer.title;
            tr.append(e);
            var e = document.createElement("td");
            e.innerHTML = data.offer.content;
            tr.append(e);
            var e = document.createElement("td");
            e.innerHTML = data.offer.corporate_id;
            tr.append(e);
            var button = document.createElement("button");
            button.innerHTML = "변경하기";
            button.setAttribute("id", "update")
            button.addEventListener("click", requestPage)
            target.parent().append(button);
            
            target.append(tr);
        }
    }); 
    promise.then(go);
}

function requestPage(event){
//	console.log(event)
	window.location.href = 'http://localhost:8787/offer_update.job?offer_no=101'
}


function go () {
    $("#offer-table").each(function () {
        var $this = $(this);
        var newrows = [];
        $this.find("tr").each(function () {
            var i = 0;
            $(this).find("td,th").each(function () {
                i++;
                if (newrows[i] === undefined) {
                    newrows[i] = $("<tr></tr>");
                }
                newrows[i].append($(this));
            });
        });
        $this.find("tr").remove();
        $.each(newrows, function () {
            $this.append(this);
        });
    });
}