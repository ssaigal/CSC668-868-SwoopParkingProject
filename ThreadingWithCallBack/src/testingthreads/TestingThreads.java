/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package testingthreads;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author kingp
 */
public class TestingThreads {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws InterruptedException {
        
        // These threads are sued to simulate a users who are sending a lot of request
        // current setup, there are 4 users submitting 5 request approximately at same time
        Thread t2 = new Thread(new Runnable(){
            @Override
            public void run(){
                String dataFromBackEnd2 = "";
                for(int i = 5; i < 10; i++){
                    RequestObject num = new RequestObject("Thread 2 " + i, i%2);
                    try {
                        dataFromBackEnd2 = BackEnd.requestConsumer(num);// note: if queue is full, this thread is paused, so loop doesn't continue.
                        // So
                    } catch (InterruptedException ex) {
                        Logger.getLogger(TestingThreads.class.getName()).log(Level.SEVERE, null, ex);
                    }
                    System.out.println("We are at: " + i + " and data is " + dataFromBackEnd2);
                }
            }
        });
        
        Thread t3 = new Thread(new Runnable(){
            @Override
            public void run(){
                String dataFromBackEnd2 = "";
                for(int i = 10; i < 15; i++){
                    RequestObject num = new RequestObject("Thread 3 " + i, i%2);
                    try {
                        dataFromBackEnd2 = BackEnd.requestConsumer(num);// note: if queue is full, this thread is paused, so loop doesn't continue.
                        // So
                    } catch (InterruptedException ex) {
                        Logger.getLogger(TestingThreads.class.getName()).log(Level.SEVERE, null, ex);
                    }
                    System.out.println("We are at: " + i + " and data is " + dataFromBackEnd2);
                }
            }
        });
        
        Thread t4 = new Thread(new Runnable(){
            @Override
            public void run(){
                String dataFromBackEnd2 = "";
                for(int i = 15; i < 0; i++){
                    RequestObject num = new RequestObject("Thread 4 " + i, i%2);
                    try {
                        dataFromBackEnd2 = BackEnd.requestConsumer(num);// note: if queue is full, this thread is paused, so loop doesn't continue.
                        // So
                    } catch (InterruptedException ex) {
                        Logger.getLogger(TestingThreads.class.getName()).log(Level.SEVERE, null, ex);
                    }
                    System.out.println("We are at: " + i + " and data is " + dataFromBackEnd2);
                }
            }
        });
        
        t2.start();
        t3.start();
        t4.start();
        
        
        
 
        //if queue is full, then request are halted. Though other sources could send request, they just have to wait to be processed
        // though code is halted for that thread
        String dataFromBackEnd = "";
        for(int i = 0; i < 5; i++){
            RequestObject num = new RequestObject("Thread 1 " + i, i%2); // mimics what request should be like. The message contianing request info, than a number identifying its type
            // so we can call right class.
            try {
                dataFromBackEnd = BackEnd.requestConsumer(num);// note: if queue is full, this thread is paused, so loop doesn't continue. 
               
            } catch (InterruptedException ex) {
            }
            System.out.println("We are at: " + i + " and data is " + dataFromBackEnd);
        }
        System.out.println("submitted all request");
        t2.join();// will halt here until thread t2 is done
        t3.join();
        t4.join();
        BackEnd.shutDownExecutor();// program will keep running because executor in BackEnd isn't shutdown
        // Think its fine not to when its on server since we will always need it active.
        // Will look into downside of not closing it. Could always doa  check if its shut down and if so open it again if we need it
        // though not sure how well that will go with synchronization and multiple users
    }
    
}
