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

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @RequestMapping(value = "/getParking")
    public SwoopRequest findParkingByRadius(@RequestParam("park_lat") double park_lat, @RequestParam("park_long") double park_long, @RequestParam("radius") int radius){
        return swoopRequestService.findParkingSpotByRadius(park_lat,park_long,radius);
    }

    @RequestMapping(value = "/swapParking")
    public SwoopRequest swapParkingByRadius(@RequestParam("cur_lat") double cur_lat, @RequestParam("cur_long") double cur_long, @RequestParam("radius") int radius){
        return swoopRequestService.swapParkingSpotByRadius(cur_lat,cur_long,radius);
    }
}