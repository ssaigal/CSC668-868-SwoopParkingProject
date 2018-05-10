package com.lostsemicolon.swoop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SwoopRequestServiceImpl implements SwoopRequestService {

    @Autowired
    private SwoopRequestRepository repository;

    @Override
    public SwoopRequest create(SwoopRequest swoopRequest) {
        return repository.save(swoopRequest);
    }

    @Override
    public SwoopRequest delete(int id) {
        SwoopRequest swoopRequest = findById(id);
        if(swoopRequest != null){
            repository.delete(swoopRequest);
        }
        return swoopRequest;
    }

    @Override
    public List<SwoopRequest> findAll() {
        return repository.findAll();
    }

    @Override
    public SwoopRequest findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public SwoopRequest update(SwoopRequest swoopRequest) {
        return null;
    }
}
