import React from "react";
import NewFile from "./NewFile";
import SidebarItem from "./SidebarItem";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StorageIcon from "@material-ui/icons/Storage";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <NewFile />
      <div className="sidebar__container">
        <SidebarItem arrow icon={<InsertDriveFileIcon />} label={"My Drive"} />
        <SidebarItem
          arrow
          icon={<ImportantDevicesIcon />}
          label={"Computers"}
        />
        <SidebarItem icon={<PeopleAltIcon />} label={"Shared With Me"} />
        <SidebarItem icon={<QueryBuilderIcon />} label={"Recent"} />
        <SidebarItem icon={<StarBorderIcon />} label={"Starred"} />
        <SidebarItem icon={<DeleteOutlineIcon />} label={"Bin"} />
        <hr />
        <SidebarItem icon={<StorageIcon />} label={"Storage"} />
      </div>
    </div>
  );
}

export default Sidebar;
