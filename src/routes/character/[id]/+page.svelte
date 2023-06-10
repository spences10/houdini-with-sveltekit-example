<script lang="ts">
	export let data

	// @ts-ignore
	$: ({ CharacterQuery } = data)
	$: character = $CharacterQuery?.data?.character
</script>

<section>
	<img src={character?.image} alt={character?.name} />
	<h2>{character?.name}</h2>
	<p>Status: {character?.status}</p>
	<p>Species: {character?.species}</p>
	<p>
		<span>{character?.location?.name}</span> -
		<span>{character?.location?.type}</span>
	</p>
	Appeared in :
	<ul>
		{#each character?.episode || [] as ep}
			<li>{ep?.name}</li>
		{/each}
	</ul>
</section>

<style>
</style>
