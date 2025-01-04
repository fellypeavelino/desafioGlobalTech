/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.GlobalTech.GlobalTech.service;

import com.GlobalTech.GlobalTech.dto.PessoaDTO;
import com.GlobalTech.GlobalTech.entity.Pessoa;
import com.GlobalTech.GlobalTech.enumerated.Sexo;
import com.GlobalTech.GlobalTech.repository.PessoaRepository;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author felly
 */
@Service
public class PessoaService {
    @Autowired
    private PessoaRepository pessoaRepository;
    
    public PessoaDTO incluir(PessoaDTO pessoaDTO) {
        Pessoa pessoa = convertToEntity(pessoaDTO);
        Pessoa savedPessoa = pessoaRepository.save(pessoa);
        return convertToDTO(savedPessoa);
    }

    public PessoaDTO alterar(Long id, PessoaDTO pessoaDTO) {
        Pessoa pessoa = pessoaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pessoa não encontrada"));
        pessoa.setNome(pessoaDTO.getNome());
        pessoa.setDataNascimento(pessoaDTO.getDataNascimento());
        pessoa.setCpf(pessoaDTO.getCpf());
        pessoa.setSexo(pessoaDTO.getSexo());
        pessoa.setAltura(pessoaDTO.getAltura());
        pessoa.setPeso(pessoaDTO.getPeso());
        return convertToDTO(pessoaRepository.save(pessoa));
    }

    public void excluir(Long id) {
        pessoaRepository.deleteById(id);
    }

    public PessoaDTO pesquisar(Long id) {
        Pessoa pessoa = pessoaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pessoa não encontrada"));
        return convertToDTO(pessoa);
    }

    public double calcularPesoIdeal(Pessoa pessoa) {
        if (pessoa.getSexo() == Sexo.MASCULINO) {
            return (72.7 * pessoa.getAltura()) - 58;
        }
        return (62.1 * pessoa.getAltura()) - 44.7;
    }

    public double calcularPesoDtoIdeal(PessoaDTO pessoaDto) {
        Pessoa pessoa = this.convertToEntity(pessoaDto);
        return this.calcularPesoIdeal(pessoa);
    }    
    
    public Pessoa convertToEntity(PessoaDTO dto) {
        return new ModelMapper().map(dto, Pessoa.class);
    }

    public PessoaDTO convertToDTO(Pessoa pessoa) {
        return new ModelMapper().map(pessoa, PessoaDTO.class);
    }
    
    public List<Pessoa> listarTodos() {
        return pessoaRepository.findAll();
    }
}
