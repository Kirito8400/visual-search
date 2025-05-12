import React, { useState } from "react";
import {
  Layout,
  Text,
  InlineStack,
  Select,
  LegacyCard,
} from "@shopify/polaris";

export default function ProductRecommendation() {
  const [productRecommendations, setProductRecommendations] = useState(true);
  const [showImageSearchButton, setShowImageSearchButton] = useState(true);
  const [showAddToCartButton, setShowAddToCartButton] = useState(true);
  const [displayCollectionInfo, setDisplayCollectionInfo] = useState(false);
  const [cacheTime, setCacheTime] = useState("1");

  const handleProductRecommendationsChange = () => {
    setProductRecommendations(!productRecommendations);
  };

  const handleShowImageSearchButtonChange = () => {
    setShowImageSearchButton(!showImageSearchButton);
  };

  const handleShowAddToCartButtonChange = () => {
    setShowAddToCartButton(!showAddToCartButton);
  };

  const handleDisplayCollectionInfoChange = () => {
    setDisplayCollectionInfo(!displayCollectionInfo);
  };

  const handleCacheTimeChange = (value) => {
    setCacheTime(value);
  };

  const cacheTimeOptions = [
    { label: "30 minutes", value: "0.5" },
    { label: "1 hour", value: "1" },
    { label: "3 hours", value: "3" },
    { label: "6 hours", value: "6" },
    { label: "12 hours", value: "12" },
    { label: "24 hours", value: "24" },
  ];

  // Custom toggle switch styles
  const toggleSwitchStyles = {
    container: {
      position: "relative",
      display: "inline-block",
      width: "44px",
      height: "24px",
    },
    input: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    slider: (checked) => ({
      position: "absolute",
      cursor: "pointer",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: checked ? "#008060" : "#BABFC4",
      borderRadius: "12px",
      transition: "background-color 0.2s ease",
    }),
    knob: (checked) => ({
      position: "absolute",
      content: '""',
      height: "20px",
      width: "20px",
      left: checked ? "22px" : "2px",
      bottom: "2px",
      backgroundColor: "white",
      borderRadius: "50%",
      transition: "left 0.2s ease",
    }),
  };

  // Toggle switch component
  const ToggleSwitch = ({ checked, onChange }) => (
    <div style={toggleSwitchStyles.container} onClick={onChange}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={toggleSwitchStyles.input}
      />
      <span style={toggleSwitchStyles.slider(checked)}>
        <span style={toggleSwitchStyles.knob(checked)}></span>
      </span>
    </div>
  );

  return (
    <Layout>
      <Layout.AnnotatedSection
        id="productRecommendations"
        title="Product recommendations"
        description={
          "On the product page, add a \"Product Recommendations\" section that uses product image search AI to recommend products of the similar style automatically."
        }
      >
        <LegacyCard>
          <LegacyCard.Section>
            <InlineStack align="space-between">
              <Text as="h3" variant="bodyLg" fontWeight="semibold">
                Product recommendations
              </Text>
              <ToggleSwitch
                checked={productRecommendations}
                onChange={handleProductRecommendationsChange}
              />
            </InlineStack>
          </LegacyCard.Section>

          {productRecommendations && (
            <>
              <LegacyCard.Section title="Cache time">
                <Text as="p" variant="bodyMd" color="subdued">
                  Set the cache time for recommending similar products. After the time expires, clear the cache and re-search for similar products.
                </Text>
                <div style={{ marginTop: "12px" }}>
                  <Select
                    options={cacheTimeOptions}
                    value={cacheTime}
                    onChange={handleCacheTimeChange}
                  />
                </div>
              </LegacyCard.Section>

              <LegacyCard.Section title="Recommended product card items">
                <InlineStack align="space-between">
                  <Text variant="bodyMd">
                    Show "Image Search" button
                  </Text>
                  <ToggleSwitch
                    checked={showImageSearchButton}
                    onChange={handleShowImageSearchButtonChange}
                  />
                </InlineStack>
                <div style={{ marginTop: "16px" }}>
                  <InlineStack align="space-between">
                    <Text variant="bodyMd">
                      Show "Add to Cart" button
                    </Text>
                    <ToggleSwitch
                      checked={showAddToCartButton}
                      onChange={handleShowAddToCartButtonChange}
                    />
                  </InlineStack>
                </div>
                <div style={{ marginTop: "16px" }}>
                  <InlineStack align="space-between">
                    <Text variant="bodyMd">
                      Display product collection name and image
                    </Text>
                    <ToggleSwitch
                      checked={displayCollectionInfo}
                      onChange={handleDisplayCollectionInfoChange}
                    />
                  </InlineStack>
                </div>
              </LegacyCard.Section>
            </>
          )}
        </LegacyCard>
      </Layout.AnnotatedSection>
    </Layout>
  );
}