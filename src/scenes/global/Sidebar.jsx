import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            href={to}
            onClick={() => {
                setSelected(title);
                console.log("Item title: " + title);
                console.log("Selected Item: " + selected);

            }}
            icon={icon}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const SidebarMenu = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard");
    const { collapseSidebar, collapsed } = useProSidebar();

    return (
        <Box sx={{ border: 0, height: "100%", backgroundColor: colors.primary[400] }} > 
            <Sidebar 
                collapsed={collapsed}
                width = "210px"
                collapsedWidth = "80px"
                backgroundColor={colors.primary[400]}
                border = "0" 

                >
                
                <Menu iconShape="square" border="0" >
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => {
                            if(collapsed){
                                console.log("Toggle Sidebar");
                                collapseSidebar();
                            }else{
                                collapseSidebar();
                            }

                            console.log(collapsed);                           
            

                        }}

                        icon={collapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!collapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{ m: "60px 5px 50px 5px" }}
                            >
                                <Typography variant="h1" color={colors.grey[100]}>
                                    MUTU
                                </Typography>
                                <IconButton >
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* MENU ELEMENTS */}
                    <Box border={"0px"} paddingLeft={collapsed ? undefined : "0%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "25px 0 5px 15px" }}
                        >
                            GESTIÓN TRIBU
                        </Typography>
                        <Item
                            title="Tribu"
                            to="/tribu"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Tablón"
                            to="/tablon"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Chat"
                            to="/chats"
                            icon={<QuestionAnswerOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Encuestas"
                            to="/encuestas"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendario"
                            to="/calendario"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
}

export default SidebarMenu;