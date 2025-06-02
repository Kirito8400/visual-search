import React, { useState } from "react";
import { Button, Card, Page, Text } from "@shopify/polaris";
import { CheckCircleIcon } from "@shopify/polaris-icons";

export function WelcomeCard({ redirectToThemeEditor, redirectToPlan }) {
  const [openStep, setOpenStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(0);

  const toggleStep = (step) => {
    setOpenStep(step);
    if (step > completedSteps) {
      setCompletedSteps(step);
    }
  };

  // Calculate progress percentage
  const progressPercentage = (completedSteps / 3) * 100;

  return (
    <>
      <Card>
        {/* Header Section */}
        <div>
          <Text variant="headingMd" fontWeight="bold">
            Welcome to BIRSE: Visual Search !
          </Text>

          <p style={{ margin: "6px 0" }}>
            Please complete the following steps to configure the application. If
            you need help, please check{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              help
            </a>{" "}
            or contact us:
          </p>

          {/* Progress Bar */}
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                height: "6px",
                backgroundColor: "#e4e5e7",
                borderRadius: "2px",
                marginBottom: "8px",
                flex: 1,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progressPercentage}%`,
                  backgroundColor: "#008060",
                  borderRadius: "2px",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>

            <p
              style={{
                fontSize: "14px",
                color: "#6d7175",
                marginBottom: "0",
              }}
            >
              {completedSteps}/3 Start!
            </p>
          </div>
        </div>

        {/* Step 1 */}
        <div>
          <div
            onClick={() => toggleStep(1)}
            style={{
              padding: "16px 0px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                marginRight: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* {completedSteps >= 0 ? ( */}
              <div
                class="_unfinished-circle_y0zy0_246"
                bis_size='{"x":211,"y":352,"w":20,"h":20,"abs_x":451,"abs_y":464}'
                style={{
                  border: "2px dashed #616161",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              ></div>
              {/* ) : (
                <CheckCircleIcon />
              )} */}
            </div>
            <Text variant="headingSm">
              Step 1: New product image processing
            </Text>
          </div>

          {openStep === 1 && (
            <div
              style={{
                padding: "0 0px 10px 30px",
                // fontSize: "14px",
                lineHeight: "20px",
                color: "#202223",
              }}
            >
              <p>
                New product images need to be processed by our AI model before
                they can be used for search, meaning unprocessed items will not
                be searchable or appear in "Product Recommendations". The system
                will complete processing within 6 hours. You can also check the
                product processing status on the{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  select products to use Visual Search
                </a>
                . Thank you for using our service!
              </p>
            </div>
          )}
        </div>

        {/* Step 2 */}
        <div>
          <div
            onClick={() => toggleStep(2)}
            style={{
              padding: "16px 0px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                marginRight: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* {completedSteps >= 1 ? ( */}
              <div
                class="_unfinished-circle_y0zy0_246"
                bis_size='{"x":211,"y":352,"w":20,"h":20,"abs_x":451,"abs_y":464}'
                style={{
                  border: "2px dashed #616161",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              ></div>
              {/* ) : (
                <CheckCircleIcon />
              )} */}
            </div>

            <Text variant="headingSm">
              Step 2: New product image processing
            </Text>
          </div>

          {openStep === 2 && (
            <div
              style={{
                padding: "0 20px 20px 30px",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#202223",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ flex: "0 0 33.333%", paddingRight: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    <Text fontWeight="regular" variant="headingSm">
                      Open Image Search Float
                    </Text>
                    <Text fontWeight="regular" variant="headingSm">
                      Open In-Store Image Search
                    </Text>
                    <Text fontWeight="regular" variant="headingSm">
                      Open Input Image Search
                    </Text>
                    <Text fontWeight="regular" variant="headingSm">
                      Open Text Search Suggestion
                    </Text>
                    <Text fontWeight="regular" variant="headingSm">
                      Open Product Recommendations
                    </Text>
                    <Text fontWeight="regular" variant="headingSm">
                      Open Product Image Search
                    </Text>
                    <Text fontWeight="regular" variant="headingSm">
                      Open Image Search in header
                    </Text>

                    <div>
                      <Button variant="primary" onClick={redirectToThemeEditor}>Open theme editor</Button>
                    </div>
                  </div>
                </div>

                <div style={{ flex: "0 0 66.666%" }}>
                  <img
                    src="https://platformplugin.biggo.com/assets/img-search-float-a1bee37d.png"
                    alt="Theme editor preview"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: "1px solid #e1e3e5",
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Step 3 */}
        <div>
          <div
            onClick={() => toggleStep(3)}
            style={{
              padding: "16px 0px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                marginRight: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* {completedSteps >= 2 ? ( */}
              <div
                class="_unfinished-circle_y0zy0_246"
                bis_size='{"x":211,"y":352,"w":20,"h":20,"abs_x":451,"abs_y":464}'
                style={{
                  border: "2px dashed #616161",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              ></div>
              {/* ) : (
                <CheckCircleIcon />
              )} */}
            </div>
            <Text variant="headingSm">Step : New product image processing</Text>
          </div>

          {openStep === 3 && (
            <div
              style={{
                padding: "0 20px 20px 30px",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#202223",
              }}
            >
              <Text variant="headingSm" fontWeight="regular">
                Choose a plan that suits your number of products.
                <br />
                Don't worry! You will receive a 14-day free trial after the plan
                is approved!
              </Text>

              <div style={{ marginTop: "10px" }}>
                <Button variant="primary" url="/app/plan">Choose a plan</Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </>
  );
}
