package salt.se.jfs.expensetracker.repository;

import salt.se.jfs.expensetracker.model.Transaction;

import java.util.List;

public interface ITransactionRepository {

    Transaction saveTransaction(Transaction transaction);

    List<Transaction> getAllTransactions();

    List<Transaction> getAllTransactionForDate(String date);

    Transaction getTransactionById(long transactionId);

    void deleteTransaction(long transactionId);

    void deleteTransaction(Transaction transaction);

    Transaction insertTransaction(Transaction transaction);


}
