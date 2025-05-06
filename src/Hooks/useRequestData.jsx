import axios from 'axios';
import { useState } from 'react';

const useRequestData = () => {
    // State hooks for managing request state
    const [isLoading, setIsLoading] = useState(false);  // Loading state
    const [data, setData] = useState(null);  // Data returned from the API
    const [error, setError] = useState(false);  // Error state

    // Function to make an API request
    const makeRequest = async (
        url, 
        method = "GET", 
        headers = null, 
        params = null, 
        body = null
    ) => {
        let response;

        setIsLoading(true);  // Set loading state to true

        // Optional delay to simulate waiting for data (1.5 seconds)
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
            // Switch statement for handling different HTTP methods
            switch (method) {
                case "GET":
                    response = await axios.get(url, { headers, params });
                    break;
                case "DELETE":
                    response = await axios.delete(url, { headers, params });
                    break;
                case "POST":
                    response = await axios.post(url, body, { headers, params });
                    break;
                case "PUT":
                    response = await axios.put(url, body, { headers, params });
                    break;
                case "PATCH":
                    response = await axios.patch(url, body, { headers, params });
                    break;
                default:
                    throw new Error("Unsupported method - Only GET is accepted currently.");
            }

            // Update state with data and reset error state
            setData(response.data);
            setError(false);

        } catch (err) {
            // Handle error and reset data
            setError(true);
            setData(null);
            console.error(err);
        } finally {
            // Set loading state to false when request finishes
            setIsLoading(false);
        }
    };

    return { makeRequest, isLoading, data, error };
};

export default useRequestData;
