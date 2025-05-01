import { Paper, Typography, Box } from "@mui/material";

const CardDetail = ({ pokemon }) => {
  return (
    <Paper sx={{maxWidth: 300, margin: "0 auto", padding: "1.5rem", backgroundColor: "#ddd", borderRadius: "8px",}}>
      <Typography variant="h6" sx={{color: "#b59d00", fontWeight: "bold", mb: 2}}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Typography>
      <Box sx={{mb: 2}}><img src={pokemon.sprites.front_default} alt={pokemon.name} /></Box>
      {/* Pokémon attributes */}
      <Typography>Height: {pokemon.height}</Typography>
      <Typography>Weight: {pokemon.weight}</Typography>
      <Typography>Type: {pokemon.types.map((t) => t.type.name).join(", ")}</Typography>
    </Paper>
  );
};

export default CardDetail;
