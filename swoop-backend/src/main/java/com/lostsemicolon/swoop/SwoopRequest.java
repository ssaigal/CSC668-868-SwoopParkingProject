/*Created by
Shalaka
 */
package com.lostsemicolon.swoop;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "request")

public class SwoopRequest {
    @Id
    @Column(name= "request_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int requestId;
    @Column (name= "user_id", nullable = false, updatable = false)
    private int userId;

    @Column(name= "request_type")
    private int requestType;

    @Column(name= "request_status")
    private int requestStatus;
    @Column
    private int radius;
    @Column
    private long time;

    @Column
    private double  cur_lat;
    @Column
    private double  cur_long;
    @Column
    private double  park_lat;

    @Column
    private double  park_long;

   /* @OneToOne
    @JoinColumn(name="id",nullable = false, updatable = false)
    private User user;*/

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

    public int getRequestType() {
        return requestType;
    }

    public void setRequestType(int requestType) {
        this.requestType = requestType;
    }

    public int getRequestStatus() {
        return requestStatus;
    }

    public void setRequestStatus(int requestStatus) {
        this.requestStatus = requestStatus;
    }

    public int getRadius() {
        return radius;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        long currentTime = System.currentTimeMillis();
        this.time = currentTime;
    }
    public double getCur_lat() {
        return cur_lat;
    }

    public void setCur_lat(double cur_lat) {
        this.cur_lat = cur_lat;
    }

    public double getCur_long() {
        return cur_long;
    }

    public void setCur_long(double cur_long) {
        this.cur_long = cur_long;
    }

    public double getPark_lat() {
        return park_lat;
    }

    public void setPark_lat(double park_lat) {
        this.park_lat = park_lat;
    }

    public double getPark_long() {
        return park_long;
    }

    public void setPark_long(double park_long) {
        this.park_long = park_long;
    }
}