package com.romero.kcal.repositories;

import com.romero.kcal.models.MacroNutrients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MacroRepository extends JpaRepository<MacroNutrients,Long> {

}
