import React, { useState } from "react";
import { Button, Card, Page, Text } from "@shopify/polaris";

export default function Dashboard() {
  const [openStep1, setOpenStep1] = useState(true);
  const [openStep2, setOpenStep2] = useState(false);
  const [openStep3, setOpenStep3] = useState(false);

  const [completedSteps, setCompletedSteps] = useState(0);

  const toggleStep = (step) => {
    if (step === 1) {
      setOpenStep1(!openStep1);
      if (!openStep1 && completedSteps < 1) setCompletedSteps(1);
    } else if (step === 2) {
      setOpenStep2(!openStep2);
      if (!openStep2 && completedSteps < 2) setCompletedSteps(2);
    } else if (step === 3) {
      setOpenStep3(!openStep3);
      if (!openStep3 && completedSteps < 3) setCompletedSteps(3);
    }
  };

  // Calculate progress percentage
  const progressPercentage = (completedSteps / 3) * 100;

  return (
    <Page>
      <Card>
        {/* <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow:
              "0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15)",
          }}
        > */}
        {/* Header Section */}
        <div style={{ padding: "" }}>
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

        {/* <hr
          style={{
            margin: "0",
            border: "none",
            height: "1px",
            backgroundColor: "#e1e3e5",
          }}
        /> */}

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
              {completedSteps >= 1 ? (
                <svg
                  viewBox="0 0 20 20"
                  style={{ width: "20px", height: "20px", fill: "#008060" }}
                >
                  <path d="M10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-15c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.293 5.707-4.586 4.586-2-2 .707-.707 1.293 1.293 3.879-3.879.707.707z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 20 20"
                  style={{ width: "20px", height: "20px", fill: "#5c5f62" }}
                >
                  <path
                    d="M10 14.293l5.293-5.293.707.707-6 6-6-6 .707-.707 5.293 5.293zm0-8.586l-5.293 5.293-.707-.707 6-6 6 6-.707.707-5.293-5.293z"
                    transform={openStep1 ? "rotate(180 10 10)" : ""}
                  />
                </svg>
              )}
            </div>
            <Text variant="headingSm">
              Step 1: New product image processing
            </Text>
          </div>

          {openStep1 && (
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
              {completedSteps >= 2 ? (
                <svg
                  viewBox="0 0 20 20"
                  style={{ width: "20px", height: "20px", fill: "#008060" }}
                >
                  <path d="M10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-15c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.293 5.707-4.586 4.586-2-2 .707-.707 1.293 1.293 3.879-3.879.707.707z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 20 20"
                  style={{ width: "20px", height: "20px", fill: "#5c5f62" }}
                >
                  <path
                    d="M10 14.293l5.293-5.293.707.707-6 6-6-6 .707-.707 5.293 5.293zm0-8.586l-5.293 5.293-.707-.707 6-6 6 6-.707.707-5.293-5.293z"
                    transform={openStep2 ? "rotate(180 10 10)" : ""}
                  />
                </svg>
              )}
            </div>

            <Text variant="headingSm">
              Step 2: New product image processing
            </Text>
          </div>

          {openStep2 && (
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
                      <Button variant="primary">Open theme editor</Button>
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
              {completedSteps >= 3 ? (
                <svg
                  viewBox="0 0 20 20"
                  style={{ width: "20px", height: "20px", fill: "#008060" }}
                >
                  <path d="M10 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-15c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.293 5.707-4.586 4.586-2-2 .707-.707 1.293 1.293 3.879-3.879.707.707z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 20 20"
                  style={{ width: "20px", height: "20px", fill: "#5c5f62" }}
                >
                  <path
                    d="M10 14.293l5.293-5.293.707.707-6 6-6-6 .707-.707 5.293 5.293zm0-8.586l-5.293 5.293-.707-.707 6-6 6 6-.707.707-5.293-5.293z"
                    transform={openStep3 ? "rotate(180 10 10)" : ""}
                  />
                </svg>
              )}
            </div>
            <Text variant="headingSm">Step : New product image processing</Text>
          </div>

          {openStep3 && (
            <div
              style={{
                padding: "0 20px 20px 30px",
                fontSize: "14px",
                lineHeight: "20px",
                color: "#202223",
              }}
            >
              <Text variant="headingSm" fontWeight="regular" >
                Choose a plan that suits your number of products.
                <br />
                Don't worry! You will receive a 14-day free trial after the plan
                is approved!
              </Text>

              <div style={{ marginTop: "10px" }}>
                <Button variant="primary">Choose a plan</Button>
              </div>
            </div>
          )}
        </div>
        {/* </div> */}
      </Card>
    </Page>
  );
}
