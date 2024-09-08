package com.ecommerce.project.service;

import com.ecommerce.project.model.Property;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface PropertyService {
    List<Property> getAllProperties();
    void createProperty(Property property);

    String deleteProperty(Long PropertyId);

    Property updateProperty(Property property, Long propertyId);

    Property updateImage(long propertyId, MultipartFile image) throws IOException;
}