import React from "react";
import {
  Card,
  Text,
  BlockStack,
  InlineStack,
  Badge,
  Button,
  Icon,
} from "@shopify/polaris";
import { XIcon } from "@shopify/polaris-icons";

export function CurrentPlan() {
  return (
    <Card>
      <BlockStack gap="200">
        <div className="" style={{ marginBottom: "10px" }}>
          <InlineStack align="space-between" blockAlign="center" wrap={false}>
            <Text variant="headingMd" fontWeight="bold" as="h3">
              Current plan
            </Text>
            <InlineStack gap="200" align="center" wrap={false}>
              <Text variant="bodyMd" as="p">
                Free
              </Text>
              <Badge size="slim">Upgrade</Badge>
            </InlineStack>
          </InlineStack>
        </div>

        <InlineStack align="space-between" blockAlign="center" wrap={false}>
          <Text variant="bodyMd" as="p" fontWeight="semibold">
            Number of products
          </Text>
          <Text variant="bodyMd" as="p">
            Up to 100 products
          </Text>
        </InlineStack>

        <InlineStack align="space-between" blockAlign="center" wrap={false}>
          <Text variant="bodyMd" as="p" fontWeight="semibold">
            Search count
          </Text>
          <Text variant="bodyMd" as="p">
            Unlimited search times
          </Text>
        </InlineStack>
      </BlockStack>
    </Card>
  );
}

export function ProductStatus() {
  return (
    <Card>
      <BlockStack gap="200">
        <Text variant="headingMd" fontWeight="bold" as="h3">
          Product status
        </Text>
        <Text variant="bodyMd" as="p" color="subdued">
          Used 4 items / In progress 0 items
        </Text>
        <div>
          <Button variant="primary">
            Select products to use Visual Search
          </Button>
        </div>
      </BlockStack>
    </Card>
  );
}

export function ReviewSection() {
  return (
    <Card>
      <BlockStack gap="200">
        <InlineStack align="space-between">
          <Text variant="headingMd" fontWeight="bold" as="h3">
            Do you like BIRSE: Visual Search?
          </Text>
          <Button plain icon={<Icon source={XIcon} />} />
        </InlineStack>
        <Text variant="bodyMd" as="p">
          Feel free to leave a review to support our team!
        </Text>
        <div>
          <Button>⭐ Review BIRSE: Visual Search ⭐</Button>
        </div>
      </BlockStack>
    </Card>
  );
}
