import React from 'react';

class Icon extends React.Component {
  render() {
    return (
      <i className="material-icons" style={{
                                            color: this.props.color,
                                            fontSize: this.props.size
        }}>
        {this.props.name}
      </i>
    );
  }
}

Icon.defautProps = {
  color: 'black',
  size: 24,
  name: 'star' 
};

export default Icon;