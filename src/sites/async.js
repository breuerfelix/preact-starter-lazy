export async function About() {
	const module = await import(
		/* webpackChunkName: "about" */ './about'
	);

	return module.default;
}

export async function Projects() {
	const module = await import(
		/* webpackChunkName: "projects" */ './projects'
	);

	return module.default;
}

export async function Home() {
	const module = await import(
		/* webpackChunkName: "home" */ './home'
	);

	return module.default;
}
