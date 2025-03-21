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
		if (request.method !== "POST") {
			return new Response("Method Not Allowed", { status: 405 })
		}

		try {
			const { name, email, message } = await request.json()
			if (!name || !email || !message) {
				return new Response("Missing required fields", { status: 400 });
			}

			const resend = new Resend(env.RESEND_API_KEY)

			const { data, error } = await resend.emails.send({
				from: "connect@hajdicdesigns.co.uk",
				to: "connect@hajdicdesigns.co.uk",
				subject: `New message from ${name}`,
				replyTo: email,
				html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
			})

			if (error) {
				return new Response(JSON.stringify({ error }), { status: 500 })
			}

			return new Response("Email sent successfully", { status: 200 })
		} catch (err) {
			return new Response("Invalid request", { status: 400 })
		}
	}
}  
