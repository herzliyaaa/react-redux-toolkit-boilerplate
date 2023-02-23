// A mock function to mimic making an async request for data
import axios from "axios";

export async function fetchAllProductsApi() {
  try {
    const data = await fetch("http://localhost:4040/api/products");
    return data.json();
  } catch (error) {
    console.log(error);
  }
}
