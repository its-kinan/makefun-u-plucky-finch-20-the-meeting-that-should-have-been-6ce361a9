// The Meeting That Should Have Been an Email — make.fun program/v1 entry.
// Writes one single-line joke (<= 200 chars) to /output/entry.txt.
// Deterministic: fixed string, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After an hour, the meeting's only action item was to email everyone a summary of the meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
