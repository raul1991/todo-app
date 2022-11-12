package org.github.raul1991.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.github.raul1991.dto.Todo;
import org.github.raul1991.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class TodoService {
    private final TodoRepository repository;

    public boolean saveTodo(Todo todo) {
        try {
            repository.save(todo);
            return true;
        }
        catch (Exception e) {
            log.error("Error", e);
            return false;
        }
    }

    public List<Todo> listTodo() {
        List<Todo> todos = new ArrayList<>();
        repository.findAll().forEach(todos::add);
        return todos;
    }
}
