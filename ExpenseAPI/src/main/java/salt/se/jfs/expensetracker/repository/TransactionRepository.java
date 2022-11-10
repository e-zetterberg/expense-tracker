package salt.se.jfs.expensetracker.repository;

import org.springframework.stereotype.Repository;
import salt.se.jfs.expensetracker.model.Transaction;

import java.util.List;

@Repository
public class TransactionRepository implements ITransactionRepository{

    final MongoDbRepository repo;
    public TransactionRepository(MongoDbRepository repo){
        this.repo = repo;
    }

    public Transaction saveTransaction(Transaction transaction) {
        return repo.save(transaction);
    }

    public List<Transaction> getAllTransactions() {
        return repo.findAll();
    }

    public List<Transaction> getAllTransactionForDate(String date) {
        return null;
    }

    public Transaction getTransactionById(long transactionId) {
        return repo.findById(transactionId).orElseThrow();
    }

    public void deleteTransaction(long transactionId) {
        repo.deleteById(transactionId);
    }

    public void deleteTransaction(Transaction transaction) {
        repo.delete(transaction);
    }

    public Transaction insertTransaction(Transaction transaction) {
        return repo.insert(transaction);
    }
}
