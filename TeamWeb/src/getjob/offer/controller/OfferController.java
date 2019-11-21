package getjob.offer.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import common.dto.Offer;
import common.model.OfferDetail;
import getjob.offer.biz.OfferBiz;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8787"})
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
	
	// 채용공고 변경
	@RequestMapping(value="offerUpdate.job", method = RequestMethod.POST)
	public String offerUpdate(@RequestParam HashMap<String, String> offer) {
		System.out.println(offer);
		return "offer.job";
	}

	//작성하기
//	@RequestMapping(value = "addOffer.job")
//	public ModelAndView addOffer() {
//		return new ModelAndView() {
//			{
//				setViewName("/_VIEW/offer/new.jsp");
//				addObject("corporate_name", "SAMSUNG");
//			}
//		};
//	}

//	@RequestMapping(value = "addNewOffer.job")
//	public String addNewOffer() {
//		Offer offer = new Offer();
//		offer.setNo();
//		offer.setBegin_date();
//		offer.setEnd_date();
//		offer.setTitle();
//		offer.setCi_img();
//		offer.setCorporate_id();
//		return "redirect:http://localhost:3000/offer";
//	}

	//변경저장
	//삭제

	//요구직무/기술 태그 추가
	//요구직무/기술 태그 추가
}
