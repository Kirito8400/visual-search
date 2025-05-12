import React from "react";
import {
  Page,
  Card,
  Text,
  Link,
  BlockStack,
  Grid,
  Box,
  Button,
  InlineStack,
} from "@shopify/polaris";
import { ExternalIcon } from "@shopify/polaris-icons";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export default function HelpPage() {
  const instructionCards = [
    {
      title: "E-commerce front-end operations",
      description:
        "The actual operating status of consumers on the e-commerce front end.",
      link: "#",
    },
    {
      title: "Apply to theme",
      description:
        'Add "Product Recommendations" and "Product Image Search" widgets in the theme editor.',
      link: "#",
    },
    {
      title: "All functional widgets",
      description:
        "The template locations corresponding to the functional widgets in the theme editor.",
      link: "#",
    },
    {
      title: "Custom style",
      description:
        "To change the style of image search results, you can use custom CSS.",
      link: "#",
    },
    {
      title: "Disable features",
      description:
        'How to separately disable the "Product Recommendations" and "Product Image Search" features.',
      link: "#",
    },
  ];

  return (
    <Page title="Help">
      <BlockStack gap="400">
        <BlockStack gap="200">
          <Text as="h2" variant="headingMd">
            Instructions
          </Text>
          <Card>
            <Grid>
              {instructionCards.map((card, index) => (
                <Grid.Cell
                  columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}
                  key={index}
                >
                  <Card padding="400">
                    <BlockStack gap="300">
                      <Text as="h3" variant="headingMd" fontWeight="semibold">
                        {card.title}
                      </Text>
                      <Text as="p" variant="bodyMd">
                        {card.description}
                      </Text>
                      <Link>
                        <Button variant="plain" icon={ExternalIcon}>
                          {card.title}
                        </Button>
                      </Link>
                    </BlockStack>
                  </Card>
                </Grid.Cell>
              ))}
            </Grid>
          </Card>
        </BlockStack>

        <BlockStack gap="200">
          <Text as="h2" variant="headingMd">
            Report the issue
          </Text>
          <Card padding="400">
            <BlockStack gap="200">
              <Text as="p" variant="bodyMd">
                If the above instructions do not resolve your issue or if you
                encounter any problems during use, please feel free to contact
                us or get support here. If you encounter problems adding icons
                to the store page header, please contact us at{" "}
                <Link url="mailto:service@funmula.com">
                  service@funmula.com
                </Link>
                , and we will assist in adding it within 3 business days.
              </Text>
              <div>
                <Button
                  url="https://support.funmula.com"
                  external
                  icon={ExternalIcon}
                >
                  Get support
                </Button>
              </div>
            </BlockStack>
          </Card>
        </BlockStack>
      </BlockStack>
      <br />
      <br />
    </Page>
  );
}
