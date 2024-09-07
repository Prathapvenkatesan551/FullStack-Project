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

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    private static final String UPLOAD_DIR = "uploaded-images";

    static {
        File uploadDir = new File(UPLOAD_DIR);
        if (!uploadDir.exists()) {
            uploadDir.mkdir();
        }
    }

    @GetMapping("/public/properties")
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyService.getAllProperties();
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }

    @PostMapping("/public/properties")
    public ResponseEntity<String> createOrUpdateProperty(
            @ModelAttribute @Valid Property property,
            @RequestParam(value = "files", required = false) List<MultipartFile> files) {

        try {
            if (files != null) {
                // Ensure exactly 5 files are uploaded
                if (files.size() != 5) {
                    return new ResponseEntity<>("You must upload exactly 5 images.", HttpStatus.BAD_REQUEST);
                }

                // Save files and update property
                String[] photoFields = { "photo1", "photo2", "photo3", "photo4", "photo5" };
                for (int i = 0; i < files.size(); i++) {
                    MultipartFile file = files.get(i);
                    String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
                    Path path = Paths.get(UPLOAD_DIR, fileName);
                    Files.write(path, file.getBytes());

                    // Update the property object with the file path
                    switch (i) {
                        case 0 -> property.setPhoto1(fileName);
                        case 1 -> property.setPhoto2(fileName);
                        case 2 -> property.setPhoto3(fileName);
                        case 3 -> property.setPhoto4(fileName);
                        case 4 -> property.setPhoto5(fileName);
                    }
                }
            }

            // Save or update the property
            if (property.getProductId() == null) {
                propertyService.createProperty(property);
                return new ResponseEntity<>("Property created successfully.", HttpStatus.CREATED);
            } else {
                propertyService.updateProperty(property, property.getProductId());
                return new ResponseEntity<>("Property updated successfully.", HttpStatus.OK);
            }
        } catch (IOException e) {
            return new ResponseEntity<>("Error uploading files: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/admin/properties/{productId}")
    public ResponseEntity<String> deleteProperty(@PathVariable Long productId) {
        try {
            String status = propertyService.deleteProperty(productId);
            return ResponseEntity.status(HttpStatus.OK).body(status);
        } catch (ResponseStatusException e) {
            return new ResponseEntity<>(e.getReason(), e.getStatusCode());
        }
    }
}
