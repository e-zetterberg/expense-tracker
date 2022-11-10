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

    public Transaction saveTransaction(long transactionId) {
        return null;
    }

    public List<Transaction> getAllTransactions() {
        return null;
    }

    public List<Transaction> getAllTransactionForDate(String date) {
        return null;
    }

    public Transaction getTransactionById(long transactionId) {
        return null;
    }

    public void deleteTransaction(long transactionId) {

    }

    public void deleteTransaction(Transaction transaction) {

    }

    public Transaction insertTransaction(Transaction transaction) {
        return repo.insert(transaction);
    }
}
