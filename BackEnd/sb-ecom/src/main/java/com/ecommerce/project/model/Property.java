package com.ecommerce.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "properties")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @NotBlank
    private String place;

    @NotBlank
    private String location;

    @NotBlank
    private String area;

    @NotNull
    private int numberOfRooms;

    @NotBlank
    private String sellerName;

    @NotBlank
    private String sellerEmail;

    @NotNull
    private long sellerMobileNumber;

    @NotBlank
    private String sellerAddress;

    @NotNull
    private long cost;

    // Fields to store image paths
    private String photo1;
    private String photo2;
    private String photo3;
    private String photo4;
    private String photo5;

}
