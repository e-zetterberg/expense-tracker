package salt.se.jfs.expensetracker.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import salt.se.jfs.expensetracker.model.Transaction;

public interface MongoDbRepository extends MongoRepository<Transaction, Long> {
}
