/*Created by
Shalaka
 */
package com.lostsemicolon.swoop;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "transaction")

public class Transaction {
    @Id
    @Column(name = "request_id")
    private int requestId;

    @Column(name = "swooper_id")
    private int swooperId;
    @Column(name = "swoopee_id")
    private int swoopeeId;
    @Column(name = "status")
    private int status;

    @Column(name = "start_time")
    private long startTime;
    @Column(name = "end_time")
    private long endTime;


    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }


    public int getRequestId() {
        return requestId;
    }

    public void setRequestId(int requestId) {
        this.requestId = requestId;
    }

    public int getSwooperId() {
        return swooperId;
    }

    public void setSwooperId(int swooperId) {
        this.swooperId = swooperId;
    }

    public int getSwoopeeId() {
        return swoopeeId;
    }

    public void setSwoopeeId(int swoopeeId) {
        this.swoopeeId = swoopeeId;
    }

    public long getStartTime() {
        return startTime;
    }

    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }

    public long getEndTime() {
        return endTime;
    }

    public void setEndTime(long endTime) {
        this.endTime = endTime;
    }

}