package common.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import common.dto.Job;
import common.model.OfferDetail;
import getjob.it_introduction.biz.ItBiz;
import getjob.offer.biz.OfferBiz;

@Controller
public class MainController {

	@Autowired
	private ItBiz itBiz;

	@Autowired
	private OfferBiz offerBiz;

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
	
	@RequestMapping(value = "it_new.job")
	public String it_new() {
		return "WEB-INF/it_introduction/create.jsp";
	}

//	@RequestMapping(value = "it_update.job")
//	public String it_update() {
//		return "WEB-INF/it_introduction/update.jsp";
//	}

	@RequestMapping(value = "it_update.job", method = RequestMethod.GET)
	public ModelAndView it_update(String jobname) {
		Job job = itBiz.get_job_content(jobname);
		return new ModelAndView() {
			{
				setViewName("WEB-INF/it_introduction/update.jsp");
				addObject("jobname", job.getName());
				addObject("description", job.getDescript());
			}
		};
	}

	@RequestMapping(value = "member.job")
	public String member() {
		return "WEB-INF/member/index.jsp";
	}

	@RequestMapping(value = "offer.job")
	public String offer() {
		return "WEB-INF/offer/index.jsp";
	}

	@RequestMapping(value = "offer_create.job")
	public String offer_create() {
		return "WEB-INF/offer/create.jsp";
	}

//	@RequestMapping(value = "offer_update.job")
//	public String offer_update() {
//		return "WEB-INF/offer/update.jsp";
//	}

	@RequestMapping(value = "offer_update.job", method = RequestMethod.GET)
	public ModelAndView offer_update(int offer_no) {
		OfferDetail detail = offerBiz.get_offer(offer_no);
		return new ModelAndView() {
			{
				setViewName("WEB-INF/offer/update.jsp");
				addObject("OfferDetail", detail);
			}
		};
	}
}
