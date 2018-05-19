/*Created by
Shalaka
 */
package com.lostsemicolon.swoop;

import java.util.List;

public interface TransactionService {

    Transaction create(Transaction transction);

    Transaction delete(int id);

    List<Transaction> findAll();

    Transaction findById(int id);

    Transaction update(Transaction transaction);
}
