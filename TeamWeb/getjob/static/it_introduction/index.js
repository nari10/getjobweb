$("#job").ready(function () {
    $.ajax({
        url: "http://127.1.0.0:8787/get_job_list.job",
        type: "GET",
        datatype: "json",
        success: function (data) {
            for (var i in data) {
                var li = document.createElement("li");
                li.innerHTML = data[i].name;
                li.setAttribute("id", data[i].name);
                li.addEventListener("click", handler);
                $('#job').append(li);
            }
        }
    });
});

let sklist = [];

function handler(e) {
    var id = e.target.id;
    $('#skill').children().remove();
    $.ajax({
        url: "http://127.1.0.0:8787/get_skill_list.job?jobname=" + id,
        type: "GET",
        datatype: "json",
        success: function (data) {
        	sklist=[];
            for (var i in data) {
            	console.log(data[i].name, data[i].descript)
            	var div = document.createElement("div");
            	div.setAttribute("class","span4");
            	div.setAttribute("id",data[i].name);
            	var h2 = document.createElement("h2");
            	var textNode = document.createTextNode(data[i].name);
            	h2.appendChild(textNode);
            	
            	var p1 = document.createElement("p");
            	p1.setAttribute("class","span555");
            	var textNode2 = document.createTextNode(data[i].descript);
            	p1.appendChild(textNode2);
            	
            	var p2 = document.createElement("p");
            	p2.setAttribute("id",i);
            	var textNode3 = document.createTextNode("자세히 보기");
            	sklist.push(data[i].descript);
            	p2.addEventListener("click", handler2);
            	p2.appendChild(textNode3);
            	
            	div.appendChild(h2);
            	div.appendChild(p1);
            	div.appendChild(p2);
            	
            	$('#skill').append(div);
            }
            $('#job_name').text(id);
        }
    });
    $.ajax({
        url: "http://127.1.0.0:8787/get_job_content.job?name=" + id,
        type: "GET",
        datatype: "json",
        success: function (data) {
            $('#job_descript').text(data.descript);
        }
    });
    $.ajax({
    	
    });
}

function handler2(e){
	var id = e.target.id;
	alert(sklist[id]);
}
