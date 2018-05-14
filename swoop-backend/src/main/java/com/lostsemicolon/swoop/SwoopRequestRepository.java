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

    @Query("FROM SwoopRequest s WHERE calculate_distance( 37.715264, -122.472597, ?1 , ?2 ) < ?3 AND request_type = 0 AND request_status = 0")
    SwoopRequest findParkingByRadius(long park_lat,long park_long,int radius);



}