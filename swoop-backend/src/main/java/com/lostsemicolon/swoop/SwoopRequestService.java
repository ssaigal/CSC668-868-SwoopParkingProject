package com.lostsemicolon.swoop;

import java.util.List;

public interface SwoopRequestService {

    SwoopRequest create(SwoopRequest swoopRequest);

    SwoopRequest delete(int id);

    List<SwoopRequest> findAll();

    SwoopRequest findById(int id);

    SwoopRequest update(SwoopRequest swoopRequest);
}
