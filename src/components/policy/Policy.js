/** Policy.js
 * Swoop
 * Created by Alaric Gonzales
 *
 * The purpose of this component is to provide a disclaimer to potential users of this project.
 */
import React from 'react';
import { Paper, Typography, Grid} from 'material-ui';

const Policy = () => (
	<Grid item sm={10}>
		<Paper>
			<Typography color={"primary"} align={"center"} variant={"headline"} style={{padding: "18px"}}>
				This is a demo project made for
				<br/>
				<b>CSC 668-868 : Advanced Object Oriented Software Design and Development Spring 2018</b>
			</Typography>
		</Paper>
	</Grid>
);

export { Policy }