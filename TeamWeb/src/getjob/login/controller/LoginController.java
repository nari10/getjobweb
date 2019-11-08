package getjob.login.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import common.dto.Member;
import getjob.login.biz.LoginBiz;
import getjob.member.biz.MemberBiz;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class LoginController {

	@Autowired
	private LoginBiz loginBiz;

	@Autowired
	private MemberBiz memberBiz;

	@RequestMapping(value = "loginRequested.job")
	public String loginRequested(Member memberParam) {
		Member member = loginBiz.sign_in(memberParam);
		boolean loginOk = (member != null) ? true : false;
		if (loginOk) {
			return "redirect:http://localhost:3000/";
		} else {
			return "/"; 
		}
	}
	
	@RequestMapping(value = "signupRequested.job")
	public String signupRequested() {
		return "/_VIEW/signup/index.jsp";
	}
	
	@RequestMapping(value = "signup.job", method = RequestMethod.GET)
	public String signup(Member memberParam) {
		Member member = loginBiz.validate_id(memberParam);
		boolean isDuplicate = (member != null) ? true : false;
		if (isDuplicate) {
			return "/_VIEW/signup/index.jsp";
		} else {
			member = new Member();
			member.setId(memberParam.getId());
			member.setPassword(memberParam.getPassword());
			member.setName(memberParam.getName());
			member.setType(memberParam.getType());
			member.setAuth("프로필미작성");
			memberBiz.signup_getjob(member);
			return "/loginRequested.job";
		}
	}

}