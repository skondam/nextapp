import type { Animal } from 'types/animals';

export default [
  {
    description: 'ANIMAL:CANIS_AUREUS_DESCRIPTION',
    habitatPrimary: ['lowland forest'],
    habitatSecondary: ['grassland'],
    heading: 'ANIMAL:CANIS_AUREUS_HEADING',
    hitEnergy: [350, 2000],
    latin: 'ANIMAL:CANIS_AUREUS_LATIN',
    lifeCycle: [
      { activity: 'sleeping', time: 2 },
      { activity: 'feeding', time: 5 },
      { activity: 'drinking', time: 9 },
      { activity: 'sleeping', time: 12 },
      { activity: 'feeding', time: 17 },
      { activity: 'drinking', time: 21 },
    ],
    maps: ['transylvania'],
    slug: 'golden-jackal',
    tier: 4,
    type: 'animal:golden jackal',
  },
  {
    description: 'ANIMAL:CAPREOLUS_CAPREOLUS_DESCRIPTION',
    habitatPrimary: ['grassland', 'lowland forest'],
    heading: 'ANIMAL:CAPREOLUS_CAPREOLUS_HEADING',
    hitEnergy: [945, 2458],
    latin: 'ANIMAL:CAPREOLUS_CAPREOLUS_LATIN',
    lifeCycle: [
      { activity: 'feeding', time: 3 },
      { activity: 'drinking', time: 7 },
      { activity: 'sleeping', time: 11 },
      { activity: 'feeding', time: 15 },
      { activity: 'drinking', time: 20 },
      { activity: 'sleeping', time: 22 },
    ],
    maps: ['transylvania'],
    slug: 'roe-deer',
    tier: 4,
    type: 'animal:roe deer',
  },
  {
    description: 'ANIMAL:SPRINGBOK_DESCRIPTION',
    habitatPrimary: ['arid savannah and desert'],
    heading: 'ANIMAL:SPRINGBOK_HEADING',
    habitatSecondary: ['grasslands and forests'],
    hitEnergy: [1645, 3125],
    latin: 'ANIMAL:SPRINGBOK_LATIN',
    lifeCycle: [
      { activity: 'feeding', time: 3 },
      { activity: 'drinking', time: 7 },
      { activity: 'sleeping', time: 11 },
      { activity: 'feeding', time: 15 },
      { activity: 'drinking', time: 20 },
      { activity: 'sleeping', time: 22 },
    ],
    maps: ['africa'],
    slug: 'springbok',
    tier: 4,
    type: 'animal:springbok',
  },
] as Array<Animal>;
