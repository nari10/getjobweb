<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<title>Document</title>
<script src="../../static/calendar/index.js"></script>
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
					<li><a href="login.job">로그인/회원가입</a></li>
				</ul>
			</div>
			<!--/.nav-collapse -->
		</div>
	</nav>
	<!-- 헤더 -->
	<div id="header" style="height: 60px; align-content: center;">
		<h2>캘린더 홈</h2>
	</div>
	<!-- 바디 -->
	<!-- 자격증 목록 띄우는 곳 -->
	<div id="certificate"
		style="width: 250px; height: 280px; background-color: white; margin-left: 130px; margin-top: 50px; position: absolute;">
		<p id="p_01"
			style="height: 35px; background-color: #CEE3F6; margin: 0;">
			<b>자격증 목록</b>
		</p>
		<select id="certificate_list" size="20"
			style="height: 230px; width: 250px;">
		</select>
	</div>
	<!-- 클릭된 자격증 시험일정 띄우는 곳 -->
	<div id="test_schedule"
		style="width: 250px; height: 280px; background-color: #E0E0F8; margin-left: 130px; margin-top: 320px; position: absolute;">
	</div>
	<div id="calendar"
		style="margin-left: 400px; width: 500px; height: 600px;">
		<div class="cal_top" style="width: 500px;">
			<a href="#" id="movePrevMonth"><span id="prevMonth"
				class="cal_tit">&lt;</span></a> <span id="cal_top_year"></span> <span
				id="cal_top_month"></span> <a href="#" id="moveNextMonth"><span
				id="nextMonth" class="cal_tit">&gt;</span></a>
		</div>
		<div id="cal_tab" class="cal" style="width: 500px;"></div>
	</div>
</body>
</html>