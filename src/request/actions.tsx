import NextClient from "nextclient";
export const isProduction = process.env.NODE_ENV === "production";

export const client = new NextClient("https://backend.grey-to-green.com");
export const localClient = new NextClient(
  isProduction ? "https://grey-to-green.com" : "http://localhost:3000"
);

export const paymentClient = new NextClient(process.env.PAY_URL, {
  headers: {
    "Content-Type": "application/json",
    "thawani-api-key": process.env.PRIVATE_KEY,
  } as any,
});

export function AdminAuthToken() {
  return { Authorization: "Bearer " + localStorage.getItem("token") || "" };
}

export const genPbFiles = (record: any, name: any) => {
  return `${client.baseUrl}/api/files/${record?.collectionId}/${record?.id}/${name}`;
};

export function extractErrors(errorResponse: {
  message?: any;
  data: { [key: string]: { message: string; code: number } };
}): string[] {
  try {
    const errors: string[] = [];

    // Check if the errorResponse contains data
    if (errorResponse && errorResponse.data) {
      // Iterate through the keys of the data object
      for (const [key, value] of Object.entries(errorResponse.data)) {
        // Remove underscores from the key
        const formattedKey = key.replace(/_/g, " ");
        // Construct a message for each error
        const message = `${formattedKey}: ${value.message}`;
        errors.push(message);
      }
    }
    console.log(errorResponse);

    return [...errors, errorResponse?.message || "something went wrong"];
  } catch (error) {
    return ["something went wrong"];
  }
}
