package com.teste.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Bsms")


public class mentalidades {
	@GetMapping
public String bsms() {
		return "*Habilidades: "
				+ "- Atenção aos detalhes; "
				+ "- Comunicação; "
				+ "- Trabalho em equipe. "
				+ "- Proatividade; "
				
				+ "*Mentalidades: "
				+ "- Persistência;"
				+ "- Responsabilidade pessoal; "
				+ "- Orientação ao futuro; "
				+ "- Mentalidade de crescimento ";
				
				}
}
