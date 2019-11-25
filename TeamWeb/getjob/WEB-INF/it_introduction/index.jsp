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
<script src="../../static/it_introduction/index.js"></script>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../../static/it_introduction/boot2.css">
	<link rel="stylesheet" type="text/css" href="../../static/it_introduction/index.css">
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
	
	<div class="container-narrow">
	
	<div class="masthead">
        <h3 class="muted">직무명</h3>
        <div class="navbar">
          <div class="navbar-inner">
            <div class="container">
              <ul class="nav_bar" id="job">
              </ul>
            </div>
          </div>
        </div><!-- /.navbar -->
      </div>
      
       <!-- Jumbotron -->
      <div class="jumbotron">
        <h2 id = "job_name">frontend</h2>
        <p class="lead" id="job_descript">사용자로부터 다양한 형태의 입력을 받아 ‘백엔드’가 사용할 수 있는 규격을 따라 처리할 책임을 진다</p>
        <a class="btn btn-large btn-success" href="#">채용공고 보러가기</a>
      </div>
      
      <hr>
	
	  <div class="row-fluid" id = "skill">
        <div class="span4">
          <h2>c</h2>
          <p class="span555" id="c">1972년 켄 톰슨과 데니스 리치가 벨 연구소에서 일할 당시 새로 개발된 유닉스 운영 체제에서 사용하기 위해 개발한 프로그래밍 언어이다.</p>
          <p id="0">자세히보기</p>
        </div>
        <div class="span4" id="java">
          <h2>java</h2>
          <p class="span555">썬 마이크로시스템즈의 제임스 고슬링(James Gosling)과 다른 연구원들이 개발한 객체 지향적 프로그래밍 언어이다</p>
          <p id="1">자세히보기</p>
        </div>
        <div class="span4" id="python">
          <h2>python</h2>
          <p class="span555">파이썬은 고급 프로그래밍 언어로, 플랫폼 독립적이며 인터프리터식, 객체지향적, 동적 타이핑(dynamically typed) 대화형 언어이다. 파이썬이라는 이름은 귀도가 좋아하는 코미디에서 따온 것이다.</p>
          <p id="2">자세히보기 </p>
        </div>
      </div>
      <
      
	<button onclick="window.location.href = 'http://localhost:8787/it_update.job?jobname=frontend'" style="margin-top: 50px;">변경하기</button>
	<button onclick="window.location.href = 'http://localhost:8787/it_new.job'" style="margin-top: 50px;">새 직무</button>
	</div>
</body>
</html>