import React from 'react'
 
export default class SampleComponent extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}!
            </div>
        );
    }
};