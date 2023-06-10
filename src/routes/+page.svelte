<script lang="ts">
	export let data

	$: ({ AllCharacters } = data)
	// @ts-ignore
	$: ({ results } = $AllCharacters?.data?.characters)
</script>

<main class="wrapper">
	{#each results as character}
		<section>
			<a href={`/character/${character.id}`}>
				<img src={character.image} alt={character.name} />
				<h2>{character.name}</h2>
			</a>
		</section>
	{/each}
</main>
