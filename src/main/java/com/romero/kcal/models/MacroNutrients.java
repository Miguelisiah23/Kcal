package com.romero.kcal.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "macros")
@Getter
@Setter
public class MacroNutrients {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String diet;
    @Column
    private String goal;
    @Column
    private int calories;
    @Column
    private int protein;
    @Column
    private int carbs;
    @Column
    private int fat;

    @OneToOne
    private AppUser user;

    public MacroNutrients() {
    }

    public MacroNutrients(String diet, String goal, int calories, int protein, int carbs, int fat) {
        this.diet = diet;
        this.goal = goal;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }
    public MacroNutrients(String diet,int calories, int protein, int carbs, int fat) {
        this.diet = diet;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }
}
