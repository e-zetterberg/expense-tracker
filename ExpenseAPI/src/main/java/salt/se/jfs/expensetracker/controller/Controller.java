package salt.se.jfs.expensetracker.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.se.jfs.expensetracker.model.Transaction;
import salt.se.jfs.expensetracker.service.Service;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin
public class Controller {

    final Service service;
    public Controller(Service service){
        this.service = service;
    }

    @PostMapping
    ResponseEntity<Transaction> addTransaction(@RequestBody Transaction transaction){
        Transaction t =  service.addTransaction(transaction);
        URI uri = URI.create("/api/transaction" + transaction.getTransactionId());
        return ResponseEntity.created(uri).body(t);
    }

    @GetMapping("/{transactionId}")
    ResponseEntity<Transaction> getTransaction(@PathVariable long transactionId) {
        Transaction transaction = service.getTransaction(transactionId);
        return ResponseEntity.ok(transaction);
    }

    @GetMapping
    ResponseEntity<List<Transaction>> getAllTransactions() {
        List<Transaction> transactions = service.getAllTransactions();
        return ResponseEntity.ok(transactions);
    }

    @PutMapping
    ResponseEntity<Transaction> replaceTransaction(@RequestBody Transaction transaction){
        Transaction t = service.replaceTransaction(transaction);
        return ResponseEntity.accepted().body(t);
    }

    @PatchMapping("/{transactionId}")
    ResponseEntity<Transaction> updateTransaction(@PathVariable long transactionId, String payload){
        Transaction t = service.updateTransaction(transactionId, payload);
        return ResponseEntity.ok(t);
    }

    @DeleteMapping("/{transactionId}")
    ResponseEntity<Void> deleteTransactionById(@PathVariable long transactionId){
        service.deleteTransaction(transactionId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping
    ResponseEntity<Void> deleteTransactionById(@RequestBody Transaction transaction){
        service.deleteTransaction(transaction);
        return ResponseEntity.noContent().build();
    }


}
