import React, {Component} from 'react';
import {Button, Input} from 'mdbreact';
import Github from './Github';
import Scraper from "../scraper/Scraper";
import axios from "axios/index";
import {BarLoader} from 'react-spinners';
import toastr from 'toastr';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      formId: '',
      loadingForm: false,
      scrapedForm: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFormData() {
    this.setState({
      loadingForm: true
    });
    axios.get('/api/scrapeGoogleForm/?formId=' + this.state.formId)
      .then(response => {
        console.log(response);
        this.setState({
          scrapedForm: response.data,
          loadingForm: false
        })
      })
      .catch(error => {
        this.setState({
          loadingForm: false
        });
        toastr.error(error.response.data);
      });
  }

  handleChange(e) {
    this.setState({
      formId: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getFormData();
  }

  render() {
    const {scrapedForm, loadingForm} = this.state;
    return (
      <div className="col d-flex flex-column justify-content-center align-items-center">
        <h2 className="mt-5 mb-2">Google Form Scraper</h2>
        <Github/>
        <Input label="Google Form Id"
               name="formId"
               style={{width: '300px'}}
               onChange={this.handleChange}/>
        <Button color="blue"
                size="sm"
                className="mb-0"
                onClick={this.handleSubmit}>Go</Button>
        {loadingForm &&
        <div className="mt-5">
          <BarLoader
            color={'#1976d2'}
            loading={loadingForm}
          />
        </div>}
        {scrapedForm &&
        <Scraper formData={scrapedForm}/>}
      </div>
    )
  }
}

export default HomePage;