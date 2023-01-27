import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const MenuOption = styled(MenuItem)`
    font-size: 14px;
    padding: 15px 60px 5px 24px;
    color: #4a4a4a;
`;

const HeaderMenu = ({ setOpenDrawer }) => {
    const [open, setOpen] = useState(false);
    const { setAccount, setPerson, socket } = useContext(AccountContext);
    const handleClose = () => {
        setOpen(null);
        console.clear();
    };
    const handleClick = (e) => {
        setOpen(e.currentTarget);
        console.clear();
    };

    const handleLogout = () => {
        setOpen(null);
        socket.current.emit("logout");
        setAccount("");
        setPerson({});
        console.clear();
        alert("You have been logged out successfully");
    };

    return (
        <>
            <MoreVert onClick={handleClick} style={{ cursor: "pointer" }} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuOption
                    onClick={() => {
                        handleClose();
                        setOpenDrawer(true);
                    }}
                >
                    Profile
                </MenuOption>
                <MenuOption onClick={handleLogout}>Logout</MenuOption>
            </Menu>
        </>
    );
};

export default HeaderMenu;
