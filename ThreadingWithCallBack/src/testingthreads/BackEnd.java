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
import java.util.concurrent.ExecutionException;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;



public class BackEnd {
    
    private static ExecutorService executor = Executors.newFixedThreadPool(2);// can change to be higher. Higher number means mroe request processed/executed at once but increase load on server
    
    
    // method you would call to submit request
    // RequestObject mimics what should be sent here. First part is details of request, second part is number identifying what type of request it is (login, posting swoop, etc)
    public static String requestConsumer(RequestObject request) throws InterruptedException{
    
        String infoUserNeeds = "";
        int identifier = request.getRequestType()+1; //doesn't seem to be issues so far. So this variable is unique in each thread possibly
        Future<String> future = null; // will hold value returned by thread
        // from tutorials seems most practical way of having threads return a value while using threading pool is by Future and Callable way
        // maybe a simpler way but this has worked ffine so far and most reccomonded
        switch(identifier){
            case 1:
                future = executor.submit(new SomeClass(request.getRequestInfo()));
                break;
            case 2:
                future = executor.submit(new AnotherClass(request.getRequestInfo())); 
                break;
            default:
                System.out.println("Something fishy");
                break;
        }
        
        try {
            infoUserNeeds = future.get();// future suppodely can hold exceptions along with value. Didn't use that feature in this scenario
         } catch (ExecutionException ex) {
        // put proper error message here
        }
        
        //check if need executor.shutdown despite always needing it for site.
        // maybe could check ifShutdown then just re-activate. Not sure how important it is to shut it down when not in use when for web application
        
        return infoUserNeeds;// figure out what type need to return
        //NOT SURE IF JAVA HAS A UNIVERSAL DATA TYPE. If it doesn't, then every type of requet would need to return same thing
        // A workaround if that isn't possible is create a class that has fields for each type of request return values
        // so then in front end can call proper get method to get right info
    }
    
    // most likely won't need this method in implementation of this class
    public static void shutDownExecutor(){
        executor.shutdownNow();
    }
}