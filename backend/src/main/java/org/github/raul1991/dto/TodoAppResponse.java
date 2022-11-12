package org.github.raul1991.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TodoAppResponse {
    private String message;
    private int code;
}
