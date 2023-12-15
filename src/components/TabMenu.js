import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
function TabMenu() {
  return (
    <Tabs isManual variant="enclosed">
      <TabList>
        <Tab>PROFILE</Tab>
        <Tab>EMPLOYMENT HISTORY</Tab>
        <Tab>SKILLS</Tab>
        <Tab>LINKS</Tab>
        <Tab>CONTACT</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabMenu;
