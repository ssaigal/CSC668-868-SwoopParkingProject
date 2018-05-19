/*
Created By Shalaka
 */
package com.lostsemicolon.swoop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository repository;

    @Override
    public Transaction create(Transaction transaction) {
        return repository.save(transaction);
    }

    @Override
    public Transaction delete(int id) {
        Transaction transaction = findById(id);
        if(transaction != null){
            repository.delete(transaction);
        }
        return transaction;
    }

    @Override
    public List<Transaction> findAll() {
        return repository.findAll();
    }

    @Override
    public Transaction findById(int id) {
        return repository.findOne(id);
    }

    @Override
    public Transaction update(Transaction transaction) {
        return null;
    }
}
