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
	<script src="./index.js"></script>
</head>
<body>
	<nav class="navbar navbar-inverse navbar-fixed-top">
     <div class="container">
       <div class="navbar-header">
         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <a class="navbar-brand" href="#">Get job</a>
       </div>
       <div id="navbar" class="collapse navbar-collapse">
         <ul class="nav navbar-nav">
           <li><a href="it_introduction">It 소개</a></li>
           <li><a href="offer">채용공고</a></li>
           <li><a href="calendar">캘린더</a></li>
           <li><a href="login">로그인/회원가입</a></li>
         </ul>
       </div><!--/.nav-collapse -->
     </div>
    </nav>
	<form action="/signup.job">
		<label for="id">아이디</label><input type="text" name="id"/><br />
		<label for="password">비밀번호</label><input type="text" name="password"/><br />
		<label for="name">이름</label><input type="text" name="name"/><br />
		<label for="type" hidden="hidden">유형</label><input type="text" name="type" value="member" hidden="hidden"/><br />
		<input type="submit" value="확인"/>	
	</form>			
</body>
</html>