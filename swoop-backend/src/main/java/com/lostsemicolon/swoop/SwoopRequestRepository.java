/*Created by
Shalaka
 */
package com.lostsemicolon.swoop;

import org.springframework.data.repository.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SwoopRequestRepository extends CrudRepository<SwoopRequest, Integer> {

    void delete(SwoopRequest swoopRequest);

    List<SwoopRequest> findAll();

    SwoopRequest findOne(int id);

    SwoopRequest save(SwoopRequest swoopRequest);

    @Query("FROM SwoopRequest s WHERE calculate_distance( ?1 , ?2, s.park_lat, s.park_long ) < ?3 AND request_type = 0 AND request_status = 0")
    SwoopRequest findParkingByRadius(double park_lat,double park_long,int radius);

    @Query("FROM SwoopRequest s WHERE calculate_distance( ?1 , ?2, s.cur_lat, s.cur_long ) < ?3 AND request_type = 1 AND request_status = 0")
    SwoopRequest swapParkingByRadius(double cur_lat,double cur_long,int radius);

}