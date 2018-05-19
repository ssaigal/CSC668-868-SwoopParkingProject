/** index.js
 * Swoop
 * Created by Alaric Gonzales
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Home from "./components/home/Home";
import {RegistrationArea} from "./components/registration/Register";
import {Login} from "./components/login/Login";
import {SwooperSearch} from "./components/swooper/SwooperSearch";
import {Help} from "./components/help/Help";
import {Team} from "./components/team/Team";
import {Policy} from "./components/policy/Policy";
import {LocationSearch} from "./components/search/LocationSearch";
import {Transaction} from "./components/parking/ParkingTransaction";
import {GettingStarted} from "./components/gettingstarted/GettingStarted";

class Main extends React.Component {
	render() {
		// console.log("Index rerendered()");
		return(
			<Router>
				<App>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path="/register" component={RegistrationArea}/>
						<Route path="/login" component={Login}/>
						<Route path="/swooper" component={SwooperSearch}/>
						<Route path="/team" component={Team}/>
						<Route path="/policy" component={Policy}/>
						<Route path="/help" component={Help}/>
						<Route path="/search" component={LocationSearch}/>
						<Route path="/transaction" component={Transaction}/>
						<Route path={"/gettingstarted"} component={GettingStarted}/>
					</Switch>
				</App>
			</Router>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
