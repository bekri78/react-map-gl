interface LabeledValue {
  arrondissement: Arrondisssements;
  lieuDeTournage: LieuDeTournage;
}

interface Feature {
  type: string;
  geometry: Geometry;
}

interface Geometry {
  type: string;
  coordinates: number[][][];
}

interface Arrondisssements {
  type: string;
  features: Feature[];
}

export default LabeledValue;

interface LieuDeTournage {
  types: string;
  features: FeatureLieuDeTournage[];
}
interface FeatureLieuDeTournage {
  type: string;
  geometry: GeometryLieuDeTournage;
  properties: PropertiesLieuDeTournage;
}

interface GeometryLieuDeTournage {
  type: string;
  coordinates: number[];
}

interface PropertiesLieuDeTournage {
  annee_tournage: string;
  coord_y: number;
  coord_x: number;
  type_tournage: string;
  nom_producteur: string;
  geo_point_2d: number[];
  nom_tournage: string;
  nom_realisateur: string;
  date_fin: string;
  adresse_lieu: string;
  id_lieu: string;
  date_debut: string;
  ardt_lieu: string;
}
