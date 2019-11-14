package getjob.member.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import common.dto.Member;
import getjob.member.biz.MemberBiz;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8787"})
@Controller
public class MemberController {
	@Autowired
	private MemberBiz memberBiz;

	@RequestMapping(value = "memberjob.job")
	@ResponseBody
	public ModelAndView member() {
		List<Member> members = memberBiz.get_all_member_list();
		return new ModelAndView() {
			{
				setViewName("/_VIEW/member/index.jsp");
				addObject("members", members);
			}
		};
	}
}
