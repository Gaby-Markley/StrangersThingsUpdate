// import { useState } from "react";

// export default function Authenticate({ token }) {
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   async function handleClick() {
//     try {
//       const response = await fetch(
//         "https://strangers-things.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/posts",
//         {
//           method: "GET",
//           header: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const result = await response.json();
//       setSuccessMessage(result.message);
//     } catch (error) {
//       setError(error.message);
//     }
//   }
//   return (
//     <div>
//       <h2>Authenticate</h2>
//       {successMessage && <p>{successMessage}</p>}
//       {error && <p>{error}</p>}
//       <button onClick={handleClick}>Authenticate Token</button>
//     </div>
//   );
// }
