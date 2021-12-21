import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import MailIcon from "@mui/icons-material/Mail";
import Header from "../Component/Header";
import Carousels from "../Component/carousel";
import AlignItemsList from "../Component/List";
import Grid from "@mui/material/Grid";
import GameCard from "../Component/Card";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

const drawerWidth = 60;

export default function ClippedDrawer() {
	const [search, setSearch] = useState(null);
	const handleCallback = (childData) => {
		setSearch(childData);
	};
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Header parentCallback={handleCallback} />
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						border: "",
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "hidden" }}>
					<List>
						<ListItem button sx={{ padding: "20px" }}>
							<ListItemIcon>
								<CottageRoundedIcon />
							</ListItemIcon>
						</ListItem>
						<ListItem button sx={{ padding: "20px" }}>
							<ListItemIcon>
								<StorefrontRoundedIcon />
							</ListItemIcon>
						</ListItem>
						<ListItem button sx={{ padding: "20px" }}>
							<ListItemIcon>
								<LightbulbRoundedIcon />
							</ListItemIcon>
						</ListItem>
						<ListItem button sx={{ padding: "20px" }}>
							<ListItemIcon>
								<InfoRoundedIcon />
							</ListItemIcon>
						</ListItem>
					</List>
				</Box>
			</Drawer>
			<Box
				style={{ marginLeft: "10%" }}
				component="main"
				sx={{ flexGrow: 1, p: 3 }}
			>
				<Toolbar />
				<Grid style={{ width: "80%" }} container spacing={1}>
					<Grid item xs={8}>
						<Carousels />
					</Grid>
					<Grid item xs={4}>
						<AlignItemsList />
					</Grid>
					<Grid item xs={12}>
						<GameCard srch={search} />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
