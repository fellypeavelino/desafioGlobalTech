/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Enum.java to edit this template
 */
package com.GlobalTech.GlobalTech.enumerated;

/**
 *
 * @author felly
 */
public enum Sexo {
    MASCULINO("M"),
    FEMININO("F");

    private final String codigo;

    Sexo(String codigo) {
        this.codigo = codigo;
    }

    public String getCodigo() {
        return codigo;
    }

    public static Sexo fromCodigo(String codigo) {
        for (Sexo sexo : Sexo.values()) {
            if (sexo.getCodigo().equalsIgnoreCase(codigo)) {
                return sexo;
            }
        }
        throw new IllegalArgumentException("Código inválido para Sexo: " + codigo);
    }    
}
