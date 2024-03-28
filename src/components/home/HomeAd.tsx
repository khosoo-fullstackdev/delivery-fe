import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

interface data {
  title: string;
  text: string;
  icon: string;
}

export const HomeAd = () => {
  const [data, setData] = useState<data[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./dummyComercial.json");
        const data = await response.json();
        setData(data);
        console.log("comercial", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "400px",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Stack
        width="100%"
        height="155px"
        justifyContent="space-between"
        direction="row"
      >
        {data.map((a, index) => (
          <Stack
            key={index}
            justifyContent="center"
            alignItems="flex-start"
            gap="15px"
            borderRadius="16px"
            border="1px solid"
            borderColor="#D6D8DB"
            boxShadow="4px 4px 12px 0px rgba(0, 0, 0, 0.10)"
            padding="16px"
          >
            <Stack padding="15px" justifyContent="center" alignItems="center">
              <Image src={`${a.icon}`} alt="images" width="30" height="30" />
            </Stack>
            <Stack justifyContent="center" alignItems="center" gap="4px">
              <Typography color="#272727" fontSize="18px" fontWeight="700">
                {a.title}
              </Typography>
              <Typography
                color="#272727"
                fontSize="14px"
                fontWeight="400"
                sx={{ opacity: 0.75 }}
              >
                {a.text}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};
