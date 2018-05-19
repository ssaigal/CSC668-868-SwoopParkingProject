/** Team.js
 * Swoop
 * Created by Alaric Gonzales
 */
import React from 'react';
import { Paper, Typography, Grid} from 'material-ui';

/**
 * The TeamMember component takes in a name and github prop (or argument) and displays them in a fixed layout
 * The caller of this component must provide the name and github for this component to render correctly
 */
const TeamMember = (props) => {
	return(
		<Grid item xs={12} sm={6}>
			<Paper>
				<Typography color={"primary"} align={"center"} variant={"headline"} style={{padding: "18px"}}>
					<b>{props.name}</b>
				</Typography>

				<Typography color={"primary"} align={"center"} variant={"subheading"} style={{padding: "18px"}}>
					GitHub
					<div onClick={() => {
						window.open(props.github, '_blank')
					}}>{props.github}</div>
				</Typography>
			</Paper>
		</Grid>
	)
};

/**
 * The Team component is rendered when the user clicks on the "Meet The Team" button located in the Footer component.
 * This component renders a TeamMember component for each team member involved in this project. It passes in the
 * team member's name and a link to the team member's GitHub page.
 */
const Team = () => (
	<React.Fragment>
		<TeamMember name={"Shalaka Aigal"} github={"https://github.com/ssaigal"}/>
		<TeamMember name={"Isak Kvalvaag"} github={"https://github.com/GiantBanana"}/>
		<TeamMember name={"Alaric Gonzales"} github={"https://github.com/AlaricGonzales"}/>
		<TeamMember name={"Ian Dennis"} github={"https://github.com/idennis7"}/>
		<TeamMember name={"Matthew Berkman"} github={"https://github.com/Layton1"}/>
		<TeamMember name={"Alex Bautista"} github={"https://github.com"}/>
	</React.Fragment>
);

export { Team }