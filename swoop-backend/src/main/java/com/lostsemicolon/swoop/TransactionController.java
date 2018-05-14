package com.lostsemicolon.swoop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping({"/transaction"})
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping
    public Transaction create(@RequestBody Transaction transaction){
        return transactionService.create(transaction);
    }

    @GetMapping(path = {"/{id}"})
    public Transaction findOne(@PathVariable("id") int id){
        return transactionService.findById(id);
    }

    @PutMapping
    public Transaction update(@RequestBody Transaction transaction){
        return transactionService.update(transaction);
    }

    @DeleteMapping(path ={"/{id}"})
    public Transaction delete(@PathVariable("id") int id) {
        return transactionService.delete(id);
    }

    @GetMapping
    public List<Transaction> findAll(){
        return transactionService.findAll();
    }
}