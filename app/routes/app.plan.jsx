import React from "react";
import {
  Page,
  LegacyCard,
  Text,
  Button,
  InlineStack,
  BlockStack,
  Box,
  Badge,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;  
};

export default function PlanPage() {
  const plans = [
    {
      name: "Free",
      products: "Up to 100 products",
      usage: "Unlimited usage",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      isCurrent: true,
    },
    {
      name: "Lite",
      products: "Up to 500 products",
      usage: "Unlimited usage",
      monthlyPrice: "$5",
      yearlyPrice: "$4",
      isCurrent: false,
    },
    {
      name: "Basic",
      products: "Up to 1,000 products",
      usage: "Unlimited usage",
      monthlyPrice: "$20",
      yearlyPrice: "$16",
      isCurrent: false,
      highlight: true,
    },
    {
      name: "Recommended",
      products: "Up to 5,000 products",
      usage: "Unlimited usage",
      monthlyPrice: "$50",
      yearlyPrice: "$40",
      isCurrent: false,
    },
    {
      name: "Plus",
      products: "Up to 10,000 products",
      usage: "Unlimited usage",
      monthlyPrice: "$160",
      yearlyPrice: "$128",
      isCurrent: false,
    },
  ];

  return (
    <Page title="Subscription Plans">
      <LegacyCard>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyles.table}>
            <thead>
              <tr>
                <th style={tableStyles.headerCell}>
                  <Text as="span" variant="headingMd">
                    Plan
                  </Text>
                  <div style={{ marginTop: "4px" }}>
                    <Text as="span" variant="bodyMd" color="subdued">
                      14-day free trial
                    </Text>
                  </div>
                </th>
                <th style={tableStyles.headerCell}>
                  <Text as="span" variant="headingMd">
                    Number of products
                  </Text>
                </th>
                <th style={tableStyles.headerCell}>
                  <Text as="span" variant="headingMd">
                    Search & recommendations
                  </Text>
                </th>
                <th style={tableStyles.headerCell}>
                  <div style={{ textAlign: "center" }}>
                    <Text as="span" variant="headingMd">
                      Monthly fee
                    </Text>
                    <div>
                      <Text as="span" variant="bodyMd" color="subdued">
                        (USD)
                      </Text>
                    </div>
                  </div>
                </th>
                <th style={tableStyles.headerCell}>
                  <div style={{ textAlign: "center", position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: "-30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <Badge status="success">20% off!</Badge>
                    </div>
                    <Text as="span" variant="headingMd">
                      Every year
                    </Text>
                    <div>
                      <Text as="span" variant="bodyMd" color="subdued">
                        (USD)
                      </Text>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr
                  key={plan.name}
                  style={{
                    ...tableStyles.row,
                    backgroundColor: plan.isCurrent
                      ? "rgb(240, 255, 255)"
                      : plan.highlight
                      ? "rgb(249, 249, 249)"
                      : "white",
                    border: plan.highlight
                      ? "1px solid rgb(0, 128, 96)"
                      : undefined,
                  }}
                >
                  <td style={tableStyles.cell}>
                    <InlineStack gap="200" align="center">
                      {plan.isCurrent && (
                        <div style={{ color: "rgb(0, 128, 96)" }}>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="10" cy="10" r="10" fill="currentColor" />
                            <path
                              d="M14 7L8.5 12.5L6 10"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                      <Text
                        as="span"
                        variant="headingMd"
                        fontWeight="semibold"
                      >
                        {plan.name}
                      </Text>
                    </InlineStack>
                  </td>
                  <td style={tableStyles.cell}>
                    <Text as="span" variant="bodyMd">
                      {plan.products}
                    </Text>
                  </td>
                  <td style={tableStyles.cell}>
                    <Text as="span" variant="bodyMd">
                      {plan.usage}
                    </Text>
                  </td>
                  <td style={tableStyles.cell}>
                    <BlockStack>
                      <div style={{ textAlign: "center" }}>
                        <Text as="span" variant="headingLg" fontWeight="bold">
                          {plan.monthlyPrice}
                        </Text>
                        <Text as="span" variant="bodyMd" color="subdued">
                          {" "}
                          /Month
                        </Text>
                      </div>
                      {!plan.isCurrent && (
                        <div style={{ textAlign: "center", marginTop: "8px" }}>
                          <Button size="slim">Subscribe</Button>
                        </div>
                      )}
                      {plan.isCurrent && (
                        <div style={{ textAlign: "center", marginTop: "8px" }}>
                          <Text as="span" variant="bodyMd" color="success">
                            Current Plan
                          </Text>
                        </div>
                      )}
                    </BlockStack>
                  </td>
                  <td style={tableStyles.cell}>
                    <BlockStack>
                      <div style={{ textAlign: "center" }}>
                        <Text
                          as="span"
                          variant="headingLg"
                          fontWeight="bold"
                          color="success"
                        >
                          {plan.yearlyPrice}
                        </Text>
                        <Text as="span" variant="bodyMd" color="subdued">
                          {" "}
                          /Month
                        </Text>
                      </div>
                      {!plan.isCurrent && (
                        <div style={{ textAlign: "center", marginTop: "8px" }}>
                          <Button size="slim" primary>
                            Subscribe
                          </Button>
                        </div>
                      )}
                      {plan.isCurrent && (
                        <div style={{ textAlign: "center", marginTop: "8px" }}>
                          <Text as="span" variant="bodyMd" color="success">
                            Current Plan
                          </Text>
                        </div>
                      )}
                    </BlockStack>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegacyCard>
    </Page>
  );
}

const tableStyles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
  },
  headerCell: {
    padding: "16px",
    textAlign: "left",
    borderBottom: "1px solid #dfe3e8",
    backgroundColor: "#f9fafb",
  },
  row: {
    borderBottom: "1px solid #dfe3e8",
  },
  cell: {
    padding: "16px",
    textAlign: "left",
    verticalAlign: "middle",
  },
};