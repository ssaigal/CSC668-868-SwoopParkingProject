package com.lostsemicolon.swoop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping({"/swooprequest"})
public class SwoopRequestController {

    @Autowired
    private SwoopRequestService swoopRequestService;

    @PostMapping
    public SwoopRequest create(@RequestBody SwoopRequest swoopRequest){
        return swoopRequestService.create(swoopRequest);
    }

    @GetMapping(path = {"/{id}"})
    public SwoopRequest findOne(@PathVariable("id") int id){
        return swoopRequestService.findById(id);
    }

    @PutMapping
    public SwoopRequest update(@RequestBody SwoopRequest swoopRequest){
        return swoopRequestService.update(swoopRequest);
    }

    @DeleteMapping(path ={"/{id}"})
    public SwoopRequest delete(@PathVariable("id") int id) {
        return swoopRequestService.delete(id);
    }

    @GetMapping
    public List<SwoopRequest> findAll(){
        return swoopRequestService.findAll();
    }
}