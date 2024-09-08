import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/public/categories";
const REST_API_BASE_URL_PROPERTY = "http://localhost:8080/api/public/properties";
const REST_API_BASE_URL_DELETE_PROPERTY = "http://localhost:8080/api/admin/properties";
const REST_API_BASE_URL_IMAGE_UPLOAD = "http://localhost:8080/api/public";

export const GetUsers = () => axios.get(REST_API_BASE_URL);
export const SignupService = (categories) => axios.post(REST_API_BASE_URL, categories);
export const GetProperties = () => axios.get(REST_API_BASE_URL_PROPERTY);
export const PropertyService = (properties) => axios.post(REST_API_BASE_URL_PROPERTY, properties);
export const DeleteProperty = (propertyId) => axios.delete(`${REST_API_BASE_URL_DELETE_PROPERTY}/${propertyId}`);
export const UpdateProperty = (propertyId,property) => axios.put(`${REST_API_BASE_URL_PROPERTY}/${propertyId}`,property);
export const UploadDp = async (propertyId, imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile); // Append the image file to the form data

    try {
        // Construct the URL with the propertyId
        const url = `${REST_API_BASE_URL_IMAGE_UPLOAD}/${propertyId}/image`;

        const response = await axios.put(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Set content type as form-data
            },
        });
        console.log("Image uploaded successfully", response.data);
        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
};