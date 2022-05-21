import React, { Component } from "react";

export default class Random extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      person: null,
    };
  }
  async componentDidMount() {
    const url = "https://randomuser.me/api/";

    const Responses = await fetch(url);
    const Res = await Responses.json();
    console.warn(Res.results[0]);

    this.setState({
      loading: false,
      person: Res.results[0],
      //person: null
    });
  }
  render() {
    return (
    <div>
      {this.state.loading?<div>loadding---------</div>:(

      <>
        <div>{this.state.person.email}</div>
        <div>{this.state.person.id.name}</div>
        <div>
          <img src={this.state.person.picture.large} width="100px"></img>
        </div>
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>{" "}
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>
      </>
      )}
      </div> );
    
  }
  
}
