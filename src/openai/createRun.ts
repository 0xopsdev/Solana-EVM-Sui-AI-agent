import OpenAI from "openai";
import type { Run } from "openai/resources/beta/threads/runs/runs";
import type { Thread } from "openai/resources/beta/threads/threads";

export async function createRun(
  client: OpenAI,
  thread: Thread,
  assistantId: string
): Promise<Run> {
  console.log(
    `🚀 Creating run for thread ${thread.id} with assistant ${assistantId}`
  );

  let run = await client.beta.threads.runs.create(thread.id, {
    assistant_id: assistantId,
  });

  // Wait for the run to complete and keep polling
  while (run.status === "in_progress" || run.status === "queued") {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
    run = await client.beta.threads.runs.retrieve(thread.id, run.id);
  }

  return run;
}
