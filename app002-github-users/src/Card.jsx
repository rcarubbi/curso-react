import React, {Component} from 'react';
 
class Card extends Component {

    render() {
        return <div style={{ margin: '1em' }}>
        <img width="75" src={this.props.avatar_url} alt="" />
        <div style={{ display: 'inline-block', marginLeft: 10 }}>
            <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{this.props.name}</div>
            <div>{this.props.bio}</div>
        </div>
        <button style={{marginLeft: 10}} onClick={() => this.props.onRemoveCard(this.props.id)}>X</button>
    </div>
    }

}

export default Card;