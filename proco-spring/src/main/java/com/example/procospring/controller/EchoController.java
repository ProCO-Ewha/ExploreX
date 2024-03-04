package com.example.procospring.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class EchoController {

    @CrossOrigin(origins = "http://localhost:3000") // React 애플리케이션의 주소에 맞게 수정하세요
    @PostMapping("/echo")
    public String echo(@RequestBody String message) {
        // 받은 메시지를 그대로 반환
        return "Spring Boot에서 받은 메시지: " + message;
    }
}
