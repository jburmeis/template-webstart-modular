import { generateId } from "../../src/application/demo";

describe("generateId", () => {
	test("should return a string of length 4", () => {
		const result = generateId();
		expect(result.length).toBe(4);
	});
	test("should return a string of integers", () => {
		const result = generateId();
		expect(Number.parseInt(result)).not.toBeNaN();
	});
});
