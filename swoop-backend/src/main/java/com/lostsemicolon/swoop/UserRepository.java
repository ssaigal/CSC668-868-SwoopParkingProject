package com.lostsemicolon.swoop;

import org.springframework.data.repository.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
 import org.springframework.data.repository.query.Param;
import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

    void delete(User user);

    List<User> findAll();

    User findOne(int id);

    User save(User user);

    @Query("select u from User u where u.userName = ?1 AND u.password = ?2")
        User findByName(String userName, String password);
}
