package org.github.raul1991.repository;

import org.github.raul1991.dto.Todo;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "todos", path = "todos")
public interface TodoRepository extends PagingAndSortingRepository<Todo, Integer> {
    List<Todo> findAllById(@Param("id") int userId);
}
