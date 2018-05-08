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
public class SomeClass implements Runnable {
    private String requestInfo;
    public SomeClass(String id){
        this.requestInfo = id;
    }
    
    public void run(){
        System.out.println("Starting: " + requestInfo);
        
        try {
            Thread.sleep(5000);
        } catch (InterruptedException ex) {
        }
        
        System.out.println("Completed: " + requestInfo);
    }
}