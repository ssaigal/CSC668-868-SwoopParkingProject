package com.lostsemicolon.swoop;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface SwoopRequestRepository extends Repository<SwoopRequest, Integer> {

    void delete(SwoopRequest swoopRequest);

    List<SwoopRequest> findAll();

    SwoopRequest findOne(int id);

    SwoopRequest save(SwoopRequest swoopRequest);
}