import React from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

class Help extends React.Component {
    componentDidMount() {
        ToastsStore.success('Welcome to help page');
    }
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <h2 className="p-1 border rounded d-inline">My name is Pratik Manta</h2>
                </div>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>
            </div>
        )
    }
}

export default Help