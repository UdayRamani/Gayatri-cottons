import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import StorageIcon from "@material-ui/icons/Storage";
import IconButton from "@material-ui/core/IconButton";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import LockIcon from "@material-ui/icons/Lock";
import MailIcon from "@material-ui/icons/Mail";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "../styles/Homestyles.css";
import Header from "../components/dashboardheader";
import { Link } from "react-router-dom";
import { Lock, LockFill } from "react-bootstrap-icons";
import fire from "../config/fire";
import moment from "moment";
import Calendar from 'react-calendar';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const today = moment();
  const currentdate = today.format("MMMM Do YYYY");
  const day=today.format("dddd");
  const time=today.format("h:mm:ss a")
  const tidaydate = today.format("dddd, MMMM Do YYYY, h:mm:ss a");
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            GAYATRI COTTON INDUSTRIES
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Purchase Database", "Selling Database"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Link to="/showpurchasedata">
                    <ShoppingCartIcon style={{ color: "#7e7979" }} />
                  </Link>
                ) : (
                  <Link to="/showsellingdata">
                    <AttachMoneyIcon style={{ color: "#7e7979" }} />
                  </Link>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["LogOut", "Register new User"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <LockOpenRoundedIcon
                    style={{ color: "#7e7979" }}
                    onClick={() => fire.auth().signOut()}
                  />
                ) : (
                  <Link to="/register">
                    <PersonAddIcon style={{ color: "#7e7979" }} />
                  </Link>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <div className="divdatebox">
        <label className="datetimehome">{currentdate}</label><br></br>
        <label className="datetimehome">{day}</label><br></br>
        <label className="datetimehome">{time}</label><br></br>
        </div> */}
       
        <div className="nameofcompany">
          <label>GAYATRI COTTON INDUSTRIES</label>
        </div>

        <div className="containerr">
          {/* PurchaseBox */}

          <div
            className="PurchaseBox"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={"purchaselogo"} />
            <Link to="/purchase">
              <div className="purText text1">
                <label>PURACHASE</label>
              </div>{" "}
            </Link>
          </div>

          {/* produactionBox */}

          <div
            className="ProductionBox"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={"productionlogo"} />
            <Link to="/production">
              <div className="purText">
                <label>PRODUCTION</label>
              </div>
            </Link>
          </div>

          {/* sellingBox */}

          <div
            className="sellingBox"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className={"sellinglogo"} />
            <Link to="/selling">
              <div className="purText text3">
                <label>SELLING</label>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
