$('#memberInfo').ready(function(){
	$.ajax({
		url: 'http://localhost:8787/memberInfo.job',
		type: "GET",
		dataType: "json",
		success: function(data){
			var target = $('#memberInfo');
			addLabelAndInput(target, '아이디', data.member.id);
			addLabelAndInput(target, '이름', data.member.name);
			addLabelAndInput(target, '구분', data.member.type);
			addLabelAndInput(target, '회원등급', data.member.auth);
			addLabelAndInput(target, '선택직무', data.jobs[0]);
			addLabelAndInput(target, '보유기술', data.skills[0]);
		}
	});
})

function addLabelAndInput(parent, text, value){
    var label = document.createElement("label");
    label.innerHTML = text;
    console.log(value);
    var input = document.createElement("input");
	input.setAttribute("value", value);
    var br = document.createElement("br");
    parent.append(label);
    parent.append(input);
    parent.append(br);
}
