import astronautTunnel from "~/assets/2027/urban-wild/astronaut-tunnel.webp";
import barStools from "~/assets/2027/urban-wild/bar-stools.webp";
import bearMural from "~/assets/2027/urban-wild/bear-mural.webp";
import bowlingBalls from "~/assets/2027/urban-wild/bowling-balls.webp";
import bowlingLounge from "~/assets/2027/urban-wild/bowling-lounge.webp";
import cardMurals from "~/assets/2027/urban-wild/card-murals.webp";
import chandelierBooths from "~/assets/2027/urban-wild/chandelier-booths.webp";
import cocktailCooler from "~/assets/2027/urban-wild/cocktail-cooler.webp";
import diningOverlook from "~/assets/2027/urban-wild/dining-overlook.webp";
import diningRailing from "~/assets/2027/urban-wild/dining-railing.webp";
import diningStage from "~/assets/2027/urban-wild/dining-stage.webp";
import diningSteps from "~/assets/2027/urban-wild/dining-steps.webp";
import diningTables from "~/assets/2027/urban-wild/dining-tables.webp";
import exteriorSign from "~/assets/2027/urban-wild/exterior-sign.webp";
import lanes from "~/assets/2027/urban-wild/lanes.webp";
import loungeBooths from "~/assets/2027/urban-wild/lounge-booths.webp";
import loungeSculpture from "~/assets/2027/urban-wild/lounge-sculpture.webp";
import mezzanine from "~/assets/2027/urban-wild/mezzanine.webp";
import patioDay from "~/assets/2027/urban-wild/patio-day.webp";
import patioNight from "~/assets/2027/urban-wild/patio-night.webp";
import pingPong from "~/assets/2027/urban-wild/ping-pong.webp";
import projectedLanes from "~/assets/2027/urban-wild/projected-lanes.webp";
import purpleLounge from "~/assets/2027/urban-wild/purple-lounge.webp";
import restrooms from "~/assets/2027/urban-wild/restrooms.webp";
import stage from "~/assets/2027/urban-wild/stage.webp";

import type { PhotoData } from "./types";

export const urbanWildPhotos: readonly PhotoData[] = [
	{ alt: "Stage and high-top tables under string lights", image: stage },
	{ alt: "Ping pong table across from the bar", image: pingPong },
	{ alt: "Urban Wild sign outside at sunset", image: exteriorSign },
	{ alt: "Bowling lanes lit by projected games", image: projectedLanes },
	{ alt: "Bowling lanes below glowing red screens", image: lanes },
	{ alt: "Entrance tunnel with an astronaut DJ mural", image: astronautTunnel },
	{ alt: "Orange and blue lounge by a purple bar", image: purpleLounge },
	{ alt: "Patio with beanbags and glowing cubes", image: patioNight },
	{ alt: "Orange sofas and blue booths in the lounge", image: loungeBooths },
	{ alt: "Lounge sofas and a red sculpture", image: loungeSculpture },
	{ alt: "Steps down to the dining room and bar", image: diningSteps },
	{ alt: "Lounge seating facing the bowling lanes", image: bowlingLounge },
	{ alt: "Wooden dining tables below hanging ivy", image: diningTables },
	{ alt: "Picnic tables in front of a blue-lit stage", image: diningStage },
	{ alt: "Blue stools overlooking the bar", image: barStools },
	{ alt: "Dining room seen from the upper level", image: diningOverlook },
	{ alt: "Railing along the steps to the dining room", image: diningRailing },
	{ alt: "Round tables on the upper level", image: mezzanine },
	{ alt: "Bowling balls racked beside the lanes", image: bowlingBalls },
	{ alt: "Urban Wild cooler filled with cocktails", image: cocktailCooler },
	{ alt: "Playing card art in the mural hallway", image: cardMurals },
	{ alt: "Tiled restrooms with pop art", image: restrooms },
	{ alt: "Blue booths under a chandelier", image: chandelierBooths },
	{ alt: "Open-air patio with games and tables", image: patioDay },
	{ alt: "Mural of a bear in a forest", image: bearMural },
];
