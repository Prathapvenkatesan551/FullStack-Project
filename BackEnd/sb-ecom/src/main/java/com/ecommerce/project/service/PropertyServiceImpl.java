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

    public PropertyServiceImpl(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    @Override
    public void createProperty(Property property) {
        propertyRepository.save(property);
    }

    @Override
    public String deleteProperty(Long propertyId) {
        Optional<Property> propertyOptional = propertyRepository.findById(propertyId);

        if (propertyOptional.isPresent()) {
            propertyRepository.deleteById(propertyId);
            return "Property with ID " + propertyId + " deleted successfully.";
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Property with ID " + propertyId + " not found.");
        }
    }

    @Override
    public Property updateProperty(Property property, Long propertyId) {
        Property existingProperty = propertyRepository.findById(propertyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Property with ID " + propertyId + " not found."));

        // Update the existing property with the new values
        existingProperty.setPlace(property.getPlace());
        existingProperty.setLocation(property.getLocation());
        existingProperty.setArea(property.getArea());
        existingProperty.setNumberOfRooms(property.getNumberOfRooms());
        existingProperty.setSellerName(property.getSellerName());
        existingProperty.setSellerEmail(property.getSellerEmail());
        existingProperty.setSellerMobileNumber(property.getSellerMobileNumber());
        existingProperty.setSellerAddress(property.getSellerAddress());
        existingProperty.setCost(property.getCost());

        // Update image paths if provided
        existingProperty.setPhoto1(property.getPhoto1() != null ? property.getPhoto1() : existingProperty.getPhoto1());
        existingProperty.setPhoto2(property.getPhoto2() != null ? property.getPhoto2() : existingProperty.getPhoto2());
        existingProperty.setPhoto3(property.getPhoto3() != null ? property.getPhoto3() : existingProperty.getPhoto3());
        existingProperty.setPhoto4(property.getPhoto4() != null ? property.getPhoto4() : existingProperty.getPhoto4());
        existingProperty.setPhoto5(property.getPhoto5() != null ? property.getPhoto5() : existingProperty.getPhoto5());

        return propertyRepository.save(existingProperty);
    }

    @Override
    public Property getPropertyById(Long propertyId) {
        return propertyRepository.findById(propertyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Property with ID " + propertyId + " not found."));
    }
}
