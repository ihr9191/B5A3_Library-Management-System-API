export type Genre =
  "FICTION" 
  |"MYSTERY"
  |"ROMANCE"
  |"THRILLER" 
  |"HORROR"
  |"ADVENTURE" 
  |"POETRY",

  export type IBookQuery = {
  filter ?: Genre;
  sortBy ?: string;
  sort ?: "asc" | "desc";
  limit ?: number;
  page ?: number;
};
