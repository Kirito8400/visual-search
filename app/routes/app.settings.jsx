import React, { useState } from "react";
import { Page, BlockStack, Divider } from "@shopify/polaris";
import SearchRecommendationsSettings from "../components/settings/SearchRecommendation";
import AllSettings from "../components/settings/AllSettings";
import ProductRecommendation from "../components/settings/ProductRecomendation";
import ProductImageSearch from "../components/settings/ProductImageSearch";

export default function MainSettings() {
  return (
    <Page title="Settings">
      <BlockStack gap="400">
        <AllSettings />
        <Divider borderColor="border" borderWidth="050" />
        <SearchRecommendationsSettings />
        <Divider borderColor="border" borderWidth="050" />
        <ProductRecommendation />
        <Divider borderColor="border" borderWidth="050" />
        <ProductImageSearch />
      </BlockStack>
      <br />
      <br />
    </Page>
  );
}
