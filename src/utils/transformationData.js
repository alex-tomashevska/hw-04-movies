import { LANGUAGE_TYPE, MEDIA_TYPE } from "../constants";

export const transformationData = (items) =>
  items.map(
    ({
      adult,
      backdrop_path,
      id,
      original_language,
      overview,
      poster_path,
      media_type,
      genre_ids,
      popularity,
      release_date,
      video,
      vote_average,
      vote_count,
      title,
      name,
      first_air_date,
    }) => ({
      date: release_date || first_air_date,
      title: title || name,
      adult,
      backdrop_path,
      id,
      original_language: LANGUAGE_TYPE[original_language],
      overview,
      poster_path,
      media_type: MEDIA_TYPE[media_type],
      genre_ids,
      popularity,
      video,
      vote_average,
      vote_count,
    })
  );
