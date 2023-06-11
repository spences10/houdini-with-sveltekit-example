<script lang="ts">
	export let data

	$: ({ AllCharacters } = data)
	// @ts-ignore
	$: ({ results } = $AllCharacters?.data?.characters)
</script>

<div class="grid sm:grid-cols-2">
	{#each results as character}
		<section>
			<a href={`/character/${character.id}`} class="">
				<img
					src={character.image}
					alt={character.name}
					class="rounded-box"
				/>
				<h2 class="text-2xl mb-5">{character.name}</h2>
			</a>
		</section>
	{/each}
</div>
