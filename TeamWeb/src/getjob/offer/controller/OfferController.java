package getjob.offer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import common.dto.Offer;
import common.model.JobWithSkills;
import common.model.OfferDetail;
import getjob.offer.biz.OfferBiz;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class OfferController {
	
	@Autowired
	private OfferBiz offerBiz;

	// 채용공고 목록조회
	@RequestMapping(value = "getOffers.job")
	@ResponseBody
	public List<Offer> getOffers() {
		List<Offer> offers = offerBiz.get_offer_list();
		return offers;
	}

	// 채용공고 조회
	@RequestMapping(value="offerDetail.job", method = RequestMethod.GET)
	@ResponseBody
	public OfferDetail offerDetail(@RequestParam int offer_no) {
		OfferDetail detail = offerBiz.get_offer(offer_no);
		return detail;
	}
	
	//작성하기
	//변경저장
	//삭제

	//요구직무/기술 태그 추가
	//요구직무/기술 태그 추가
}
