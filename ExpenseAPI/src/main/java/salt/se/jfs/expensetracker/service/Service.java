package salt.se.jfs.expensetracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import salt.se.jfs.expensetracker.model.Transaction;
import salt.se.jfs.expensetracker.repository.TransactionRepository;

import java.util.List;

@org.springframework.stereotype.Service
public class Service {


    final TransactionRepository repository;

    public Service(TransactionRepository repository) {
        this.repository = repository;
    }

    public Transaction addTransaction(Transaction transaction) {
        return repository.insertTransaction(transaction);
    }

    public void deleteTransaction(Transaction transaction) {
        repository.deleteTransaction(transaction);
    }

    public void deleteTransaction(long transactionId) {
        repository.deleteTransaction(transactionId);
    }

    public Transaction updateTransaction(long transactionId, String payload) {
        Transaction transaction = repository.getTransactionById(transactionId);
        //TODO validate transaction and change if different
        return repository.saveTransaction(transaction);
    }

    public Transaction replaceTransaction(Transaction transaction) {
        return repository.saveTransaction(transaction);
    }

    public List<Transaction> getAllTransactions() {
        return repository.getAllTransactions();
    }

    public Transaction getTransaction(long transactionId) {
        return repository.getTransactionById(transactionId);
    }
}
