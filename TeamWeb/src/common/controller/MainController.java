package common.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import common.dto.Member;

@Controller
public class MainController {

	@RequestMapping(value = "/")
	public String login() {
		return "/_VIEW/login/index.jsp";
	}

	@RequestMapping(value = "calendar.job")
	public String calendar() {
		return "/_VIEW/calendar/index.jsp";
	}

	@RequestMapping(value = "it_introduction.job")
	public String it_introduction() {
		return "/_VIEW/it_introduction/index.jsp";
	}

	@RequestMapping(value = "member.job")
	public String member() {
		return "/_VIEW/member/index.jsp";
	}

	@RequestMapping(value = "offer.job")
	public String offer() {
		return "/_VIEW/offer/index.jsp";
	}
}
