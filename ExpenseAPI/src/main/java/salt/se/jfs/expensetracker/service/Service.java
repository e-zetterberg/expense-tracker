package salt.se.jfs.expensetracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import salt.se.jfs.expensetracker.model.Transaction;
import salt.se.jfs.expensetracker.repository.TransactionRepository;

@org.springframework.stereotype.Service
public class Service {


    final TransactionRepository repository;

    public Service(TransactionRepository repository) {
        this.repository = repository;
    }

    public Transaction addTransaction(Transaction transaction) {
        return repository.insertTransaction(transaction);
    }
}
