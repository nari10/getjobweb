$().ready(function(){
	/* 자격증 리스트 받아와 띄우기 */
    $.ajax({
        url: 'http://localhost:8787/getcer.job',
        type: "GET",
        dataType: "json",
        success: function (data) {
            for (var i in data) {
                var option = `<option value= ${data[i].codeno}>${data[i].codename}</option>`;
                $('#certificate_list').append(option);
            }
        },
        error: function (request, status, error) {
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
    });

    //자격증 리스트에서 선택했을 때
    $('#certificate_list').click(function () {
        var codeno = $("#certificate_list option:selected").val();
        var form = { "codeno": codeno };
        $.ajax({
            url: 'http://localhost:8787/gettestschedule.job?codeno=' + codeno,
            type: "GET",
            dataType: "json",
            contentType: 'application/json',
            success: function (data) {
            	$('#test_title').text(data[0].cert_name + "의 시험일정은");
            	$('#test_schedule_list').children().remove();
            	var ul = document.createElement("ul");
                for (var i in data) {
                    var begin = getFormatDate(new Date(data[i].begin_date));
                    var end = getFormatDate(new Date(data[i].end_date));

                        var li = document.createElement("li");
                        li.innerHTML = `${data[i].section} : ${begin} ~ ${end}`;
                        li.setAttribute("id", i);
                        li.setAttribute("value",`${data[0].cert_name}.${begin}.${end}`);
                        li.addEventListener("click", handler);
                        ul.append(li);
                }
                $('#test_schedule_list').append(ul);
            },
            error: function (request, status, error) {
                console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    });
    
});

function handler(e) {
    var txt = e.target.getAttribute('value');
    var restxt = txt.split('.');
    
    var id = "kim@naver.com";
    var cert_name = restxt[0];
    var begin_date = restxt[1];
    var end_date = restxt[2];
    
    $.ajax({
        url: 'http://localhost:8787/addcertificate.job?id='+id+"&cert_name="+cert_name+
        "&begin_date="+begin_date+"&end_date="+end_date,
        type: "GET",
        datatype: "application/json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',  
        success: function (data) {
        	if (data > 0) {
                alert("해당 자격증 일정을 마이 자격증에 추가하였습니다.");
            } else {
                alert("해당 일정은 이미 마이 일정에 담겨있는 자격증입니다.");
            }
        }
    });
}

//날짜 이쁘게
function getFormatDate(date) {
    var year = date.getFullYear();		//yyyy
    var month = (1 + date.getMonth());		//M
    month = month >= 10 ? month : '0' + month;	//month 두자리로 저장
    var day = date.getDate();			//d
    day = day >= 10 ? day : '0' + day;		//day 두자리로 저장
    return year + '' + month + '' + day;
}
