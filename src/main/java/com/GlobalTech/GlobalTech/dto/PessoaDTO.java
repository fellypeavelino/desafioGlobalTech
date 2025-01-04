/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.GlobalTech.GlobalTech.dto;

import com.GlobalTech.GlobalTech.enumerated.Sexo;
import jakarta.validation.constraints.NotNull;
import java.util.Date;
import lombok.Data;

/**
 *
 * @author felly
 */
@Data
public class PessoaDTO {
    private Long id;
    @NotNull(message = "O campo 'nome' não pode ser nulo.")
    private String nome;
    @NotNull(message = "O campo 'dataNascimento' não pode ser nulo.")
    private Date dataNascimento;
    @NotNull(message = "O campo 'cpf' não pode ser nulo.")
    private String cpf;
    @NotNull(message = "O campo 'sexo' não pode ser nulo.")
    private Sexo sexo;
    @NotNull(message = "O campo 'altura' não pode ser nulo.")
    private float altura;
    @NotNull(message = "O campo 'peso' não pode ser nulo.")
    private float peso;
}
