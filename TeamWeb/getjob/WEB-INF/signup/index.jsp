<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<script src="../../static/signup/index.js"></script>
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
					<li><a href="member.job">마이페이지</a></li>
<!-- 					<li><a href="signup.job">로그인/회원가입</a></li>
 -->				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>
	<form style="margin: 75px 0px 0px 50px;" action="/signupSubmitted.job">
		<label for="id">아이디</label><input type="text" name="id" /><br /> <label
			for="password">비밀번호</label><input type="text" name="password" /><br />
		<label for="name">이름</label><input type="text" name="name" /><br /> <label
			for="type" hidden="hidden">유형</label><input type="text" name="type"
			value="member" hidden="hidden" /><br /> <input type="submit"
			value="확인" />
	</form>
</body>
</html>