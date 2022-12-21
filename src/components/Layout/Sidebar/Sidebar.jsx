// import next
import React from "react";
import Image from "next/image";
// import mui
import { Card, CardContent, Stack, Typography } from "@mui/material";

import List from "@mui/material/List";

// import images
import Logo from "../../../assets/Header.svg";
import Home from "../../../assets/home.svg";
import Meals from "../../../assets/meals.svg";
import Requests from "../../../assets/requests.svg";
import Settings from "../../../assets/settings.svg";
import Signout from "../../../assets/signOut.svg";
import Subscriptions from "../../../assets/subscriptions.svg";
import Coupons from "../../../assets/coupons.png";
import Customers from "../../../assets/customers.svg";
import Employees from "../../../assets/employees.svg";
import Financial from "../../../assets/financial.svg";

// import scss
import styles from "./Sidebar.module.scss";

// import components
import SingleMenu from "./common/SingleMenu";
import DropDownMenu from "./common/DropDownMenu";

// import data
import {
  employeesData,
  mealsData,
  requestsData,
  settingsData,
  subscriptionsData,
} from "./fakedata";

const Sidebar = () => {
  const [requests, setRequests] = React.useState(false);
  const [subscriptions, setSubscriptions] = React.useState(false);
  const [meals, setMeals] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  const [employees, setEmployees] = React.useState(false);

  const handleRequestsClick = () => {
    setRequests(!requests);
  };
  const handleSubscriptionsClick = () => {
    setSubscriptions(!subscriptions);
  };
  const handleMealsClick = () => {
    setMeals(!meals);
  };
  const handleSettingsClick = () => {
    setSettings(!settings);
  };
  const handleEmployeesClick = () => {
    setEmployees(!employees);
  };

  return (
    <Card className={styles._wrapper}>
      {/* logo wrapper start */}
      <Stack className={styles._logo_wrapper}>
        <Image src={Logo} alt="logo" width={150} height={60} />
      </Stack>
      <CardContent className={styles._content}>
        {/* menu list start here */}
        <List
          sx={{ width: "100%" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <SingleMenu image={Home} link="/" name={"Main"} />
          <SingleMenu image={Customers} link="/customers" name={"Customers"} />
          <SingleMenu
            image={Financial}
            link="/financial"
            name={"financial operations"}
          />
          <DropDownMenu
            handleClick={handleRequestsClick}
            open={requests}
            image={Requests}
            name={"Requests"}
            menus={requestsData}
          />
          <DropDownMenu
            handleClick={handleSubscriptionsClick}
            open={subscriptions}
            image={Subscriptions}
            name={"subscriptions"}
            menus={subscriptionsData}
          />
          <DropDownMenu
            handleClick={handleMealsClick}
            open={meals}
            image={Meals}
            name={"Meals"}
            menus={mealsData}
          />
          <DropDownMenu
            handleClick={handleEmployeesClick}
            open={employees}
            image={Employees}
            name={"Employees"}
            menus={employeesData}
          />
          <SingleMenu image={Coupons} link="/coupons" name={"Coupons"} />

          <DropDownMenu
            handleClick={handleSettingsClick}
            open={settings}
            image={Settings}
            name={"Settings"}
            menus={settingsData}
          />
        </List>
        {/* signout part */}
        <Stack className={styles._last_wrapper}>
          <List
            sx={{ width: "87%" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <SingleMenu image={Signout} link="/signout" name={"Sign out"} />
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
