/** Help.js
 * Swoop
 * Created by Alaric Gonzales
 *
 * The purpose of this component is to allow the user to send any feedback or view the source code of this project,
 * in case he or she would like to contribute (or contact any specific developer).
 */
import React from 'react';
import { Paper, Typography, Grid} from 'material-ui';

const Help = () => (
	<Grid item xs={12} sm={10}>
		<Paper>
			<Typography color={"primary"} align={"center"} variant={"headline"} style={{padding: "18px"}}>
				<b>Have you discovered a bug, or is the site not working as intended?</b>
				<br/>
				View the source code for this project at
				<br/>
				<code>https://github.com/ssaigal/CSC668-868-SwoopParkingProject</code>
			</Typography>
		</Paper>
	</Grid>
);
export { Help }