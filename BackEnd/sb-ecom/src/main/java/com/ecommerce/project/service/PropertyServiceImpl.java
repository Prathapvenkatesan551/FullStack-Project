package com.ecommerce.project.service;

import com.ecommerce.project.model.Property;
import com.ecommerce.project.repositories.PropertyRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;
    private Long nextId = 1L;  // Not really needed if you use @GeneratedValue in Property

    public PropertyServiceImpl(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @Override
    public void createProperty(Property property) {
        propertyRepository.save(property);  // propertyId is auto-generated, no need to manually set it
    }

    @Override
    public String deleteProperty(Long propertyId) {
        Optional<Property> propertyOptional = propertyRepository.findById(propertyId);

        if (propertyOptional.isPresent()) {
            propertyRepository.deleteById(propertyId);
            return "Property with propertyId: " + propertyId + " deleted successfully !!";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Property not found");
        }
    }

    @Override
    public Property updateProperty(Property property, Long propertyId) {
        Property existingProperty = propertyRepository.findById(propertyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Property not found"));

        // Update the existing property with the new values
        existingProperty.setPlace(property.getPlace());
        existingProperty.setLocation(property.getLocation());
        existingProperty.setArea(property.getArea());
        existingProperty.setNumberOfRooms(property.getNumberOfRooms());
        existingProperty.setSellerName(property.getSellerName());
        existingProperty.setSellerEmail(property.getSellerEmail());
        existingProperty.setSellerAddress(property.getSellerAddress());
        existingProperty.setSellerMobileNumber(property.getSellerMobileNumber());
        existingProperty.setCost(property.getCost());

        return propertyRepository.save(existingProperty);
    }
}