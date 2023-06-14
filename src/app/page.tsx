"use client";

import {  WalletCard } from "@/widgets";
import { CurrencyExchangeRateList } from "@/widgets/CurrencyExchangeRate/CurrencyExchangeRate.component";
import { Box, Grid } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={4}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
      >
        <WalletCard />
        <CurrencyExchangeRateList />
      </Grid>
    </Box>
  );
}
