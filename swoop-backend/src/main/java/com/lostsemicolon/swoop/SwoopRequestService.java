package com.lostsemicolon.swoop;

import java.util.List;

public interface SwoopRequestService {

    SwoopRequest create(SwoopRequest swoopRequest);

    SwoopRequest delete(int id);

    List<SwoopRequest> findAll();

    SwoopRequest findById(int id);

    SwoopRequest update(SwoopRequest swoopRequest);

    SwoopRequest findParkingSpotByRadius(double park_lat,double park_long,int radius);

    SwoopRequest swapParkingSpotByRadius(double cur_lat,double cur_long,int radius);
}
