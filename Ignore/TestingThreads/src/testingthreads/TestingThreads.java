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
    public static void main(String[] args) {
        
        // something (which is method that contains code to start the consumer, need to be called before submitter
        try {
            BackEnd.something();
        } catch (InterruptedException ex) {
        }
 
       
        System.out.println("This herea");
        //if queue is full, then request are halted. Though other sources could send request, they just have to wait to be processed
        // though code is halted for that thread
        for(int i = 0; i < 10; i++){
            RequestObject num = new RequestObject("hiya" + i, i%2); // mimics what request should be like. The message contianing request info, than a number identifying its type
            // so we can call right class.
            try {
                BackEnd.submiter(num);// note: if queue is full, this thread is paused, so loop doesn't continue. 
               
            } catch (InterruptedException ex) {
            }
        }
        System.out.println("submitted all request");
    }
    
}
