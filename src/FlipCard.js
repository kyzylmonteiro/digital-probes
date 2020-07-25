import React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class FlipCard extends React.Component {
  render() {
    return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img class="card-image" src={"media/"+ this.props.image} alt="Avatar" />
        </div>
        <div class="flip-card-back">
          <h1>{this.props.heading}</h1> 
          <p style={{padding:"10px;", wordWrap:"break-word;"}}>{this.props.text}</p> 
          <Button variant="outlined">
  Link to form
</Button>
        </div>
      </div>
    </div>
    );
  };
}

export default FlipCard;