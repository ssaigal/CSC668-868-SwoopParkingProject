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
import java.util.Random;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.logging.Level;
import java.util.logging.Logger;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;


public class BackEnd {
    
private static BlockingQueue<RequestObject> queue = new ArrayBlockingQueue<RequestObject>(5); // takes care of synchronizaiton, is thread safe
private static ExecutorService executor = Executors.newFixedThreadPool(2);

    /**
     * @param args the command line arguments
     */
//SEE IF A CLASS WILL ALWAYS RUN ON SERVER. NEED MAIN TO RUN BUT COULDN'T GET THIS AND TESTINGTHREADS TO BOTH RUN TOGETHER
/*
    public static void main(String[] args) throws InterruptedException {
        System.out.println("this ran");
        Thread t2 = new Thread(new Runnable(){
            @Override
            public void run(){
                try {
                    taker();
                } catch (InterruptedException ex) {

                }
            }
        });
        

        t2.start();
        
        t2.join();
    }
    */
// temporary method. Plan was for this to execute in main, though couldn't get two classes main's to run together easily
    public static void something() throws InterruptedException{
        Thread t2 = new Thread(new Runnable(){
            @Override
            public void run(){
                try {
                    requestConsumer();
                } catch (InterruptedException ex) {

                }
            }
        });
        

        t2.start();
        
        //t2.join();   this stops code from running until thread is finished, see if this would cause issue in main
    }
    
    // maybe another method that does submit and also calls taker. Just need someway to get values from taker back to front end
    // not sure if has to be through ehre or in class we sent request could return from there, though makes no sense
    public static void submiter(RequestObject aRequest) throws InterruptedException{ // figure out how could return
        // is method called to put things in queue
        queue.put(aRequest); // if queue is full, waits for queue to have spot ebfore continuing execution, doesn't stop from insertin into queue,other threads could still run code,
    }
    // maybe drop queue and just use executor for holding things since it has its own queue
    // that way could use callback/future  (not sure about synchronizaiton). Though think read something about being an error. Something about not blocking which it doesn't
    // possibly fine though
    
    //STILL NEED TO IMPLEMENT CALLBACK so that threads can return things, though still can't figure out how to differentiate exactly
    private static void requestConsumer() throws InterruptedException{
        while(true){
        RequestObject request = queue.take();// waits here until there is something in queue
        int identifier = request.getRequestType()+1; //doesn't seem to be issues so far. So this variable is unique in each thread possibly
        switch(identifier){
            case 1:
                executor.submit(new SomeClass(request.getRequestInfo()));
                break;
            case 2:
                executor.submit(new AnotherClass(request.getRequestInfo()));
                break;
            default:
                System.out.println("Something fishy");
                break;
        }
        // check if need to have excecutor.shutdown despite always needing it for website
        }
    }
}