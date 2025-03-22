/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Resend } from "resend"

interface Env {
	RESEND_API_KEY: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method === "OPTIONS") {
			return new Response(null, {
			status: 204,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "POST, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type",
			},
			})
		}

		if (request.method !== "POST") {
			return new Response("Method Not Allowed", { status: 405 })
		}

		let data
		try {
			data = await request.json()
		} catch {
			return new Response("Invalid JSON", {
			status: 400,
			headers: { "Access-Control-Allow-Origin": "*" }
			})
		}
		const resend = new Resend(env.RESEND_API_KEY)

		const { error } = await resend.emails.send({
		from: "connect@hajdicdesigns.co.uk",
		to: "connect@hajdicdesigns.co.uk",
		subject: `New message from ${data.name}`,
		replyTo: data.email,
		html: `<p><strong>From:</strong> ${data.email}</p><p>${data.message}</p>`
		})

		if (error) {
		return new Response("Failed to send email", {
			status: 500,
			headers: { "Access-Control-Allow-Origin": "*" }
		})
		}

		return new Response("Email sent!", {
		status: 200,
		headers: { "Access-Control-Allow-Origin": "*" }
		})
  	}
}

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		if (request.method !== "POST") {
// 			return new Response("Method Not Allowed", { status: 405 })
// 		}

// 		try {
// 			const { name, email, message } = await request.json()
// 			if (!name || !email || !message) {
// 				return new Response("Missing required fields", { status: 400 });
// 			}

// 			const resend = new Resend(env.RESEND_API_KEY)

// 			const { data, error } = await resend.emails.send({
// 				from: "connect@hajdicdesigns.co.uk",
// 				to: "connect@hajdicdesigns.co.uk",
// 				subject: `New message from ${name}`,
// 				replyTo: email,
// 				html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
// 			})

// 			if (error) {
// 				return new Response(JSON.stringify({ error }), { status: 500 })
// 			}

// 			return new Response("Email sent successfully", { status: 200 })
// 		} catch (err) {
// 			return new Response("Invalid request", { status: 400 })
// 		}
// 	}
// }  
