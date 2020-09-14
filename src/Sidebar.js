import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  ExpandMoreOutlined,
} from "@material-ui/icons/";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="data:image/jpeg;base64,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"
        title="Abdulmelik Bekmez"
      />
      <SidebarRow Icon={LocalHospital} title="Covid-19" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
    </div>
  );
}

export default Sidebar;