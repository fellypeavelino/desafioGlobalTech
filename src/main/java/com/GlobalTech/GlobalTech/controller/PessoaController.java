/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.GlobalTech.GlobalTech.controller;

import com.GlobalTech.GlobalTech.dto.PessoaDTO;
import com.GlobalTech.GlobalTech.entity.Pessoa;
import com.GlobalTech.GlobalTech.service.PessoaService;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author felly
 */
@RestController
@RequestMapping("/pessoas")
public class PessoaController {
    @Autowired
    private PessoaService pessoaService;

    @PostMapping
    public ResponseEntity<PessoaDTO> incluir(@RequestBody @Valid PessoaDTO pessoaDTO) {
        return ResponseEntity.ok(pessoaService.incluir(pessoaDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PessoaDTO> alterar(@PathVariable Long id, @RequestBody PessoaDTO pessoaDTO) {
        return ResponseEntity.ok(pessoaService.alterar(id, pessoaDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        pessoaService.excluir(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PessoaDTO> pesquisar(@PathVariable Long id) {
        return ResponseEntity.ok(pessoaService.pesquisar(id));
    }

    @GetMapping("/{id}/peso-ideal")
    public ResponseEntity<Double> calcularPesoIdeal(@PathVariable Long id) {
        PessoaDTO pessoaDto = pessoaService.pesquisar(id);
        double pesoIdeal = pessoaService.calcularPesoDtoIdeal(pessoaDto);
        return ResponseEntity.ok(pesoIdeal);
    }
    
    @GetMapping("listar-todos")
    public List<Pessoa> listarPessoas() {
        return pessoaService.listarTodos();
    }
}
