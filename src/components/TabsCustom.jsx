import React from "react";
import { Tabs } from "antd";
const onChange = (key) => {
  // console.log(key);
};

const TabsCustom = ({ tabDone, tabAll, tabNoDone }) => {
  const items = [
    {
      key: "1",
      label: `All`,
      children: (
        <>
          {tabAll}
          {tabNoDone}
          {tabDone}
        </>
      ),
    },
    {
      key: "2",
      label: `Active`,
      children: tabNoDone,
    },
    {
      key: "3",
      label: `Completed`,
      children: tabDone,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};
export default TabsCustom;
