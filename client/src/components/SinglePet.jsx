import React, { Component } from 'react';

class SinglePet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: props.expand,
    };
  }

  onClick(e) {
    e.preventDefault();
    this.setState({ expand: !this.state.expand });
  }

  render() {
    const { pet } = this.props;
    return (
      <div
        id="petCard"
        className={
        this.state.expand
        ? 'expanded'
        : 'collapsed'}
        onClick={this.onClick.bind(this)}
      >
        <div>
          <img
            src={
      pet.media.photos
      ? pet.media.photos.photo[3].$t
      : 'https://www.staticwhich.co.uk/static/images/products/no-image/no-image-available.png'}
            className="petPic rounded"
            alt="pet profile pic"
          />
        </div>
        <div>
          <h1>{pet.name.$t}</h1>
          <h2>{`${pet.age.$t}, ${pet.size.$t === 'L' ? 'Large' : pet.size.$t === 'M' ? 'Medium' : 'Small'}-sized ${pet.sex.$t === 'M' ? ' Male' : ' Female'}`}</h2>
          <h3>{(Array.isArray(pet.breeds.breed)
            ? pet.breeds.breed.map(el => el.$t).join(', ')
            : pet.breeds.breed.$t
          )}
          </h3>
        </div>
        <div>
          <p>{pet.description.$t.length > 600 ? `${pet.description.$t.slice(0, 600)}...` : pet.description.$t}</p>
        </div>
      </div>
    );
  }
}

export default SinglePet;