// import { json } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
// import { url } from "inspector";
// import { Input } from "clarifai-nodejs";



// export async function loader() {
//   const imageUrl = "https://samples.clarifai.com/metro-north.jpg";
//   const input = new Input({
//     authConfig: {
//       userId: 'elrik0084-all-scopes',
//       pat: '95a3416b6d054274bf8ecece86487091',
//       appId: "test_app",
//     },
//   });
//   await input.uploadFromUrl({
//     inputId: "demo",
//     imageUrl,
//   });
// }

// function Additional() {
//   const data = useLoaderData();

//   return (
//     <div>
//       <h1>Additional</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// }

// export default Additional;
