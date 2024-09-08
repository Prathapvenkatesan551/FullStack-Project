package com.ecommerce.project.service;

import com.ecommerce.project.model.Property;
import com.ecommerce.project.repositories.PropertyRepository;
import exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;
    @Autowired
    private ModelMapper modelMapper;

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

    @Override
    public Property updateImage(long propertyId, MultipartFile image) throws IOException {
        Property fromDb=propertyRepository.findById(propertyId)
                .orElseThrow(() -> {
                    return new ResourceNotFoundException("property", "id", propertyId);
                });
        String path="images/";
        String fileName=uploadImage(path,image);
        fromDb.setImage(fileName);
        Property updatedProperty=propertyRepository.save(fromDb);
        return modelMapper.map(updatedProperty,Property.class);


    }

    private String uploadImage(String path, MultipartFile image) throws IOException {
        String originalFileName=image.getOriginalFilename();

        String randomId= UUID.randomUUID().toString();
        String fileName=randomId.concat(originalFileName.substring(originalFileName.lastIndexOf(".")));
        String filePath=path+ File.separator+fileName;
        File folder=new File(path);
        if(!folder.exists())
            folder.mkdir();

        Files.copy(image.getInputStream(), Paths.get(filePath));
        return fileName;
    }
}