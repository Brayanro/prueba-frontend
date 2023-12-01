const BASE_URL = "http://localhost:3001";

interface ApiResponse<T> {
  status: number;
  data?: T;
  error?: string;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<ApiResponse<{ email: string }>> => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status !== 201) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return { status: 500, error: "Failed to connect to the server." };
  }
};
