<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#navbar" aria-expanded="false"
					aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Get job</a>
			</div>
			<div id="navbar" class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li><a href="it_introduction.job">It 소개</a></li>
					<li><a href="offer.job">채용공고</a></li>
					<li><a href="calendar.job">캘린더</a></li>
<!-- 					<li><a href="member.job">마이페이지</a></li>
 -->					<li><a href="signup.job">회원가입</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>
	<div id="login" style="margin:200px 0px 0px 200px">
		<form action="/loginRequested.job" method="GET">
			<label for="id">아이디</label><input type="text" name="id"
				value="kim@naver.com" /> <br /> <label for="password">패스워드</label><input
				type="text" name="password" value="aaaaa" />
			<button type="submit">로그인</button>
		</form>
	</div>
	<div> <a style="margin: 0px 0px 0px 200px" href="/signup.job">회원가입</a> </div>
</body>
</html>