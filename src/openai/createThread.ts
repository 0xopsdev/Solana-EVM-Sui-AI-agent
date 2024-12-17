import OpenAI from "openai";
import { Thread } from "openai/resources/beta/threads/threads";

export async function createThread(
  client: OpenAI,
  message?: string
): Promise<Thread> {
  const thread = await client.beta.threads.create();

  if (message) {
    await client.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });
  }

  return thread;
}
