package com.example.procospring.controller;

import com.example.procospring.service.YourService;
import com.example.procospring.user.YourEntity;
import com.example.procospring.user.SearchCritera;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CheckController {

    @Autowired
    private YourService yourService;

    @PostMapping("/search")

    public List<YourEntity> search(@RequestBody SearchCritera criteria) {
        // 검색 조건을 받은 후 콘솔에 출력
        System.out.println("Received search criteria:");
        System.out.println("Country: " + criteria.getCountry());
        System.out.println("Grade: " + criteria.getGrade());
        System.out.println("Language: " + criteria.getLanguage());
        System.out.println("Language2: " + criteria.getLanguage2());
        System.out.println("Dormitory: " + criteria.getDormitory());

        // 검색 서비스 호출
        return yourService.search(criteria.getCountry(), criteria.getGrade(), criteria.getLanguage(), criteria.getLanguage2(), criteria.getDormitory());
    }
}
