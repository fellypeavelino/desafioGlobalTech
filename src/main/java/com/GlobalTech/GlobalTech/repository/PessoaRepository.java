/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.GlobalTech.GlobalTech.repository;

import com.GlobalTech.GlobalTech.entity.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author felly
 */
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    
}
