/*
 * This files defines type informations for image files, so they
 * can be imported without the TypeScript compiler throwing errors.
 */

declare module "*.json";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.ttf";
declare module "*.eot";
declare module "*.ico";
declare module "*.svg" {
	const content: string;
	export default content;
}
