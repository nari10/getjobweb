package common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import common.dto.Member;

@Controller
public class MainController {

	@RequestMapping(value = "/")
	public String login() {
		return "WEB-INF/_VIEW/login/index.jsp";
	}

	@RequestMapping(value = "calendar.job")
	public String calendar() {
		return "WEB-INF/calendar/index.jsp";
	}

	@RequestMapping(value = "it_introduction.job")
	public String it_introduction() {
		return "WEB-INF/it_introduction/index.jsp";
	}

	@RequestMapping(value = "member.job")
	public String member() {
		return "WEB-INF/member/index.jsp";
	}

	@RequestMapping(value = "offer.job")
	public String offer() {
		return "WEB-INF/offer/index.jsp";
	}
}
