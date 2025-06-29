import {SVGProps } from "react";

export interface FilmCards {
  id: string;
  title?: string;
  thumbnailLandscape?: string;
  thumbnailPotrait?: string;
  alt?:string;
  banner: string;
  description?: string;
  releaseYear?: number;
  category?: string[];     
  duration?: string;     
  genre?: string[];    
  rating?: number;        
  isNewEpisode: boolean;
  isTop10: boolean;
  ageRating?: string;  
  cast?: string[];
  director?: string[];
  episodeCount?: number;
  icon?: React.FC<SVGProps<SVGSVGElement>>;

}

