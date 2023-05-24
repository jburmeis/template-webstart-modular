// This is just an example, not at all a good function to create a unique ID
export function generateId(): string {
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}