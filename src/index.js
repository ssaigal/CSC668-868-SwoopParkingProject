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
import {RequestArea} from "./components/request/SwoopRequest";
import {SwooperSearch} from "./components/swooper/SwooperSearch";
import {Help} from "./components/help/Help";
import {Team} from "./components/team/Team";
import {Policy} from "./components/policy/Policy";

class Main extends React.Component {
	render() {
		return(
			<Router>
				<App>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path="/register" component={RegistrationArea}/>
						<Route path="/request" component={RequestArea}/>
						<Route path="/login" component={Login}/>
						<Route path="/swooper" component={SwooperSearch}/>
						<Route path="/team" component={Team}/>
						<Route path="/policy" component={Policy}/>
						<Route path="/help" component={Help}/>
					</Switch>
				</App>
			</Router>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
