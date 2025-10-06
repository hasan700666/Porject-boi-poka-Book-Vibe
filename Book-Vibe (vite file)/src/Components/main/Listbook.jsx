//import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Listbook = () => {
  //const [value, setValue] = useState(false);

  return (
    <div>
      <div className="font-extrabold text-2xl py-6 bg-gray-300 rounded-3xl flex justify-center items-center">
        <p className="text-center">Books</p>
      </div>
      <div className="dropdown dropdown-bottom dropdown-center">
        <div
          tabIndex={0}
          role="button"
          className=" m-1 btn mx-5 bg-green-600 text-neutral-50"
        >
          Sort By :
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Pages</a>
          </li>
          <li>
            <a>review</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listbook;
