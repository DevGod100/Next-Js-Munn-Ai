"use client"
import React, { useState } from 'react';
import { Button } from '../ui/button';

function ClientUploadImages() {
  const [file, setFile] = useState(null);

  // Function to handle file input change
  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!file) {
      alert('Please select the metadata.jsonl file.');
      return;
    }
    const formData = new FormData();
    formData.append('metadata', file);
    
    console.log('This is after "formData = new FormData" on client side:', file);
    try {
      // Send the formData to your backend endpoint for processing
      const response = await fetch('http://localhost:3001/api/upload', {
        method: 'POST',
        body: formData,
      });
      console.log('This is after API call on client side:', file);

      if (response.ok) {
        alert('Metadata sent from client.');
      } else {
        alert('Failed to upload metadata from client.');
      }
    } catch (error) {
      console.error('Error uploading metadata from client:', error);
      alert('An error occurred while uploading metadata from client.');
    }
  };

  return (
    <div>
      <h2>Upload metadata.json</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            accept=".jsonl"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <Button type="submit">Confirm</Button>
        </div>
      </form>
    </div>
  );
}

export default ClientUploadImages;