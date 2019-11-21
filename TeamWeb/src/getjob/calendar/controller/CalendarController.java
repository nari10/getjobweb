package getjob.calendar.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import common.dto.Code;
import common.dto.Offer;
import common.dto.Test;
import common.model.TestSchedule;
import getjob.calendar.biz.CalendarBiz;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8787"})
@Controller
public class CalendarController {
	@Autowired
	private CalendarBiz biz;

	@RequestMapping(value="getoffer.job")
	@ResponseBody
	public List<Offer> getOffer(){
		List<Offer> of = biz.select_All_Offer();
		return of;
	}
	
	@RequestMapping(value="gettestschedule.job", method=RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Test> gettestSchedule(@RequestParam("codeno") int codeno) {
		List<Test> test = biz.get_Test_Schedule(codeno);
		return test;
	}
	
	@RequestMapping(value="getcer.job")
	@ResponseBody
	public List<Code> getAllCertificate(){
		List<Code> cer = biz.get_All_Certificate();
		return cer;
	}
	
	@RequestMapping(value="addoffer.job")
	@ResponseBody
	public int addMemberOffer(@RequestParam("offerno") int offers, @RequestParam("id") String id) {
		int res = biz.add_offer_schedule(new ArrayList<Integer>(){
			{
				add(offers);
			}
		}, id);
		return res;
	}
	
	@RequestMapping(value="addcertificate.job")
	@ResponseBody
	public int addMemberCertificate(@RequestParam("id") String id, @RequestParam("cert_name") String cert_name,
			@RequestParam("begin_date") String begin, @RequestParam("end_date") String end) throws UnsupportedEncodingException {
		TestSchedule ts = new TestSchedule();
		cert_name = URLDecoder.decode(cert_name, "UTF-8");
		ts.setId(id); ts.setCert_name(cert_name); 
		Date begin_date = transformDate(begin);
		Date end_date = transformDate(end);
		ts.setBegin_date(begin_date); 
		ts.setEnd_date(end_date);
		int res = biz.add_member_certificate(ts);
		return res;
	}
	
	public Date transformDate(String date)
    {
        SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyymmdd");
        // Date로 변경하기 위해서는 날짜 형식을 yyyy-mm-dd로 변경해야 한다.
        SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-mm-dd");
        java.util.Date tempDate = null;
        try {
            // 현재 yyyymmdd로된 날짜 형식으로 java.util.Date객체를 만든다.
            tempDate = beforeFormat.parse(date);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        // java.util.Date를 yyyy-mm-dd 형식으로 변경하여 String로 반환한다.
        String transDate = afterFormat.format(tempDate);
        
        // 반환된 String 값을 Date로 변경한다.
        Date d = Date.valueOf(transDate);        
        return d;
    }

}