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

// Does not have to be string, can be any datatype, just have to stay consistent
public class SomeClass implements Callable<String> {// Need callable setup here so that threads could return values, like data for webpage or form database
    private String requestInfo;
    public SomeClass(String id){
        this.requestInfo = id;
    }
    
    @Override
    public String call(){ // this is method that will be called when request obtains a thread. So need this method in every class
        System.out.println("Starting: " + requestInfo);
        
        try {
            Thread.sleep(500);// not needed, just to simulate a thread doing a computation
        } catch (InterruptedException ex) {
        }
        
        System.out.println("Completed: " + requestInfo);
        return "SomeClass " + requestInfo;
    }
}