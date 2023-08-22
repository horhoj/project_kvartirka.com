export interface FetchAsteroidItemResponse {
  links: Links;
  id: string;
  neo_reference_id: string;
  name: string;
  designation: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachDatum[];
  orbital_data: OrbitalData;
  is_sentry_object: boolean;
}

export interface CloseApproachDatum {
  close_approach_date: Date;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  relative_velocity: RelativeVelocity;
  miss_distance: MissDistance;
  orbiting_body: OrbitingBody;
}

export interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

export enum OrbitingBody {
  Earth = 'Earth',
  Merc = 'Merc',
  Venus = 'Venus',
}

export interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

export interface EstimatedDiameter {
  kilometers: Feet;
  meters: Feet;
  miles: Feet;
  feet: Feet;
}

export interface Feet {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Links {
  self: string;
}

export interface OrbitalData {
  orbit_id: string;
  orbit_determination_date: Date;
  first_observation_date: Date;
  last_observation_date: Date;
  data_arc_in_days: number;
  observations_used: number;
  orbit_uncertainty: string;
  minimum_orbit_intersection: string;
  jupiter_tisserand_invariant: string;
  epoch_osculation: string;
  eccentricity: string;
  semi_major_axis: string;
  inclination: string;
  ascending_node_longitude: string;
  orbital_period: string;
  perihelion_distance: string;
  perihelion_argument: string;
  aphelion_distance: string;
  perihelion_time: string;
  mean_anomaly: string;
  mean_motion: string;
  equinox: string;
  orbit_class: OrbitClass;
}

export interface OrbitClass {
  orbit_class_type: string;
  orbit_class_description: string;
  orbit_class_range: string;
}
