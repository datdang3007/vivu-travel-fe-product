import { Grid, styled } from "@mui/material";
import { GroupCardRecommend } from "src/components/BlogContent";
import { FormTitle } from "src/components/Form";
import { BackgroundWithText, PostContent } from "src/components/PostDetail";
import { COMPONENT_SIZE } from "src/constants";
import { COLOR_PALLETTE } from "src/constants/color";

export const PostDetail = () => {
  return (
    <Grid container>
      <HeaderBackground
        item
        xs={12}
        height={{
          xs: COMPONENT_SIZE.MOBILE_HEADER,
          sm: COMPONENT_SIZE.TABLET_HEADER,
          md: COMPONENT_SIZE.DESKTOP_HEADER,
        }}
      ></HeaderBackground>
      <Grid
        item
        container
        xs={12}
        paddingBottom={"40px"}
        sx={{
          background: COLOR_PALLETTE.CULTURED,
        }}
        justifyContent={"center"}
      >
        <Grid item xs={12} sm={11} xl={10.5}>
          <BackgroundWithText />
        </Grid>
        <Grid
          item
          container
          justifyContent={"center"}
          xs={12}
          sm={10.5}
          marginTop={"-80px"}
        >
          <PostContent />
        </Grid>
        <Grid item container justifyContent={"center"} xs={12} sm={10.5}>
          <Grid item xs={10.5} sm={11}>
            <FormTitle
              container
              title="Có Thể Bạn Sẽ Thích"
              mt="60px"
              mb="20px"
            >
              <GroupCardRecommend />
            </FormTitle>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const HeaderBackground = styled(Grid)(({ theme }) => ({
  background: COLOR_PALLETTE.PRIMARY,
  [theme.breakpoints.down("md")]: {
    background: COLOR_PALLETTE.WHITE,
  },
}));
