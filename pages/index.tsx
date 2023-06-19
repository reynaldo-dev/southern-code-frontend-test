import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import { Button, Container, Typography } from "@mui/material";
import { MainLayout } from "@/components/layout/MainLayout";
import Link from "next/link";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene="https://prod.spline.design/jvrtg5uqvdjWhYc2/scene.splinecode"
          style={{ height: "100vh", width: "100vw" }}
        />
      </Suspense>
      <Container maxWidth="sm">
        <Typography
          sx={{
            fontFamily: inter,
            fontSize: "2rem",
            fontWeight: 700,
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Best NASA images from NASA-API
        </Typography>

        <Link href="/images">
          <Button
            color="primary"
            size="large"
            variant="contained"
            sx={{
              fontFamily: inter,
              fontSize: "1rem",
              fontWeight: 700,
              position: "absolute",
              top: "60%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Get started
          </Button>
        </Link>
      </Container>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
