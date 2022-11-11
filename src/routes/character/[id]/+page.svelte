<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ CharacterQuery } = data);
	$: character = $CharacterQuery?.data?.character;
</script>

<section>
	<img src={character?.image} alt={character?.name} />
	<h2>{character?.name}</h2>
	<p>{character?.status}</p>
	<p>{character?.species}</p>
	<p>
		<span>{character?.location?.name}</span> -
		<span>{character?.location?.type}</span>
	</p>
	Appeared in :
	<ul>
		{#each character?.episode ?? [] as ep}
			<li>{ep?.name}</li>
		{/each}
	</ul>
</section>

<style>
</style>
