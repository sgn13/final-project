import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';


class ReactUploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/api/img", formData, config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] });
    }
    onSubmit(e) {
        axios.get("/api/img/");

    }

    render() {
        return (
            <div className="Upload">
                <form onSubmit={this.onFormSubmit}>
                    <h1>File Upload</h1>
                    <input type="file" name="myImage" onChange={this.onChange} />
                    <button type="submit">Upload</button>
                </form>
                <button onSubmit={this.onSubmit}>Show Your Cards</button>
            </div>
        )
        console.log("Upload");
    }
}
export default ReactUploadImage;