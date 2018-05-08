/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testingthreads;

import java.util.concurrent.Callable;

/**
 *
 * @author kingp
 */
public class AnotherClass implements Callable<String> {
    private String requestInfo;
    public AnotherClass(String id){
        this.requestInfo = id;
    }
    
    @Override
    public String call(){ // see if could have a return
        System.out.println("Lets get rolling: " + requestInfo);
        
        try {
            for(int i=0; i < 3; i++){
                //System.out.println("This is our I " + i);
                Thread.sleep(500);// not needed, just to simulate a thread doing a computation
            }
            //Thread.sleep(5000);
        } catch (InterruptedException ex) {
        }
        
        System.out.println("AnotherClass Task is done: " + requestInfo);
        return "AnotherClass" + requestInfo;
    }
}