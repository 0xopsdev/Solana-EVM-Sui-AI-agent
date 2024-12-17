import OpenAI from "openai";
import type { Thread } from "openai/resources/beta/threads/threads";
import type { Run } from "openai/resources/beta/threads/runs/runs";
import { handleRunToolCalls } from "./handleRunCalls.js";

export async function performRun(run: Run, client: OpenAI, thread: Thread) {
  console.log(`🚀 Performing run ${run.id}`);

  while (run.status === "requires_action") {
    run = await handleRunToolCalls(run, client, thread);
  }

  if (run.status === "failed") {
    const errorMessage = `I encountered an error: ${
      run.last_error?.message || "Unknown error"
    }`;
    console.error("Run failed:", run.last_error);
    await client.beta.threads.messages.create(thread.id, {
      role: "assistant",
      content: errorMessage,
    });
    return {
      type: "text",
      text: {
        value: errorMessage,
        annotations: [],
      },
    };
  }

  const messages = await client.beta.threads.messages.list(thread.id);
  const assistantMessage = messages.data.find(
    (message) => message.role === "assistant"
  );

  console.log(`🚀 Assistant message: ${assistantMessage?.content[0]}`);

  return (
    assistantMessage?.content[0] || {
      type: "text",
      text: { value: "No response from assistant", annotations: [] },
    }
  );
}
