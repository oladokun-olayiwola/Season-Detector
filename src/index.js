import React from 'react'
import ReactDOM from 'react-dom/client'
import SeasonDetail from './SeasonDetail';
import Spinner from './Spinner'
import Error from './Error'

class App extends React.Component{
    state = {lat : null, errorMessage: ''}


componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message })
        );
}

renderContent(){
     if (this.state.lat !== null && this.state.errorMessage === "") {
       return <SeasonDetail lat={this.state.lat} />;
     }
     if (this.state.lat === null && this.state.errorMessage !== "") {
       return (
         <Error
           head="Error: Geolocation access denied"
           message="Please allow access to geolocation."
         />
       );
     }
     return <Spinner />;
}

    render() {
       
        return <div>{this.renderContent()}</div>
        
    }



}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)
