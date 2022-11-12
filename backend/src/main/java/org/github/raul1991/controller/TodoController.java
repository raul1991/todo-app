package org.github.raul1991.controller;

import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.connector.Response;
import org.github.raul1991.dto.Todo;
import org.github.raul1991.dto.TodoAppResponse;
import org.github.raul1991.services.TodoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

@RestController
@Slf4j
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

    @GetMapping("/todos/users/{id}")
    public List<Todo> listTodosForAUserId(@PathVariable(name = "id") String userId) {
        return todoService.listTodo();
    }

    @PostMapping("/todos/users/{userId}/todo")
    public TodoAppResponse saveTodoForAUserId(@PathVariable(name = "userId") String userId, @RequestBody Todo todo) {
        log.info("Saving {} for user {}", todo, userId);
        boolean isSaved = todoService.saveTodo(todo);
        if (isSaved) {
            return new TodoAppResponse("Saved the todo", HttpServletResponse.SC_OK);
        }
        return new TodoAppResponse("Todo couldn't be saved", HttpServletResponse.SC_BAD_REQUEST);
    }
}
