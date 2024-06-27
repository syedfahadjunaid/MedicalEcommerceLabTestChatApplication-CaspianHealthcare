import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG'];

export default function DragDropComponent() {
  const [file, setFile] = useState(null);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      required
    />
  );
}
