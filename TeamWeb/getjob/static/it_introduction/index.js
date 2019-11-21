$("#job").ready(function () {
    $.ajax({
        url: "http://127.1.0.0:8787/get_job_list.job",
        type: "GET",
        datatype: "json",
        success: function (data) {
            var ul = document.createElement("ul");
            for (var i in data) {
                var li = document.createElement("li");
                li.innerHTML = data[i].name;
                li.setAttribute("id", data[i].name);
                li.addEventListener("click", handler);
                ul.append(li);
            }
            $('#job').append(ul);
        }
    });
});
function handler(e) {
    var id = e.target.id;
    console.log("http://127.1.0.0:8787/get_skill_list.job?jobname=" + id);
    $('#skill').children().remove();
    $.ajax({
        url: "http://127.1.0.0:8787/get_skill_list.job?jobname=" + id,
        type: "GET",
        datatype: "json",
        success: function (data) {
            var ul = document.createElement("ul");
            for (var i in data) {
                var li = document.createElement("li");
                li.innerHTML = data[i].name;
                li.setAttribute("id", data[i].name);
                ul.append(li);
            }
            $('#skill').append(ul);
        }
    });
    $.ajax({
        url: "http://127.1.0.0:8787/get_job_content.job?name=" + id,
        type: "GET",
        datatype: "json",
        success: function (data) {
            $('#job_descript').children().remove();
            var p = document.createElement("p");
            p.innerHTML = data.descript;
            $('#job_descript').append(p);
        }
    });
}
