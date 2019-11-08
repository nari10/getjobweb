package getjob.login.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import common.dto.Member;

@Repository
public class LoginDaoImpl implements LoginDao {

	@Autowired
	private SqlSessionTemplate session;

	@Override
	public Member selectMemberWithId(Member member) {
		Member result = session.selectOne("LoginMapper.selectMemberForIdCheck", member);
		return result;
	}

	@Override
	public Member selectMemberWithPassword(Member member) {
		Member result = session.selectOne("LoginMapper.selectMemberForPasswordCheck", member);
		return result;
	}

}
