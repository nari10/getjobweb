<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>로그인 페이지</h2>
	<form action="/loginRequested.job" method="GET">
		<label for="id">아이디</label><input type="text" name="id" value="kim@naver.com"/>	<br />
		<label for="password">패스워드</label><input type="text" name="password" value="aaaaa" />	
		<button type="submit">로그인</button>
	</form>
	<div><a href="/signupRequested.job">회원가입</a></div>
</body>
</html>