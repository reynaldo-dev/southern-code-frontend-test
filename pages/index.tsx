import React, { Suspense } from "react";
const Earth = React.lazy(
  () =>
    import("@/components/app/3d-model/Earth" /* webpackChunkName: "Earth3d" */)
);

import { Inter } from "next/font/google";
import Link from "next/link";

import { Button, Container, Typography } from "@mui/material";

import { paths } from "@/paths";
import { MainLayout } from "@/components/layout/MainLayout";
import { dictionary } from "@/dictionary";
import { FallBack } from "@/components/app/fallback/FallBack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Suspense fallback={<FallBack />}>
        <Earth />
      </Suspense>

      <Container maxWidth="sm">
        <Typography color="white" variant="h1" component="h1" sx={styles.title}>
          {dictionary.home.mainTitle}
        </Typography>
        <Typography
          color="primary"
          variant="h4"
          component="h4"
          sx={styles.banner}
        >
          {dictionary.home.heroTitle}
        </Typography>

        <Link href={paths.photos}>
          <Button size="large" sx={styles.button}>
            {dictionary.home.link}
          </Button>
        </Link>
      </Container>
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

const styles = {
  title: {
    position: "absolute",
    top: "58%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: inter,
    fontWeight: 700,
    fontSize: "2rem",
    textAlign: "center",
  },

  banner: {
    position: "absolute",
    top: { md: "62%", xs: "68%" },
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: inter,
    fontSize: "1rem",
    textAlign: "center",
  },

  button: {
    fontFamily: inter,
    fontSize: "1rem",
    position: "absolute",
    top: "80%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "5px",
    color: "white",
    padding: "10px 20px",
    fontWeight: "bold",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background: "#1976d2",
      transform: "rotate(45deg)",
      opacity: 0,
      transition: "opacity 0.3s ease-in-out",
    },
    "&:hover::before": {
      opacity: 1,
      zIndex: -1,
    },
  },
};
