package com.ecommerce.project.repositories;
import com.ecommerce.project.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PropertyRepository extends JpaRepository<Property, Long> {

}
