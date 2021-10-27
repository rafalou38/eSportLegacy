<script>
	import Button from '$lib/components/button.svelte';

	import ActuSlider from '$lib/partials/actuSlider.svelte';
</script>

<img class="mx-auto mt-24 w-[60%]" src="/images/winners.svg" alt="" />

<img src="/images/waves/wave1.svg" class="w-full mt-16" alt="" />

<section class="w-full bg-bg-light outline-light h-screen  flex flex-col">
	<div class="w-max mx-auto pt-24">
		<h2 class="text-center text-4xl mb-28 px-14">
			<span class="text-t-green">E-Sport</span> Legacy, votre allié dans le monde de
			<span class="text-t-green">l’e-Sport</span>.
		</h2>
		<div class="flex justify-between px-5">
			<div class="w-[400px] text-left">
				<h3 class="text-2xl">L’histoire d’<span class="text-t-green">e-Sport Legacy</span></h3>
				<p class="text-t-dark text-lg">
					E-Sport Legacy a été crée officiellement le 18 janvier 2021 en tant qu’association.
					Fondamentalement, nous voulions organiser des tournois sur différents jeux afin que les
					équipes e-Sportive puissent s’inscrire et que les plus méritantes puissent s’épanouir en
					gagnant des récompenses réellement gratifiantes. Suite aux tournois que nous avons
					organisé, nous avons pu voir qu’il existe de nombreux problèmes pour les équipes: manque
					de moyens, manque de connaissance, manque d’effectifs, et bien d’autres problèmes.
				</p>
			</div>
			<div class="grid place-items-center"><img src="/images/Memory_storage.png" alt="" /></div>
		</div>
		<div class="flex justify-between px-5 mt-20  ">
			<div class="grid place-items-center"><img src="/images/my_answer.png" alt="" /></div>
			<div class="w-[400px] text-right">
				<h3 class="text-2xl">
					La raison d’être d’<span class="text-t-green">e-Sport Legacy</span>
				</h3>
				<p class="text-t-dark text-lg">
					Finalement, e-Sport Legacy a une raison d’être assez contre-productive, puisque nous
					oeuvrons à notre destruction: notre raison d’être c’est que vous n’ayez plus besoin de
					nous. Nous voulons vous fournir toutes les ressources dont vous avez besoin pour passer au
					niveau suppérieur, que vous passiez d’amateur à professionnel. Enfaite, notre travail sera
					réussi lorsque vous n’aurez plus besoin de nous.
				</p>
			</div>
		</div>
	</div>
	<div class="flex-grow" />
	<footer class="bg-t-blue text-white py-5 grid place place-items-center">
		<figure class="w-max">
			<q class="italic text-lg">
				L'art de la réussite consiste à savoir s'entourer des meilleurs.
			</q>
			<figcaption class="text-sm">—John Fitzgerald Kennedy</figcaption>
		</figure>
	</footer>
</section>
<!--
-->
<section
	class="w-full h-auto pt-14 pb-20 bg-bg-dark outline-light  flex flex-col shadow-big relative"
>
	<h2 class="text-center text-5xl mb-20  px-14 text-white">
		NOTRE <span class="text-t-blue">ACTUALITE</span>
	</h2>
	<ActuSlider />
</section>
<section class="w-full  flex flex-col items-center py-40">
	<div class="w-max mx-auto">
		<h2 class="text-4xl text-center mb-20">Nos <span class="text-t-blue">Objectifs</span></h2>
		<div class=" w-full flex  text-center justify-around">
			<div class="w-72">
				<div class="mx-auto h-32 grid place-items-center">
					<img class="" src="/images/icons/planet.png" alt="" />
				</div>
				<h3 class="font-bold text-xl">Partout, pour tous</h3>
				<p class="text-t-dark text-sm">
					Nous souhaitons rendre l’e-Sport accesible à tous, à bas coût, pour tout le monde. Nous
					voulons que les équipes talentueuses puissent s’épanouir.
				</p>
			</div>
			<div class="w-72">
				<div class="mx-auto h-32 grid place-items-center">
					<img class="" src="/images/icons/check.png" alt="" />
				</div>
				<h3 class="font-bold text-xl">La réussite au mérite</h3>
				<p class="text-t-dark text-sm">
					Nous pensons que la persévérance, la rigueur et la discipline doivent être à la base de
					toute réussite. Nous ferons tout pour que vous puissiez réussir.
				</p>
			</div>
			<div class="w-72">
				<div class="mx-auto h-32 grid place-items-center">
					<img class="" src="/images/icons/bag.png" alt="" />
				</div>
				<h3 class="font-bold text-xl">L’accès à l’information</h3>
				<p class="text-t-dark text-sm">
					Nous voulons mettre toutes les chances de votre côté en vous donnant accès aux actualités
					importantes de l’e-Sport et à des formations pour vous aider dans vos projets.
				</p>
			</div>
		</div>
		<p class="text-xl my-24">
			Vous incarnez les valeurs sous-jacentes à nos objectifs ? Nous sommes déjà ravis de travailler
			avec vous.
		</p>
		<Button>Prendre rendez-vous</Button>
	</div>
	<div class="w-max mt-[450px] mx-auto">
		<h2 class="text-4xl text-center mb-20">
			QUELQUES <span class="text-t-green">STATISTIQUES</span>
		</h2>
		<div class=" w-full flex  text-center justify-around">
			<div class="w-72">
				<div class="mx-auto h-32 grid place-items-center">
					<img class="h-24" src="/images/icons/hand.png" alt="" />
				</div>
				<h3 class=" text-xl">+300 € de Cashprize</h3>
			</div>
			<div class="w-72">
				<div class="mx-auto h-32 grid place-items-center">
					<img class="w-24" src="/images/icons/eye.png" alt="" />
				</div>
				<h3 class=" text-xl">+300 Spectateurs uniques</h3>
			</div>
			<div class="w-72">
				<div class="mx-auto h-32 grid place-items-center">
					<img class="w-24" src="/images/icons/gamepad.png" alt="" />
				</div>
				<h3 class=" text-xl">+200 joueurs touchés</h3>
			</div>
		</div>
	</div>

	<div class="w-[860px] mt-[295px] mx-auto">
		<h2 class="text-4xl text-center mb-20">
			NOS ANCIENS <span class="text-t-green">TOURNOIS</span>
		</h2>
		<div class=" w-full flex  text-center justify-around">
			<div class="w-72">
				<div class="mx-auto p-4 grid place-items-center">
					<img class="" src="/images/flower.png" alt="" />
				</div>
				<h3 class="font-bold text-xl">PRIMIS LEGACY</h3>
				<p class="text-t-dark text-sm">
					Ceci est le premier tournoi organisé officiellement par e-Sport Legacy. Il a comptabilisé
					40 équipes, soit plus d’une centaine de joueurs sur Rocket League.
				</p>
			</div>
			<div class="w-72">
				<div class="mx-auto p-4 grid place-items-center">
					<img class="" src="/images/flower.png" alt="" />
				</div>
				<h3 class="font-bold text-xl">Tempora Flores Cup</h3>
				<p class="text-t-dark text-sm">
					Ce tournoi est le tournoi introductif à l’histoire que nous mettons autour de nos
					tournois. Les joueurs se sont affrontés pour élir les Hommes les plus purs de la planète
					pour pouvoir utiliser la Tempora Flores, la fleur permettant de voyager dans le temps.
				</p>
			</div>
		</div>
	</div>
</section>
<!-- <style>
	section {
		scroll-snap-align: start;
	}
	:global(html) {
		scroll-snap-type: y proximity;
	}
</style> -->
