package com.teste.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/objetivosdasemana")
public class objetivosdasemana {
	
	@GetMapping
	public String objetivos() {
	return "Meus objetivos de aprendizagem da Semana:"
			
		+"-Realizar todas as atividades solicitas"
		+" Aprender o conteúdo que ocorreu durante a semana"
		+"desenvolver minhas habilidades de desenvolvedor e continuar o projeto integrador";
	}
		
	
}


