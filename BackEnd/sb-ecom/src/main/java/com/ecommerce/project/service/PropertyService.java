package com.ecommerce.project.service;

import com.ecommerce.project.model.Property;

import java.util.List;

public interface PropertyService {
    List<Property> getAllProperties();
    void createProperty(Property property);

    String deleteProperty(Long PropertyId);

    Property updateProperty(Property property, Long propertyId);
}
