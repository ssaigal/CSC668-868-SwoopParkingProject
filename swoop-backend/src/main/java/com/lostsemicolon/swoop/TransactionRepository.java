
/*
Created By Shalaka
 */
package com.lostsemicolon.swoop;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface TransactionRepository extends Repository<Transaction, Integer> {

    void delete(Transaction transaction);

    List<Transaction> findAll();

    Transaction findOne(int id);

    Transaction save(Transaction transaction);
}