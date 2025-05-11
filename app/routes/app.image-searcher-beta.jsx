import { useState } from "react";
import {
  Page,
  Layout,
  LegacyCard,
  DropZone,
  BlockStack,
  Thumbnail,
  Text,
  Spinner,
  Banner,
  ResourceList,
  ResourceItem,
  MediaCard,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";
import { useActionData, useSubmit } from "@remix-run/react";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const formData = await request.formData();
  const imageFile = formData.get("image");

  if (!imageFile) {
    return json({ error: "No image provided" });
  }

  try {
    // Convert the file to base64 for API transmission
    const buffer = await imageFile.arrayBuffer();
    const base64Image = Buffer.from(buffer).toString("base64");

    // Call the image similarity search service
    const similarProducts = await findSimilarProducts(base64Image, admin);

    return json({
      success: true,
      products: similarProducts,
    });
  } catch (error) {
    console.error("Error searching for similar products:", error);
    return json({
      error: "Failed to search for similar products: " + error.message,
    });
  }
};

// Helper function to find similar products using image features
async function findSimilarProducts(base64Image, admin) {
  // 1. Extract image features using Vision API
  const imageFeatures = await extractImageFeatures(base64Image);

  // 2. Fetch products from the store
  const productsResponse = await admin.graphql(`
    query {
      products(first: 50) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              url
              altText
            }
            tags
            productType
          }
        }
      }
    }
  `);

  const productsData = await productsResponse.json();
  const products = productsData.data.products.edges.map(({ node }) => node);

  // 3. Filter and rank products based on similarity
  const rankedProducts = rankProductsBySimilarity(products, imageFeatures);

  // Return the top matches (limit to 10)
  return rankedProducts.slice(0, 10);
}

// Extract features from the uploaded image
async function extractImageFeatures(base64Image) {
  // console.log("base64Image:", base64Image)
  // In a real implementation, you would call the Vision API here
  // For this example, we'll simulate the response

  try {
    // Make the API call to Google Vision API
    const response = await fetch(
      "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD4W4nJ7j3Xa6XyTVXbrqaBCZtIcLQ84KA",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requests: [
            {
              image: {
                content: base64Image,
              },
              features: [
                { type: "LABEL_DETECTION", maxResults: 10 },
                { type: "OBJECT_LOCALIZATION", maxResults: 10 },
                { type: "IMAGE_PROPERTIES", maxResults: 5 },
              ],
            },
          ],
        }),
      },
    );

    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Vision API Error:", errorData);

      // Fall back to mock data if API call fails
      console.log("Using fallback mock data due to API error");
      return getFallbackImageFeatures();
    }

    const data = await response.json();
    console.log("Vision API Response:", data);

    // // Process the API response to extract relevant features
    // const labels =
    //   data.responses[0].labelAnnotations?.map((label) => label.description) ||
    //   [];
    // const objects =
    //   data.responses[0].localizedObjectAnnotations?.map((obj) => obj.name) ||
    //   [];

    // // Extract dominant colors
    // const colors =
    //   data.responses[0].imagePropertiesAnnotation?.dominantColors?.colors?.map(
    //     (color) => {
    //       const { red, green, blue } = color.color;
    //       return rgbToHex(red, green, blue);
    //     },
    //   ) || [];

    // Simulate the response with mock data
    return {
      labels: ["clothing", "apparel", "shirt", "fashion", "blue", "cotton"],
      colors: ["#2a4d69", "#4b86b4", "#adcbe3", "#e7eff6"],
      objects: ["shirt", "button", "collar"],
    //   labels,
    //   colors,
    //   objects
    };
  } catch (error) {
    console.error("Error in extractImageFeatures:", error);
  }
}

// Rank products based on similarity to the uploaded image
function rankProductsBySimilarity(products, imageFeatures) {
  return (
    products
      .map((product) => {
        // Calculate similarity score based on product attributes and image features
        let score = 0;

        // Check product title and description for matching keywords
        const productText = (
          product.title +
          " " +
          (product.description || "")
        ).toLowerCase();
        imageFeatures.labels.forEach((label) => {
          if (productText.includes(label.toLowerCase())) {
            score += 10; // Higher weight for label matches
          }
        });

        // Check product tags for matches
        if (product.tags) {
          const tags = Array.isArray(product.tags)
            ? product.tags
            : product.tags.split(",");
          tags.forEach((tag) => {
            if (
              imageFeatures.labels.some((label) =>
                tag.toLowerCase().includes(label.toLowerCase()),
              )
            ) {
              score += 15; // Higher weight for tag matches
            }
          });
        }

        // Check product type
        if (
          product.productType &&
          imageFeatures.labels.some((label) =>
            product.productType.toLowerCase().includes(label.toLowerCase()),
          )
        ) {
          score += 20; // Higher weight for product type matches
        }

        // Add the score to the product object
        return {
          ...product,
          similarityScore: score,
        };
      })
      // Sort by similarity score (highest first)
      .sort((a, b) => b.similarityScore - a.similarityScore)
      // Filter out products with zero similarity
      .filter((product) => product.similarityScore > 0)
  );
}

