import React, { useState } from "react";
import { BlockStack, Button, Card, Page, Text } from "@shopify/polaris";
import { WelcomeCard } from "../components/dashboard/WelcomeCard";
import {
  CurrentPlan,
  ProductStatus,
  ReviewSection,
} from "../components/dashboard/CurrentPlan";
import { Statistics } from "../components/dashboard/Statistics";

export default function Dashboard() {
  return (
    <Page title="Dashboard">
      <BlockStack gap="400">
        <WelcomeCard />
        <CurrentPlan />
        <ProductStatus />
        <ReviewSection />
        <Statistics/>
      </BlockStack>
      <br />
      <br />
    </Page>
  );
}
