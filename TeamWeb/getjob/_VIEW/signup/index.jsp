<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 페이지</title>
</head>
<body>
	<h2>회원가입 페이지</h2>
	<form action="/signup.job">
		<label for="id">아이디</label><input type="text" name="id"/><br />
		<label for="password">비밀번호</label><input type="text" name="password"/><br />
		<label for="name">이름</label><input type="text" name="name"/><br />
		<label for="type" hidden="hidden">유형</label><input type="text" name="type" value="member" hidden="hidden"/><br />
		<input type="submit" value="확인"/>	
	</form>			
</body>
</html>