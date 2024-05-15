import { clerkClient, currentUser } from "@clerk/nextjs/server";

export default async function Home() {
	const user = await currentUser();
	if (!user) return;
	const token = await clerkClient.users.getUserOauthAccessToken(
		user.id,
		"oauth_spotify"
	);
	return (
		<main>
			<pre className="text-green-600">
				{JSON.stringify(token.data, null, 2)}
			</pre>
		</main>
	);
}
