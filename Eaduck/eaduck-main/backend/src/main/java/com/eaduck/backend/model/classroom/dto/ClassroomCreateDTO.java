package com.eaduck.backend.model.classroom.dto;

import lombok.Data;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Data
public class ClassroomCreateDTO {
    @NotBlank(message = "O nome da sala é obrigatório")
    @Size(min = 3, message = "O nome deve ter pelo menos 3 caracteres")
    private String name;

    @NotBlank(message = "O ano letivo é obrigatório")
    private String academicYear;

    private List<Long> teacherIds;
} 