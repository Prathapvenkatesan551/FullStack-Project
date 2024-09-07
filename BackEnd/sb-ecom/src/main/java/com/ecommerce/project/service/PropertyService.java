package com.ecommerce.project.service;

import com.ecommerce.project.model.Property;

import java.util.List;

public interface PropertyService {

    // Retrieve all properties
    List<Property> getAllProperties();

    // Create a new property
    void createProperty(Property property);

    // Delete a property by ID
    String deleteProperty(Long productId);

    // Update a property
    Property updateProperty(Property property, Long productId);

    // Retrieve a property by its ID
    Property getPropertyById(Long productId); // Method to retrieve a property by ID
}
