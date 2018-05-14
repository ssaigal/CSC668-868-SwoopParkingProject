package com.lostsemicolon.swoop;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "requests")

public class SwoopRequest {
    @Id
    @Column(name= "request_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int requestId;
    @Column (name= "user_id")
    private int userId;
    @Column(name= "request_type")
    private char requestType;
    @Column
    private int radius;

    @Column
    private int time;


    @Column
    private int  position;
    @Column
    private int  destination;

    public int getRequestId() {
        return requestId;
    }

    public void setRequestId(int requestId) {
        this.requestId = requestId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public char getRequestType() {
        return requestType;
    }

    public void setRequestType(char requestType) {
        this.requestType = requestType;
    }

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public int getDestination() {
        return destination;
    }

    public void setDestination(int destination) {
        this.destination = destination;
    }

}