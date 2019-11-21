<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="common.model.OfferDetail, common.dto.Offer" %>
<% 
	OfferDetail detail = (OfferDetail) request.getAttribute("OfferDetail");
	Offer offer = detail.getOffer();
%>
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
<script src="../../static/offer/index.js"></script>
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
	<div style="margin: 100px 0px 15px 50px;">
		<table>
			<thead>
				<tr>
					<th>번호</th>
					<th>시작일</th>
					<th>마감일</th>
					<th>제목</th>
					<th>내용</th>
					<th>기업명</th>
				</tr>
			</thead>
			<tbody id="offers"></tbody>
		</table>
	</div>
	<button style="margin: 0px 0px 0px 50px" id="new-offer">공고 작성하기</button>
	<div style="margin: 50px">
		<table id="offer-table">
			<form action="offerUpdate.job" name="offer" method="post">
				<label for="no">번호</label><input type="text" value="<%=offer.getNo()%>" name="no"><br>
				<label for="begin_date">시작일</label><input type="text" value="<%=offer.getBegin_date()%>" name="begin_date"><br>
				<label for="end_date">마감일</label><input type="text" value="<%=offer.getEnd_date()%>" name="end_date"><br>
				<label for="title">제목</label><input type="text" value="<%=offer.getTitle()%>" name="title"><br>
				<label for="content">내용</label><input type="text" value="<%=offer.getContent()%>" name="content"><br>
				<label for="corporate">기업</label><input type="text" value="SAMSUNG" name="corporate" readonly><br>
<!-- 				<label for="corporate_id" hidden="true">기업명</label>
				<input type="text" value="196-86-00512" hidden="true" name="corporate_id"><br>
 -->				
 				<input type="submit" />
			</form>
		</table>
	</div>
</body>
</html>
