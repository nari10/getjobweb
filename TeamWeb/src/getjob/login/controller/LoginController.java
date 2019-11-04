package getjob.login.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import common.dto.Member;
import getjob.login.biz.LoginBiz;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class LoginController {

	@Autowired
	private LoginBiz loginBiz;

	@RequestMapping(value = "loginRequested.job")
	public String login(Member memberParam) {
		Member member = loginBiz.sign_in(memberParam);
		boolean loginOk = (member != null) ? true : false;
		if (loginOk) {
			return "redirect:http://localhost:3000/";
		} else {
			return "/"; 
		}
	}

	@RequestMapping(value = "redirect.job", method = RequestMethod.GET)
	public void method(HttpServletResponse httpServletResponse) {
		httpServletResponse.setHeader("Location", "localhost:3000/index.html");
		httpServletResponse.setStatus(302);
	}
}