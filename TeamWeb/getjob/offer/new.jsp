<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h2>채용공고 홈</h2>
	<form action="/addNewOffer.job" method="GET">
		<label for="no"></label>번호<input type="text" name="no"/>
		<label for="begin_date"></label>시작일<input type="text" name="begin_date"/>	
		<label for="end_date"></label>마감일<input type="text" name="end_date"/>	
		<label for="title"></label>제목<input type="text" name="title"/>	
		<label for="content"></label>내용<textarea name="contente" id="" cols="30" rows="10"></textarea>
		<label for="corporate_name">기업명</label>
	</form>
</body>
</html>