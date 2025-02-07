import { ChallengeFormProps } from "@/@types/global";
import { Group } from "next/dist/shared/lib/router/utils/route-regex";

const BASE_URL = "http://localhost:3001";

export const getSkills = async () => {
  try {
    const response = await fetch(`${BASE_URL}/public/api/skills`);
    if (!response.ok) throw new Error("Failed to fetch skills");
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const getChallenges = async () => {
  try {
    const response = await fetch(`${BASE_URL}/public/api/challenges`);
    if (!response.ok) throw new Error("Failed to fetch challenges");
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const getSingleChallenge = async ( id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/public/api/challenges/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch challenge");
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const deleteChallenge = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/challenge/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) return await response.json();
    return await response.json();
  } catch (error) {
    // throw new Error(
    //   error instanceof Error ? error.message : "An unknown error occurred"
    // );
    return error;
  }
};

export const joinProgram = async (payload: Record<string, string>) => {
  try {
    const response = await fetch(`${BASE_URL}/public/api/enter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Failed to join");
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const joinChallenge = async (
  token: string,
  payload: Record<string, string>,
  id: string
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/participant/join/challenge/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) return await response.json();
    return await response.json();
  } catch (error) {
    return error;
  }
};

export const joinCommunity = async (payload: Record<string, string>) => {
  try {
    const response = await fetch(
      `${BASE_URL}/public/api/join/whatsapp/community`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) return await response.json();
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const getStatistics = async (token: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/challenge/statistics`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch challenges");
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const editChallenge = async (
  token: string,
  id: string,
  payload: ChallengeFormProps
) => {
  try {
    const response = await fetch(`${BASE_URL}/api/challenge/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Failed to update challenge");
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
export const postChallenge = async (
  token: string,
  payload: ChallengeFormProps
) => {
  try {
    const response = await fetch(`${BASE_URL}/api/challenge`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error("Failed to create challenge");
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
