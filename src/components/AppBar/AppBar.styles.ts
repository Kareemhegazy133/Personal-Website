import { MenuItem, Link, styled, Typography } from "@mui/material";

export const NavMenuLink = styled(Link)`
    text-decoration: none;
`

export const ProfileContainer = styled(Typography)`
    display: flex;
    font-size: 24px;
    font-weight: bold;
    color: white;
`

export const NavMenuContainer = styled("div")`
    display: flex;
`

export const NavMenuItem = styled(MenuItem)`
    color: white;
    &:hover {
        color: #cf1f1f;
    }
`

export const HeaderAppBar = styled("header")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: red;
    height: 70px;
    width: 100%;
    flex-shrink: 0;
    position: fixed;
`