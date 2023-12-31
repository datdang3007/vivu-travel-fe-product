import {
  AppBar,
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback, useMemo, useState } from "react";
import { HeaderSearch } from "../../components/Dialog/HeaderSearch";
import { listMenuOptionProps } from "../../types/Ui";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../routes/path";
import { COLOR_PALLETTE } from "../../constants/color";

export const HeaderMenuNavbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const handleClick = () => {
    setShowDrawer(true);
  };
  const handleClose = () => {
    setShowDrawer(false);
  };

  const handleClickSearch = () => {
    setShowSearch(true);
  };
  const handleCloseSearch = () => {
    setShowSearch(false);
  };

  const changeDirection = useCallback(
    (path: string) => {
      setShowSearch(false);
      navigate(path);
    },
    [navigate]
  );

  const testEvent = useCallback(() => {}, []);

  const listOption = useMemo(
    () =>
      [
        { label: "Miền", event: () => testEvent() },
        { label: "Vùng", event: () => testEvent() },
        { label: "Đăng nhập", event: () => changeDirection(PATH.LOGIN) },
        { label: "Đăng ký", event: () => changeDirection(PATH.REGISTER) },
      ] as listMenuOptionProps[],
    [changeDirection, testEvent]
  );

  const listOptionComponent = useCallback(
    () => (
      <div style={{ width: "250px" }}>
        <List>
          {listOption.map((option, idx) => (
            <ListItem button key={idx} onClick={option.event}>
              <ListItemText primary={option.label} />
            </ListItem>
          ))}
        </List>
      </div>
    ),
    [listOption]
  );

  return (
    <NavbarContainer sx={{ background: theme.palette.common.white }}>
      <AppBar
        position="static"
        sx={{ background: "unset", boxShadow: "unset", padding: "0 20px" }}
      >
        <HeaderSearch open={showSearch} handleShow={handleCloseSearch} />
        <Drawer open={showDrawer} onClose={handleClose}>
          {listOptionComponent()}
        </Drawer>
        <Toolbar variant="dense">
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            xs={12}
          >
            <Grid item container xs={"auto"} alignItems={"center"}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClick}
                sx={{ mr: 2 }}
              >
                <MenuIcon
                  sx={{
                    fontSize: { xs: "1.8rem", sm: "2.3rem" },
                    color: COLOR_PALLETTE.DIM_GRAY,
                  }}
                />
              </IconButton>
              <Typography variant="tB18" color={COLOR_PALLETTE.BLACK}>
                Menu
              </Typography>
            </Grid>
            <IconButton
              edge="start"
              sx={{ padding: "5px" }}
              onClick={handleClickSearch}
            >
              <SearchIcon
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.3rem" },
                  color: COLOR_PALLETTE.DIM_GRAY,
                }}
              />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </NavbarContainer>
  );
};

const NavbarContainer = styled(Box)({
  filter: `drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.16))`,
});
