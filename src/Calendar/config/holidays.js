import moment from "moment";

// temporary solution, will most likely have an API for that kind of stuff
export const holidays = [
  {
    from: moment("2020-09-01"),
    name: "Rentrée scolaire",
  },
  {
    from: moment("2020-09-27"),
    name: "Fête de la Communauté française",
  },
  {
    from: moment("2020-11-02"),
    to: moment("2020-11-06"),
    name: "Congé d'automne (Toussaint)",
  },
  {
    from: moment("2020-11-11"),
    name: "Congé d'automne (Toussaint)",
  },
  {
    from: moment("2020-12-21"),
    to: moment("2021-01-01"),
    name: "Vacances d'hiver (Noël)",
  },
  {
    from: moment("2021-02-15"),
    to: moment("2021-02-19"),
    name: "Congé de détente (Carnaval)",
  },
  {
    from: moment("2021-04-05"),
    to: moment("2021-04-16"),
    name: "Vacances de printemps (Pâques)",
  },
  {
    from: moment("2021-04-30"),
    name: "Congé",
  },
  {
    from: moment("2021-05-01"),
    name: "Fête du 1er mai",
  },
  {
    from: moment("2021-05-13"),
    name: "Congé de l'Ascension",
  },
  {
    from: moment("2021-05-14"),
    name: "Congé",
  },
  {
    from: moment("2021-05-24"),
    name: "Lundi de Pentecôte"
  },
  {
    from: moment("2021-07-01"),
    to: moment("2021-08-31"),
    name: "Vacances d'été"
  },
];
