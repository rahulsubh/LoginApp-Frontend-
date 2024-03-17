import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import UserGridComponent from "./UserGridComponent";
import UserGridComponent2 from "./UserGridComponent2";
import { useLocation } from "react-router-dom";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showGrid, setShowGrid] = useState(false);
  const [showGridAssociates, setShowGridAssociates] = useState(false);
  // const [uploadStatus, setUploadStatus] = useState("");
  const location = useLocation();
  const { state } = location;
  const { role } = state || {};
  // const prop1 = location.state.prop1;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleShowUsers = (e) => {
    setShowGrid(!showGrid);
  };
  const handleShowAssociates = (e) => {
    setShowGridAssociates(!showGridAssociates);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.info("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // setUploadStatus(response.data);
      toast.success(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      // setUploadStatus("Failed to upload file.");
      toast.error("Failed to upload file.");
    }
  };

  return (
    <div>
      <div>
        <Navbar heading="File Upload" name="Logout" path="/" />
      </div>
      <div className="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                {/* <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p> */}

                <div>
                  <label class="form-label" for="customFile">
                    Upload the Excel File
                  </label>

                  <input
                    type="file"
                    class="form-control"
                    id="customFile"
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mt-3 text-center">
                  <button class="btn btn-info" onClick={handleUpload}>
                    Upload
                  </button>
                  {role === "admin" && (
                    <button class="btn btn-info ml-3" onClick={handleShowUsers}>
                      {showGrid
                        ? "Hide Registered User"
                        : "Show Registered User"}
                    </button>
                  )}
                  <button
                    class="btn btn-info ml-3"
                    onClick={handleShowAssociates}
                  >
                    {showGrid ? "Hide Associate IDs" : "Show Associate IDs"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="align-content-lg-center  mt-4">
          {showGrid && <UserGridComponent />}
          {showGridAssociates && <UserGridComponent2 />}
        </div>

        {/* <div>
          <p>{uploadStatus}</p>
        </div> */}
      </div>
    </div>
  );
};

export default FileUpload;