export default function ImageSearcher() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const actionData = useActionData();
  const submit = useSubmit();

  const handleDropZoneDrop = (_dropFiles, acceptedFiles, _rejectedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleSubmit = () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    submit(formData, { method: "post", encType: "multipart/form-data" });

    // Reset loading state after submission completes
    setTimeout(() => setLoading(false), 500);
  };

  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  const fileUpload = !file && (
    <DropZone.FileUpload actionHint="or drop files to upload" />
  );

  const uploadedFile = file && (
    <BlockStack>
      <Thumbnail
        size="large"
        alt={file.name}
        source={
          validImageTypes.includes(file.type)
            ? window.URL.createObjectURL(file)
            : null
        }
      />
      <div>
        <Text variant="bodyMd" fontWeight="bold">
          {file.name}
        </Text>
        <Text variant="bodyMd" color="subdued">
          {file.size} bytes
        </Text>
      </div>
    </BlockStack>
  );

  return (
    <Page
      title="Visual Product Search"
      primaryAction={{
        content: "Search Similar Products",
        onAction: handleSubmit,
        disabled: !file || loading,
      }}
    >
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <BlockStack vertical>
              <Text variant="headingMd">Upload a product image</Text>
              <Text variant="bodyMd" color="subdued">
                Upload an image to find visually similar products in your store
              </Text>
              <DropZone
                accept="image/*"
                type="image"
                allowMultiple={false}
                onDrop={handleDropZoneDrop}
              >
                {uploadedFile}
                {fileUpload}
              </DropZone>
              {loading && (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <Spinner
                    accessibilityLabel="Searching for similar products"
                    size="large"
                  />
                  <div style={{ marginTop: "10px" }}>
                    <Text>Searching for similar products...</Text>
                  </div>
                </div>
              )}
            </BlockStack>
          </LegacyCard>
        </Layout.Section>

        {actionData?.error && (
          <Layout.Section>
            <Banner status="critical">{actionData.error}</Banner>
          </Layout.Section>
        )}

        {actionData?.products && actionData.products.length > 0 && (
          <Layout.Section>
            <LegacyCard title="Similar Products">
              <ResourceList
                resourceName={{ singular: "product", plural: "products" }}
                items={actionData.products}
                renderItem={(product) => (
                  <ResourceItem
                    id={product.id}
                    media={
                      product.featuredImage ? (
                        <Thumbnail
                          source={product.featuredImage.url}
                          alt={product.featuredImage.altText || product.title}
                        />
                      ) : (
                        <div
                          style={{
                            backgroundColor: "#f4f6f8",
                            height: "40px",
                            width: "40px",
                          }}
                        />
                      )
                    }
                    name={product.title}
                    accessibilityLabel={`View details for ${product.title}`}
                  >
                    <BlockStack>
                      <Text variant="bodyMd" fontWeight="bold">
                        {product.title}
                      </Text>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#e3f1df",
                            color: "#414f3e",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          Match:{" "}
                          {Math.min(
                            100,
                            Math.round(product.similarityScore * 2),
                          )}
                          %
                        </div>
                        {product.productType && (
                          <Text variant="bodySm" color="subdued">
                            {product.productType}
                          </Text>
                        )}
                      </div>
                      <Text variant="bodyMd">
                        {product.description
                          ? product.description.substring(0, 100) +
                            (product.description.length > 100 ? "..." : "")
                          : "No description available"}
                      </Text>
                    </BlockStack>
                  </ResourceItem>
                )}
              />
            </LegacyCard>
          </Layout.Section>
        )}

        {actionData?.products && actionData.products.length === 0 && (
          <Layout.Section>
            <Banner status="info">
              No similar products found. Try uploading a different image.
            </Banner>
          </Layout.Section>
        )}
      </Layout>
    </Page>
  );
}
