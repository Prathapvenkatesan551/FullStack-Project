package com.ecommerce.project.controller;

import com.ecommerce.project.model.Property;
import com.ecommerce.project.service.PropertyService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.io.IOException;
import java.util.List;

//@CrossOrigin("*")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @GetMapping("/public/properties")
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyService.getAllProperties();
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }

    @PostMapping("/public/properties")
    public ResponseEntity<String> createProperty(@Valid @RequestBody Property property) {
        propertyService.createProperty(property);
        return new ResponseEntity<>("Property added successfully", HttpStatus.CREATED);
    }

    @DeleteMapping("/admin/properties/{propertyId}")
    public ResponseEntity<String> deleteProperty(@PathVariable Long propertyId) {
        try {
            String status = propertyService.deleteProperty(propertyId);
            return ResponseEntity.status(HttpStatus.OK).body(status);
        } catch (ResponseStatusException e) {
            return new ResponseEntity<>(e.getReason(), e.getStatusCode());
        }
    }

    @PutMapping("/public/properties/{propertyId}")
    public ResponseEntity<String> updateProperty(@RequestBody Property property,
                                                 @PathVariable Long propertyId) {
        try {
            Property savedProperty = propertyService.updateProperty(property, propertyId);
            return new ResponseEntity<>("Property with property id: " + propertyId + " updated successfully", HttpStatus.OK);
        } catch (ResponseStatusException e) {
            return new ResponseEntity<>(e.getReason(), e.getStatusCode());
        }
    }

    @PutMapping("/public/{propertyId}/image")
    public ResponseEntity<Property> updateImage(@PathVariable long propertyId
                                            , @RequestParam("image")MultipartFile image) throws IOException {
        Property updateProperty=propertyService.updateImage(propertyId,image);
        return new ResponseEntity<>(updateProperty,HttpStatus.OK);
    }
}