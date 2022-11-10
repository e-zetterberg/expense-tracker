package salt.se.jfs.expensetracker.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.se.jfs.expensetracker.model.Transaction;
import salt.se.jfs.expensetracker.service.Service;

import java.net.URI;

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
}
