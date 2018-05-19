/*Created by
Shalaka
 */
package com.lostsemicolon.swoop;

import java.util.List;

public interface UserService {

    User create(User user);

    User delete(int id);

    List<User> findAll();

    User findById(int id);

    User update(User user);

    User findByUName(String userName, String password);
}
