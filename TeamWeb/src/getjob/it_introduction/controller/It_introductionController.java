package getjob.it_introduction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import common.dto.Job;
import common.dto.Milestone;
import common.dto.Skill;
import getjob.it_introduction.biz.ItBiz;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8787"})
@Controller
public class It_introductionController {

	@Autowired
	private ItBiz itBiz;

	@RequestMapping(value = "get_job_list.job")
	@ResponseBody
	public List<Job> get_job_list() {
		List<Job> jobs = itBiz.selectAllJob();
		return jobs;
	}

	@RequestMapping(value = "get_job_content.job")
	@ResponseBody
	public Job get_job_content(@RequestParam String name) {
		Job job = itBiz.get_job_content(name);
		return job;
	}

//	add_job(dao); //직무 추가하기
//	update_job(dao); //직무 설명 변경하기
//	delete_job(dao); //직무 삭제하기

	@RequestMapping(value = "get_skill_list.job")
	@ResponseBody
	public List<Skill> get_skill_list(@RequestParam String jobname) {
		List<Skill> skills = itBiz.get_skill_list(jobname);
		return skills;
	} //기술 목록 보기

	@RequestMapping(value = "get_skill_content.job")
	@ResponseBody
	public Skill get_skill_content(@RequestParam String skillname) {
		Skill skill = itBiz.get_skill_content(skillname);
		return skill;
	} //기술 내용 보기

//	add_skill(dao); //기술 추가하기
//	update_skill(dao); //기술 변경하기
//	delete_skill(dao); //기술 삭제하기

	@RequestMapping(value = "get_milestone_list.job")
	@ResponseBody
	public List<Milestone> get_milestone_list() {
		List<Milestone> milestones = itBiz.get_milestone_list();
		return milestones;
	} //마일스톤 목록 보기

	@RequestMapping(value = "get_milestone_content.job")
	@ResponseBody
	public Milestone get_milestone_content(String milestone_name) {
		Milestone milestone = itBiz.get_miletone_content(milestone_name);
		return milestone;
	}
	
//	add_milestone(dao);
//	update_milestone(dao);
//	delete_milestone(dao);
}
