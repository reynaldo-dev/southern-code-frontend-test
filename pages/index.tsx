import { Inter } from "next/font/google";
import { Typography } from "@mui/material";
import { MainLayout } from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Typography variant="h1">Hello home</Typography>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
