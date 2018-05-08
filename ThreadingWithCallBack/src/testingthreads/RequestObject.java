/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testingthreads;

/**
 *
 * @author kingp
 */
public class RequestObject {
    private String requestInfo;
    private int requestType;
    public RequestObject(String info, int number){
        requestInfo = info;
        requestType = number;
    }
    
    public String getRequestInfo(){
        return requestInfo;
    }
    
    public int getRequestType(){
        return requestType;
    }
}
